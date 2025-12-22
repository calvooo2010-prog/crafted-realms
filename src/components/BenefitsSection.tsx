import { motion } from "framer-motion";
import { Headphones, Sparkles, RefreshCw, Shield, Lock, Cpu } from "lucide-react";

const benefits = [
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Nuestro equipo de soporte está en línea las 24 horas del día, los 7 días de la semana, listo para resolver tus problemas y responder tus dudas.",
  },
  {
    icon: Sparkles,
    title: "Simplicidad",
    description: "Ofrecemos una interfaz intuitiva y herramientas fáciles de usar para que gestiones tu hosting sin dificultad alguna.",
  },
  {
    icon: RefreshCw,
    title: "Política de reembolso",
    description: "Si no cumplimos lo prometido, recibirás un reembolso completo sin complicaciones. Así de simple y sin excusas.",
  },
  {
    icon: Shield,
    title: "Confiabilidad",
    description: "Garantizamos disponibilidad del servicio y una infraestructura confiable para que no sufras interrupciones en ningún momento.",
  },
  {
    icon: Lock,
    title: "Seguridad",
    description: "Implementamos sólidas medidas de seguridad, como firewalls y protección DDoS, para proteger los datos y privacidad de los usuarios.",
  },
  {
    icon: Cpu,
    title: "Hardware Moderno",
    description: "Contamos con hardware de alta gama, ideal para alojar servidores que requieren gran potencia de CPU y almacenamiento NVMe veloz.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            SIN <span className="text-gradient-primary">COMPLICACIONES</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            No pagues de más por tu servidor de Minecraft. Con más de <strong className="text-foreground">8 años de experiencia</strong> alojando servidores, 
            sabemos exactamente lo que hacemos y podemos ayudarte con cualquier problema. Te cubrimos con lo que necesitas:
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-8 group"
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
