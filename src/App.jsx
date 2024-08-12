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
    <>
     <Helmet>     
    <meta name="description" content="Showcase: Build and customize your professional portfolio effortlessly. Choose templates, edit content, and share your portfolio online." />
    <meta name="keywords" content="portfolio builder, professional portfolio, website builder, templates, portfolio customization, Showcase" />
    <meta name="author" content="Your Name" />
    <meta property="og:title" content="Showcase - Your Professional Portfolio Builder" />
    <meta property="og:description" content="Showcase lets you create and customize your professional portfolio. Choose from templates and share your unique portfolio with the world." />
    <meta property="og:image" content="/Showcase.png" />
    <meta property="og:url" content="/" />
    <meta property="og:type" content="website" />    
    <link rel="canonical" href="/" />    
    <title>Showcase</title> 
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
    </>
  );
}
