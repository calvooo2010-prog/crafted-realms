import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import TrustedSection from "@/components/TrustedSection";
import HowItWorks from "@/components/HowItWorks";
import PlansSection from "@/components/PlansSection";
import TechSection from "@/components/TechSection";
import StatsSection from "@/components/StatsSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MinecraftCharacters from "@/components/MinecraftCharacters";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustBadges from "@/components/TrustBadges";
import FeaturedCreators from "@/components/FeaturedCreators";
import LiveStatsWidget from "@/components/LiveStatsWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-depth noise-bg">
      <MinecraftCharacters />
      <LiveStatsWidget />
      <Header />
      <main>
        <HeroSection />
        <PromoBanner />
        <TrustedSection />
        <HowItWorks />
        <PlansSection />
        <TrustBadges />
        <TechSection />
        <FeaturedCreators />
        <TestimonialsSection />
        <StatsSection />
        <SupportSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
