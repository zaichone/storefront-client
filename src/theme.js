import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blue, pink } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {  main:'#f22f46'},
    secondary: pink,
  },
  typography: {
    button: {
      textTransform: "none"
    },
    body1:{
      color:'#6c7084',
      fontWeight:'normal'
    },
    h3:{
      color:'black'
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
