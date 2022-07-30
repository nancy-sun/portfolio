import { createTheme } from "@mui/material/styles";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#fff",
        },
        text: {
            primary: "#0f0f0f",
        },
    }, components: {
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    color: "#ffcad4"
                },
                colorPrimary: {
                    // color: "red",
                    "& .MuiSwitch-thumb": {
                        backgroundImage: `url(${sunIcon})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "70%",
                        backgroundPosition: "center"
                    },
                },

                track: {
                    // Controls default (unchecked) color for the track
                    opacity: 0.4,
                    backgroundColor: "#ffcad4",
                }
            }
        }
    }
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
                    color: "white"
                },
                colorPrimary: {
                    "&.Mui-checked": {
                        color: "#cce6fe",
                        "& .MuiSwitch-thumb": {
                            backgroundImage: `url(${moonIcon})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "80%",
                            backgroundPosition: "center"
                        },
                    }
                },

                track: {
                    // Controls default (unchecked) color for the track
                    opacity: 0.2,
                    ".Mui-checked.Mui-checked + &": {
                        // Controls checked color for the track
                        opacity: 0.4,
                        backgroundColor: "#a2d2ff"
                    }
                }
            }
        }
    }
});

export { lightTheme, darkTheme };