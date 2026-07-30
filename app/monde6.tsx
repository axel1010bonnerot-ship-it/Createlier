import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde6() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde6/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde6/océan.jpg')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 6 : Le domaine des océans et des mers
        </Text>
      </View>

      {/* ACTIVITÉ INDIVIDUELLE */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Créez chacun un objet sur la mer, puis créer ensemble un plus gros objet.
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde6/boussole.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Créez une ancre ou une boussole ou un coquillage. Choisissez la couleur et créez-le!
          </Text>
        </View>
      </View>

      {/* ACTIVITÉS COMMUNES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Créez ensemble un objet de votre choix, choisissez la taille, la couleur, les motifs. Ci-dessous, vous pouvez trouver des exemples, mais bien sûr vous pouvez faire un autre objet, tant que cela se réfère à ce monde.
        </Text>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde6/phare.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Un magnifique phare qui éclairera tous les navires.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde6/bateaux.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Créez un bateau à voile, un cargo, un bateau de croisière etc... 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde6/carrelets.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Créez un carrelet, et pêchez plein de poissons, de crustacés! 
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