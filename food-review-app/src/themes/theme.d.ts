import { createTheme, responsiveFontSizes } from "@mui/material";
import openSans from "../fonts/Open-Sans.ttf";
import mulish from "../fonts/Mulish.ttf";
import { ThemeOptions } from "@mui/material";
import React from "react";

declare module "@mui/material/styles/" {
  interface Theme {
    status: {
      danger: string;
      success: string;
      warning: string;
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
      success: React.CSSProperties["color"];
      warning: React.CSSProperties["color"];
    };
  }
}

export const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 750,
  //     md: 1300,
  //     lg: 2000,
  //     xl: 2900,
  //   },
  // },
  status: {
    danger: "#f44336",
    success: "#4caf50",
    warning: "#ff9800",
  },
  palette: {
    primary: {
      main: "#8a8a8a",
    },
    secondary: {
      main: "#ef9273",
      light: "#989898",
    },
    text: {
      primary: "#0d0d0d",
      secondary: "#8a8a8a",
    },
  },
  typography: {
    fontFamily: "Mulish",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Open Sans'; 
        font-display: swap;
        font-weight: 400;
        src: url(${openSans}) format('truetype'); 
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2160-2188, U+2191, U+2193, U+2212, U+2215, U+FEFF'
      }
      
      @font-face{
        font-family: 'Mulish'; 
        font-display: swap;
        font-weight: 400;
        src: url(${mulish}) format('truetype'); 
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2160-2188, U+2191, U+2193, U+2212, U+2215, U+FEFF'
      }`,
    },
  },
});
