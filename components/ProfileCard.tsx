import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

type Props = {
  prenom: string;
  nom: string;
  email: string;
  classe: string;
  points: number;
  niveau: string;
};

export default function ProfileCard({
  prenom,
  nom,
  email,
  classe,
  points,
  niveau,
}: Props) {
  return (
    <View style={styles.card}>

      <View style={styles.avatar}>

        <Text style={styles.avatarText}>
          {prenom.charAt(0).toUpperCase()}
        </Text>

      </View>

      <Text style={styles.name}>
        {prenom} {nom}
      </Text>

      <Text style={styles.info}>
        📧 {email}
      </Text>

      <Text style={styles.info}>
        🏫 {classe}
      </Text>

      <View style={styles.bottom}>

        <View>

          <Text style={styles.label}>
            Points
          </Text>

          <Text style={styles.value}>
            ⭐ {points}
          </Text>

        </View>

        <View>

          <Text style={styles.label}>
            Niveau
          </Text>

          <Text style={styles.value}>
            {niveau}
          </Text>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  card:{

    backgroundColor:COLORS.premiumCard,

    borderRadius:25,

    padding:25,

    marginBottom:25,

  },

  avatar:{

    width:90,

    height:90,

    borderRadius:45,

    backgroundColor:COLORS.premiumLight,

    justifyContent:"center",

    alignItems:"center",

    alignSelf:"center",

    marginBottom:20,

  },

  avatarText:{

    fontSize:42,

    color:"white",

    fontWeight:"bold",

  },

  name:{

    color:"white",

    fontSize:26,

    fontWeight:"bold",

    textAlign:"center",

  },

  info:{

    color:"white",

    textAlign:"center",

    marginTop:5,

    fontSize:16,

  },

  bottom:{

    flexDirection:"row",

    justifyContent:"space-between",

    marginTop:25,

  },

  label:{

    color:"white",

    opacity:0.8,

  },

  value:{

    color:"white",

    fontWeight:"bold",

    fontSize:20,

    marginTop:5,

  }

});