import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FileNode } from '@/types/fileSystem';

interface FileItemProps {
    file: FileNode;
    depth: number;
    isSelected: boolean;
    isExpanded?: boolean;
    onPress: () => void;
    onFolderToggle?: () => void;
}

export const FileItem: React.FC<FileItemProps> = ({
    file,
    depth,
    isSelected,
    isExpanded,
    onPress,
    onFolderToggle
}) => {
    const getFileIcon = (type: string, language?: string) => {
        if (type === 'folder') {
            return isExpanded ? 'folder-open' : 'folder';
        }

        const icons: { [key: string]: string } = {
            html: 'logo-html5',
            css: 'logo-css3',
            javascript: 'logo-javascript',
            typescript: 'logo-javascript',
            json: 'document-text',
            python: 'logo-python',
            jsx: 'logo-react',
            tsx: 'logo-react',
        };
        return icons[language || ''] || 'document-text';
    };

    const getFileIconColor = (type: string, language?: string) => {
        if (type === 'folder') {
            return isExpanded ? '#dcb67a' : '#8bbcd4';
        }

        const colors: { [key: string]: string } = {
            html: '#e34c26',
            css: '#1572b6',
            javascript: '#f1e05a',
            typescript: '#3178c6',
            json: '#cbcb41',
            python: '#3776ab',
            jsx: '#61dafb',
            tsx: '#61dafb',
        };
        return colors[language || ''] || '#cccccc';
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center py-1.5 px-2 rounded mx-1 ${isSelected ? 'bg-[#094771]' : ''
                }`}
            style={{ marginLeft: depth * 16 + 8 }}
        >
            {file.type === 'folder' && (
                <TouchableOpacity
                    className="mr-1 p-1"
                    onPress={onFolderToggle}
                >
                    <Ionicons
                        name={isExpanded ? 'chevron-down' : 'chevron-forward'}
                        size={10}
                        color="#cccccc"
                    />
                </TouchableOpacity>
            )}

            <Ionicons
                name={getFileIcon(file.type, file.language)}
                size={14}
                color={getFileIconColor(file.type, file.language)}
            />

            <Text className="text-[#cccccc] text-sm ml-2 flex-1">
                {file.name}
            </Text>
        </TouchableOpacity>
    );
};