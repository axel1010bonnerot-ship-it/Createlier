import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { THEME } from "@/theme/theme";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export default function CreaCard({
  children,
  style,
}: Props) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.colors.card,

    borderRadius: THEME.radius.lg,

    padding: THEME.spacing.lg,

    marginBottom: THEME.spacing.lg,

    ...THEME.shadow.card,
  },
});