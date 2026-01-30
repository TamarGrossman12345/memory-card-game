import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      border: string;
      textFaded: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      border?: string;
      textFaded?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9d7f24",
    },
    background: {
      default: "#3E2723",
      paper: "rgba(62, 39, 35, 0.9)",
    },
    custom: {
      border: "#5D4037",
      textFaded: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "'CustomFontHerculanum', 'MedievalSharp', cursive",
    allVariants: {
      color: "rgba(255, 255, 255, 0.9)",
    },
  },
});
