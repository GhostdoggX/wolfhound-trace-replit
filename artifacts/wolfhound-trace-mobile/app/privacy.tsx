import { router } from "expo-router";
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

const POLICY_SECTIONS = [
  ["1. Scope and Controller", "This Privacy Policy explains how Wolfhound Trace processes personal data in connection with its website, client communications, and professional analytic and intelligence services. Wolfhound Trace acts as a data controller with respect to personal data processed for its own business operations."],
  ["2. Legal Basis for Processing", "We process personal data only where we have a valid legal basis to do so. This may include performance of a contract, compliance with legal obligations, protection of vital interests, legitimate interests, or consent where required by law."],
  ["3. Categories of Data We May Process", "Depending on the nature of the engagement, we may process identification data, contact details, professional information, communication records, technical website data, and other information necessary to perform due diligence, analytic, or intelligence-related work."],
  ["4. Purposes of Processing", "We process personal data for the purpose of providing our services, responding to enquiries, managing client relationships, conducting due diligence, supporting analytic engagements, maintaining business records, and complying with legal and regulatory obligations."],
  ["5. Data Sharing and Third Parties", "We may disclose personal data where necessary to trusted service providers, professional advisers, authorities, or other third parties involved in the delivery of our services, provided that appropriate confidentiality and data protection safeguards are in place."],
  ["6. International Transfers", "Where personal data is transferred outside the EEA or Switzerland, we take appropriate measures to ensure that the transfer is carried out in accordance with applicable data protection requirements."],
  ["7. Data Retention", "We retain personal data only for as long as necessary for the purposes for which it was collected. When data is no longer required, it is securely deleted or anonymised in accordance with our retention practices."],
  ["8. Data Security", "We implement highest industry standard encryption protocols for data at rest and in transit. Our infrastructure is designed with strict access controls, ensuring that sensitive intelligence is only accessible to cleared personnel directly involved in the specific operation."],
  ["9. Your Rights", "Subject to applicable law, you may have rights to access, rectify, erase, restrict, object to processing, and request data portability. In some cases, these rights may be limited by law, particularly where disclosure would affect legal privileges, ongoing proceedings, or our legal obligations."],
  ["10. Cookies and Analytics", "Our website may use necessary cookies and limited analytics or security-related tools to operate the site, maintain functionality, and understand usage patterns."],
  ["11. Contact and Data Protection Requests", "If you have questions about this Privacy Policy or wish to exercise your rights, you may contact us at wolfhound_trace@pm.me. We will respond to legitimate requests in accordance with applicable law."],
  ["12. Changes to This Policy", "We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. The most recent version will always be published on this page."],
];

export default function PrivacyScreen() {
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
      <View style={styles.pageHeader}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>← BACK</Text>
        </Pressable>
        <Text style={styles.eyebrow}>LEGAL</Text>
        <Text style={styles.title}>PRIVACY POLICY</Text>
        <Text style={styles.lastUpdated}>Last updated: April 2026</Text>
        <View style={styles.divider} />
      </View>

      {POLICY_SECTIONS.map(([heading, body]) => (
        <View key={heading} style={styles.section}>
          <Text style={styles.sectionHeading}>{heading}</Text>
          <Text style={styles.sectionBody}>{body}</Text>
        </View>
      ))}

      <View style={styles.disclaimerBox}>
        <Text style={styles.disclaimerHeading}>Legal Disclaimer</Text>
        <Text style={styles.disclaimerBody}>
          Wolfhound Trace provides professional open-source intelligence (OSINT),
          digital intelligence analysis, and due diligence services. All analytic
          work is conducted in compliance with applicable laws and regulations,
          including GDPR and data protection standards.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Wolfhound Trace. All rights reserved.</Text>
        <Text style={styles.footerSub}>Professional OSINT and intelligence services worldwide</Text>
        <Pressable onPress={() => Linking.openURL("mailto:wolfhound_trace@pm.me")}>
          <Text style={styles.footerEmail}>wolfhound_trace@pm.me</Text>
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
      paddingTop: topPad + 16,
      paddingBottom: bottomPad + 40,
      paddingHorizontal: 24,
    },
    pageHeader: {
      marginBottom: 32,
    },
    backButton: {
      marginBottom: 20,
    },
    backText: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 3,
      color: colors.accent,
    },
    eyebrow: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      letterSpacing: 4,
      color: colors.accent,
      marginBottom: 8,
    },
    title: {
      fontFamily: "Inter_700Bold",
      fontSize: 36,
      letterSpacing: 3,
      color: colors.foreground,
      marginBottom: 8,
    },
    lastUpdated: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.mutedForeground,
      marginBottom: 16,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
    },
    section: {
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      paddingBottom: 20,
      marginBottom: 20,
    },
    sectionHeading: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 14,
      color: colors.foreground,
      letterSpacing: 1,
      marginBottom: 10,
    },
    sectionBody: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      color: colors.mutedForeground,
      lineHeight: 20,
    },
    disclaimerBox: {
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 20,
      marginBottom: 32,
    },
    disclaimerHeading: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 13,
      color: colors.foreground,
      letterSpacing: 1,
      marginBottom: 10,
    },
    disclaimerBody: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      color: colors.mutedForeground,
      lineHeight: 18,
    },
    footer: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingTop: 20,
      gap: 6,
    },
    footerText: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.mutedForeground,
      letterSpacing: 1,
    },
    footerSub: {
      fontFamily: "Inter_400Regular",
      fontSize: 9,
      color: colors.mutedForeground + "80",
    },
    footerEmail: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      color: colors.accent,
      letterSpacing: 1,
    },
  });
}
