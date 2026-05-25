import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import { Linking } from "react-native";
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

const SERVICES_LIST = [
  "OSINT",
  "Search for Missing Person",
  "Digital Forensics",
  "Executive Protection",
  "Brand Protection",
  "Crypto Tracing",
  "Due Diligence",
  "Threat Assessment",
];

const CLIENTS_LIST = [
  "Legal Firms",
  "Corporate Clients",
  "Private Individuals",
  "Journalists",
  "NGOs",
  "Financial Institutions",
];

const METHODS_LIST = [
  "Open-Source Intelligence",
  "Digital Footprint Analysis",
  "Blockchain Forensics",
  "Social Media Intelligence",
  "Corporate Record Analysis",
  "Dark Web Monitoring",
];

export default function ContactScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  const styles = makeStyles(colors, topPad, bottomPad);

  const handleEmail = async (subject: string) => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const url = `mailto:wolfhound_trace@pm.me?subject=${encodeURIComponent(subject)}`;
    Linking.openURL(url);
  };

  const handleConcernEmail = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const url = `mailto:wolfhound_trace@pm.me?subject=${encodeURIComponent("Concern Report")}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>06 / CONTACT</Text>
        <Text style={styles.heroTitle}>GET IN TOUCH</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          Ready to discuss your intelligence analysis needs?
        </Text>
      </View>

      <View style={styles.ctaGroup}>
        <Pressable
          style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
          onPress={() => handleEmail("Service initial consultation")}
        >
          <Feather name="mail" size={16} color={colors.accentForeground} />
          <Text style={styles.primaryButtonText}>INITIATE CONTACT</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
          onPress={handleConcernEmail}
        >
          <Feather name="alert-circle" size={16} color={colors.foreground} />
          <Text style={styles.secondaryButtonText}>REPORT A CONCERN</Text>
        </Pressable>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoCol}>
          <View style={styles.colHeader}>
            <Text style={styles.colTitle}>SERVICES</Text>
          </View>
          {SERVICES_LIST.map((s) => (
            <Text key={s} style={styles.colItem}>{s}</Text>
          ))}
        </View>

        <View style={styles.infoCol}>
          <View style={styles.colHeader}>
            <Text style={styles.colTitle}>CLIENTS</Text>
          </View>
          {CLIENTS_LIST.map((c) => (
            <Text key={c} style={styles.colItem}>{c}</Text>
          ))}
        </View>

        <View style={styles.infoCol}>
          <View style={styles.colHeader}>
            <Text style={styles.colTitle}>METHODS</Text>
          </View>
          {METHODS_LIST.map((m) => (
            <Text key={m} style={styles.colItem}>{m}</Text>
          ))}
        </View>
      </View>

      <View style={styles.operationsBox}>
        <Text style={styles.opsLabel}>OPERATIONS</Text>
        <Text style={styles.opsTitle}>Worldwide Coverage</Text>
        <Text style={styles.opsDesc}>
          Operating across jurisdictions with lawful OSINT methods,
          structured analysis, and careful evidence evaluation.
        </Text>
        <View style={styles.jurisdictionRow}>
          {["EU", "CH", "UK", "US", "GLOBAL"].map((j) => (
            <View key={j} style={styles.jurisdictionBadge}>
              <Text style={styles.jurisdictionText}>{j}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>
          Wolfhound Trace provides professional open-source intelligence (OSINT),
          digital intelligence analysis, and due diligence services. All analytic
          work is conducted in compliance with applicable laws and regulations,
          including GDPR and data protection standards.
        </Text>
        <Text style={styles.disclaimerSub}>
          © 2026 Wolfhound Trace · All communications handled with discretion.
        </Text>
        <Pressable
          onPress={() => router.push("/privacy")}
          style={({ pressed }) => [styles.privacyLink, pressed && { opacity: 0.6 }]}
        >
          <Text style={styles.privacyLinkText}>Privacy Policy →</Text>
        </Pressable>
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
      marginBottom: 32,
    },
    eyebrow: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 12,
    },
    heroTitle: {
      fontFamily: "Inter_700Bold",
      fontSize: 44,
      letterSpacing: 4,
      color: colors.foreground,
      marginBottom: 16,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginBottom: 16,
    },
    description: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      color: colors.mutedForeground,
      lineHeight: 22,
    },
    ctaGroup: {
      gap: 10,
      marginBottom: 40,
    },
    primaryButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      backgroundColor: colors.accent,
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    secondaryButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    buttonPressed: {
      opacity: 0.75,
    },
    primaryButtonText: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      letterSpacing: 2,
      color: colors.accentForeground,
    },
    secondaryButtonText: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      letterSpacing: 2,
      color: colors.foreground,
    },
    infoSection: {
      gap: 24,
      marginBottom: 36,
    },
    infoCol: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 16,
    },
    colHeader: {
      borderWidth: 1,
      borderColor: colors.accent,
      paddingVertical: 4,
      paddingHorizontal: 10,
      alignSelf: "flex-start",
      marginBottom: 12,
    },
    colTitle: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 9,
      letterSpacing: 3,
      color: colors.foreground,
    },
    colItem: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      color: colors.mutedForeground,
      lineHeight: 22,
    },
    operationsBox: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 20,
      marginBottom: 36,
    },
    opsLabel: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 8,
    },
    opsTitle: {
      fontFamily: "Inter_700Bold",
      fontSize: 20,
      color: colors.foreground,
      letterSpacing: 1,
      marginBottom: 10,
    },
    opsDesc: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      color: colors.mutedForeground,
      lineHeight: 20,
      marginBottom: 16,
    },
    jurisdictionRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    jurisdictionBadge: {
      borderWidth: 1,
      borderColor: colors.accent + "60",
      paddingVertical: 4,
      paddingHorizontal: 10,
    },
    jurisdictionText: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 10,
      letterSpacing: 2,
      color: colors.accent,
    },
    disclaimer: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 20,
      gap: 10,
    },
    disclaimerText: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.mutedForeground,
      lineHeight: 16,
    },
    disclaimerSub: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      color: colors.mutedForeground + "80",
      letterSpacing: 1,
    },
    privacyLink: {
      marginTop: 4,
      alignSelf: "flex-start",
    },
    privacyLinkText: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.accent,
      letterSpacing: 1,
    },
  });
}
