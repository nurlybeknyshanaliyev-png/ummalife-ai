import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Map, Scan, User } from 'lucide-react-native';
import { Colors } from '@/constants/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.onSurfaceVariant,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: Colors.outlineVariant,
          backgroundColor: Colors.surface,
          height: 60 + Math.max(insets.bottom - 10, 0),
          paddingBottom: Math.max(insets.bottom, 8),
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Домой',
          tabBarIcon: ({ color, focused }) => <Home color={color} size={24} strokeWidth={focused ? 2.5 : 2} />,
        }}
      />
      <Tabs.Screen
        name="halal-map"
        options={{
          title: 'Карта',
          tabBarIcon: ({ color, focused }) => <Map color={color} size={24} strokeWidth={focused ? 2.5 : 2} />,
        }}
      />
      <Tabs.Screen
        name="scanner"
        options={{
          title: 'Сканер',
          tabBarIcon: ({ color, focused }) => <Scan color={color} size={24} strokeWidth={focused ? 2.5 : 2} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          tabBarIcon: ({ color, focused }) => <User color={color} size={24} strokeWidth={focused ? 2.5 : 2} />,
        }}
      />
    </Tabs>
  );
}
