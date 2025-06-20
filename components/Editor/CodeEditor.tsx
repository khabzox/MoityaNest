import React from 'react';
import { View, Text } from 'react-native';

export interface CodeEditorProps {
    value: string;
    language: string;
    onChange: (value: string) => void;
    theme?: 'vs-dark' | 'light';
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
    value,
    language,
    onChange,
    theme = 'vs-dark'
}) => {
    // Placeholder for Monaco Editor - will be implemented with WebView
    return (
        <View className="flex-1 bg-[#1e1e1e] p-4">
            {/* Syntax highlighted placeholder */}
            {language === 'html' && (
                <View>
                    <Text className="text-[#569cd6] text-sm font-mono">{`<!DOCTYPE html>`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono">{`<html lang="en">`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono ml-4">{`<head>`}</Text>
                    <Text className="text-[#9cdcfe] text-sm font-mono ml-8">{`<meta charset="UTF-8">`}</Text>
                    <Text className="text-[#9cdcfe] text-sm font-mono ml-8">{`<title>MoityaNest</title>`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono ml-4">{`</head>`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono ml-4">{`<body>`}</Text>
                    <Text className="text-[#ce9178] text-sm font-mono ml-8">{`<!-- Your code here -->`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono ml-4">{`</body>`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono">{`</html>`}</Text>
                </View>
            )}

            {language === 'css' && (
                <View>
                    <Text className="text-[#d7ba7d] text-sm font-mono">{`/* Global Styles */`}</Text>
                    <Text className="text-[#569cd6] text-sm font-mono">{`body `}<Text className="text-[#cccccc]">{`{`}</Text></Text>
                    <Text className="text-[#9cdcfe] text-sm font-mono ml-4">{`margin`}<Text className="text-[#cccccc]">{`: `}</Text><Text className="text-[#b5cea8]">{`0`}</Text><Text className="text-[#cccccc]">{`;`}</Text></Text>
                    <Text className="text-[#9cdcfe] text-sm font-mono ml-4">{`font-family`}<Text className="text-[#cccccc]">{`: `}</Text><Text className="text-[#ce9178]">{`'Arial', sans-serif`}</Text><Text className="text-[#cccccc]">{`;`}</Text></Text>
                    <Text className="text-[#cccccc] text-sm font-mono">{`}`}</Text>
                </View>
            )}

            {language === 'javascript' && (
                <View>
                    <Text className="text-[#d7ba7d] text-sm font-mono">{`// JavaScript Code`}</Text>
                    <Text className="text-[#c586c0] text-sm font-mono">{`function `}<Text className="text-[#dcdcaa]">{`greet`}</Text><Text className="text-[#cccccc]">{`(`}</Text><Text className="text-[#9cdcfe]">{`name`}</Text><Text className="text-[#cccccc]">{`) {`}</Text></Text>
                    <Text className="text-[#c586c0] text-sm font-mono ml-4">{`return `}<Text className="text-[#ce9178]">{`\`Hello, \${name}!\``}</Text><Text className="text-[#cccccc]">{`;`}</Text></Text>
                    <Text className="text-[#cccccc] text-sm font-mono">{`}`}</Text>
                    <Text className="text-[#4ec9b0] text-sm font-mono mt-2">{`console`}<Text className="text-[#cccccc]">{`.`}</Text><Text className="text-[#dcdcaa]">{`log`}</Text><Text className="text-[#cccccc]">{`(`}</Text><Text className="text-[#dcdcaa]">{`greet`}</Text><Text className="text-[#cccccc]">{`(`}</Text><Text className="text-[#ce9178]">{`'World'`}</Text><Text className="text-[#cccccc]">{`));`}</Text></Text>
                </View>
            )}
        </View>
    );
};