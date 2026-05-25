import React, { useState } from "react";
import {
  FlatList,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const SERVICES = [
  {
    number: "01",
    title: "Corporate Due Diligence",
    medium: "Intelligence Analysis",
    description: "Comprehensive background verification for business partners, vendors, and investment targets.",
  },
  {
    number: "02",
    title: "Digital Forensics",
    medium: "Analysis",
    description: "Recovery and examination of digital evidence from devices and online sources.",
  },
  {
    number: "03",
    title: "Cryptocurrency Tracing",
    medium: "Blockchain",
    description: "Tracking and mapping crypto transactions across wallets and exchanges.",
  },
  {
    number: "04",
    title: "Open-Source Intelligence",
    medium: "OSINT",
    description: "Systematic collection and analysis of publicly available information.",
  },
  {
    number: "05",
    title: "Asset Discovery",
    medium: "Research",
    description: "Identification and verification of undisclosed assets and holdings.",
  },
  {
    number: "06",
    title: "Threat Assessment",
    medium: "Security",
    description: "Evaluation of digital footprints and potential exposure risks.",
  },
  {
    number: "07",
    title: "Search for Missing Person",
    medium: "Location",
    description: "Professional tracing and location services for missing individuals with discretion and care.",
  },
  {
    number: "08",
    title: "Executive Protection",
    medium: "Security",
    description: "Comprehensive protection services and risk assessment for high-profile individuals in the digital landscape.",
  },
  {
    number: "09",
    title: "Brand Protection",
    medium: "Defense",
    description: "Monitoring and safeguarding brand integrity against counterfeiting and misuse.",
  },
];

type Service = (typeof SERVICES)[number];

function ServiceCard({ item, colors }: { item: Service; colors: ReturnType<typeof useColors> }) {
  const [expanded, setExpanded] = useState(false);

  const styles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: expanded ? colors.accent + "80" : colors.border,
      backgroundColor: expanded ? colors.accent + "08" : colors.card,
      marginHorizontal: 16,
      marginBottom: 2,
      padding: 20,
    },
    topRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    left: {
      flex: 1,
    },
    medium: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      letterSpacing: 3,
      color: colors.mutedForeground,
      marginBottom: 6,
    },
    title: {
      fontFamily: "Inter_700Bold",
      fontSize: 17,
      letterSpacing: 1,
      color: expanded ? colors.accent : colors.foreground,
      lineHeight: 22,
    },
    numberBadge: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: expanded ? colors.accent : colors.mutedForeground + "80",
      letterSpacing: 1,
    },
    description: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      color: colors.mutedForeground,
      lineHeight: 20,
      marginTop: 12,
    },
    accentLine: {
      position: "absolute" as const,
      top: 0,
      right: 0,
      width: 32,
      height: 1,
      backgroundColor: colors.accent,
    },
    accentLineV: {
      position: "absolute" as const,
      top: 0,
      right: 0,
      width: 1,
      height: 32,
      backgroundColor: colors.accent,
    },
  });

  return (
    <Pressable
      style={styles.card}
      onPress={() => setExpanded(!expanded)}
    >
      {expanded && (
        <>
          <View style={styles.accentLine} />
          <View style={styles.accentLineV} />
        </>
      )}
      <View style={styles.topRow}>
        <View style={styles.left}>
          <Text style={styles.medium}>{item.medium.toUpperCase()}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.numberBadge}>{item.number}</Text>
      </View>
      {expanded && (
        <Text style={styles.description}>{item.description}</Text>
      )}
    </Pressable>
  );
}

export default function ServicesScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingTop: topPad + 24,
      paddingHorizontal: 24,
      paddingBottom: 24,
    },
    eyebrow: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 10,
    },
    title: {
      fontFamily: "Inter_700Bold",
      fontSize: 40,
      letterSpacing: 3,
      color: colors.foreground,
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      color: colors.mutedForeground,
      lineHeight: 18,
    },
    list: {
      paddingBottom: 120,
    },
    hint: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.mutedForeground,
      letterSpacing: 1,
      textAlign: "center",
      paddingVertical: 16,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={SERVICES}
        keyExtractor={(item) => item.number}
        renderItem={({ item }) => <ServiceCard item={item} colors={colors} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>02 / SERVICES</Text>
            <Text style={styles.title}>CAPABILITIES</Text>
            <Text style={styles.subtitle}>
              From corporate due diligence to digital forensics and open-source intelligence.
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.hint}>TAP A CARD TO EXPAND</Text>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
