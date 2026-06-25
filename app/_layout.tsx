import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold
} from '@expo-google-fonts/manrope';
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold
} from '@expo-google-fonts/plus-jakarta-sans';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
  });

  useEffect(() => {
    if (loaded || error) {
      // Delay hiding splash screen slightly to ensure the first frame is rendered
      const hideSplash = async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        await SplashScreen.hideAsync();
      };
      hideSplash();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{
        contentStyle: { backgroundColor: '#FCF9F8' }, // Match Theme.background
        animation: 'fade'
      }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="chat" options={{
          presentation: 'modal',
          headerShown: true,
        }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
