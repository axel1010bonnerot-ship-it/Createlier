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
            Comment s'inscrire?
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              lineHeight: 30,
            }}
          >
            Vous voulez créer des objets en papier dans une bonne ambiance? Alors inscrivez vous auprès des élèves ou auprès de Mme Schwartzenberg professeure d'histoire géographie ou bien alors, envoyer moi un mail à createlier.viencreeravecnous@gmail.com

Le nombre de places est illimité alors profitez en, car de nombreuses récompenses en produit Créa'telier sont offert tout au long de l'année!

          </Text>

        </View>

      </ScrollView>

    </CreaScreen>

  );

}