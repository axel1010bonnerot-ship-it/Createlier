import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';

import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';

const mondes = [
  {
    id: 0,
    emoji: '📚',
    titre: 'Je veux connaître les bases de cet atelier!',
    image: require('../assets/images/sommaire/monde0.jpg'),
  },
  {
    id: 1,
    emoji: '🧸',
    titre: 'Commençons par nos premiers objets',
    image: require('../assets/images/sommaire/monde1.jpg'),
  },
  {
    id: 2,
    emoji: '🚗',
    titre: 'Des véhicules de tous les types',
    image: require('../assets/images/sommaire/monde2.jpg'),
  },
  {
    id: 3,
    emoji: '🌸',
    titre: 'Des fleurs de partout !',
    image: require('../assets/images/sommaire/monde3.jpg'),
  },
  {
    id: 4,
    emoji: '🦁',
    titre: 'Les animaux du monde',
    image: require('../assets/images/sommaire/monde4.jpg'),
  },
  {
    id: 5,
    emoji: '🏛️',
    titre: 'Les monuments historiques',
    image: require('../assets/images/sommaire/monde5.jpg'),
  },
  {
    id: 6,
    emoji: '🐬',
    titre: 'Le domaine des océans et des mers',
    image: require('../assets/images/sommaire/monde6.jpg'),
  },
  {
    id: 7,
    emoji: '🚀',
    titre: "Un voyage à travers l'Univers",
    image: require('../assets/images/sommaire/monde7.png'),
  },
  {
    id: 8,
    emoji: '🔬',
    titre: 'Monde scientifique',
    image: require('../assets/images/sommaire/monde8.png'),
  },
  {
    id: 9,
    emoji: '🍎',
    titre: 'Les fruits et légumes',
    image: require('../assets/images/sommaire/monde9.png'),
  },
  {
    id: 10,
    emoji: '🎵',
    titre: 'Les instruments de musique',
    image: require('../assets/images/sommaire/monde10.png'),
  },
  {
    id: 11,
    emoji: '🍳',
    titre: 'Dans la cuisine',
    image: require('../assets/images/sommaire/monde11.png'),
  },
  {
    id: 12,
    emoji: '🌻',
    titre: 'Entrez dans mon jardin merveilleux !',
    image: require('../assets/images/sommaire/monde12.png'),
  },
  {
    id: 13,
    emoji: '🎬',
    titre: 'Le cinéma fait son show !',
    image: require('../assets/images/sommaire/monde13.png'),
  },
  {
    id: 14,
    emoji: '👑',
    titre: 'Entrez dans mon château royal !',
    image: require('../assets/images/sommaire/monde14.png'),
  },
];

export default function Sommaire() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ThemedText style={styles.title}>
        🌟 Les Mondes Créa'telier 🌟
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Choisis ton univers préféré
      </ThemedText>

      {mondes.map((monde) => (
        <Link
          key={monde.id}
          href={`/monde${monde.id}`}
          asChild
        >
          <TouchableOpacity style={styles.card}>
  <ImageBackground
    source={monde.image}
    style={styles.image}
    imageStyle={{ borderRadius: 20 }}
  >
    <View style={styles.overlay}>
      <ThemedText style={styles.cardTitle}>
        {monde.emoji} Monde {monde.id}
      </ThemedText>

      <ThemedText style={styles.cardText}>
        {monde.titre}
      </ThemedText>
    </View>
  </ImageBackground>
</TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#E8F7FF',
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subtitle: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 18,
  },

  card: {
    marginBottom: 15,
  },

  image: {
  height: 180,
  justifyContent: 'flex-end',
  padding: 20,
},

  overlay: {
  flex: 1,
  justifyContent: 'flex-end',
  backgroundColor: 'rgba(0,0,0,0.35)',
  borderRadius: 20,
  padding: 20,
},

  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  cardText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
});