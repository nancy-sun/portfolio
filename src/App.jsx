
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
