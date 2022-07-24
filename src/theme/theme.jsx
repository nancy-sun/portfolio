import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
        },
        text: {
            primary: "#0f0f0f",
        },
    },
    // components: {
    //     MuiSwitch: {
    //         styleOverrides: {
    //             switchBase: {
    //                 color: "red"
    //             }
    //         }
    //     },
    // }
});


const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#0f0f0f",
        },
        text: {
            primary: "#fff",
        },
    }, components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: "red"
                }
            }
        },
    }
});

export { lightTheme, darkTheme };