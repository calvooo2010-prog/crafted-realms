import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "ElCreadorMC",
    role: "Servidor SMP +500 jugadores",
    avatar: "🟢",
    content: "Increíble rendimiento. Migré desde otro hosting y la diferencia es brutal. Cero lag incluso con 400+ jugadores simultáneos.",
    rating: 5,
    highlight: "Cero lag",
  },
  {
    name: "PixelCraft Studios",
    role: "Red de servidores",
    avatar: "🟣",
    content: "El soporte técnico responde en minutos, no horas. Han salvado mi servidor varias veces. Totalmente recomendado.",
    rating: 5,
    highlight: "Soporte 24/7",
  },
  {
    name: "MineBuilder_Pro",
    role: "Servidor creativo",
    avatar: "🔵",
    content: "Panel de control intuitivo y potente. Instalar modpacks es facilísimo. Perfecto para alguien sin experiencia técnica.",
    rating: 5,
    highlight: "Fácil de usar",
  },
  {
    name: "CraftingLegends",
    role: "Servidor survival",
    avatar: "🟡",
    content: "La protección anti-DDoS realmente funciona. Hemos sido atacados varias veces y el servidor ni se inmutó.",
    rating: 5,
    highlight: "Anti-DDoS real",
  },
  {
    name: "BlockMaster_ES",
    role: "Servidor minijuegos",
    avatar: "🔴",
    content: "Precio increíble para la calidad que ofrecen. Antes pagaba el doble por peor servicio. GamzyHost es top tier.",
    rating: 5,
    highlight: "Mejor precio",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
        style={{ left: '-10%', top: '20%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-wider uppercase mb-4 block">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-gradient-primary">clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Miles de creadores confían en GamzyHost para sus servidores de Minecraft
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              
              {/* Highlight badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-sm font-medium">{testimonials[activeIndex].highlight}</span>
              </motion.div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center text-2xl">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Mini testimonials grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { stat: "4.9/5", label: "Valoración media" },
            { stat: "+2,500", label: "Reseñas positivas" },
            { stat: "99.9%", label: "Uptime garantizado" },
            { stat: "<5min", label: "Tiempo de respuesta" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/30 border border-border/30 rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-2">
                {item.stat}
              </div>
              <div className="text-muted-foreground text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
