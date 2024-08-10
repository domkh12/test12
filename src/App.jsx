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
        <title>My Website - Explore Amazing Templates</title>
        <meta name="description" content="Discover our range of templates designed to showcase your creativity, skills, and business. Choose from Developer, Business, Marketing, and Photography templates." />
        <meta name="keywords" content="templates, portfolio, business, marketing, photography, developer" />
        <meta property="og:title" content="My Website - Explore Amazing Templates" />
        <meta property="og:description" content="Discover our range of templates designed to showcase your creativity, skills, and business. Choose from Developer, Business, Marketing, and Photography templates." />
        <meta property="og:image" content="https://your-website-domain/your-image.jpg" /> // Replace with your image URL
        <meta property="og:url" content="https://your-website-domain" /> // Replace with your website URL
        <meta property="og:type" content="website" />
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


export default App;
