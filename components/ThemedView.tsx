import React from 'react';
import { View, ViewProps } from 'react-native';
import { Colors } from '@/constants/Theme';

interface ThemedViewProps extends ViewProps {
  backgroundColor?: keyof typeof Colors;
}

export const ThemedView: React.FC<ThemedViewProps> = ({
  style,
  backgroundColor = 'background',
  ...rest
}) => {
  const bgColor = Colors[backgroundColor as keyof typeof Colors];
  const finalBgColor = typeof bgColor === 'string' ? bgColor : (typeof backgroundColor === 'string' ? backgroundColor : Colors.background);

  return (
    <View
      style={[
        { backgroundColor: finalBgColor },
        style
      ]}
      {...rest}
    />
  );
};
