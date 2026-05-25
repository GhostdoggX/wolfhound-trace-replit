import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const TEAM = [
  {
    name: "Michael",
    role: "Founder & OSINT Analyst",
    bio: "Open Source Intelligence Analyst specialising in OSINT, Physical Security Analysis, corporate risk, and missing people intelligence analysis. Converts dispersed and often incomplete information into precise, defensible, and actionable intelligence.",
    skills: ["Source Verification", "Digital Footprint Analysis", "Due Diligence", "Threat Assessment"],
  },
  {
    name: "Tiana",
    role: "Co-Founder & Head of Analytics",
    bio: "Analyst with a background in scientific research, structured evidence evaluation, and complex data analysis. Transforms fragmented open-source information into clear, verified, and practical intelligence.",
    skills: ["OSINT Methods", "Competitive Intelligence", "Market Analysis", "Risk Assessment"],
  },
];

const STATS = [
  { value: "2ND", label: "OSINT CTF\nMissing Persons Track" },
  { value: "100%", label: "GDPR\nCompliant" },
  { value: "OSINT", label: "Certified\nAnalysts" },
];

export default function AboutScreen() {
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
        <Text style={styles.eyebrow}>03 / TEAM</Text>
        <Text style={styles.heroTitle}>WHO WE ARE</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>
          WolfhoundTrace was founded to help businesses, institutions, and
          individuals uncover risk, verify facts, and respond to uncertainty
          with confidence.
        </Text>
        <Text style={styles.highlight}>
          We do not rely on assumptions. We follow the evidence.
        </Text>
      </View>

      <View style={styles.statsRow}>
        {STATS.map((s, i) => (
          <View key={i} style={[styles.statBox, i < STATS.length - 1 && styles.statBoxBorder]}>
            <Text style={styles.statValue}>{s.value}</Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>THE TEAM</Text>
        {TEAM.map((member, i) => (
          <View key={i} style={styles.teamCard}>
            <View style={styles.teamCardAccent} />
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
            <Text style={styles.memberBio}>{member.bio}</Text>
            <View style={styles.skillsRow}>
              {member.skills.map((skill) => (
                <View key={skill} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>OSINT EXPERTISE</Text>
        <View style={styles.expertiseCard}>
          <Text style={styles.expertiseHeading}>Evidence-Led Analytic Support</Text>
          <Text style={styles.expertiseBody}>
            Our analytic methods are shaped by practical, high-pressure experience.
            Our team actively participates in international OSINT Capture the Flag
            challenges, working through complex scenarios involving digital footprint
            analysis, person tracing, social media intelligence, source verification,
            and missing-person search workflows.
          </Text>
          <View style={styles.achievementRow}>
            <View style={styles.achievementDot} />
            <Text style={styles.achievement}>
              2nd Place — OSINT Shadows Conference CTF, Missing Persons Track
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>OUR PURPOSE</Text>
        <Text style={styles.purposeText}>
          Effective security begins with{" "}
          <Text style={styles.purposeHighlight}>
            evidence, sound judgement, and the discipline to look beyond appearances.
          </Text>
        </Text>
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
      marginBottom: 36,
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
      marginBottom: 12,
    },
    highlight: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 13,
      color: colors.accent,
      lineHeight: 20,
    },
    statsRow: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 40,
    },
    statBox: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 8,
    },
    statBoxBorder: {
      borderRightWidth: 1,
      borderRightColor: colors.border,
    },
    statValue: {
      fontFamily: "Inter_700Bold",
      fontSize: 22,
      color: colors.accent,
      letterSpacing: 1,
      marginBottom: 6,
    },
    statLabel: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      color: colors.mutedForeground,
      letterSpacing: 1,
      textAlign: "center",
      lineHeight: 14,
    },
    section: {
      marginBottom: 36,
    },
    sectionLabel: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 16,
    },
    teamCard: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 20,
      marginBottom: 12,
      position: "relative",
    },
    teamCardAccent: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 3,
      height: "100%",
      backgroundColor: colors.accent,
    },
    memberName: {
      fontFamily: "Inter_700Bold",
      fontSize: 20,
      color: colors.foreground,
      letterSpacing: 1,
      marginBottom: 4,
    },
    memberRole: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.accent,
      letterSpacing: 2,
      marginBottom: 14,
    },
    memberBio: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      color: colors.mutedForeground,
      lineHeight: 20,
      marginBottom: 16,
    },
    skillsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },
    skillBadge: {
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    skillText: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      letterSpacing: 1,
      color: colors.mutedForeground,
    },
    expertiseCard: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 20,
    },
    expertiseHeading: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 15,
      color: colors.foreground,
      letterSpacing: 1,
      marginBottom: 12,
    },
    expertiseBody: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      color: colors.mutedForeground,
      lineHeight: 20,
      marginBottom: 16,
    },
    achievementRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 10,
    },
    achievementDot: {
      width: 6,
      height: 6,
      backgroundColor: colors.accent,
      marginTop: 5,
    },
    achievement: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      color: colors.accent,
      lineHeight: 18,
      flex: 1,
    },
    purposeText: {
      fontFamily: "Inter_400Regular",
      fontSize: 15,
      color: colors.mutedForeground,
      lineHeight: 24,
    },
    purposeHighlight: {
      fontFamily: "Inter_600SemiBold",
      color: colors.foreground,
    },
  });
}
