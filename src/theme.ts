import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: "#00e5ff",
        },
        secondary: {
          main: "#00ffc2",
        },
        background: {
          default: "#000000",
          paper: "#121212",
        },
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.7)",
        },
        error: {
          main: "#ff5252",
        },
        success: {
          main: "#00ffc2",
        },
      },
      typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontWeight: 700,
        },
        h3: {
          fontWeight: 700,
        },
        h5: {
          fontWeight: 600,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              textTransform: "none",
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
      },
});

export default theme;
