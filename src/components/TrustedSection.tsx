import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const creators = [
  {
    name: "MineKing",
    role: "CREADOR DE CONTENIDO",
    description: "Uno de los streamers más grandes de Minecraft en español, confía en nosotros para sus eventos masivos.",
    avatar: "🎮",
  },
  {
    name: "CraftMaster",
    role: "CREADOR DE CONTENIDO",
    description: "Junto a él organizamos eventos épicos que han reunido a miles de jugadores simultáneos.",
    avatar: "⚔️",
  },
  {
    name: "BlockLegend",
    role: "CREADOR DE CONTENIDO",
    description: "Alojamos su servidor personalizado para su comunidad y la creación de contenido premium.",
    avatar: "🏆",
  },
];

const TrustedSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title flex items-center justify-center gap-4 flex-wrap">
            <Trophy className="w-10 h-10 text-secondary" />
            <span>
              CONFIADOS POR{" "}
              <span className="text-secondary">+200</span> CREADORES
            </span>
            <Trophy className="w-10 h-10 text-secondary" />
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-6 text-lg">
            Más de 200 creadores y creadoras confían en NetherHost para alojar sus servidores, 
            comunidades y proyectos personalizados, gracias a nuestra infraestructura optimizada. 
            <strong className="text-foreground underline decoration-primary decoration-2 underline-offset-4">
              Únete a una comunidad que elige estabilidad y calidad
            </strong>, 
            para llevar sus ideas al siguiente nivel.
          </p>
        </motion.div>

        {/* Creators grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-6 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center text-4xl">
                {creator.avatar}
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {creator.name}
              </h3>
              <p className="text-primary text-sm font-semibold mb-3">
                {creator.role}
              </p>
              <p className="text-muted-foreground text-sm">
                {creator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
