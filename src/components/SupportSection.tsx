import { motion } from "framer-motion";
import { MessageCircle, FileText, Video, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "Chat en Vivo",
    description: "Soporte instantáneo a través de nuestro chat en vivo. Respuestas en minutos, no horas.",
  },
  {
    icon: FileText,
    title: "+400 Guías",
    description: "Base de conocimientos extensa con tutoriales paso a paso para cualquier configuración.",
  },
  {
    icon: Video,
    title: "Video Tutoriales",
    description: "Aprende visualmente con nuestra biblioteca de videos explicativos en español.",
  },
  {
    icon: Users,
    title: "Comunidad Discord",
    description: "Únete a nuestra comunidad de más de 12.000 miembros y resuelve dudas con otros usuarios.",
  },
];

const SupportSection = () => {
  return (
    <section id="soporte" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">
              SOPORTE <span className="text-gradient-primary">24/7/365</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Nuestro equipo de expertos está disponible las 24 horas del día, los 365 días del año. 
              No importa la hora ni el problema, siempre habrá alguien para ayudarte.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2" onClick={() => toast.info("Chat de soporte", { description: "Conectando con un agente..." })}>
                <MessageCircle className="w-5 h-5" />
                Contactar Soporte
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => toast.info("Documentación", { description: "Abriendo base de conocimientos..." })}>
                Ver Documentación
              </Button>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated card-hover p-6"
              >
                <div className="feature-icon mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
