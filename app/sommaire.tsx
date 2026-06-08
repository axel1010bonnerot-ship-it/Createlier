import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';

const mondes = [
  { id: 1, emoji: '🧸', titre: 'Commençons par nos premiers objets' },
  { id: 2, emoji: '🚗', titre: 'Des véhicules de tous les types' },
  { id: 3, emoji: '🌸', titre: 'Des fleurs de partout !' },
  { id: 4, emoji: '🦁', titre: 'Les animaux du monde' },
  { id: 5, emoji: '🏛️', titre: 'Les monuments historiques' },
  { id: 6, emoji: '🐬', titre: 'Le domaine des océans et des mers' },
  { id: 7, emoji: '🚀', titre: "Un voyage à travers l'Univers" },
  { id: 8, emoji: '🔬', titre: 'Monde scientifique' },
  { id: 9, emoji: '🍎', titre: 'Les fruits et légumes' },
  { id: 10, emoji: '🎵', titre: 'Les instruments de musique' },
  { id: 11, emoji: '🍳', titre: 'Dans la cuisine' },
  { id: 12, emoji: '🌻', titre: 'Entrez dans mon jardin merveilleux !' },
  { id: 13, emoji: '🎬', titre: 'Le cinéma fait son show !' },
  { id: 14, emoji: '👑', titre: 'Entrez dans mon château royal !' },
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
              source={require('../assets/images/fond-monde.jpg')}
              style={styles.image}
              imageStyle={{ borderRadius: 20 }}
            >
              <ThemedText style={styles.cardTitle}>
                {monde.emoji} Monde {monde.id}
              </ThemedText>

              <ThemedText style={styles.cardText}>
                {monde.titre}
              </ThemedText>
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
    height: 120,
    justifyContent: 'center',
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