import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { Colors, Typography } from '@/constants/Theme';

interface ThemedTextProps extends TextProps {
  type?: keyof typeof Typography;
  color?: keyof typeof Colors;
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  type = 'bodyMD',
  color = 'onSurface',
  ...rest
}) => {
  const textColor = Colors[color as keyof typeof Colors];
  const finalColor = typeof textColor === 'string' ? textColor : (typeof color === 'string' ? color : Colors.onSurface);

  return (
    <Text
      style={[
        Typography[type],
        { color: finalColor },
        style
      ]}
      {...rest}
    />
  );
};
