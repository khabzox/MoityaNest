import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

interface Tab {
    id: string;
    name: string;
    language: string;
    modified: boolean;
    active: boolean;
}

interface TabBarProps {
    tabs: Tab[];
    onTabPress: (id: string) => void;
    onTabClose: (id: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({
    tabs,
    onTabPress,
    onTabClose
}) => {
    const getLanguageIcon = (language: string): IoniconsName => {
        switch (language.toLowerCase()) {
            case 'html':
                return 'logo-html5';
            case 'css':
                return 'logo-css3';
            case 'javascript':
            case 'js':
                return 'logo-javascript';
            case 'typescript':
            case 'ts':
                return 'logo-javascript';
            case 'python':
                return 'logo-python';
            case 'react':
            case 'jsx':
                return 'logo-react';
            default:
                return 'document-text-outline';
        }
    };

    const getLanguageColor = (language: string) => {
        switch (language.toLowerCase()) {
            case 'html':
                return '#e34c26';
            case 'css':
                return '#1572b6';
            case 'javascript':
            case 'js':
                return '#f7df1e';
            case 'typescript':
            case 'ts':
                return '#3178c6';
            case 'python':
                return '#3776ab';
            case 'react':
            case 'jsx':
                return '#61dafb';
            default:
                return '#cccccc';
        }
    };

    if (tabs.length === 0) {
        return <Text style={{ color: '#cccccc' }}>No files open</Text>;
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row' }}>
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => onTabPress(tab.id)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 12,
                            height: 36,
                            borderRightWidth: 1,
                            borderRightColor: '#3e3e42',
                            backgroundColor: tab.active ? '#1e1e1e' : '#2d2d30'
                        }}
                    >
                        <Ionicons
                            name={getLanguageIcon(tab.language)}
                            size={16}
                            color={getLanguageColor(tab.language)}
                        />
                        <Text style={{ marginLeft: 6, color: '#ffffff' }}>{tab.name}</Text>
                        {tab.modified && (
                            <Ionicons
                                name="close-circle-outline"
                                size={16}
                                color="#cccccc"
                                style={{ marginLeft: 6 }}
                            />
                        )}
                        <TouchableOpacity
                            onPress={(e) => {
                                e.stopPropagation();
                                onTabClose(tab.id);
                            }}
                            style={{ marginLeft: 8, padding: 4 }}
                            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                        >
                            <Ionicons name="close-outline" size={16} color="#cccccc" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};