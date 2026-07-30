import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde0r() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde0/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde0/commencement.jpg')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 0 : Les bases de cet atelier
        </Text>
      </View>

      {/* ACTIVITÉ INDIVIDUELLE */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Activité 1: Tourne autour de moi!
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde0/activité1.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Apprendre à faire tourner un objet sur lui même.
            Pendant cette activité, vous allez apprendre à faire tourner un objet sur lui même comme une porte.

En classe, je vous apprendrai comment y parvenir.

Puis, je vous expliquerai quelles sont les différentes utilisations possibles grâce à cette méthode.

Enfin, ceci est une technique, donc je ne vous ferai pas faire d'objets, mais juste une petite représentation de cette technique.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Activité 2: Mon premier pliage d'objet.
        </Text>
      </View>

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde0/activité2.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Apprendre à plier un objet. Dans cette activité, vous n'allez toujours pas créer un objet. En effet,  je vais vous apprendre à plier des objets comme cette table pliante, grâce à la technique expliquée à l'oral. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Activité 3: Ils s'incrustent!
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde0/activité3.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Ils s'incrustent!

Créer un morceau du bonhomme en baton. Cela vous permettra de connaître la technique qui permet de faire rentrer un tube dans un autre.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Activité 4: Apprendre à faire un triangle avec des tubes.
        </Text>
      </View>

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde0/activité4.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Dans cette activité, vous allez apprendre à créer un socle en tube de papier en forme de triangle.
          </Text>
        </View>
      </View>
      
      {/* ACTIVITÉ COMMUNE 4 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Activité 5: Apprendre à faire un cercle avec des tubes.
        </Text>
      </View>

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde0/activité5.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Dans cette activité, vous allez apprendre à créer un socle en tube de papier en forme de cercle.
          </Text>
        </View>
      </View>

<View style={styles.backButtonContainer}>
  <Link href="/sommaire">
    <Text style={styles.backButton}>
      🏠 Retour au sommaire
    </Text>
  </Link>
</View>

</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  heroImage: {
  width: '100%',
  height: 220,
  resizeMode: 'cover',
},

smallBanner: {
  width: '100%',
  height: 140,
  resizeMode: 'cover',
},

  titleContainer: {
    backgroundColor: '#19DDE3',
    padding: 20,
  },

  worldTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  sectionHeader: {
    backgroundColor: '#FF0000',
    padding: 20,
  },

  sectionTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },

  activityBlockGreen: {
  flexDirection: 'column',
  backgroundColor: '#00FF00',
  padding: 20,
  alignItems: 'center',
},

activityBlockBlue: {
  flexDirection: 'column',
  backgroundColor: '#19DDE3',
  padding: 20,
  alignItems: 'center',
},

  activityImage: {
  width: '100%',
  height: 280,
  resizeMode: 'contain',
  marginBottom: 20,
},


  textContainer: {
  width: '100%',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 15,

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 3,
},

backButtonContainer: {
  paddingVertical: 20,
  backgroundColor: '#ffffff',
},

  activityText: {
  fontSize: 16,
  lineHeight: 28,
  textAlign: 'left',
},
});