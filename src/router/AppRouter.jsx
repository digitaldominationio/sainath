import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Donate from "../pages/Donate";
import Finance from "../pages/Finance";
import EducationAndTraining from "../pages/EducationAndTraining";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <main className="pt-18"> 
        {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/ngo" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/services/finance" element={<Finance />} />
          <Route path="/services/education-training" element={<EducationAndTraining />} />
          
          {/* Fallback route */}
          <Route path="*" element={<h1 className="text-center py-20 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
