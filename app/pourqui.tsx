import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import CreaScreen from "@/components/CreaScreen";

export default function Presentation() {

  return (

    <CreaScreen>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Image
          source={require("@/assets/images/banniere.jpg")}
          style={{
            width: "100%",
            height: 230,
            borderRadius: 20,
            marginBottom: 20,
          }}
          resizeMode="cover"
        />

        <View
          style={{
            backgroundColor: "#2196F3",
            borderRadius: 20,
            padding: 24,
          }}
        >

          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Pour qui?
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              lineHeight: 30,
            }}
          >
            Vous voulez vous inscrire au Créa'telier mais vous hésitez encore car vous ne savez pas si c'est pour vous? Alors, n'attendez plus car cet atelier est ouvert à tous les élèves et personelles du collèges. De plus, ce n'est pas la peine d'être bon en arts plastiques car cela n'a rien avoir, donc n'hésitez plus! 

          </Text>

        </View>

      </ScrollView>

    </CreaScreen>

  );

}