//tema
import "primereact/resources/themes/lara-light-indigo/theme.css";

//núcleo
import "primereact/resources/primereact.min.css";

//iconos
import "primeicons/primeicons.css";

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
