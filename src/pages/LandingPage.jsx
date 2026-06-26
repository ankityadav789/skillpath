import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureCard />
      <TestimonialSection />
      <CTABanner />
      <Footer />
    </>
  );
}

export default LandingPage;
