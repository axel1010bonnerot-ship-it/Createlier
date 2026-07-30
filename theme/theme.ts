import { COLORS } from "@/constants/colors";

export const THEME = {
  colors: COLORS,

  radius: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    round: 999,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  text: {
    h1: 30,
    h2: 24,
    h3: 20,
    body: 16,
    small: 14,
    tiny: 12,
  },

  shadow: {
    card: {
      shadowColor: COLORS.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      elevation: 5,
    },
  },
};