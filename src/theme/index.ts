import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    backgroundPrimary: Palette["primary"];
    textPrimary: Palette["primary"];
  }

  interface PaletteOptions {
    backgroundPrimary?: PaletteOptions["primary"];
    textPrimary?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#207DFF", //blue
      light: "#539BFF",
      lighter: "#ECF4FF",
    },
    secondary: {
      main: "#17CF9D", //green
      light: "#47E8BD",
      lighter: "#BDFFED",
    },

    backgroundPrimary: {
      main: "#fff", //white
    },

    textPrimary: {
      main: "#232323", //white
    },
  },
});
