import { motion } from "framer-motion";
import { Zap, ArrowRight, Gift, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative grid */}
          <div className="absolute inset-0 grid-pattern opacity-30" />
          
          <div className="relative z-10">
            {/* Promo badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-8 border border-secondary/30">
              <Tag className="w-4 h-4" />
              <span className="font-semibold text-sm">CUPONES ACTIVOS</span>
            </div>

            <h2 className="section-title mb-6">
              ¿LISTO PARA <span className="text-gradient-gold">COMENZAR</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
              CREA TU <span className="text-primary font-bold">SERVIDOR</span>
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              ¡Comienza hoy y te ofreceremos un descuento en tu primera factura con nuestra promoción de nuevos clientes! 
              Disponible por tiempo limitado.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="xl" className="gap-3 group">
                <Zap className="w-6 h-6" />
                <span>Empezar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl" className="gap-2">
                <Gift className="w-5 h-5" />
                Ver Promociones
              </Button>
            </div>

            {/* Discord widget placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 inline-flex items-center gap-3 bg-muted/50 px-6 py-3 rounded-full border border-border"
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">2.847</strong> Miembros en línea en Discord
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
