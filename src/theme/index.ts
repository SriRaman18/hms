import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    hmsDrawer: Palette["primary"];
  }

  interface PaletteOptions {
    hmsDrawer?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
      darker: teal[900],
    },
    secondary: {
      main: "#000000",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },

    hmsDrawer: {
      main: "#000000",
      light: "#E9DB5D",
      dark: "#ffffff",
      contrastText: "#242105",
    },
  },
});
