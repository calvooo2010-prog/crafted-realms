import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedSection from "@/components/TrustedSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlansSection from "@/components/PlansSection";
import TechSection from "@/components/TechSection";
import StatsSection from "@/components/StatsSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MinecraftCharacters from "@/components/MinecraftCharacters";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinecraftCharacters />
      <Header />
      <main>
        <HeroSection />
        <TrustedSection />
        <BenefitsSection />
        <PlansSection />
        <TechSection />
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
