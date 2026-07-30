import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

type Props = {

  title:string;

  onPress:()=>void;

};

export default function PrimaryButton({
  title,
  onPress
}:Props){

return(

<Pressable
style={styles.button}
onPress={onPress}
>

<Text style={styles.text}>

{title}

</Text>

</Pressable>

);

}

const styles=StyleSheet.create({

button: {
  backgroundColor: COLORS.primary,
  padding: 16,
  borderRadius: 18,
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 8,
  elevation: 4,
},

text: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
}
});