import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde4() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde4/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde4/commencement.jpg')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 4 : Créer différents animaux 

ou même inventez en un.
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
          source={require('../assets/images/mondes/monde4/commencement.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Un animal de votre choix
Faites chacun ou par deux ou trois votre animal ou oiseau.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉS COMMUNES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Assemblez vos animaux en choisissant un de ses modèles:
        </Text>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde4/zoo.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Faites le zoo de vos rêves en construisant chacun l'enclos correspondant à l'animal créé. Ensuite, assemblez vos enclos et reliez les en les entourant de palissade ou tout autre chose.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde4/dome.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Créer un dôme en vous inspirant de celui de Beauval. Pour créer le dôme contactez moi pour que je puisse vous donnez mes conseils afin qu'il soit transparent. Dans ce dôme, créer un décor pour créer une atmosphère générale à tous les animaux.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde4/volière.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
Créer une volière en vous inspirant de celle de Beauval. Pour se faire, il faut que vous choisissez tous de créer des oiseaux. Créer donc un filet et des perchoires pour les oiseaux 
          </Text>
        </View>
      </View>
     
     {/* ACTIVITÉ COMMUNE 4 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde4/aquarium.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
          Créer chacun un animal marin et créer des décors pour donner l'illusion de la vraie vie sous-marine. Vous pouvez vous inspirez des aquariums réels.
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