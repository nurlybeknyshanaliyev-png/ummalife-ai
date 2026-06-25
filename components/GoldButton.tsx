import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleSheet, View } from 'react-native';
import { Colors, BorderRadius, Typography } from '@/constants/Theme';
import { ThemedText } from './ThemedText';

interface GoldButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: React.ReactNode;
}

export const GoldButton: React.FC<GoldButtonProps> = ({ title, icon, style, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      {...rest}
    >
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <ThemedText type="labelMD" style={styles.text}>{title}</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: BorderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.matteGold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  text: {
    color: Colors.onSecondary,
  },
  iconContainer: {
    marginRight: 8,
  }
});
