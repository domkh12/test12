import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTopButton from "./components/homepage/ScrollToTopButton";

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
        <title>My Awesome App</title>
        <meta name="description" content="This is an awesome application." />
        <link rel="canonical" href={window.location.href} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="My Awesome App" />
        <meta property="og:description" content="Check out this amazing app that does incredible things!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/Showcase.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="My Awesome App" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Awesome App" />
        <meta name="twitter:description" content="Check out this amazing app that does incredible things!" />
        <meta name="twitter:image" content="/Showcase.png" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
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
