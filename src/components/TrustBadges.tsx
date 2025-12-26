import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Award, Headphones, Server, Lock, Zap } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Garantía 30 días",
    description: "Reembolso completo",
    color: "from-emerald-500/20 to-emerald-600/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: Lock,
    title: "Pago Seguro",
    description: "SSL 256-bit",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Respuesta <5 min",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "SLA garantizado",
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    icon: Zap,
    title: "Activación Instant",
    description: "En segundos",
    color: "from-yellow-500/20 to-yellow-600/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-400",
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "4.9/5 estrellas",
    color: "from-pink-500/20 to-pink-600/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
];

const paymentMethods = [
  { name: "PayPal", logo: "💳" },
  { name: "Visa", logo: "💎" },
  { name: "Mastercard", logo: "🔷" },
  { name: "Crypto", logo: "₿" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Main trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${badge.color} border ${badge.borderColor} rounded-xl p-4 text-center group cursor-default`}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-background/50 flex items-center justify-center ${badge.iconColor}`}
                >
                  <badge.icon className="w-5 h-5" />
                </motion.div>
                <h4 className="text-foreground font-semibold text-sm mb-1">{badge.title}</h4>
                <p className="text-muted-foreground text-xs">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment methods & security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-border/30"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <CreditCard className="w-5 h-5" />
            <span className="text-sm">Métodos de pago seguros:</span>
          </div>
          
          <div className="flex items-center gap-4">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 bg-card/50 border border-border/30 rounded-lg px-4 py-2"
              >
                <span className="text-xl">{method.logo}</span>
                <span className="text-sm text-muted-foreground hidden sm:inline">{method.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full"
            />
            <span className="text-sm text-emerald-400">Conexión segura SSL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;
