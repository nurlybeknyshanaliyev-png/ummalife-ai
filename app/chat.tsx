import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Switch
} from 'react-native';
import { Stack } from 'expo-router';
import { Send, User, Bot, Shield } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '../constants/Theme';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Ассаламу алейкум! Я ваш AI-Наставник. Чем я могу помочь вам сегодня?',
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Благодарю за ваш вопрос. Как ваш наставник, я постараюсь дать совет, основанный на мудрости и знаниях.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isAi = item.sender === 'ai';
    return (
      <View style={[
        styles.messageWrapper,
        isAi ? styles.aiWrapper : styles.userWrapper
      ]}>
        {isAi && (
          <View style={styles.avatar}>
            <Bot size={20} color={Colors.secondary} />
          </View>
        )}
        <View style={[
          styles.bubble,
          isAi ? styles.aiBubble : styles.userBubble,
          !isAi && styles.userBubbleOutline
        ]}>
          <ThemedText type="bodyMD" color={isAi ? 'primary' : 'onSurface'}>
            {item.text}
          </ThemedText>
        </View>
        {!isAi && (
          <View style={[styles.avatar, styles.userAvatar]}>
            <User size={20} color={Colors.primary} />
          </View>
        )}
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'AI Наставник',
          headerTitleStyle: { fontFamily: 'Manrope_600SemiBold', color: Colors.primary },
          headerTintColor: Colors.primary,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.background },
        }}
      />

      <View style={styles.anonymousToggle}>
        <View style={styles.toggleInfo}>
          <Shield size={18} color={Colors.secondary} />
          <ThemedText type="labelSM" style={{ marginLeft: 8 }}>Чат без стыда (анонимно)</ThemedText>
        </View>
        <Switch
          value={isAnonymous}
          onValueChange={setIsAnonymous}
          trackColor={{ false: Colors.outlineVariant, true: Colors.primaryContainer }}
          thumbColor={isAnonymous ? Colors.secondary : '#f4f3f4'}
        />
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={[styles.inputContainer, { marginBottom: Math.max(insets.bottom, 16) }]}>
          <TextInput
            style={styles.input}
            placeholder="Задайте любой вопрос..."
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
            activeOpacity={0.7}
          >
            <Send size={20} color={Colors.onPrimary} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  anonymousToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.marginMobile,
    paddingVertical: 12,
    backgroundColor: 'rgba(0, 77, 64, 0.05)',
    marginHorizontal: Spacing.marginMobile,
    borderRadius: BorderRadius.md,
    marginTop: 8,
  },
  toggleInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {
    padding: Spacing.marginMobile,
    paddingBottom: 20,
  },
  messageWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
    maxWidth: '85%',
  },
  aiWrapper: {
    alignSelf: 'flex-start',
  },
  userWrapper: {
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 77, 64, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  userAvatar: {
    marginLeft: 8,
    marginRight: 0,
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
  },
  bubble: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: BorderRadius.lg,
  },
  aiBubble: {
    backgroundColor: Colors.aiBubble,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    backgroundColor: Colors.userBubble,
    borderBottomRightRadius: 4,
  },
  userBubbleOutline: {
    borderWidth: 1,
    borderColor: Colors.matteGoldLow,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.marginMobile,
    paddingTop: 12,
    alignItems: 'flex-end',
    backgroundColor: Colors.background,
  },
  input: {
    flex: 1,
    backgroundColor: '#F2F4F2',
    borderRadius: BorderRadius.md,
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingTop: 10,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans_400Regular',
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
});
