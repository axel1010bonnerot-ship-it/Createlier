import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";

import CreaScreen from "@/components/CreaScreen";
import CreaCard from "@/components/CreaCard";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import PrimaryButton from "@/components/PrimaryButton";

import { COLORS } from "@/constants/colors";

import { getCompte } from "@/services/api";

import {
  getUserId,
  saveUserId,
  removeUserId,
  getLastLogin,
  saveLastLogin,
} from "@/services/storage";

export default function Compte() {

  //--------------------------------------------------
  // ETATS
  //--------------------------------------------------

  const [loading, setLoading] = useState(true);
  const [compte, setCompte] = useState<any>(null);
  const [id, setId] = useState("");
  const [lastLogin, setLastLogin] = useState<string | null>(null);

  //--------------------------------------------------
  // NIVEAUX
  //--------------------------------------------------

  function getLevel(points: number) {

    if (points < 50)
      return {
        nom: "🌱 Débutant",
        prochain: 50,
      };

    if (points < 150)
      return {
        nom: "🎨 Créatif",
        prochain: 150,
      };

    if (points < 300)
      return {
        nom: "🚀 Explorateur",
        prochain: 300,
      };

    if (points < 500)
      return {
        nom: "🛠 Inventeur",
        prochain: 500,
      };

    return {
      nom: "👑 Maître Créa'telier",
      prochain: null as number | null,
    };
  }

  // Sécurise le cas où compte.points serait manquant ou invalide
  const points = compte && typeof compte.points === "number" ? compte.points : 0;
  const niveau = compte ? getLevel(points) : null;

  //--------------------------------------------------
  // BARRE DE PROGRESSION
  //--------------------------------------------------

  function getProgress() {

    if (!compte || !niveau)
      return 0;

    if (niveau.prochain === null)
      return 100;

    return Math.min(
      (points / niveau.prochain) * 100,
      100
    );
  }

  //--------------------------------------------------
  // TEXTE DE PROGRESSION
  //--------------------------------------------------

  function getProgressText() {

    if (!compte || !niveau)
      return "";

    if (niveau.prochain === null)
      return "👑 Niveau maximum atteint";

    return `${points} / ${niveau.prochain} points`;
  }

  //--------------------------------------------------
  // DATE MEMBRE
  //--------------------------------------------------

  function formatMemberSince(dateString: string) {

    if (!dateString)
      return "-";

    const date = new Date(dateString);

    if (isNaN(date.getTime()))
      return "-";

    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  //--------------------------------------------------
  // ANCIENNETE
  //--------------------------------------------------

  function getAnciennete(dateString: string) {

    if (!dateString)
      return "";

    const debut = new Date(dateString);

    if (isNaN(debut.getTime()))
      return "";

    const aujourd = new Date();

    let mois =
      (aujourd.getFullYear() - debut.getFullYear()) * 12 +
      aujourd.getMonth() -
      debut.getMonth();

    if (mois <= 0)
      return "🌱 Nouveau membre";

    if (mois < 12)
      return `🎉 ${mois} mois d'ancienneté`;

    const ans = Math.floor(mois / 12);
    const reste = mois % 12;

    if (reste === 0)
      return `🏆 ${ans} an${ans > 1 ? "s" : ""} d'ancienneté`;

    return `🏆 ${ans} an${ans > 1 ? "s" : ""} et ${reste} mois`;
  }

  //--------------------------------------------------
  // DERNIERE CONNEXION
  //--------------------------------------------------

  function formatLastLogin(dateString: string | null) {

    if (!dateString)
      return "Première connexion";

    const date = new Date(dateString);

    if (isNaN(date.getTime()))
      return "Première connexion";

    const maintenant = new Date();

    const aujourd = new Date(
      maintenant.getFullYear(),
      maintenant.getMonth(),
      maintenant.getDate()
    );

    const hier = new Date(aujourd);

    hier.setDate(hier.getDate() - 1);

    const connexion = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (connexion.getTime() === aujourd.getTime())
      return `Aujourd'hui à ${heure}`;

    if (connexion.getTime() === hier.getTime())
      return `Hier à ${heure}`;

    return (
      date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }) + ` à ${heure}`
    );
  }

  //--------------------------------------------------
  // COULEUR DERNIERE CONNEXION
  //--------------------------------------------------

  function getLoginColor() {

    if (!lastLogin)
      return "#9E9E9E";

    const texte = formatLastLogin(lastLogin);

    if (texte.startsWith("Aujourd"))
      return "#4CAF50";

    if (texte.startsWith("Hier"))
      return "#FF9800";

    return "#9E9E9E";
  }

  //--------------------------------------------------
  // CHARGEMENT INITIAL
  //--------------------------------------------------

  useEffect(() => {
    verifierCompte();
  }, []);

  //--------------------------------------------------
  // FONCTION COMMUNE DE CHARGEMENT
  // (factorise verifierCompte / enregistrerCompte / actualiser)
  //--------------------------------------------------

  async function chargerCompte(userId: string, showErrorIfMissing: boolean) {

    try {

      const data = await getCompte(userId);

      if (data?.success) {

        setCompte(data);

        const ancienneConnexion = await getLastLogin();

        setLastLogin(ancienneConnexion);

        await saveLastLogin(new Date().toISOString());

        return true;

      }

      if (showErrorIfMissing) {

        Alert.alert(
          "Erreur",
          "Identifiant inconnu."
        );

      }

      return false;

    } catch (error) {

      Alert.alert(
        "Erreur",
        "Impossible de récupérer les informations du compte. Vérifie ta connexion et réessaie."
      );

      return false;

    }

  }

  //--------------------------------------------------
  // VERIFICATION COMPTE (au lancement de l'app)
  //--------------------------------------------------

  async function verifierCompte() {

    const savedId = await getUserId();

    if (!savedId) {

      setLoading(false);
      return;

    }

    await chargerCompte(savedId, false);

    setLoading(false);

  }

  //--------------------------------------------------
  // CONNEXION
  //--------------------------------------------------

  async function enregistrerCompte() {

    if (!id.trim()) {

      Alert.alert(
        "Erreur",
        "Merci de saisir votre identifiant."
      );

      return;

    }

    setLoading(true);

    const ok = await chargerCompte(id, true);

    if (ok) {
      await saveUserId(id);
    }

    setLoading(false);

  }

  //--------------------------------------------------
  // ACTUALISER
  //--------------------------------------------------

  async function actualiser() {

    setLoading(true);

    const savedId = await getUserId();

    if (!savedId) {

      setLoading(false);

      return;

    }

    await chargerCompte(savedId, false);

    setLoading(false);

  }

  //--------------------------------------------------
  // CHANGER DE COMPTE
  //--------------------------------------------------

  async function changerCompte() {

    await removeUserId();

    setCompte(null);

    setId("");

    setLastLogin(null);

  }

  //--------------------------------------------------
  // CHARGEMENT
  //--------------------------------------------------

  if (loading) {

    return (

      <CreaScreen>

        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />

      </CreaScreen>

    );

  }

  //--------------------------------------------------
  // ECRAN DE CONNEXION
  //--------------------------------------------------

  if (!compte) {

    return (

      <CreaScreen>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >

          <Header
            title="Bienvenue 👋"
            subtitle="Connecte-toi à ton espace Créa'telier"
          />

          <CreaCard>

            <Text
              style={{
                fontSize: 16,
                color: "#666",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Saisis ton identifiant pour retrouver ton compte,
              tes points de fidélité et toutes tes informations.
            </Text>

            <TextInput
              value={id}
              onChangeText={setId}
              placeholder="Identifiant"
              keyboardType="numeric"
              placeholderTextColor="#999"
              style={{
                backgroundColor: "#F8F9FB",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 14,
                paddingVertical: 14,
                paddingHorizontal: 16,
                fontSize: 17,
                marginBottom: 20,
              }}
            />

            <PrimaryButton
              title="Se connecter"
              onPress={enregistrerCompte}
            />

          </CreaCard>

        </ScrollView>

      </CreaScreen>

    );

  }

  //--------------------------------------------------
  // TABLEAU DE BORD
  //--------------------------------------------------

  return (

    <CreaScreen>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >

        <Header
          title="Mon espace"
          subtitle={`Bonjour ${compte.prenom} 👋`}
        />

        {/* PROFIL */}
        <ProfileCard
          prenom={compte.prenom}
          nom={compte.nom}
          email={compte.email}
          classe={compte.classe}
          points={points}
          niveau={niveau?.nom}
        />

        {/* POINTS */}
        <CreaCard>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 8,
            }}
          >
            ⭐ Points fidélité
          </Text>

          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {points}
          </Text>

          <Text
            style={{
              color: "#777",
              marginTop: 6,
            }}
          >
            Continue comme ça !
          </Text>

        </CreaCard>

        {/* MEMBRE */}
        <CreaCard>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 8,
            }}
          >
            📅 Membre Créa'telier
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: "#555",
            }}
          >
            Depuis le {formatMemberSince(compte.membreDepuis)}
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: COLORS.primary,
              fontWeight: "600",
            }}
          >
            {getAnciennete(compte.membreDepuis)}
          </Text>

        </CreaCard>

        {/* DERNIÈRE CONNEXION */}
        <CreaCard>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >

            <View
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: getLoginColor(),
                marginRight: 12,
              }}
            />

            <View style={{ flex: 1 }}>

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  marginBottom: 4,
                }}
              >
                🕒 Dernière connexion
              </Text>

              <Text
                style={{
                  color: "#666",
                  fontSize: 16,
                }}
              >
                {formatLastLogin(lastLogin)}
              </Text>

            </View>

          </View>

        </CreaCard>

        {/* NIVEAU */}
        <CreaCard>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 10,
            }}
          >
            🏆 Niveau actuel
          </Text>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {niveau?.nom}
          </Text>

        </CreaCard>

        {/* PROGRESSION */}
        <CreaCard>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 15,
            }}
          >
            📈 Progression
          </Text>

          <View
            style={{
              height: 14,
              backgroundColor: "#E5E7EB",
              borderRadius: 30,
              overflow: "hidden",
            }}
          >

            <View
              style={{
                height: "100%",
                width: `${getProgress()}%`,
                backgroundColor: COLORS.primary,
                borderRadius: 30,
              }}
            />

          </View>

          <Text
            style={{
              marginTop: 12,
              fontWeight: "600",
              color: "#555",
            }}
          >
            {getProgressText()}
          </Text>

          {niveau && niveau.prochain !== null && (

            <Text
              style={{
                marginTop: 8,
                color: "#777",
              }}
            >
              Plus que{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  color: COLORS.primary,
                }}
              >
                {niveau.prochain - points} points
              </Text>{" "}
              avant le niveau suivant.
            </Text>

          )}

          {niveau && niveau.prochain === null && (

            <Text
              style={{
                marginTop: 8,
                color: "#4CAF50",
                fontWeight: "bold",
              }}
            >
              🎉 Félicitations ! Tu as atteint le niveau maximum.
            </Text>

          )}

        </CreaCard>

        {/* BADGE */}
        <CreaCard>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              marginBottom: 15,
            }}
          >
            🏅 Badge obtenu
          </Text>

          <Text
            style={{
              fontSize: 60,
              textAlign: "center",
            }}
          >
            {compte.badge}
          </Text>

        </CreaCard>

        {/* ACTIONS */}

        <PrimaryButton
          title="🔄 Actualiser mes informations"
          onPress={actualiser}
        />

        <View style={{ height: 12 }} />

        <PrimaryButton
          title="🚪 Changer de compte"
          onPress={changerCompte}
        />

        <View style={{ height: 30 }} />

      </ScrollView>

    </CreaScreen>

  );
}
