import React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { THEME } from "@/theme/theme";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function CreaScreen({
  children,
  style,
}: Props) {
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
  },

  content: {
    padding: THEME.spacing.lg,
    paddingBottom: 40,
  },
});