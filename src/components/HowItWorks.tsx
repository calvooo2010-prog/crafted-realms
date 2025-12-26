import { motion } from "framer-motion";
import { Rocket, Settings, Play, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    number: "01",
    title: "Elige tu Plan",
    description: "Selecciona el plan que mejor se adapte a tus necesidades. Desde servidores pequeños hasta redes masivas.",
    color: "from-emerald-500 to-emerald-600",
    delay: 0,
  },
  {
    icon: Settings,
    number: "02",
    title: "Configura tu Servidor",
    description: "Personaliza tu servidor con nuestro panel intuitivo. Instala mods, plugins y configura todo en minutos.",
    color: "from-blue-500 to-blue-600",
    delay: 0.1,
  },
  {
    icon: Play,
    number: "03",
    title: "¡Empieza a Jugar!",
    description: "Tu servidor estará listo en segundos. Invita a tus amigos y comienza tu aventura en Minecraft.",
    color: "from-purple-500 to-purple-600",
    delay: 0.2,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
          style={{ right: '-20%', top: '10%' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Super fácil</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tu servidor en <span className="text-gradient-primary">3 simples pasos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sin complicaciones, sin esperas. En menos de 5 minutos tendrás tu servidor de Minecraft funcionando.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full relative overflow-hidden group"
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-6xl font-display font-black text-muted/20">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for non-last items */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center"
                      >
                        <span className="text-primary">→</span>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
