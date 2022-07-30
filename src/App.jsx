import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme/theme";
import { useSelector } from "react-redux";
import "./App.scss";
import Loading from "./components/Loading/Loading";

function App() {

  const theme = useSelector((state) => state.theme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      {loading ? <Loading /> : (
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
        </div>)}
    </ThemeProvider>
  );
}

export default App;
