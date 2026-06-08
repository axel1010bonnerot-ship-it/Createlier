import { View, Text, StyleSheet } from 'react-native';

export default function Monde1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monde Créatif 🎨</Text>

      <Text style={styles.text}>
        Bienvenue dans le monde créatif !
        Ici tu peux dessiner, imaginer et créer librement.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});