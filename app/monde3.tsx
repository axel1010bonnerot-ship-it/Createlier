import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde3() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde3/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde3/commencement.jpg')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 3 : Des fleurs de partout!
        </Text>
      </View>

      {/* ACTIVITÉ INDIVIDUELLE */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Créer un objet individuel
        </Text>
      </View>

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde3/partout.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Créez une fleur de votre choix
Cela peut être une rose, une jonquille, une tullipe, etc... Ou même, inventez en une. Et, bien sûr, choisissez la couleur que vous voulez!
          </Text>
        </View>
      </View>

      {/* ACTIVITÉS COMMUNES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Choisissez l'objet collectif que vous souhaitez créer ensemble
        </Text>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde3/vase.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Un magnifique bouquet de fleurs
Créer chacun une fleur de votre choix, faites ensemble un vase et regroupez ensuite les fleurs dans le vase.

Si ceci vous plaît, alors faîtes le ensemble
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde3/parterre.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Un parterre floral
Créez des fleurs simples comme des marguerites et assembler les dans une grande boite, pour imiter la terre, utilisez des feuilles marrons.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde3/arcade.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Créez une arcade
Créez chacun des rose ou tout autre fleur destiné à cela et fabriquez l'arcade pour ensuite attachez l'ensemble de fleur à l'arcade. 
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