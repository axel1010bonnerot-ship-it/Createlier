import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde8() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde8/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde8/commencement.png')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 8 : Monde scientifique
        </Text>
      </View>

      {/* ACTIVITÉ INDIVIDUELLE 1 */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Choisissez une activité individuelle.
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde8/cellule.jpg')}
          style={styles.activityImage}
        />
        
        <Image
          source={require('../assets/images/mondes/monde8/explications.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Pour réaliser une cellule, vous devez rendre visible le noyau, la membrane, le cytoplasme. Bien sûr, vous pouvez rendre tout cela artistique en modifiant la forme globale, les couleurs...
          </Text>
        </View>
      </View>
      
      {/* ACTIVITÉ INDIVIDUELLE 2 */}

        <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde8/atome.jpg')}
          style={styles.activityImage}
        />
        
        <Image
          source={require('../assets/images/mondes/monde8/axplications.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Vous pouvez créer l'atome en montrant par exemple les électrons, les protons, les neutrons, ou même encore plus précis en ajoutant les quarks et les gluons par exemple.
          </Text>
        </View>
      </View>
      
      {/* ACTIVITÉ INDIVIDUELLE 3 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde8/molécule.jpg')}
          style={styles.activityImage}
        />
        
        <Image
          source={require('../assets/images/mondes/monde8/mxplications.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Pour concevoir une molécule, vous devez créer plusieurs atomes avec la précision que vous souhaitez. Vous pouvez bien sûr vous référez à une molécule déjà existante ou en inventer une.          
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
          source={require('../assets/images/mondes/monde8/microscope.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Vous devez tout d'abord choisir le type de microscope (optique, numérique...).
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde8/adn.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Amusez-vous à créer votre ADN, vous pouvez bien sûr le rendre plus artistique avec de différentes couleurs ou même le faire tourner commme un carroussel!
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