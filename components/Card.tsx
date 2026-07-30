import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {

  return (

    <View style={styles.card}>

      {children}

    </View>

  );

}

const styles = StyleSheet.create({

  card: {
  backgroundColor: COLORS.card,
  borderRadius: 20,
  padding: 18,
  marginBottom: 15,
  elevation: 5,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 10,
}

});