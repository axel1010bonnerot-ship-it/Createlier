import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
};

export default function Screen({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
  flex: 1,
  backgroundColor: COLORS.background,
  padding: 18,
},

});