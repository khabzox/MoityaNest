import React from 'react';
import { Modal as RNModal, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large' | 'fullscreen';
    showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
    visible,
    onClose,
    title,
    children,
    size = 'medium',
    showCloseButton = true
}) => {
    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return 'w-80 max-h-96';
            case 'large':
                return 'w-96 max-h-[80%]';
            case 'fullscreen':
                return 'w-full h-full m-0';
            default:
                return 'w-80 max-h-[70%]';
        }
    };

    return (
        <RNModal
            visible={visible}
            transparent={size !== 'fullscreen'}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View className={`flex-1 ${size === 'fullscreen' ? '' : 'bg-black/50 items-center justify-center'}`}>
                <View className={`
          bg-[#2d2d30] border border-[#3e3e42] 
          ${size === 'fullscreen' ? '' : 'rounded-lg mx-4'}
          ${getSizeStyles()}
        `}>
                    {(title || showCloseButton) && (
                        <View className="flex-row items-center justify-between p-4 border-b border-[#3e3e42]">
                            {title && (
                                <Text className="text-[#cccccc] text-lg font-semibold flex-1">
                                    {title}
                                </Text>
                            )}
                            {showCloseButton && (
                                <TouchableOpacity onPress={onClose} className="p-1">
                                    <Ionicons name="close" size={20} color="#cccccc" />
                                </TouchableOpacity>
                            )}
                        </View>
                    )}
                    <View className="flex-1">
                        {children}
                    </View>
                </View>
            </View>
        </RNModal>
    );
};
