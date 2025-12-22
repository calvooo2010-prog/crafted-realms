import { motion } from "framer-motion";
import { Check, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    ram: "2GB",
    price: "1.79",
    features: [
      "2GB RAM DDR5",
      "1 vCPU Core",
      "20GB NVMe SSD",
      "Slots ilimitados",
      "Anti-DDoS incluido",
      "Soporte 24/7",
      "Panel Pterodactyl",
    ],
    popular: false,
  },
  {
    name: "Gamer",
    ram: "4GB",
    price: "3.49",
    features: [
      "4GB RAM DDR5",
      "2 vCPU Cores",
      "40GB NVMe SSD",
      "Slots ilimitados",
      "Anti-DDoS incluido",
      "Soporte prioritario",
      "Panel Pterodactyl",
      "Backups diarios",
    ],
    popular: false,
  },
  {
    name: "Pro",
    ram: "8GB",
    price: "6.89",
    features: [
      "8GB RAM DDR5",
      "4 vCPU Cores",
      "80GB NVMe SSD",
      "Slots ilimitados",
      "Anti-DDoS premium",
      "Soporte VIP",
      "Panel Pterodactyl",
      "Backups diarios",
      "Subdominio gratis",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    ram: "16GB",
    price: "13.49",
    features: [
      "16GB RAM DDR5",
      "8 vCPU Cores",
      "160GB NVMe SSD",
      "Slots ilimitados",
      "Anti-DDoS enterprise",
      "Soporte dedicado",
      "Panel Pterodactyl",
      "Backups cada hora",
      "Subdominio gratis",
      "IP dedicada",
    ],
    popular: false,
  },
];

const PlansSection = () => {
  return (
    <section id="planes" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            ELIGE TU <span className="text-gradient-gold">PLAN</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Servidores optimizados para Minecraft con la mejor relación calidad-precio del mercado. 
            Todos los planes incluyen activación instantánea.
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border p-6 flex flex-col ${
                plan.popular 
                  ? 'plan-card-popular bg-card' 
                  : 'bg-card border-border'
              } card-hover`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MÁS POPULAR
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.ram} RAM</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-display font-black text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "gold" : "hero"} 
                className="w-full gap-2 group"
              >
                <Zap className="w-4 h-4" />
                Contratar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Price comparison note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Precios desde <strong className="text-primary">$0.89/GB/mes</strong> — 
          El mejor precio del mercado comparado con otros proveedores
        </motion.p>
      </div>
    </section>
  );
};

export default PlansSection;
