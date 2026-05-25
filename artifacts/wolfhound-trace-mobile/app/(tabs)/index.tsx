import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const PRINCIPLES = [
  { number: "01", title: "DISCREET HANDLING" },
  { number: "02", title: "VERIFIED FINDINGS" },
  { number: "03", title: "TARGETED PRECISION" },
  { number: "04", title: "LEGALLY GROUNDED" },
];

const SIGNALS = [
  { date: "2025.06.10", title: "Crypto Forensics", note: "Enhanced blockchain analysis for cross-chain analysis." },
  { date: "2025.05.28", title: "Dark Web Monitoring", note: "Proactive threat detection across hidden networks." },
  { date: "2025.05.15", title: "AI-Powered OSINT", note: "Machine learning integration for pattern recognition." },
];

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  const styles = makeStyles(colors, topPad, bottomPad);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>01 / OVERVIEW</Text>
        <Text style={styles.heroTitle}>WOLFHOUND{"\n"}TRACE</Text>
        <View style={styles.divider} />
        <Text style={styles.tagline}>
          OSINT · DIGITAL INTELLIGENCE · DUE DILIGENCE
        </Text>
        <Text style={styles.description}>
          Professional open-source intelligence and digital analytic services.
          We turn dispersed, incomplete information into precise, defensible,
          actionable intelligence.
        </Text>
        <Pressable
          style={({ pressed }) => [styles.ctaButton, pressed && styles.ctaPressed]}
          onPress={() => router.push("/(tabs)/services")}
        >
          <Text style={styles.ctaText}>VIEW CAPABILITIES</Text>
          <Feather name="arrow-right" size={14} color={colors.accentForeground} />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>OPERATING PRINCIPLES</Text>
        {PRINCIPLES.map((p) => (
          <View key={p.number} style={styles.principleRow}>
            <Text style={styles.principleNum}>{p.number}</Text>
            <Text style={styles.principleTitle}>{p.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>INTELLIGENCE SIGNALS</Text>
        {SIGNALS.map((s, i) => (
          <View key={i} style={styles.signalRow}>
            <Text style={styles.signalDate}>{s.date}</Text>
            <View style={styles.signalContent}>
              <Text style={styles.signalTitle}>{s.title}</Text>
              <Text style={styles.signalNote}>{s.note}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Relentless in pursuit. Silent in execution.
        </Text>
        <Text style={styles.footerSub}>© 2026 Wolfhound Trace</Text>
      </View>
    </ScrollView>
  );
}

function makeStyles(colors: ReturnType<typeof useColors>, topPad: number, bottomPad: number) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      paddingTop: topPad + 24,
      paddingBottom: bottomPad + 100,
      paddingHorizontal: 24,
    },
    header: {
      marginBottom: 48,
    },
    eyebrow: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 16,
    },
    heroTitle: {
      fontFamily: "Inter_700Bold",
      fontSize: 52,
      letterSpacing: 4,
      color: colors.foreground,
      lineHeight: 56,
      marginBottom: 20,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginBottom: 16,
    },
    tagline: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 3,
      color: colors.mutedForeground,
      marginBottom: 20,
    },
    description: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      color: colors.mutedForeground,
      lineHeight: 22,
      marginBottom: 28,
    },
    ctaButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.accent,
      paddingVertical: 14,
      paddingHorizontal: 20,
      alignSelf: "flex-start",
    },
    ctaPressed: {
      opacity: 0.8,
    },
    ctaText: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 11,
      letterSpacing: 2,
      color: colors.accentForeground,
    },
    section: {
      marginBottom: 40,
    },
    sectionLabel: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 16,
    },
    principleRow: {
      flexDirection: "row",
      alignItems: "center",
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingVertical: 14,
      gap: 16,
    },
    principleNum: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.accent,
      letterSpacing: 1,
      width: 28,
    },
    principleTitle: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 13,
      letterSpacing: 2,
      color: colors.foreground,
      flex: 1,
    },
    signalRow: {
      flexDirection: "row",
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingVertical: 14,
      gap: 16,
    },
    signalDate: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      color: colors.accent,
      letterSpacing: 1,
      width: 72,
      paddingTop: 2,
    },
    signalContent: {
      flex: 1,
    },
    signalTitle: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 13,
      color: colors.foreground,
      marginBottom: 4,
    },
    signalNote: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      color: colors.mutedForeground,
      lineHeight: 18,
    },
    footer: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 24,
      alignItems: "center",
      gap: 8,
    },
    footerText: {
      fontFamily: "Inter_400Regular",
      fontSize: 11,
      color: colors.accent,
      letterSpacing: 2,
      textAlign: "center",
    },
    footerSub: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      color: colors.mutedForeground,
      letterSpacing: 2,
    },
  });
}
