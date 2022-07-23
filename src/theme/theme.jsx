import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        background: {
            default: "#fff",
        },
        primary: {
            main: "#0f0f0f",
        },
    },
});


const darkTheme = createTheme({
    palette: {
        background: {
            default: "#0f0f0f",
        },
        primary: {
            main: "#f5f1ed",
        },
    },
});

export { lightTheme, darkTheme };