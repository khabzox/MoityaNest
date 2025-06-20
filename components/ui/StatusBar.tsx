import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface StatusBarProps {
    branch?: string;
    language?: string;
    line?: number;
    column?: number;
    syncStatus?: 'synced' | 'syncing' | 'error';
}
export const StatusBar: React.FC<StatusBarProps> = ({
    branch = 'main',
    language = 'javascript',
    line = 1,
    column = 1,
    syncStatus = 'synced'
}) => {
    const getSyncIcon = () => {
        switch (syncStatus) {
            case 'syncing':
                return 'sync';
            case 'error':
                return 'alert-circle';
            default:
                return 'checkmark-circle';
        }
    };
    const getSyncColor = () => {
        switch (syncStatus) {
            case 'syncing':
                return '#0078d4';
            case 'error':
                return '#f48771';
            default:
                return '#4CAF50';
        }
    };
    return (
        <View className="bg-[#007acc] flex-row items-center justify-between px-3 py-1 h-6">
            {/* Left Side - Git Branch */}
            <View className="flex-row items-center">
                <TouchableOpacity className="flex-row items-center mr-4">
                    <Ionicons name="git-branch" size={12} color="white" />
                    <Text className="text-white text-xs ml-1">{branch}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Ionicons
                        name={getSyncIcon()}
                        size={12}
                        color={getSyncColor()}
                    />
                </TouchableOpacity>
            </View>

            {/* Right Side - Language and Position */}
            <View className="flex-row items-center">
                <TouchableOpacity className="mr-4">
                    <Text className="text-white text-xs capitalize">{language}</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-white text-xs">Ln {line}, Col {column}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
