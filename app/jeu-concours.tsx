import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated as RNAnimated,
  Easing,
} from 'react-native';

import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import { Pressable } from 'react-native';
import { useEffect, useRef } from 'react';

export default function JeuConcours() {
  
const debutConcours = new Date('2026-09-01');
const finConcours = new Date('2027-06-30');
const aujourdHui = new Date();

const dureeTotale =
  finConcours.getTime() - debutConcours.getTime();

const tempsEcoule =
  aujourdHui.getTime() - debutConcours.getTime();

const progression = Math.min(
  Math.max((tempsEcoule / dureeTotale) * 100, 0),
  100
);

const reglement =
  "https://docs.google.com/document/d/1feuzy2MycIeNcjnnWzTSf1R-2guZA72PGd5KQkkgy7c/edit?usp=drive_link";

const maintenant = new Date();

const diff = finConcours.getTime() - maintenant.getTime();

const jours = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)),0);

const mois = Math.floor(jours / 30);

const semaines = Math.floor((jours % 30)/7);

const joursFinaux = (jours % 30)%7;
const googleForm= "https://docs.google.com/forms/d/e/1FAIpQLSfiGh2Xec2YxQgq49grxtU466H8LLJE9KZOZx256hWY8MibDQ/viewform";

const trophyAnim = useRef(new RNAnimated.Value(0)).current;

useEffect(() => {

  RNAnimated.loop(

    RNAnimated.sequence([

      RNAnimated.timing(trophyAnim,{
        toValue:-10,
        duration:1800,
        easing:Easing.inOut(Easing.ease),
        useNativeDriver:true,
      }),

      RNAnimated.timing(trophyAnim,{
        toValue:0,
        duration:1800,
        easing:Easing.inOut(Easing.ease),
        useNativeDriver:true,
      }),

    ])

  ).start();

},[]);
   
   return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
    
    <Animated.View
entering={FadeInUp.duration(700)}
>

<ImageBackground
source={require('../assets/images/concours/banniere.jpg')}
style={styles.hero}
imageStyle={{ borderBottomLeftRadius:30,borderBottomRightRadius:30 }}
>

<View style={styles.badgeCard}>

<ThemedText style={styles.badgeTitle}>
🏅 Concours officiel
</ThemedText>

<ThemedText style={styles.badgeSubtitle}>
Créa'telier 2026 • 2027
</ThemedText>

</View>

<View style={styles.overlay}>

<ThemedText style={styles.heroTitle}>
🏆 Jeu Concours 100% gagnant
</ThemedText>

<ThemedText style={styles.heroSubtitle}>
Montre-nous ta plus belle création !
</ThemedText>

</View>

</ImageBackground>

</Animated.View>

<Animated.View
entering={FadeInUp.delay(200).duration(700)}
style={styles.card}
>

<ThemedText style={styles.sectionTitle}>
Bienvenue !
</ThemedText>

<ThemedText style={styles.paragraph}>

Chaque année, Créa'telier récompense la création la plus originale réalisée grâce aux activités proposées dans l'application.

{"\n\n"}

Que tu réalises un objet, un véhicule, une fleur, un monument ou toute autre création, tu peux participer !

{"\n\n"}

Il suffit d'envoyer une photo ou une vidéo de ton œuvre.

Bonne chance à tous !

</ThemedText>

</Animated.View>

<Animated.View
entering={FadeInUp.delay(300).duration(700)}
style={styles.card}
>

<Animated.View
  entering={FadeInUp.delay(250).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    🏆 Concours n°1
  </ThemedText>

  <ThemedText style={styles.info}>
    📅 Début : 1 septembre 2026
  </ThemedText>

  <ThemedText style={styles.info}>
    📅 Fin : 30 juin 2027
  </ThemedText>

  <ThemedText style={styles.days}>

⏳ Temps restant

{"\n\n"}

{mois} mois

{"\n"}

{semaines} semaine(s)

{"\n"}

{joursFinaux} jour(s)

</ThemedText>

<View style={styles.progressLabels}>

<ThemedText>

🏁 Début

</ThemedText>

<ThemedText>

🎁 Fin

</ThemedText>

</View>

  <View style={styles.progressBackground}>

  <LinearGradient
    colors={['#2196F3', '#19DDE3', '#4CAF50']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={[
      styles.progressBar,
      {
        width: `${progression}%`,
      },
    ]}
  />

  <View
    style={[
      styles.trophyContainer,
      {
        left: `${Math.max(progression - 4, 0)}%`,
      },
    ]}
  >
    <ThemedText style={styles.trophy}>
      🏆
    </ThemedText>
  </View>

</View>

  <ThemedText style={styles.progressText}>
    {Math.round(progression)} % du concours écoulé
  </ThemedText>

</Animated.View>

<ThemedText style={styles.sectionTitle}>
🎁 Les lots
</ThemedText>

<ThemedText style={styles.paragraph}>

Le 1er gagnant remportera un dauphin de 75 cm.
Le 2ème gagnant remprtera un bateau de plaisance de 45 cm.
Le 3ème gangnant remportera un palmier de 35 cm.
Pour les autres personnes, des pochettes surprises avec à l'intérieur des objets en papier de env 15 cm.

Les lots changent chaque année !

</ThemedText>

</Animated.View>

<Animated.View
  entering={FadeInUp.delay(500).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    📤 Participer
  </ThemedText>

  <ThemedText style={styles.paragraph}>
    Tu penses avoir réalisé une magnifique création ?
    Envoie-nous une photo ou une vidéo grâce au formulaire.
  </ThemedText>

  <Pressable
    style={({ pressed }) => [
      styles.participerButton,
      pressed && { transform: [{ scale: 0.96 }] },
    ]}
    onPress={() => Linking.openURL(googleForm)}
  >

    <LinearGradient
      colors={['#2196F3', '#19DDE3', '#4CAF50']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientButton}
    >

      <ThemedText style={styles.participerText}>
        📷 Envoyer ma création
      </ThemedText>

    </LinearGradient>

  </Pressable>

</Animated.View>

<Animated.View
entering={FadeInUp.delay(400).duration(700)}
style={styles.card}
>

<ThemedText style={styles.sectionTitle}>
📋 Conditions de participation
</ThemedText>

<View style={styles.rule}>

<ThemedText style={styles.emoji}>
📷
</ThemedText>

<ThemedText style={styles.ruleText}>
Une photo ou une vidéo est demandée.
</ThemedText>

</View>

<View style={styles.rule}>

<ThemedText style={styles.emoji}>
🎨
</ThemedText>

<ThemedText style={styles.ruleText}>
La création doit avoir été réalisée grâce à Créa'telier.
</ThemedText>

</View>

<View style={styles.rule}>

<ThemedText style={styles.emoji}>
👤
</ThemedText>

<ThemedText style={styles.ruleText}>
Une seule participation par personne.
</ThemedText>

</View>

<View style={styles.rule}>

<ThemedText style={styles.emoji}>
🏆
</ThemedText>

<ThemedText style={styles.ruleText}>
Les lots sont distribués chaque fin d'année.
</ThemedText>

</View>

</Animated.View>

<Animated.View
  entering={FadeInUp.delay(700).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    📜 Règlement
  </ThemedText>

  <ThemedText style={styles.paragraph}>
    Avant de participer, prends quelques minutes pour consulter le règlement du concours.
  </ThemedText>

  <Pressable
    style={({ pressed }) => [
      styles.secondaryButton,
      pressed && { transform: [{ scale: 0.97 }] },
    ]}
    onPress={() => Linking.openURL(reglement)}
  >
    <ThemedText style={styles.secondaryButtonText}>
      📄 Voir le règlement
    </ThemedText>
  </Pressable>

</Animated.View>

<Animated.View
  entering={FadeInUp.delay(800).duration(700)}
  style={styles.quoteCard}
>

<ThemedText style={styles.quote}>

"La créativité consiste simplement à oser créer."

</ThemedText>

<ThemedText style={styles.quoteAuthor}>

Créa'telier

</ThemedText>

</Animated.View>

<Link href="/sommaire" asChild>

<Pressable
style={({pressed})=>[
styles.homeButton,
pressed && {opacity:0.9}
]}
>

<LinearGradient

colors={['#2196F3','#19DDE3']}

style={styles.homeGradient}

>

<ThemedText style={styles.homeText}>

🏠 Retour au sommaire

</ThemedText>

</LinearGradient>

</Pressable>

</Link>



    </ScrollView>

  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#E8F7FF",
},

hero:{
height:330,
justifyContent:"center",
},

secondaryButton:{

marginTop:25,

backgroundColor:"#2196F3",

padding:18,

borderRadius:40,

},

secondaryButtonText:{

color:"white",

fontSize:20,

fontWeight:"bold",

textAlign:"center",

},

quoteCard:{

marginHorizontal:20,

marginTop:10,

marginBottom:20,

padding:30,

backgroundColor:"#FFFBEA",

borderRadius:25,

},

quote:{

fontSize:24,

fontStyle:"italic",

textAlign:"center",

},

quoteAuthor:{

marginTop:20,

fontWeight:"bold",

textAlign:"center",

fontSize:18,

},

homeButton:{

marginHorizontal:20,

marginBottom:50,

borderRadius:40,

overflow:"hidden",

},

homeGradient:{

padding:20,

alignItems:"center",

},

homeText:{

color:"white",

fontWeight:"bold",

fontSize:22,

},

overlay:{
flex:1,
backgroundColor:"rgba(0,0,0,0.35)",
justifyContent:"center",
alignItems:"center",
padding:30,
},

heroTitle:{
fontSize:42,
fontWeight:"bold",
color:"white",
textAlign:"center",
},

heroSubtitle:{
marginTop:15,
fontSize:22,
color:"white",
textAlign:"center",
},

card:{
margin:20,
backgroundColor:"white",
padding:25,
borderRadius:25,

shadowColor:"#000",
shadowOpacity:0.15,
shadowRadius:8,
shadowOffset:{
width:0,
height:4,
},

elevation:5,
},

sectionTitle:{
fontSize:28,
fontWeight:"bold",
marginBottom:20,
textAlign:"center",
},

paragraph:{
fontSize:18,
lineHeight:32,
textAlign:"justify",
},

lotImage:{
width:"100%",
height:260,
borderRadius:20,
marginBottom:20,
},

rule:{
flexDirection:"row",
alignItems:"center",
marginVertical:12,
},

emoji:{
fontSize:32,
marginRight:15,
},

ruleText:{
fontSize:18,
flex:1,
},

info: {
  fontSize: 20,
  marginBottom: 12,
  textAlign: 'center',
},

days: {
  marginTop: 15,
  marginBottom: 20,
  fontSize: 24,
  fontWeight: 'bold',
  color: '#2196F3',
  textAlign: 'center',
},

progressBackground: {
  height: 24,
  backgroundColor: '#EAF6FB',
  borderRadius: 30,
  overflow: 'visible',
  marginTop: 20,
  marginBottom: 10,
},

progressBar: {
  height: '100%',
  borderRadius: 30,
},

participerButton: {
  marginTop: 25,
  borderRadius: 40,
  overflow: 'hidden',
},

gradientButton: {
  paddingVertical: 18,
  borderRadius: 40,
},

participerText: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
},

badgeCard:{

marginHorizontal:20,

marginTop:25,

backgroundColor:"#FFF8E8",

padding:20,

borderRadius:25,

alignItems:"center",

borderWidth:2,

borderColor:"#FFD54F",

},

badgeTitle:{

fontSize:30,

fontWeight:"bold",

},

badgeSubtitle:{

fontSize:20,

marginTop:8,

},

bigTrophy:{

fontSize:60,

marginBottom:12,

},

progressLabels:{

flexDirection:"row",

justifyContent:"space-between",

marginBottom:8,

},

trophyContainer: {
  position: 'absolute',
  top: -22,
},

trophy: {
  fontSize: 32,
},

progressText: {
  marginTop: 12,
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 'bold',
},

});