import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface EditorStatusBarProps {
    branch?: string;
    language: string;
    encoding?: string;
    line: number;
    column: number;
    syncStatus?: {
        down: number;
        up: number;
    };
}

export const EditorStatusBar: React.FC<EditorStatusBarProps> = ({
    branch = 'main',
    language,
    encoding = 'UTF-8',
    line,
    column,
    syncStatus = { down: 0, up: 0 }
}) => {
    return (
        <View className="bg-[#007acc] flex-row items-center justify-between px-4 py-1">
            <View className="flex-row items-center">
                <TouchableOpacity className="flex-row items-center">
                    <Ionicons name="git-branch" size={12} color="white" />
                    <Text className="text-white text-xs ml-1">{branch}</Text>
                </TouchableOpacity>

                <TouchableOpacity className="ml-4 flex-row items-center">
                    <Ionicons name="sync" size={12} color="white" />
                    <Text className="text-white text-xs ml-1">
                        {syncStatus.down} ↓ {syncStatus.up} ↑
                    </Text>
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center">
                <TouchableOpacity>
                    <Text className="text-white text-xs">{language.toUpperCase()}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="ml-4">
                    <Text className="text-white text-xs">{encoding}</Text>
                </TouchableOpacity>
                <TouchableOpacity className="ml-4">
                    <Text className="text-white text-xs">Ln {line}, Col {column}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};