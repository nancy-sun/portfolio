
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import "./App.scss";

function App() {
  return (
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
  );
}

export default App;
