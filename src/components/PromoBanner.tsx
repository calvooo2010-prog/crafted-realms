import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Zap, Gift, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-background/20 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 min-w-[50px]"
      >
        <span className="text-2xl md:text-3xl font-display font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-white/70 text-xs mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]" />
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 border border-white/30 rotate-45 -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-40 h-40 border border-white/30 rotate-12 translate-x-20 translate-y-20" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/20 rotate-45" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Offer text */}
          <div className="flex items-center gap-4 text-center lg:text-left">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden sm:flex w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center border border-white/20"
            >
              <Gift className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
                  Oferta de Navidad
                </span>
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-display font-bold">
                <span className="text-yellow-300">30% DESCUENTO</span> en todos los planes
              </h3>
            </div>
          </div>

          {/* Center: Countdown */}
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-white/70 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TimeBlock value={timeLeft.hours} label="Horas" />
              <span className="text-white/50 text-2xl font-bold">:</span>
              <TimeBlock value={timeLeft.minutes} label="Min" />
              <span className="text-white/50 text-2xl font-bold">:</span>
              <TimeBlock value={timeLeft.seconds} label="Seg" />
            </div>
          </div>

          {/* Right: CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => scrollToSection("planes")}
              className="bg-white text-primary hover:bg-white/90 font-bold px-6 py-3 rounded-xl shadow-lg shadow-black/20 gap-2"
            >
              <Zap className="w-5 h-5" />
              Aprovechar Oferta
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
