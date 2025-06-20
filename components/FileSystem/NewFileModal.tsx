import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NewFileModalProps {
    visible: boolean;
    onClose: () => void;
    onCreateFile: (name: string, type: 'file' | 'folder') => void;
    parentPath: string;
}

export const NewFileModal: React.FC<NewFileModalProps> = ({
    visible,
    onClose,
    onCreateFile,
    parentPath
}) => {
    const [fileName, setFileName] = useState('');
    const [fileType, setFileType] = useState<'file' | 'folder'>('file');

    const handleCreate = () => {
        if (fileName.trim()) {
            onCreateFile(fileName.trim(), fileType);
            setFileName('');
            onClose();
        }
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View className="flex-1 bg-black/50 items-center justify-center">
                <View className="bg-[#2d2d30] border border-[#3e3e42] rounded-lg p-6 mx-4 w-80">
                    <Text className="text-[#cccccc] text-lg font-semibold mb-4">
                        Create New {fileType === 'file' ? 'File' : 'Folder'}
                    </Text>

                    <View className="flex-row mb-4">
                        <TouchableOpacity
                            onPress={() => setFileType('file')}
                            className={`flex-1 py-2 px-4 rounded-l-lg border border-[#3e3e42] ${fileType === 'file' ? 'bg-[#0078d4]' : 'bg-[#252526]'
                                }`}
                        >
                            <Text className="text-[#cccccc] text-center text-sm">File</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setFileType('folder')}
                            className={`flex-1 py-2 px-4 rounded-r-lg border border-[#3e3e42] border-l-0 ${fileType === 'folder' ? 'bg-[#0078d4]' : 'bg-[#252526]'
                                }`}
                        >
                            <Text className="text-[#cccccc] text-center text-sm">Folder</Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        className="bg-[#1e1e1e] border border-[#3e3e42] rounded px-3 py-2 text-[#cccccc] mb-4"
                        placeholder={`Enter ${fileType} name`}
                        placeholderTextColor="#888888"
                        value={fileName}
                        onChangeText={setFileName}
                        autoFocus
                    />

                    <View className="flex-row justify-end">
                        <TouchableOpacity
                            onPress={onClose}
                            className="px-4 py-2 mr-2"
                        >
                            <Text className="text-[#cccccc]">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleCreate}
                            className="bg-[#0078d4] px-4 py-2 rounded"
                        >
                            <Text className="text-white">Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};