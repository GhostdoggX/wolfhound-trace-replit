import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React from "react";
import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const SECTIONS = [
  {
    id: "wolfhound",
    heading: ["THE ", "WOLFHOUND"],
    accentIndex: 1,
    body: [
      "The Irish Wolfhound is a creature of profound duality — possessing both quiet nobility and an unyielding drive when on the hunt. It is a creature of purpose, bred for patience, precision, and loyalty. When wolves moved unseen among the flock, it was the wolfhound who sensed the danger first.",
      "With an instinct honed over centuries, the wolfhound could identify the wolf hiding in sheep's clothing — the predator disguised among the innocent, waiting for its moment to strike. Silent, steady, and relentless, it tracked every trace until the truth revealed itself.",
    ],
  },
  {
    id: "mission",
    heading: ["OUR ", "MISSION"],
    accentIndex: 1,
    body: [
      "At Wolfhound Trace, we carry that same spirit into the digital world. Our mission is to uncover the hidden — the wolves in sheep's clothing moving quietly through networks, data trails, and online shadows. Like our namesake, we operate with focus, discipline, and integrity.",
      "Every intelligence analysis we undertake — whether corporate, digital, or financial — receives the same level of dedication. We treat each client with equal importance and discretion, ensuring absolute confidentiality and pursuing every lead until fully verified.",
    ],
  },
  {
    id: "philosophy",
    heading: ["OUR ", "PHILOSOPHY"],
    accentIndex: 1,
    body: [
      "Our philosophy values accuracy over haste. Just as a wolfhound never loses the scent, we do not stop until every digital trace aligns with the truth. This isn't just our work — it's our instinct.",
      "In the complex world of open-source intelligence (OSINT) and digital forensics, true results require silent precision, keen observation, and the patience to track digital footprints across the globe without alerting the target.",
    ],
  },
  {
    id: "commitment",
    heading: ["OUR ", "COMMITMENT"],
    accentIndex: 1,
    body: [
      "Like the hounds of old, our analysts are trained to see what others miss. We operate with unwavering loyalty to our clients' privacy and a fierce commitment to uncovering the truth — no matter how deeply it is buried beneath layers of corporate obfuscation or digital anonymity.",
    ],
  },
];

export default function StoryScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const topPad = Platform.OS === "web" ? 67 : insets.top;
  const bottomPad = Platform.OS === "web" ? 34 : 0;

  const styles = makeStyles(colors, topPad, bottomPad);

  const handleContact = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL("mailto:wolfhound_trace@pm.me?subject=Service%20initial%20consultation");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>04 / STORY</Text>
        <Text style={styles.heroTitle}>THE STORY{"\n"}BEHIND US</Text>
        <View style={styles.divider} />
        <Text style={styles.subtitle}>
          The spirit of the Irish Wolfhound carried into the digital age.
        </Text>
      </View>

      {SECTIONS.map((section) => (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionHeading}>
            <Text style={styles.sectionHeadingNormal}>{section.heading[0]}</Text>
            <Text style={styles.sectionHeadingAccent}>{section.heading[1]}</Text>
          </Text>
          {section.body.map((para, i) => (
            <Text key={i} style={styles.body}>{para}</Text>
          ))}
        </View>
      ))}

      <View style={styles.closingBox}>
        <Text style={styles.closingMain}>We do not simply search; we trace.</Text>
        <Text style={styles.closingAccent}>Relentless in pursuit. Silent in execution.</Text>
      </View>

      <Pressable
        style={({ pressed }) => [styles.ctaButton, pressed && styles.ctaPressed]}
        onPress={handleContact}
      >
        <Feather name="mail" size={14} color={colors.accentForeground} />
        <Text style={styles.ctaText}>INITIATE CONTACT</Text>
      </Pressable>
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
      marginBottom: 40,
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
      fontSize: 40,
      letterSpacing: 3,
      color: colors.foreground,
      lineHeight: 46,
      marginBottom: 16,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginBottom: 16,
    },
    subtitle: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      color: colors.mutedForeground,
      lineHeight: 22,
    },
    section: {
      marginBottom: 32,
      paddingBottom: 32,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    sectionHeading: {
      fontSize: 26,
      letterSpacing: 2,
      marginBottom: 16,
      lineHeight: 32,
    },
    sectionHeadingNormal: {
      fontFamily: "Inter_700Bold",
      color: colors.foreground,
    },
    sectionHeadingAccent: {
      fontFamily: "Inter_700Bold",
      color: colors.accent,
    },
    body: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      color: colors.mutedForeground,
      lineHeight: 22,
      marginBottom: 12,
    },
    closingBox: {
      borderWidth: 1,
      borderColor: colors.accent + "40",
      backgroundColor: colors.accent + "08",
      padding: 20,
      marginBottom: 24,
      gap: 10,
    },
    closingMain: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 16,
      color: colors.foreground,
      lineHeight: 24,
    },
    closingAccent: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      color: colors.accent,
      letterSpacing: 1,
    },
    ctaButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      backgroundColor: colors.accent,
      paddingVertical: 16,
    },
    ctaPressed: {
      opacity: 0.8,
    },
    ctaText: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      letterSpacing: 2,
      color: colors.accentForeground,
    },
  });
}
