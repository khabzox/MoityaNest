import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export interface FileTab {
    id: string;
    name: string;
    path: string;
    language: string;
    isModified: boolean;
}

interface EditorTabsProps {
    tabs: FileTab[];
    activeTab: string;
    onTabPress: (tabId: string) => void;
    onTabClose: (tabId: string) => void;
    onNewTab: () => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({
    tabs,
    activeTab,
    onTabPress,
    onTabClose,
    onNewTab
}) => {
    const getFileIcon = (language: string) => {
        const icons: { [key: string]: string } = {
            html: 'logo-html5',
            css: 'logo-css3',
            javascript: 'logo-javascript',
            typescript: 'logo-javascript',
            json: 'document-text',
            python: 'logo-python',
        };
        return icons[language] || 'document-text';
    };

    const getFileIconColor = (language: string) => {
        const colors: { [key: string]: string } = {
            html: '#e34c26',
            css: '#1572b6',
            javascript: '#f1e05a',
            typescript: '#3178c6',
            json: '#cbcb41',
            python: '#3776ab',
        };
        return colors[language] || '#cccccc';
    };

    return (
        <View className="bg-[#2d2d30] border-b border-[#3e3e42]">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row">
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab.id}
                            onPress={() => onTabPress(tab.id)}
                            className={`flex-row items-center px-4 py-2 border-r border-[#3e3e42] min-w-[120px] ${activeTab === tab.id ? 'bg-[#1e1e1e]' : 'bg-[#2d2d30]'
                                }`}
                        >
                            <Ionicons
                                name={getFileIcon(tab.language)}
                                size={14}
                                color={getFileIconColor(tab.language)}
                            />
                            <Text className="text-[#cccccc] text-sm ml-2 flex-1" numberOfLines={1}>
                                {tab.name}
                            </Text>
                            {tab.isModified && (
                                <View className="w-2 h-2 bg-[#f1fa8c] rounded-full ml-2" />
                            )}
                            <TouchableOpacity
                                className="ml-2 p-1"
                                onPress={() => onTabClose(tab.id)}
                            >
                                <Ionicons name="close" size={12} color="#cccccc" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        className="px-3 py-2 border-r border-[#3e3e42] items-center justify-center"
                        onPress={onNewTab}
                    >
                        <Ionicons name="add" size={16} color="#cccccc" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};