import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { Linking } from 'react-native';
import { Pressable } from 'react-native';

export default function HomeScreen() {
  const [selectedStar, setSelectedStar] = useState(0);

// Remplace ce lien par ton Google Form
const googleForm ="https://forms.gle/1riNSeEoALEbKzLb8";

const ouvrirFormulaire = (note: number) => {
  setSelectedStar(note);

  setTimeout(() => {
    Linking.openURL(googleForm);
  }, 180);
};

  return (
        <ScrollView
  style={styles.container}
  contentContainerStyle={styles.content}
>

      <ImageBackground
  source={require('../../assets/images/accueil/fond-createlier.jpg')}
  style={styles.heroBanner}
>

  <Image
    source={require('../../assets/images/accueil/logo.png')}
    style={styles.logo}
  />

  <Link href="/pourqui" style={styles.buttonBlue}>
    <ThemedText style={styles.buttonText}>
      Pour qui ?
    </ThemedText>
  </Link>

  <Link href="/inscription" style={styles.buttonGreen}>
    <ThemedText style={styles.buttonText}>
      S'inscrire
    </ThemedText>
  </Link>

</ImageBackground>

<Image
  source={require('../../assets/images/accueil/bienvenue.jpg')}
  style={styles.bannerLarge}
/>

<ImageBackground
  source={require('../../assets/images/accueil/college.jpg')}
  style={styles.bannerCollege}
>

  <ThemedText style={styles.bannerText}>
    Bienvenue sur l'application du Créa'telier créé par Axel. Ici, vous pouvez trouver tout les activités proposées au collège, ainsi que la possibilité de créer des objets chez vous en disposant d'un accompagnement personalisé avec les formateurs.
  </ThemedText>

</ImageBackground>

<View style={styles.visioBanner}>

  <ThemedText style={styles.visioText}>
    Besoin d'aide ou envie de poser une question? Je peux vous accompagner en visio. Il vous suffit juste de cliquer sur le bouton ci dessoous:
  </ThemedText>
  
  <Link href="/formulaire-visio" style={styles.buttonOrange}>
  <ThemedText style={styles.buttonText}>
    📝 Me contacter
  </ThemedText>
 </Link>

</View>

<Link href="/jeu-concours" asChild>

  <Pressable>

    <ImageBackground
      source={require('../../assets/images/accueil/jeu-concours.jpg')}
      style={styles.contestBanner}
    >

      <ThemedText style={styles.contestTitle}>
        🎁 Jeu Concours
      </ThemedText>

    </ImageBackground>

  </Pressable>

</Link>

<Link href="/jeu-concours" style={styles.contestButton}>
  <ThemedText style={styles.contestButtonText}>
    🏆 Découvrir le concours
  </ThemedText>
</Link>

<ImageBackground
  source={require('../../assets/images/accueil/yeux.png')}
  style={styles.summaryBanner}
>

  <Link href="/sommaire" style={styles.buttonBlue}>
    <ThemedText style={styles.buttonText}>
      Accéder au sommaire
    </ThemedText>
  </Link>

  <Link href="/histoire" style={styles.buttonGreen}>
    <ThemedText style={styles.buttonText}>
      Mon histoire
    </ThemedText>
  </Link>

  <ThemedText style={styles.smallText}>
    N'hésitez pas à vous inscrire et à en parler autour de vous!!!
  </ThemedText>

</ImageBackground>

<ImageBackground
  source={require('../../assets/images/accueil/yeux.png')}
  style={styles.posterBanner}
>

  <Image
    source={require('../../assets/images/accueil/affiche-createlier.jpg')}
    style={styles.poster}
  />

</ImageBackground>

<View style={styles.ratingContainer}>

  <Text style={styles.ratingTitle}>
    ⭐ Votre avis sur l'application nous intéresse
  </Text>

  <Text style={styles.ratingText}>
    Merci d'utiliser Créa'telier !
  </Text>

  <Text style={styles.ratingText}>
    Appuie sur le nombre d'étoiles correspondant à ton avis.
  </Text>

  <View style={styles.starsRow}>

    {[1, 2, 3, 4, 5].map((star) => (

      <TouchableOpacity
        key={star}
        onPress={() => ouvrirFormulaire(star)}
      >

        <Text
          style={[
            styles.star,
            selectedStar >= star && styles.starSelected,
          ]}
        >
          ⭐
        </Text>

      </TouchableOpacity>

    ))}

  </View>

</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F7FF',
  },

  title: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 40,
  },

  heroBanner: {
  height: 500,
  justifyContent: 'center',
  alignItems: 'center',
},

bannerLarge: {
  width: '100%',
  height: 250,
  resizeMode: 'cover',
},

bannerCollege: {
  height: 180,
  justifyContent: 'center',
  padding: 20,
},

visioBanner: {
  backgroundColor: '#19DDE3',
  padding: 30,
  alignItems: 'center',
},

contestBanner: {
  height: 220,
  justifyContent: 'center',
  alignItems: 'center',
},

summaryBanner: {
  padding: 30,
  minHeight: 300,
  justifyContent: 'center',
},

posterBanner: {
  padding: 20,
  alignItems: 'center',
},

poster: {
  width: '100%',
  height: 500,
  resizeMode: 'contain',
},

ratingContainer: {
  margin: 20,
  padding: 25,
  backgroundColor: '#FFFFFF',
  borderRadius: 25,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 4,
  },

  elevation: 6,
},

ratingTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
},

ratingText: {
  fontSize: 17,
  textAlign: 'center',
  marginBottom: 8,
},

starsRow: {
  flexDirection: 'row',
  marginTop: 10,
},

star: {
  fontSize: 48,
  marginHorizontal: 6,
},

starSelected: {
  transform: [{ scale: 1.25 }],
},

logo: {
  width: 180,
  height: 180,
  marginBottom: 30,
},

buttonBlue: {
  backgroundColor: '#2196F3',
  padding: 15,
  borderRadius: 15,
  marginBottom: 15,
  width: 250,
},

buttonGreen: {
  backgroundColor: '#4CAF50',
  padding: 15,
  borderRadius: 15,
  marginBottom: 15,
  width: 250,
},

buttonText: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 18,
},

bannerText: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
},

visioText: {
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
},

contestTitle: {
  color: '#000000',
  fontSize: 32,
  fontWeight: 'bold',
},

smallText: {
  marginTop: 20,
  fontSize: 16,
  textAlign: 'center',
},

contestButton: {
  backgroundColor: '#FF9800',
  marginHorizontal: 20,
  marginTop: 15,
  marginBottom: 25,
  paddingVertical: 16,
  borderRadius: 20,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 6,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 4,
},

contestButtonText: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},

buttonOrange: {
  backgroundColor: '#FF9800',
  padding: 15,
  borderRadius: 15,
  marginTop: 20,
  width: 250,
  alignSelf: 'center',
},

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
  },

  secondaryButton: {
    backgroundColor: '#4CAF50',
  },

  content: {
  padding: 20,
},

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});