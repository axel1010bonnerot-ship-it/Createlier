import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Inscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
	keyboardType="email-address"
      />

      <Button
  title="Envoyer"
  onPress={() => {
  if (!nom || !email) {
    alert("Remplis tous les champs !");
    return;
  }

  fetch("https://webhook.site/119b02ff-4580-4a6b-a72f-c75a76872f14", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nom: nom,
      email: email
    })
  });

  alert("Données envoyées !");
}}
/>    </View>
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
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});