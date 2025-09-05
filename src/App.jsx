import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "./Components/Style.css"

import Navbar from "./Components/Navbar.jsx";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx";
import Menu from "./Pages/Menu.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}