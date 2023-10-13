import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontSize: 11,
        poster: {
            fontSize: "4rem",
            fontWeight: "bold",
            color: "red",
            fontFamily: "tahoma",
        },
        // fontSize: 12,
        fontFamily: [
            '"Segoe UI"',
            "-apple-system",
            '"Segoe UI Symbol"',
            "IBM Plex Sans",
            "Montserrat",
            '"Apple Color Emoji"',
            "Arial",
            "Roboto",
            "BlinkMacSystemFont",
            '"Helvetica Neue"',
            "sans-serif",
            '"Segoe UI Emoji"',
        ].join(","),
    },
    palette: {
        primary: {
            main: "#556cd6",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
