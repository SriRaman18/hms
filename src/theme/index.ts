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
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }

  interface TypographyVariants {
    p: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
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
      main: "#232323", //black
    },
  },

  typography: {
    fontSize: 12,
    fontFamily: ["Inter", "sans-serif"].join(","),
    h1: {
      fontWeight: 500,
      fontSize: 22,
    },
    h2: {
      fontWeight: 600,
      fontSize: 15,
    },
    h3: {
      fontWeight: 500,
      fontSize: 15,
    },
    p: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});
