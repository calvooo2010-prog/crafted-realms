import { motion } from "framer-motion";
import { Users, Server, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const LiveStatsWidget = () => {
  const [stats, setStats] = useState({
    serversOnline: 2847,
    playersOnline: 43521,
    uptime: 99.98,
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        serversOnline: prev.serversOnline + Math.floor(Math.random() * 3) - 1,
        playersOnline: prev.playersOnline + Math.floor(Math.random() * 50) - 25,
        uptime: 99.98,
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 hidden lg:block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-2xl min-w-[200px]"
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-emerald-500 rounded-full"
          />
          <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">
            Live Stats
          </span>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Servidores</span>
            </div>
            <motion.span
              key={stats.serversOnline}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold text-foreground font-display"
            >
              {stats.serversOnline.toLocaleString()}
            </motion.span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-muted-foreground">Jugadores</span>
            </div>
            <motion.span
              key={stats.playersOnline}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold text-foreground font-display"
            >
              {stats.playersOnline.toLocaleString()}
            </motion.span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-muted-foreground">Uptime</span>
            </div>
            <span className="text-sm font-bold text-emerald-400 font-display">
              {stats.uptime}%
            </span>
          </div>
        </div>

        {/* Pulse ring */}
        <motion.div
          className="absolute -inset-1 rounded-2xl border border-primary/20"
          animate={{ opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LiveStatsWidget;
