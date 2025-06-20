import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FileItem } from './FileItem';
import { FileNode } from '@/types/fileSystem';

interface FileExplorerProps {
    files: FileNode[];
    onFileSelect: (file: FileNode) => void;
    onFileCreate: (parentPath: string) => void;
    onFolderCreate: (parentPath: string) => void;
    selectedFile?: string;
}

export const FileExplorer: React.FC<FileExplorerProps> = ({
    files,
    onFileSelect,
    onFileCreate,
    onFolderCreate,
    selectedFile
}) => {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

    // Memoize the toggle function for better performance
    const toggleFolder = useCallback((folderId: string) => {
        setExpandedFolders(prev => {
            const newExpanded = new Set(prev);
            if (newExpanded.has(folderId)) {
                newExpanded.delete(folderId);
            } else {
                newExpanded.add(folderId);
            }
            return newExpanded;
        });
    }, []);

    // Memoize the render function
    const renderFileTree = useCallback((nodes: FileNode[], depth = 0) => {
        return nodes.map((node) => (
            <View key={node.id}>
                <FileItem
                    file={node}
                    depth={depth}
                    isSelected={selectedFile === node.id}
                    isExpanded={expandedFolders.has(node.id)}
                    onPress={() => node.type === 'folder'
                        ? toggleFolder(node.id)
                        : onFileSelect(node)
                    }
                    onFolderToggle={() => toggleFolder(node.id)}
                />
                {node.type === 'folder' &&
                    expandedFolders.has(node.id) &&
                    node.children &&
                    renderFileTree(node.children, depth + 1)}
            </View>
        ));
    }, [expandedFolders, selectedFile, toggleFolder, onFileSelect]);

    return (
        <View className="flex-1 bg-[#252526]">
            {/* Header with creation buttons */}
            <View className="px-3 py-2 border-b border-[#3e3e42] flex-row items-center justify-between">
                <Text className="text-[#cccccc] text-xs font-semibold uppercase tracking-wide">
                    Explorer
                </Text>
                <View className="flex-row">
                    <TouchableOpacity
                        testID="create-file-button"
                        className="p-1 mr-1"
                        onPress={() => onFileCreate('/')}
                    >
                        <Ionicons name="document-text" size={12} color="#cccccc" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        testID="create-folder-button"
                        className="p-1"
                        onPress={() => onFolderCreate('/')}
                    >
                        <Ionicons name="folder" size={12} color="#cccccc" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Scrollable file tree */}
            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                testID="file-explorer-scrollview"
            >
                <View className="py-2">
                    {renderFileTree(files)}
                </View>
            </ScrollView>
        </View>
    );
};