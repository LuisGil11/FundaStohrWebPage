import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: "sans-serif",
      },
    },
  },
});
