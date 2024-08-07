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
import SEO from "./components/seo/SEO";
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
        <meta name="author" content="Your Name or Your Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="My Website - Explore Amazing Templates" />
        <meta property="og:description" content="Discover our range of templates designed to showcase your creativity, skills, and business." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://mywebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Website - Explore Amazing Templates" />
        <meta name="twitter:description" content="Discover our range of templates designed to showcase your creativity, skills, and business." />
        <meta name="twitter:image" content="/path/to/image.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://mywebsite.com" />
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
