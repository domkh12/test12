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
import SEO from "./components/seo/SEO";
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
        {/* General SEO Meta Tags */}
        <title>Showcase - Portfolio Builder for Creatives</title>
        <meta name="description" content="Showcase is the ultimate portfolio builder that allows you to create, customize, and share your professional portfolio with ease. Perfect for developers, designers, and creatives, Showcase offers a variety of customizable templates and features to highlight your skills, achievements, and work experiences." />
        <meta name="keywords" content="portfolio builder, creative portfolio, developer portfolio, designer portfolio, portfolio templates, showcase, portfolio customization, online portfolio, portfolio tools, digital portfolio, portfolio website" />
        <meta name="author" content="CSTAD" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://test12-ecru.vercel.app/" />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content="Showcase - Portfolio Builder for Creatives" />
        <meta property="og:description" content="Create, customize, and share your professional portfolio with Showcase. Ideal for developers, designers, and creatives looking to highlight their skills and achievements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://test12-ecru.vercel.app/" />
        <meta property="og:image" content="https://test12-ecru.vercel.app/Showcase.png" />
        <meta property="og:image:alt" content="Showcase Portfolio Builder" />
        <meta property="og:site_name" content="Showcase Portfolio Builder" />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Showcase - Portfolio Builder for Creatives" />
        <meta name="twitter:description" content="Create, customize, and share your professional portfolio with Showcase. Perfect for developers, designers, and creatives." />
        <meta name="twitter:url" content="https://test12-ecru.vercel.app/" />
        <meta name="twitter:image" content="https://test12-ecru.vercel.app/Showcase.png" />
        <meta name="twitter:image:alt" content="Showcase Portfolio Builder" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Pinterest Meta Tags */}
        <meta property="og:image" content="https://test12-ecru.vercel.app/Showcase.png" />
        <meta property="og:description" content="Create, customize, and share your professional portfolio with Showcase. Perfect for developers, designers, and creatives." />
        <meta name="pinterest-rich-pin" content="true" />

        {/* LinkedIn Meta Tags */}
        <meta property="og:title" content="Showcase - Portfolio Builder for Creatives" />
        <meta property="og:description" content="Create, customize, and share your professional portfolio with Showcase. Ideal for developers, designers, and creatives looking to highlight their skills and achievements." />
        <meta property="og:url" content="https://test12-ecru.vercel.app/" />
        <meta property="og:image" content="https://test12-ecru.vercel.app/Showcase.png" />
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
