import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    icon?: string;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'medium',
    icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    fullWidth = false
}) => {
    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-[#0078d4] border-[#0078d4]';
            case 'secondary':
                return 'bg-[#252526] border-[#3e3e42]';
            case 'ghost':
                return 'bg-transparent border-transparent';
            case 'danger':
                return 'bg-[#e74c3c] border-[#e74c3c]';
            default:
                return 'bg-[#0078d4] border-[#0078d4]';
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case 'ghost':
                return 'text-[#0078d4]';
            case 'secondary':
                return 'text-[#cccccc]';
            default:
                return 'text-white';
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case 'small':
                return 'px-3 py-1.5';
            case 'large':
                return 'px-6 py-3';
            default:
                return 'px-4 py-2';
        }
    };

    const getTextSize = () => {
        switch (size) {
            case 'small':
                return 'text-sm';
            case 'large':
                return 'text-lg';
            default:
                return 'text-base';
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            className={`
        border rounded-lg items-center justify-center flex-row
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50' : ''}
      `}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator
                    size="small"
                    color={variant === 'secondary' ? '#cccccc' : 'white'}
                />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <Ionicons
                            name={icon as any}
                            size={size === 'small' ? 14 : size === 'large' ? 20 : 16}
                            color={variant === 'ghost' ? '#0078d4' : variant === 'secondary' ? '#cccccc' : 'white'}
                            style={{ marginRight: 8 }}
                        />
                    )}
                    <Text className={`font-medium ${getTextColor()} ${getTextSize()}`}>
                        {title}
                    </Text>
                    {icon && iconPosition === 'right' && (
                        <Ionicons
                            name={icon as any}
                            size={size === 'small' ? 14 : size === 'large' ? 20 : 16}
                            color={variant === 'ghost' ? '#0078d4' : variant === 'secondary' ? '#cccccc' : 'white'}
                            style={{ marginLeft: 8 }}
                        />
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};
