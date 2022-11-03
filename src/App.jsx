import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "./theme/theme";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Loading from "./components/Loading/Loading";
import "./App.scss";

function App() {
    const theme = useSelector((state) => state.darkTheme);

    return (
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
            <Suspense fallback={<Loading />}>
                <CssBaseline />
                <div className="app">
                    <BrowserRouter>
                        <Nav />
                        <Routes>
                            <Route path="*" element={<Home />} />
                            <Route path="/" exact element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </div>
            </Suspense>
        </ThemeProvider>
    );
};

export default App;
