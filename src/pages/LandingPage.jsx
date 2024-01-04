import AboutSection from "../components/Fragments/AboutSection";
import FiturSection from "../components/Fragments/FiturSection";
import Footer from "../components/Fragments/Footer";
import HeroSection from "../components/Fragments/HeroSection";
import KelasSection from "../components/Fragments/KelasSection";
import Navbar from "../components/Fragments/Navbar";
import NewsSection from "../components/Fragments/NewsSection";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FiturSection />
      <NewsSection />
      <KelasSection />
      <Footer />
    </>
  );
};
export default LandingPage;
