import { motion } from "framer-motion";
import { Server, HardDrive, Cpu, Wifi, Globe, Database } from "lucide-react";

const techFeatures = [
  { icon: Cpu, label: "AMD Ryzen 9", value: "5950X / 7950X" },
  { icon: HardDrive, label: "NVMe SSD", value: "Gen4 Ultra-rápido" },
  { icon: Server, label: "RAM DDR5", value: "Hasta 128GB" },
  { icon: Wifi, label: "Red", value: "10Gbps" },
  { icon: Globe, label: "Latencia", value: "<15ms" },
  { icon: Database, label: "Backups", value: "Automáticos" },
];

const locations = [
  { region: "Norteamérica", count: "6 ubicaciones", flag: "🇺🇸" },
  { region: "Europa", count: "3 ubicaciones", flag: "🇩🇪" },
  { region: "Sudamérica", count: "2 ubicaciones", flag: "🇦🇷" },
  { region: "Asia", count: "1 ubicación", flag: "🇸🇬" },
  { region: "Oceanía", count: "1 ubicación", flag: "🇦🇺" },
];

const TechSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
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
            UN PANEL QUE SIMPLEMENTE <span className="text-gradient-primary">FUNCIONA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un panel de control rápido, claro y potente que te simplifica todo desde el primer clic.
          </p>
        </motion.div>

        {/* Tech specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card-elevated card-hover p-4 text-center"
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-muted-foreground text-xs mb-1">{feature.label}</p>
              <p className="font-display font-bold text-sm text-foreground">{feature.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Global coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
              TE TENEMOS CUBIERTO, EN TODO EL <span className="text-primary">MUNDO</span>
            </h3>
            <p className="text-muted-foreground">
              Hay más de <strong className="text-foreground">13 ubicaciones globales</strong> disponibles para hostear tu servidor al instante.
            </p>
          </div>

          {/* Locations grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-muted/50 rounded-lg p-4 text-center border border-border/50 hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl mb-2 block">{location.flag}</span>
                <p className="font-display font-bold text-sm text-foreground">{location.region}</p>
                <p className="text-muted-foreground text-xs">{location.count}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
