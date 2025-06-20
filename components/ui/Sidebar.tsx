import React from 'react';
import { View, Animated, Dimensions } from 'react-native';
interface SidebarProps {
    isOpen: boolean;
    children: React.ReactNode;
    width?: number;
}
export const Sidebar: React.FC<SidebarProps> = ({
    isOpen,
    children,
    width = 250
}) => {
    const screenWidth = Dimensions.get('window').width;
    const sidebarWidth = Math.min(width, screenWidth * 0.8);
    return (
        <Animated.View
            className="bg-[#252526] border-r border-[#3e3e42]"
            style={{
                width: isOpen ? sidebarWidth : 0,
                overflow: 'hidden'
            }}
        >
            <View style={{ width: sidebarWidth }}>
                {children}
            </View>
        </Animated.View>
    );
};