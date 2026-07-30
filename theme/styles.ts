import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export const GlobalStyles = StyleSheet.create({

  screen: {

    flex:1,

    backgroundColor:COLORS.background,

    padding:20,

  },

  title:{

    fontSize:30,

    fontWeight:"bold",

    color:COLORS.text,

    marginBottom:20,

  },

  subtitle:{

    fontSize:16,

    color:COLORS.subtitle,

  },

  card:{

    backgroundColor:COLORS.card,

    borderRadius:20,

    padding:20,

    marginBottom:20,

    elevation:4,

  },

  button:{

    backgroundColor:COLORS.primary,

    padding:16,

    borderRadius:15,

  },

  buttonText:{

    color:"white",

    textAlign:"center",

    fontWeight:"bold",

    fontSize:17,

  },

});