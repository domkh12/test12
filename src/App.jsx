"use client"
import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "./components/seo/SEO";
function App() {
  const location = useLocation();
  
    useEffect(() => {
      const allowedPaths = ['/dashboard/developer', '/dashboard/business', '/dashboard/marketing', '/dashboard/photography'];
      
      if (!allowedPaths.includes(location.pathname)) {
        clearEditingState();
      }
    }, [location]);
  
    const clearEditingState = () => {
      localStorage.removeItem('isEditing');
    };
  return (
    <HelmetProvider>
      <SEO
        title="Showcase - Portfolio Builder for Creatives"
        description="Showcase is the ultimate portfolio builder that allows you to create, customize, and share your professional portfolio with ease. Perfect for developers, designers, and creatives, Showcase offers a variety of customizable templates and features to highlight your skills, achievements, and work experiences."
        keywords="portfolio builder, creative portfolio, developer portfolio, designer portfolio, portfolio templates, showcase, portfolio customization, online portfolio, portfolio tools"
        url="https://test12-tawny.vercel.app/"
        image="/Showcase.png"
      />
      <header>
        <NavBarComponent />
      </header>
      <main className="3xl:w-[2026px] 3xl:mx-auto">
        <HeroSection />
        <TemplatesSection />
        <FeatureSection />
        <OurTeamSection />
        <ContactSection />
      </main>
      <footer className="3xl:w-[2026px] 3xl:mx-auto">
      <FooterSection />
      </footer>
      <ScrollToTopButton />
    </HelmetProvider>
    
  );
}

export default App;
