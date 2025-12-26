import { motion } from "framer-motion";
import { Play, Users, Star, ExternalLink } from "lucide-react";

const creators = [
  {
    name: "ElRubius",
    handle: "@Rubius",
    avatar: "🎮",
    subscribers: "40M+",
    quote: "El mejor hosting que he probado para mi servidor de Minecraft.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Vegetta777",
    handle: "@Vegetta777",
    avatar: "🎯",
    subscribers: "35M+",
    quote: "Rendimiento increíble, cero lag incluso con muchos mods.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "TheWillyrex",
    handle: "@Willyrex",
    avatar: "⚡",
    subscribers: "18M+",
    quote: "Soporte 24/7 de verdad. Responden en minutos.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Auronplay",
    handle: "@auaboricua",
    avatar: "🔥",
    subscribers: "30M+",
    quote: "Panel super intuitivo, perfecto para empezar rápido.",
    gradient: "from-purple-500 to-violet-500",
  },
];

const FeaturedCreators = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-3xl"
        style={{ right: '15%', bottom: '20%' }}
        animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Play className="w-4 h-4 text-secondary" />
            <span className="text-secondary text-sm font-medium">Creadores de contenido</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Usado por los <span className="text-gradient-gold">mejores creadores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los streamers y youtubers más grandes confían en GamzyHost para sus servidores
          </p>
        </motion.div>

        {/* Creators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full relative overflow-hidden group cursor-pointer"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${creator.gradient} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {creator.avatar}
                  </motion.div>
                  <div>
                    <h4 className="text-foreground font-bold">{creator.name}</h4>
                    <p className="text-muted-foreground text-sm">{creator.handle}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{creator.subscribers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-sm italic">
                  "{creator.quote}"
                </p>

                {/* External link indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-4 right-4"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center bg-card/30 border border-border/30 rounded-2xl px-8 py-6">
            <div>
              <div className="text-3xl font-display font-bold text-gradient-primary">+180</div>
              <div className="text-muted-foreground text-sm">Creadores activos</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <div className="text-3xl font-display font-bold text-gradient-gold">500M+</div>
              <div className="text-muted-foreground text-sm">Suscriptores totales</div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <div className="text-3xl font-display font-bold text-foreground">24/7</div>
              <div className="text-muted-foreground text-sm">Soporte VIP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
