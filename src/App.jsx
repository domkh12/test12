import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
        <Helmet>
      <title>Showcase - Your Portfolio</title>
      <meta name="description" content="Build and" />
      <meta name="keywords" content="Showcase.png" />
      <meta property="og:title" content="Showcase - Your Portfolio" />
      <meta property="og:description" content="Build and" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://test12-tawny.vercel.app/" />     
      </Helmet>
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
