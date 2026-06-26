import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";

import "./components/Navbar.css";
import "./components/Footer.css";
import "./components/HeroSection.css";
import "./components/FeatureCard.css";
import "./components/TestimonialSection.css";
import "./components/CTABanner.css";

import "./pages/AboutPage.css";
import "./pages/ContactPage.css";
import "./pages/NotFoundPage.css";

function App() {

  return (

    <>

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>

    </>

  );

}

export default App;
