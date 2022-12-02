import { createTheme } from "@mui/material";
import { indigo, lightBlue } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: indigo[600],
      dark: indigo[800],
      light: indigo[400],
      contrastText: "#ffffff",
    },
    secondary: {
      main: lightBlue[400],
      dark: lightBlue[900],
      light: lightBlue[500],
      contrastText: "#ffffff",
    },
    background: {
      default: "#bdbdbd",
      paper: "#ffffff",
    }
  }
})