/* ============================================================
   Créa'telier — Demande de visio
   Écran Expo Router (React Native)

   Emplacement : app/formulaire-visio.tsx
   Accessible via la route /formulaire-visio

   Dépendance à installer :
     npx expo install @react-native-picker/picker

   Ce fichier construit le formulaire avec des composants
   React Native natifs (pas de HTML/CSS), valide les champs,
   puis ouvre Gmail (app si installée, sinon client mail par
   défaut) avec le sujet et le corps déjà rédigés.
   ============================================================ */

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";

// ------------------------------------------------------------
// Adresse email de destination de Créa'telier (à adapter) 
// ------------------------------------------------------------
const DEST_EMAIL = "createlier.vienscreeravecnous@gmail.com";

const JOURS = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const DUREES = ["15 minutes", "30 minutes", "45 minutes", "1 heure", "1h30", "2 heures"];

type Errors = Partial<Record<"nom" | "prenom" | "email" | "jour" | "heure" | "duree" | "motif", boolean>>;

export default function FormulaireVisio() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [jour, setJour] = useState("");
  const [heureDate, setHeureDate] = useState<Date | null>(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const heure = heureDate
    ? `${String(heureDate.getHours()).padStart(2, "0")}:${String(heureDate.getMinutes()).padStart(2, "0")}`
    : "";
  const [duree, setDuree] = useState("");
  const [motif, setMotif] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function clearError(key: keyof Errors) {
    setErrors((prev) => ({ ...prev, [key]: false }));
  }

  function validate(): boolean {
    const newErrors: Errors = {
      nom: !nom.trim(),
      prenom: !prenom.trim(),
      email: !isValidEmail(email.trim()),
      jour: !jour,
      heure: !heureDate,
      duree: !duree,
      motif: !motif.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }

  function buildMessage() {
    const subject = `Demande de visio – ${prenom} ${nom} (${jour} à ${heure})`;
    const body =
`Bonjour,

Je souhaiterais organiser une visio avec vous selon les détails suivants :

Nom : ${nom}
Prénom : ${prenom}
Email : ${email}
Jour souhaité : ${jour}
Heure souhaitée : ${heure}
Durée prévue : ${duree}
Motif : ${motif}

Restant à votre disposition pour convenir d'un créneau,
Cordialement,
${prenom} ${nom}`;
    return { subject, body };
  }

  async function handleSubmit() {
    if (!validate()) {
      Alert.alert(
        "Champs incomplets",
        "Merci de corriger les champs en rouge avant d'envoyer votre demande."
      );
      return;
    }

    const { subject, body } = buildMessage();
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // 1) On tente d'ouvrir directement l'app Gmail (Android & iOS)
    const gmailAppUrl = `googlegmail://co?to=${DEST_EMAIL}&subject=${encodedSubject}&body=${encodedBody}`;
    // 2) Sinon, on retombe sur le client mail par défaut du téléphone
    const mailtoUrl = `mailto:${DEST_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;

    try {
      const canOpenGmailApp = await Linking.canOpenURL(gmailAppUrl);
      if (canOpenGmailApp) {
        await Linking.openURL(gmailAppUrl);
      } else {
        await Linking.openURL(mailtoUrl);
      }
    } catch (err) {
      Alert.alert(
        "Impossible d'ouvrir l'application mail",
        "Vérifiez qu'une application mail (Gmail ou autre) est installée sur votre téléphone."
      );
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: COLORS.paper }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        {/* ===== BANNIÈRE ===== */}
        <LinearGradient
          colors={[COLORS.turquoiseDeep, COLORS.turquoise, "#36D6CC"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.banner}
        >
          <View style={styles.eyebrow}>
            <Text style={styles.eyebrowText}>CRÉA'TELIER</Text>
          </View>
          <Text style={styles.bannerTitle}>Réservez votre visio</Text>
          <Text style={styles.bannerSubtitle}>
            Remplissez ce formulaire : votre application mail s'ouvrira automatiquement avec un message déjà rédigé.
          </Text>
        </LinearGradient>

        {/* ===== CARTE FORMULAIRE ===== */}
        <View style={styles.wrap}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Demande de rendez-vous visio</Text>
            <Text style={styles.cardSubtitle}>Tous les champs marqués d'un astérisque sont obligatoires.</Text>

            <View style={styles.row}>
              <Field label="Nom" required error={errors.nom} style={{ flex: 1 }}>
                <TextInput
                  style={[styles.input, errors.nom && styles.inputError]}
                  placeholder="Dupont"
                  placeholderTextColor="#9DB6B4"
                  value={nom}
                  onChangeText={(v) => { setNom(v); clearError("nom"); }}
                />
              </Field>
              <Field label="Prénom" required error={errors.prenom} style={{ flex: 1 }}>
                <TextInput
                  style={[styles.input, errors.prenom && styles.inputError]}
                  placeholder="Camille"
                  placeholderTextColor="#9DB6B4"
                  value={prenom}
                  onChangeText={(v) => { setPrenom(v); clearError("prenom"); }}
                />
              </Field>
            </View>

            <Field label="Adresse email" required error={errors.email}>
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="camille.dupont@email.com"
                placeholderTextColor="#9DB6B4"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(v) => { setEmail(v); clearError("email"); }}
              />
            </Field>

            <View style={styles.row}>
              <Field label="Jour souhaité" required error={errors.jour} style={{ flex: 1 }}>
                <View style={[styles.pickerWrap, errors.jour && styles.inputError]}>
                  <Picker
                    selectedValue={jour}
                    onValueChange={(v) => { setJour(v); clearError("jour"); }}
                    style={styles.picker}
                  >
                    <Picker.Item label="Choisir un jour" value="" color="#9DB6B4" />
                    {JOURS.map((j) => (
                      <Picker.Item key={j} label={j} value={j} />
                    ))}
                  </Picker>
                </View>
              </Field>

              <Field label="Heure souhaitée" required error={errors.heure} style={{ flex: 1 }}>
                <TouchableOpacity
                  style={[styles.input, styles.timeButton, errors.heure && styles.inputError]}
                  onPress={() => setShowTimePicker(true)}
                  activeOpacity={0.7}
                >
                  <Text style={heure ? styles.timeButtonText : styles.timeButtonPlaceholder}>
                    {heure || "Choisir une heure"}
                  </Text>
                </TouchableOpacity>
                {showTimePicker && (
                  <DateTimePicker
                    value={heureDate || new Date()}
                    mode="time"
                    is24Hour
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                      setShowTimePicker(Platform.OS === "ios"); // reste ouvert sur iOS (spinner), se ferme sur Android
                      if (event.type === "set" && selectedDate) {
                        setHeureDate(selectedDate);
                        clearError("heure");
                      } else if (Platform.OS === "android") {
                        setShowTimePicker(false);
                      }
                    }}
                  />
                )}
              </Field>
            </View>

            <Field label="Durée prévue" required error={errors.duree}>
              <View style={[styles.pickerWrap, errors.duree && styles.inputError]}>
                <Picker
                  selectedValue={duree}
                  onValueChange={(v) => { setDuree(v); clearError("duree"); }}
                  style={styles.picker}
                >
                  <Picker.Item label="Choisir une durée" value="" color="#9DB6B4" />
                  {DUREES.map((d) => (
                    <Picker.Item key={d} label={d} value={d} />
                  ))}
                </Picker>
              </View>
            </Field>

            <Field label="Motif de la visio" required error={errors.motif}>
              <TextInput
                style={[styles.input, styles.textarea, errors.motif && styles.inputError]}
                placeholder="Ex : Présentation d'un projet, échange sur une commande personnalisée, suivi d'atelier..."
                placeholderTextColor="#9DB6B4"
                multiline
                numberOfLines={4}
                value={motif}
                onChangeText={(v) => { setMotif(v); clearError("motif"); }}
              />
            </Field>

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} activeOpacity={0.85}>
              <Text style={styles.submitBtnText}>✉️  Envoyer ma demande par email</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>
          Créa'telier — votre demande sera envoyée depuis votre propre application mail.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ------------------------------------------------------------
// Petit composant utilitaire pour un champ avec label + erreur
// ------------------------------------------------------------
function Field({
  label,
  required,
  error,
  children,
  style,
}: {
  label: string;
  required?: boolean;
  error?: boolean;
  children: React.ReactNode;
  style?: any;
}) {
  return (
    <View style={[styles.field, style]}>
      <Text style={styles.label}>
        {label}
        {required ? <Text style={styles.req}> *</Text> : null}
      </Text>
      {children}
      {error ? <Text style={styles.errorMsg}>Ce champ est requis.</Text> : null}
    </View>
  );
}

// ------------------------------------------------------------
// Couleurs (mêmes tokens que le reste de Créa'telier)
// ------------------------------------------------------------
const COLORS = {
  turquoise: "#0FB5AE",
  turquoiseDark: "#0A8E89",
  turquoiseDeep: "#06504D",
  ink: "#133B3A",
  paper: "#FAFCFB",
  card: "#FFFFFF",
  line: "#DCEAE9",
  error: "#D6453D",
};

const styles = StyleSheet.create({
  banner: {
    paddingTop: 64,
    paddingBottom: 56,
    paddingHorizontal: 24,
    alignItems: "center",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  eyebrow: {
    backgroundColor: "rgba(255,255,255,0.16)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 20,
  },
  eyebrowText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },
  bannerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  bannerSubtitle: {
    color: "rgba(255,255,255,0.92)",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    maxWidth: 340,
  },
  wrap: {
    paddingHorizontal: 20,
    marginTop: -32,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.line,
    padding: 22,
    shadowColor: "#06504D",
    shadowOpacity: 0.12,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.turquoiseDeep,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: "#5C7977",
    marginBottom: 22,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: COLORS.turquoiseDeep,
    marginBottom: 6,
  },
  req: {
    color: COLORS.error,
  },
  input: {
    borderWidth: 1.5,
    borderColor: COLORS.line,
    backgroundColor: "#F8FBFA",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 15,
    color: COLORS.ink,
  },
  textarea: {
    minHeight: 90,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  inputError: {
    borderColor: COLORS.error,
    backgroundColor: "#FDF3F2",
  },
  timeButton: {
    justifyContent: "center",
  },
  timeButtonText: {
    fontSize: 15,
    color: COLORS.ink,
  },
  timeButtonPlaceholder: {
    fontSize: 15,
    color: "#9DB6B4",
  },
  pickerWrap: {
    borderWidth: 1.5,
    borderColor: COLORS.line,
    backgroundColor: "#F8FBFA",
    borderRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
  },
  picker: {
    color: COLORS.ink,
    width: "100%",
  },
  errorMsg: {
    fontSize: 12.5,
    color: COLORS.error,
    marginTop: 5,
  },
  submitBtn: {
    marginTop: 8,
    backgroundColor: COLORS.turquoiseDark,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: COLORS.turquoise,
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  submitBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "#8AA5A3",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
