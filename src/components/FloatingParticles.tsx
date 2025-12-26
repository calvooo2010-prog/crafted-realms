import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'emerald' | 'enchant' | 'star' | 'diamond';
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const types: Particle['type'][] = ['emerald', 'enchant', 'star', 'diamond'];
      
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 2,
          type: types[Math.floor(Math.random() * types.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const getParticleContent = (type: Particle['type'], size: number) => {
    switch (type) {
      case 'emerald':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
            <polygon 
              points="8,0 16,8 8,16 0,8" 
              fill="url(#emeraldGradient)"
            />
            <defs>
              <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'enchant':
        return (
          <div 
            className="rounded-full bg-gradient-to-br from-purple-400 via-violet-500 to-purple-600 drop-shadow-[0_0_6px_rgba(139,92,246,0.8)]"
            style={{ width: size * 0.6, height: size * 0.6 }}
          />
        );
      case 'star':
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" className="drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
            <polygon 
              points="12,0 15,9 24,9 17,14 20,24 12,18 4,24 7,14 0,9 9,9" 
              fill="url(#starGradient)"
            />
            <defs>
              <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
          </svg>
        );
      case 'diamond':
        return (
          <svg width={size} height={size} viewBox="0 0 16 16" className="drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
            <polygon 
              points="8,0 16,6 8,16 0,6" 
              fill="url(#diamondGradient)"
            />
            <defs>
              <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{
            opacity: [0, 0.8, 0.6, 0.8, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            y: [-20, -60, -40, -80, -100],
            x: [0, 10, -5, 15, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          {getParticleContent(particle.type, particle.size)}
        </motion.div>
      ))}
      
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        style={{ left: '10%', top: '20%' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        style={{ right: '15%', top: '40%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl"
        style={{ left: '50%', bottom: '10%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default FloatingParticles;
