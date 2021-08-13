require("dotenv").config();

const isDarkTheme: boolean = process.env.THEME_DARK === "true";

export const vuetify = {
  treeShake: true,
  customVariables: ["~/assets/variables.scss"],
  defaultAssets: {
    font: {
      family: "Montserrat"
    }
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: process.env.THEME_PRIMARY,
        accent: process.env.THEME_ACCENT,
        secondary: process.env.THEME_SECONDARY,
        info: process.env.THEME_INFO,
        warning: process.env.THEME_WARNING,
        error: process.env.THEME_ERROR,
        success: process.env.THEME_SUCCESS
      },
      light: {
        primary: process.env.THEME_PRIMARY,
        accent: process.env.THEME_ACCENT,
        secondary: process.env.THEME_SECONDARY,
        info: process.env.THEME_INFO,
        warning: process.env.THEME_WARNING,
        error: process.env.THEME_ERROR,
        success: process.env.THEME_SUCCESS
      }
    }
  }
};
