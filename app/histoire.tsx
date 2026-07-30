import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import Animated, {
  FadeInUp,
} from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function Histoire() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >

      {/* ========================= */}
      {/* GRANDE BANNIÈRE */}
      {/* ========================= */}

      <ImageBackground
        source={require('../assets/images/histoire/banniere-histoire.jpg')}
        style={styles.heroBanner}
      >

        <LinearGradient
          colors={[
            'rgba(0,0,0,0.45)',
            'rgba(0,0,0,0.15)',
          ]}
          style={styles.overlay}
        >

          <ThemedText style={styles.heroTitle}>
            Mon histoire
          </ThemedText>

          <ThemedText style={styles.heroSubtitle}>
            Découvrez comment est né Créa'telier
          </ThemedText>

        </LinearGradient>

      </ImageBackground>

      {/* ========================= */}
      {/* QUI SUIS-JE */}
      {/* ========================= */}

      <Animated.View
        entering={FadeInUp.duration(700)}
        style={styles.card}
      >

        <ThemedText style={styles.sectionTitle}>
          Qui suis-je ?
        </ThemedText>

        <ThemedText style={styles.paragraph}>

Je m'appelle Axel et je suis passionné par la création, le bricolage,
la transmission des connaissances et les nouvelles technologies.

{"\n\n"}

Au fil des années, j'ai imaginé des dizaines d'activités afin de permettre
aux enfants et aux adolescents de développer leur créativité tout en
s'amusant.

{"\n\n"}

Créa'telier est né avec une idée simple :

permettre à chacun de créer des objets uniques,
à son rythme,
en étant accompagné tout au long de son apprentissage.

        </ThemedText>

      </Animated.View>

      {/* ========================= */}
      {/* COMMENT TOUT A COMMENCÉ */}
      {/* ========================= */}

      <Animated.View
        entering={FadeInUp.delay(200).duration(700)}
        style={styles.card}
      >

        <ThemedText style={styles.sectionTitle}>
          Comment tout a commencé
        </ThemedText>

        <ThemedText style={styles.paragraph}>

Tout a commencé avec quelques idées, des feuilles de papier, du scotch et surtout beaucoup d'imagination.

{"\n\n"}

Petit à petit, chaque activité a été améliorée,
testée par moi même,
puis enrichie afin de devenir les mondes que vous découvrez aujourd'hui.

        </ThemedText>

      </Animated.View>

      <Animated.View
  entering={FadeInUp.delay(300).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    Mon parcours
  </ThemedText>

  {/* Étape 1 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        2015,à 5 ans!
      </ThemedText>

      <ThemedText style={styles.timelineText}>
        Les premières idées prennent forme.
        A cet âge là, je n'en étais pas aux techniques de maintenant. En effet je faisais de petits objets en papier qui n'étaient pas très solides.
      </ThemedText>
    </View>

  </View>

  {/* Étape 2 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        2018, à 8 ans!
      </ThemedText>

      <ThemedText style={styles.timelineText}>
        j'ai froissé des feuilles pour créer du volume afin de faire mes objets
      </ThemedText>
    </View>

  </View>

  {/* Étape 3 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        2021, à 11 ans!
      </ThemedText>

      <ThemedText style={styles.timelineText}>
         Je créé mes premiers objets avec des tubes en papier. Je me suis ensuite perfectionné en créant des arrangements comme pour faire tourner des choses.
      </ThemedText>
    </View>

  </View>

  {/* Étape 4 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        Avril 2025, en 3ème
      </ThemedText>

      <ThemedText style={styles.timelineText}>
         Le Créa'telier ouvre pour la première fois ses portes avec le début de mon site internet!
      </ThemedText>
    </View>

  </View>

  {/* Étape 5 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDot} />
      <View style={styles.timelineLine} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        Automne 2025, en 2nd
      </ThemedText>

      <ThemedText style={styles.timelineText}>
         je deviens lycéen et lègue l'enseignement aux élèves que j'ai formé, ainsi, c'est Robin et Lucas, qui forment les nouveaux élèves.
      </ThemedText>
    </View>

  </View>


  {/* Étape 6 */}

  <View style={styles.timelineRow}>

    <View style={styles.timelineLeft}>
      <View style={styles.timelineDotLast} />
    </View>

    <View style={styles.timelineContent}>
      <ThemedText style={styles.timelineYear}>
        Aujourd'hui
      </ThemedText>

      <ThemedText style={styles.timelineText}>
        Créa'telier continue d'évoluer avec
        désormais 15 mondes, des centaines
        de créations possibles et une
        application permettant d'accompagner
        chacun dans son aventure créative.
        Je continue encore de me perfectionner en recherchant les meilleures techniques et en améliorant le site et l'application tout en gardant le contact avec les élèves. 
     </ThemedText>
    </View>

  </View>

</Animated.View>

{/* ========================= */}
{/* LES VALEURS */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(400).duration(700)}
>

  <ThemedText style={styles.sectionTitle}>
    Les valeurs de Créa'telier
  </ThemedText>

  <View style={styles.valuesContainer}>

    <View style={styles.valueCard}>
      <ThemedText style={styles.valueEmoji}>🎨</ThemedText>
      <ThemedText style={styles.valueTitle}>Créer</ThemedText>
      <ThemedText style={styles.valueText}>
        Donner vie à toutes ses idées.
      </ThemedText>
    </View>

    <View style={styles.valueCard}>
      <ThemedText style={styles.valueEmoji}>🤝</ThemedText>
      <ThemedText style={styles.valueTitle}>Partager</ThemedText>
      <ThemedText style={styles.valueText}>
        Apprendre ensemble et progresser.
      </ThemedText>
    </View>

    <View style={styles.valueCard}>
      <ThemedText style={styles.valueEmoji}>💡</ThemedText>
      <ThemedText style={styles.valueTitle}>Imaginer</ThemedText>
      <ThemedText style={styles.valueText}>
        Développer sa créativité.
      </ThemedText>
    </View>

    <View style={styles.valueCard}>
      <ThemedText style={styles.valueEmoji}>🌍</ThemedText>
      <ThemedText style={styles.valueTitle}>Explorer</ThemedText>
      <ThemedText style={styles.valueText}>
        Découvrir des univers variés.
      </ThemedText>
    </View>

  </View>

</Animated.View>

{/* ========================= */}
{/* QUELQUES CHIFFRES */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(500).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    Créa'telier aujourd'hui
  </ThemedText>

  <View style={styles.statsContainer}>

    <View style={styles.statCard}>
      <ThemedText style={styles.statNumber}>15</ThemedText>
      <ThemedText style={styles.statLabel}>
        Mondes créatifs
      </ThemedText>
    </View>

    <View style={styles.statCard}>
      <ThemedText style={styles.statNumber}>100+</ThemedText>
      <ThemedText style={styles.statLabel}>
        Créations possibles
      </ThemedText>
    </View>

    <View style={styles.statCard}>
      <ThemedText style={styles.statNumber}>∞</ThemedText>
      <ThemedText style={styles.statLabel}>
        Idées à inventer
      </ThemedText>
    </View>

  </View>

</Animated.View>

{/* ========================= */}
{/* CITATION */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(600).duration(700)}
  style={styles.quoteCard}
>

  <ThemedText style={styles.quote}>
    "Chaque enfant possède une imagination incroyable.
    Il suffit simplement de lui donner les outils
    pour la faire grandir."
  </ThemedText>

</Animated.View>

{/* ========================= */}
{/* REMERCIEMENTS */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(700).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.sectionTitle}>
    Merci ❤️
  </ThemedText>

  <ThemedText style={styles.paragraph}>

Merci à toutes les personnes qui ont cru en ce projet,
aux élèves qui ont testé les premières activités,
à Mme Schawertzemberg pour sa confiance,
à Robin et Lucas qui dirigent le Créa'telier au collège,
et à toutes celles et ceux qui continuent aujourd'hui
à faire vivre Créa'telier.

{"\n\n"}

Votre curiosité, votre créativité
et vos encouragements permettent à cette aventure
de continuer à grandir chaque jour.

{"\n\n"}

L'histoire de Créa'telier ne fait que commencer...

  </ThemedText>

</Animated.View>

{/* ========================= */}
{/* CONCLUSION */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(800).duration(700)}
  style={styles.finalBanner}
>

  <LinearGradient
    colors={['#19DDE3', '#4CAF50']}
    style={styles.gradient}
  >

    <ThemedText style={styles.finalTitle}>
      L'aventure continue...
    </ThemedText>

    <ThemedText style={styles.finalText}>
      Chaque création est différente.
      Chaque imagination est unique.
      Et la prochaine grande idée pourrait être la vôtre !
    </ThemedText>

    <Link href="/sommaire" style={styles.bigButtonBlue}>
      <ThemedText style={styles.bigButtonText}>
        🌍 Découvrir les mondes
      </ThemedText>
    </Link>

    <Link href="/" style={styles.bigButtonGreen}>
      <ThemedText style={styles.bigButtonText}>
        🏠 Retour à l'accueil
      </ThemedText>
    </Link>

  </LinearGradient>

</Animated.View>

{/* ========================= */}
{/* IMAGE FINALE */}
{/* ========================= */}

<Animated.View
  entering={FadeInUp.delay(900).duration(700)}
  style={styles.card}
>

  <ThemedText style={styles.endText}>
    Merci d'avoir pris le temps de découvrir
    l'histoire de Créa'telier.

    {"\n\n"}

    J'espère que cette aventure vous donnera
    envie de créer, d'imaginer et surtout...
    de vous amuser !

    {"\n\n"}

    ⭐ À très bientôt dans les Mondes Créa'telier ⭐
  </ThemedText>

</Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#EAFBFF',
  },

  content: {
    paddingBottom: 40,
  },

  heroBanner: {
    height: 320,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  heroTitle: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  heroSubtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },

  card: {
    backgroundColor: 'white',
    marginHorizontal: 18,
    marginTop: 25,
    borderRadius: 22,
    padding: 22,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    elevation: 5,
  },

  profileImage: {
    width: '100%',
    height: 260,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  timelineRow: {
  flexDirection: 'row',
  marginBottom: 30,
},

timelineLeft: {
  width: 40,
  alignItems: 'center',
},

timelineDot: {
  width: 18,
  height: 18,
  borderRadius: 9,
  backgroundColor: '#19DDE3',
},

timelineDotLast: {
  width: 18,
  height: 18,
  borderRadius: 9,
  backgroundColor: '#4CAF50',
},

timelineLine: {
  width: 4,
  flex: 1,
  backgroundColor: '#19DDE3',
  marginTop: 4,
},

timelineContent: {
  flex: 1,
  paddingLeft: 15,
},

timelineYear: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#19DDE3',
  marginBottom: 8,
},

timelineText: {
  fontSize: 17,
  lineHeight: 28,
},

valuesContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  marginBottom: 25,
},

valueCard: {
  width: '47%',
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 20,
  marginBottom: 18,
  alignItems: 'center',

  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: {
    width: 0,
    height: 3,
  },

  elevation: 4,
},

valueEmoji: {
  fontSize: 42,
},

valueTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
},

valueText: {
  textAlign: 'center',
  lineHeight: 24,
},

  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
  },

  statsContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 25,
},

statCard: {
  width: '45%',
  alignItems: 'center',
  marginBottom: 25,
},

statNumber: {
  fontSize: 42,
  fontWeight: 'bold',
  color: '#19DDE3',
},

statLabel: {
  marginTop: 8,
  textAlign: 'center',
  fontSize: 16,
},

quoteCard: {
  marginHorizontal: 20,
  marginTop: 25,
  marginBottom: 25,
  backgroundColor: '#19DDE3',
  borderRadius: 25,
  padding: 25,

  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 4,
  },

  elevation: 5,
},

  finalBanner: {
  marginTop: 25,
  marginHorizontal: 18,
  borderRadius: 25,
  overflow: 'hidden',
},

gradient: {
  padding: 35,
  alignItems: 'center',
},

finalTitle: {
  color: 'white',
  fontSize: 34,
  fontWeight: 'bold',
  textAlign: 'center',
},

finalText: {
  color: 'white',
  textAlign: 'center',
  fontSize: 18,
  lineHeight: 30,
  marginTop: 20,
  marginBottom: 35,
},

bigButtonBlue: {
  backgroundColor: '#2196F3',
  paddingVertical: 18,
  borderRadius: 18,
  width: '100%',
  marginBottom: 18,
},

bigButtonGreen: {
  backgroundColor: '#4CAF50',
  paddingVertical: 18,
  borderRadius: 18,
  width: '100%',
},

bigButtonText: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 22,
},

finalImage: {
  width: '100%',
  height: 320,
  borderRadius: 20,
  resizeMode: 'cover',
  marginBottom: 20,
},

endText: {
  textAlign: 'center',
  fontSize: 20,
  lineHeight: 34,
  marginBottom: 10,
},

quote: {
  color: 'white',
  fontSize: 24,
  fontStyle: 'italic',
  textAlign: 'center',
  lineHeight: 38,
},

  paragraph: {
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'justify',
  },

});