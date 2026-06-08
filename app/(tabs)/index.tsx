import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>

      <Image
        source={require('../../assets/images/logo-createlier.jpg')}
        style={styles.logo}
        contentFit="contain"
      />

      <ThemedText style={styles.title}>
        Créa'telier
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        Viens créer, apprendre et t'amuser !
      </ThemedText>

      <Link href="/inscription" style={styles.button}>
        <ThemedText style={styles.buttonText}>
          S'inscrire
        </ThemedText>
      </Link>

      <Link
        href="/sommaire"
        style={[styles.button, styles.secondaryButton]}
      >
        <ThemedText style={styles.buttonText}>
          Entrer dans l'aventure 🌟
        </ThemedText>
      </Link>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E8F7FF',
  },

  logo: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginBottom: 20,
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

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});