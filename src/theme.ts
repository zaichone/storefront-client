import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue, pink } from "@mui/material/colors";

import SFThonburi from './fonts/SFThonburi-Regular.ttf';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {  main:'#a5a5a5'},
    secondary: pink,
  },
  typography: {
    fontFamily: '"SF Thonburi", "Helvetica", "Arial", sans-serif',
    fontSize:16,
    h1: {
      color:'#000000',
      fontSize:35,
      fontWeight:'bold',
    },
    h2: {
      color:'#000000',
      fontSize:16,
      fontWeight:'bold',
    },
    h3: {
      color:'#000000',
      fontSize:16,
      fontWeight:'bold',
    },
    h4: {
      color:'#a5a5a5',
      fontSize:14,
      fontWeight:'bold',
    },
    subtitle1:{
      fontSize:10,
    },
    subtitle2:{
      fontSize:8,
    },
    button: {
      textTransform: "none"
    },
    body1:{
      color:'#646464',
      fontWeight:'normal',
      fontSize:16,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SF Thonburi';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SF Thonburi'), local('SFThonburi-Regular'), url(${SFThonburi}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
