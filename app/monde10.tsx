import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde10() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde10/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde10/commencement.png')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 10 : Les instruments de musique
        </Text>
      </View>

      {/* ACTIVITÉ INDIVIDUELLE */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
         Activité individuelle 
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde10/émotions.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Portrait musical:
Créez un instrument qui peut être inventé, vous représentant avec vos goûts, vos émotions, couleurs préférés, caractère, etc...
          </Text>
        </View>
      </View>

      {/* ACTIVITÉS COMMUNES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
         Activité commune
        </Text>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde10/mélange.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Mélange d'instruments
Choisissez plusieurs instruments et assemblez les en un même instrument, petit conseil, prenez des instruments qui ne sont pas de la même famille.         
         </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde10/histoire.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Créez un instruments correspondant à la Préhistoire, l'Antiquité, le Moyen-Age, les Temps Moderne, l'Epoque Contemporaine... ou tout autre époque d'un autre pays.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde10/légendaires.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
L'instrument légendaire:
Créez un instrument racontant une courte histoire, légende inventé ou pas.

On peut se demander:

Qui la créé? A quoi sert-il? Quel pouvoir possède t-il?
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