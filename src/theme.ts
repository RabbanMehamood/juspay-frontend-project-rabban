import { createTheme } from "@mui/material/styles";

export const getAppTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#f9f9f9",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000",
              secondary: "#555555",
            },
          }
        : {
            background: {
              default: "#1C1C1C",
              paper: "#1C1C1C",
            },
            text: {
              primary: "#ffffff",
              secondary: "#cccccc",
            },
          }),
    },
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
      fontWeightRegular: 400,
      fontSize: 14,
      body1: {
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0em",
      },
      body2: {
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0em",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html, body {
            font-family: 'Inter', Arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: ${mode === "light" ? "#ffffff" : "#1C1C1C"};
            color: ${mode === "light" ? "#1C1C1C" : "#ffffff"};
          }
        `,
      },
    },
  });
