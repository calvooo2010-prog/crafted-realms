import { motion } from "framer-motion";
import { ArrowRight, Shield, Cpu, Users, Zap, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingParticles from "./FloatingParticles";

const features = [
  { icon: Shield, text: "Java & Bedrock", highlight: true },
  { icon: Cpu, text: "Protección Anti-DDoS avanzada" },
  { icon: Users, text: "Slots ilimitados" },
  { icon: Zap, text: "Todas las versiones y modpacks" },
  { icon: Users, text: "Confiado por +180 creadores", highlight: true },
  { icon: Globe, text: "+400 guías y tutoriales" },
  { icon: Globe, text: "Subdominio .gamzyhost.gg" },
  { icon: Headphones, text: "Desde $0.89/gb/mes" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
      </div>

      {/* Floating particles effect */}
      <FloatingParticles />

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl">
          {/* Pre-title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-display font-semibold tracking-wider uppercase mb-4"
          >
            Adquiere ahora
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title mb-8"
          >
            <span className="text-foreground">MINECRAFT</span>
            <br />
            <span className="text-gradient-primary">HOSTING</span>
          </motion.h1>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <div className={`w-6 h-6 rounded-md flex items-center justify-center ${feature.highlight ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <feature.icon className="w-4 h-4" />
                </div>
                <span className={feature.highlight ? 'text-foreground font-medium' : ''}>
                  {feature.text.split(' ').map((word, i) => {
                    if (word.startsWith('+') || word.startsWith('$') || word === 'Java' || word === 'Bedrock' || word === 'Anti-DDoS') {
                      return <strong key={i} className="text-foreground">{word} </strong>;
                    }
                    return word + ' ';
                  })}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="lg" className="gap-2 group" onClick={() => scrollToSection("planes")}>
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Adquirir un
                <span className="font-black">SERVIDOR DE MINECRAFT</span>
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="heroOutline" size="lg" className="gap-2" onClick={() => scrollToSection("confianza")}>
              Acerca de GamzyHost
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
