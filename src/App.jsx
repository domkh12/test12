import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const allowedPaths = [
      "/dashboard/developer",
      "/dashboard/business",
      "/dashboard/marketing",
      "/dashboard/photography",
    ];

    if (!allowedPaths.includes(location.pathname)) {
      clearEditingState();
    }
  }, [location]);

  const clearEditingState = () => {
    localStorage.removeItem("isEditing");
  };  
  return (
    <div>
     <Helmet>     
    <meta name="description" content="Showcase: Build and customize your professional portfolio effortlessly. Choose templates, edit content, and share your portfolio online." data-rh="true" />
    <meta name="keywords" content="portfolio builder, professional portfolio, website builder, templates, portfolio customization, Showcase" data-rh="true" />
    <meta name="author" content="Your Name" data-rh="true" />
    <meta property="og:title" content="Showcase - Your Professional Portfolio Builder" data-rh="true" />
    <meta property="og:description" content="Showcase lets you create and customize your professional portfolio. Choose from templates and share your unique portfolio with the world." data-rh="true" />
    <meta property="og:image" content="/Showcase.png" data-rh="true" />
    <meta property="og:url" content="https://test12-tawny.vercel.app" data-rh="true" />
    <meta property="og:type" content="website" data-rh="true" />    
    <link rel="canonical" href="https://test12-tawny.vercel.app" data-rh="true" />    
    <title data-rh="true">Showcase</title> 
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
    </div>
  );
}
