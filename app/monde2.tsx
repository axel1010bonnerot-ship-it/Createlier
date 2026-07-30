import React from 'react';
import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default function Monde2() {
  return (
    <ScrollView style={styles.container}>

  {/* GRAND BANDEAU DU MONDE */}

  <Image
    source={require('../assets/images/mondes/monde2/arrière-plan-createlier.jpg')}
    style={styles.heroImage}
  />

  {/* PETITE BANNIÈRE */}

  <Image
    source={require('../assets/images/mondes/monde2/commencement.jpg')}
    style={styles.smallBanner}
  />

  {/* TITRE DU MONDE */}
      <View style={styles.titleContainer}>
        <Text style={styles.worldTitle}>
          Monde 2 : Des véhicules de tous les types!
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
          source={require('../assets/images/mondes/monde2/volant.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Créez chacun un volant d'un véhicule quelconque il peut être réel ou inventé.
          </Text>
        </View>
      </View>

      {/* ACTIVITÉS COMMUNES */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Choisissez l'objet collectif que vous souhaitez créer parmi ceux proposés
        </Text>
      </View>

      {/* ACTIVITÉ COMMUNE 1 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/tank.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Partez à l'assaut du combat avec ce char que vous allez fabriquez. Faites tourner ses chenilles pour le faire avancer, ou encore faîtes pivoter le canon dans tous les sens!

Si ceci vous plaît, alors faîtes le ensemble
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 2 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/voiture.png')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
            Embarquez dans la voiture de vos rêves! En construisant une voiture inventée(concept car ou pas) ou réel, n'oubliez pas de faire tourner les roues pour avancer ainsi que le volant. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 3 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/marchandises.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Transférer des marchandises d'un bout à l'autre du pays en conduisant un camion. 
          </Text>
        </View>
      </View>
      
      {/* ACTIVITÉ COMMUNE 4 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/pompier.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Sauvez des vies en créant un camion de pompier!

N'oubliez d'allumer les girophares avant de vous engagez sur la route! 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 5 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/bateau.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Voyagez sur la mer ou commencez une vie de marin en contruisant un bateau de plaisance ou de pêche 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 6 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/avion.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Voyagez dans le ciel grâce à votre avion. Embarquez des passagers ou pas et allez où vous voulez 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 7 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/fusée.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Partez à la conquête de l'espace dans votre fusée. Visitez des exoplanètes et découvrez de nouveaux paysages. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 8 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/hélicoptère.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Construisez un magnifique hélicoptère en papier. Allumez les moteurs et accomplissez de superbes missions !!! 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 9 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/moto.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Roulez avec cette superbe moto éléctrique ou termique, il y en a pour tous les goûts. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 10 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/train.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Voyagez entre les villes et villages à bord de votre train. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 11 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/car.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Embarquez du monde et parcourez de longues distances à travers le pays ou l'Europe. 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 12 */}

      <View style={styles.activityBlockBlue}>
        <Image
          source={require('../assets/images/mondes/monde2/marin.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Explorez les fonds marins ou espionnez vos ennemies, en tout cas attention à la pression sous-marine! 
          </Text>
        </View>
      </View>

      {/* ACTIVITÉ COMMUNE 13 */}

      <View style={styles.activityBlockGreen}>
        <Image
          source={require('../assets/images/mondes/monde2/moto.jpg')}
          style={styles.activityImage}
        />

        <View style={styles.textContainer}>
          <Text style={styles.activityText}>
           Parcourez votre ville ou votre village et sillonez les petits chemins pour découvrir de nouveaux paysages. 
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