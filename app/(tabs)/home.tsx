import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, MessageSquare, Sparkles, BookOpen, Clock, Heart } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import { Colors, Spacing, BorderRadius } from '@/constants/Theme';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuX9N3DBlHhHLJnxo3hmEM_Y6DQDdgdwjiqRD2uda-fOm9UULKo-RHtioyMrg1xxsomxaKLNEQRPU-LolcX_My31n4ZQg94BfH_gKJDik11_2kERiaNWvKJs0tRbRPX7lCGdAGlW0-hPzPkz_7Zyy29Z5MReegA3RbxRo2EcRq4887HdL3o6LUJ73nNY8GQa44XfAHOjFnV9o-70YBKoBZgnrPEUOlbqoZ_kiRZVxaQS59ZK_3WbKhUjt6JbNNNOTdx-LJ9MlakBkO' }}
              style={styles.avatar}
            />
            <View style={styles.onlineStatus} />
          </View>
          <View>
            <ThemedText type="headlineMobile" color="primary">Ассаламу алейкум, Нурлыбек!</ThemedText>
            <ThemedText type="labelSM" color="onSurfaceVariant">Понедельник, 12 Рамадан</ThemedText>
          </View>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Bell size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Daily Hasanat */}
      <View style={styles.hasanatCard}>
        <View style={styles.hasanatInfo}>
          <ThemedText type="headlineMD" color="primary">Daily Hasanat</ThemedText>
          <ThemedText type="bodyMD" color="onSurfaceVariant">3/5 daily goals achieved</ThemedText>
          <View style={styles.dotContainer}>
            {[1, 2, 3].map(i => <View key={i} style={[styles.dot, styles.dotActive]} />)}
            {[4, 5].map(i => <View key={i} style={styles.dot} />)}
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Svg height="80" width="80" viewBox="0 0 36 36">
            <Circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke="#F2F4F2"
              strokeWidth="3"
            />
            <Circle
              cx="18"
              cy="18"
              r="15.9155"
              fill="none"
              stroke={Colors.matteGold}
              strokeWidth="3"
              strokeDasharray="60, 100"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
            />
          </Svg>
          <View style={styles.progressText}>
            <ThemedText type="labelMD" color="secondary">60%</ThemedText>
          </View>
        </View>
      </View>

      {/* AI Mentor Card */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push('/chat')}
        style={styles.aiCardContainer}
      >
        <LinearGradient
          colors={Colors.emeraldGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiCard}
        >
          <View style={styles.aiIconContainer}>
            <Sparkles size={40} color={Colors.matteGold} />
          </View>
          <ThemedText type="headlineMD" style={styles.aiTitle}>Ваш AI Наставник</ThemedText>
          <ThemedText type="bodyMD" style={styles.aiSubtitle}>
            Нужен совет в сложной ситуации? Мы здесь, чтобы помочь на пути веры и жизни.
          </ThemedText>

          <View style={styles.aiButton}>
            <MessageSquare size={20} color={Colors.primary} />
            <ThemedText type="labelMD" style={styles.aiButtonText}>
              Поговорить со старшим братом
            </ThemedText>
          </View>

          <ThemedText type="labelSM" style={styles.aiFooter}>
            Задай любой вопрос анонимно и без осуждения
          </ThemedText>
        </LinearGradient>
      </TouchableOpacity>

      {/* Actions Grid */}
      <View style={styles.grid}>
        <ActionCard icon={<Sparkles size={24} color={Colors.primary} />} title="Дуа дня" subtitle="Просьбы об облегчении" />
        <ActionCard icon={<BookOpen size={24} color={Colors.primary} />} title="Коран" subtitle="Продолжить суру «Ан-Нур»" />
        <ActionCard icon={<Clock size={24} color={Colors.primary} />} title="Намаз" subtitle="Аср через 1ч 12мин" />
        <ActionCard icon={<Heart size={24} color={Colors.primary} />} title="Садака" subtitle="Поддержать фонд" />
      </View>
    </ScrollView>
  );
}

function ActionCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <TouchableOpacity style={styles.actionCard} activeOpacity={0.7}>
      <View style={styles.actionIcon}>{icon}</View>
      <ThemedText type="labelMD" color="primary">{title}</ThemedText>
      <ThemedText type="labelSM" color="onSurfaceVariant">{subtitle}</ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.marginMobile,
    paddingTop: 60,
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: Colors.matteGold,
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 77, 64, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasanatCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: Spacing.marginMobile,
    padding: 24,
    borderRadius: BorderRadius.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.matteGoldLow,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
    marginTop: 20,
  },
  hasanatInfo: {
    flex: 1,
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.outlineVariant,
  },
  dotActive: {
    backgroundColor: Colors.matteGold,
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    position: 'absolute',
  },
  aiCardContainer: {
    marginHorizontal: Spacing.marginMobile,
    marginTop: Spacing.stackLg,
    borderRadius: BorderRadius.xl,
    overflow: 'hidden',
  },
  aiCard: {
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.matteGoldLow,
  },
  aiIconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  aiTitle: {
    color: '#ffffff',
    marginBottom: 8,
  },
  aiSubtitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginBottom: 32,
  },
  aiButton: {
    backgroundColor: Colors.matteGold,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: BorderRadius.md,
    width: '100%',
    justifyContent: 'center',
    gap: 8,
  },
  aiButtonText: {
    color: Colors.primary,
  },
  aiFooter: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Spacing.marginMobile,
    gap: 12,
    marginTop: 8,
  },
  actionCard: {
    backgroundColor: '#ffffff',
    width: '48%',
    padding: 20,
    borderRadius: BorderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 20,
    elevation: 2,
  },
  actionIcon: {
    marginBottom: 12,
  }
});
