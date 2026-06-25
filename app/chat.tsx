import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Switch,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Stack } from 'expo-router';
import { Send, User, Bot, Shield, AlertCircle } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/Theme';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string; // ISO string to avoid non-configurable date objects in some engines
}

const MAX_DAILY_QUESTIONS = 5;
const STORAGE_KEY_DAILY_COUNT = 'daily_ai_questions_count';
const STORAGE_KEY_LAST_DATE = 'daily_ai_questions_date';

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial-ai-msg',
      text: 'Ассаламу алейкум! Я ваш AI-Наставник. Чем я могу помочь вам сегодня?',
      sender: 'ai',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [dailyCount, setDailyCount] = useState(0);
  const [isTyping, setIsAiTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  // Load daily limits
  useEffect(() => {
    loadDailyLimits();
  }, []);

  const loadDailyLimits = async () => {
    try {
      const today = new Date().toLocaleDateString();
      const lastDate = await AsyncStorage.getItem(STORAGE_KEY_LAST_DATE);

      if (lastDate !== today) {
        await AsyncStorage.setItem(STORAGE_KEY_LAST_DATE, today);
        await AsyncStorage.setItem(STORAGE_KEY_DAILY_COUNT, '0');
        setDailyCount(0);
      } else {
        const count = await AsyncStorage.getItem(STORAGE_KEY_DAILY_COUNT);
        setDailyCount(parseInt(count || '0', 10));
      }
    } catch (e) {
      console.error('Failed to load daily limits', e);
    }
  };

  const incrementDailyCount = async () => {
    try {
      const newCount = dailyCount + 1;
      await AsyncStorage.setItem(STORAGE_KEY_DAILY_COUNT, newCount.toString());
      setDailyCount(newCount);
    } catch (e) {
      console.error('Failed to increment daily limits', e);
    }
  };

  const sendMessage = useCallback(async () => {
    if (inputText.trim() === '' || isTyping) return;

    if (dailyCount >= MAX_DAILY_QUESTIONS) {
      Alert.alert(
        'Лимит исчерпан',
        'Брат, вы достигли дневного лимита (5 вопросов). Пожалуйста, возвращайтесь завтра или подпишитесь на Premium.'
      );
      return;
    }

    const userMsgId = `user-${Date.now()}`;
    const newMessage: Message = {
      id: userMsgId,
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setIsAiTyping(true);
    await incrementDailyCount();

    // Simulate AI response logic strictly in Russian
    setTimeout(() => {
      const aiResponse: Message = {
        id: `ai-${Date.now()}`,
        text: 'Благодарю за ваш вопрос. Как ваш наставник, я подготовил ответ, основанный на исламских ценностях и мудрости. Важно помнить, что каждое испытание — это возможность для духовного роста.',
        sender: 'ai',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsAiTyping(false);
    }, 1500);
  }, [inputText, dailyCount, isTyping]);

  const renderMessage = ({ item }: { item: Message }) => {
    const isAi = item.sender === 'ai';
    return (
      <View
        style={[
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

      <View style={styles.limitInfo}>
        <ThemedText type="labelSM" color="onSurfaceVariant">
          Вопросов сегодня: {dailyCount} / {MAX_DAILY_QUESTIONS}
        </ThemedText>
        {dailyCount >= MAX_DAILY_QUESTIONS && (
          <View style={styles.limitWarning}>
            <AlertCircle size={14} color={Colors.error} />
            <ThemedText type="labelSM" style={{ color: Colors.error, marginLeft: 4 }}>Лимит достигнут</ThemedText>
          </View>
        )}
      </View>

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
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        onContentSizeChange={() => {
           if (messages.length > 0) {
             flatListRef.current?.scrollToEnd({ animated: true });
           }
        }}
        removeClippedSubviews={false}
        keyboardShouldPersistTaps="handled"
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />

      {isTyping && (
        <View style={styles.typingContainer}>
           <ActivityIndicator size="small" color={Colors.primary} />
           <ThemedText type="labelSM" style={{ marginLeft: 8 }}>Наставник думает...</ThemedText>
        </View>
      )}

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={[styles.inputContainer, { paddingBottom: Math.max(insets.bottom, 16) }]}>
          <TextInput
            style={[
              styles.input,
              dailyCount >= MAX_DAILY_QUESTIONS && styles.inputDisabled
            ]}
            placeholder={dailyCount >= MAX_DAILY_QUESTIONS ? "Лимит на сегодня исчерпан" : "Задайте любой вопрос..."}
            value={inputText}
            onChangeText={setInputText}
            multiline
            editable={dailyCount < MAX_DAILY_QUESTIONS && !isTyping}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              (dailyCount >= MAX_DAILY_QUESTIONS || isTyping) && styles.buttonDisabled
            ]}
            onPress={sendMessage}
            activeOpacity={0.7}
            disabled={dailyCount >= MAX_DAILY_QUESTIONS || isTyping}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
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
  limitInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.marginMobile,
    paddingTop: 8,
  },
  limitWarning: {
    flexDirection: 'row',
    alignItems: 'center',
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
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.marginMobile,
    marginBottom: 8,
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
  inputDisabled: {
    backgroundColor: '#E0E0E0',
    color: '#9E9E9E',
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
  buttonDisabled: {
    backgroundColor: Colors.outlineVariant,
  },
});
