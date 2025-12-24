import { motion } from "framer-motion";

const stats = [
  { value: "99.98%", label: "SLA Uptime 2025" },
  { value: "+200", label: "Creadores de Contenido" },
  { value: "+120.000", label: "Servidores Alojados" },
  { value: "+8", label: "Años a tu servicio" },
  { value: "+70", label: "Nodos operando" },
  { value: "+12.000", label: "Miembros en Discord" },
];

const StatsSection = () => {
  return (
    <section id="confianza" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-elevated max-w-md mx-auto mb-16 overflow-hidden"
        >
          {/* Terminal bar */}
          <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-secondary/80" />
            <div className="w-3 h-3 rounded-full bg-primary/80" />
            <span className="text-muted-foreground text-sm ml-2">GamzyHost/Web</span>
          </div>
          {/* Terminal content */}
          <div className="p-4 font-mono text-sm">
            <span className="text-primary">→ GamzyHost</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-secondary">stats</span>
            <br />
            <span className="text-muted-foreground">root@server</span>
            <span className="text-foreground">|</span>
            <span className="animate-pulse">_</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground text-lg mb-2">Algunas Estadísticas...</p>
          <h2 className="section-title">
            NÚMEROS QUE <span className="text-gradient-gold">HABLAN</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Estos son solo algunos de nuestros increíbles números, y seguimos esforzándonos cada día para superarlos.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 card-elevated card-hover"
            >
              <p className="stat-number text-gradient-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
