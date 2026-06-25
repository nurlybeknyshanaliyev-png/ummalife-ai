import { View } from 'react-native';
import { ThemedText } from '../../components/ThemedText';
import { Colors } from '@/constants/Theme';

export default function PlaceholderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.background }}>
      <ThemedText type="headlineMD">Скоро появится</ThemedText>
    </View>
  );
}
