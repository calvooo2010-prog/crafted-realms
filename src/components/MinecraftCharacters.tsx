import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Character {
  id: number;
  type: "steve" | "creeper" | "zombie" | "enderman";
  side: "left" | "right";
  verticalPosition: number;
}

const MinecraftCharacters = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [lastSide, setLastSide] = useState<"left" | "right">("right");

  const spawnCharacter = useCallback(() => {
    const newSide = lastSide === "left" ? "right" : "left";
    const types: Character["type"][] = ["steve", "creeper", "zombie", "enderman"];
    
    const newCharacter: Character = {
      id: Date.now(),
      type: types[Math.floor(Math.random() * types.length)],
      side: newSide,
      verticalPosition: 20 + Math.random() * 50, // 20% to 70% from top
    };
    
    setCharacter(newCharacter);
    setLastSide(newSide);

    // Remove after 3 seconds
    setTimeout(() => {
      setCharacter(null);
    }, 3000);
  }, [lastSide]);

  useEffect(() => {
    // Initial spawn after 2 seconds
    const initialTimeout = setTimeout(spawnCharacter, 2000);
    
    // Spawn new character every 5 seconds
    const interval = setInterval(() => {
      spawnCharacter();
    }, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [spawnCharacter]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence mode="wait">
        {character && (
          <PeekingCharacter key={character.id} character={character} />
        )}
      </AnimatePresence>
    </div>
  );
};

const PeekingCharacter = ({ character }: { character: Character }) => {
  const isLeft = character.side === "left";
  
  return (
    <motion.div
      className={`absolute ${isLeft ? "left-0" : "right-0"}`}
      style={{ top: `${character.verticalPosition}%` }}
      initial={{ x: isLeft ? -100 : 100 }}
      animate={{ 
        x: isLeft ? -20 : 20,
        transition: { 
          duration: 0.8, 
          ease: [0.34, 1.56, 0.64, 1] // Spring-like ease
        }
      }}
      exit={{ 
        x: isLeft ? -100 : 100,
        transition: { 
          duration: 0.5, 
          ease: "easeIn" 
        }
      }}
    >
      <motion.div 
        className={`${!isLeft ? "scale-x-[-1]" : ""}`}
        animate={{ 
          rotate: [0, -5, 5, -3, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <CharacterHead type={character.type} />
      </motion.div>
    </motion.div>
  );
};

const CharacterHead = ({ type }: { type: Character["type"] }) => {
  const heads = {
    steve: (
      <svg width="80" height="96" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        {/* Head base - skin */}
        <rect x="2" y="2" width="16" height="16" fill="#c4a484" />
        
        {/* Hair */}
        <rect x="2" y="2" width="16" height="4" fill="#4a3728" />
        <rect x="2" y="2" width="2" height="10" fill="#4a3728" />
        <rect x="16" y="2" width="2" height="10" fill="#4a3728" />
        
        {/* Face details */}
        <rect x="4" y="6" width="4" height="4" fill="#4a3728" /> {/* Left eye area */}
        <rect x="12" y="6" width="4" height="4" fill="#4a3728" /> {/* Right eye area */}
        <rect x="5" y="7" width="2" height="2" fill="#ffffff" /> {/* Left eye white */}
        <rect x="13" y="7" width="2" height="2" fill="#ffffff" /> {/* Right eye white */}
        <rect x="5" y="7" width="1" height="2" fill="#6b4423" /> {/* Left pupil */}
        <rect x="13" y="7" width="1" height="2" fill="#6b4423" /> {/* Right pupil */}
        
        {/* Nose */}
        <rect x="9" y="10" width="2" height="2" fill="#a68b6a" />
        
        {/* Mouth */}
        <rect x="7" y="13" width="6" height="2" fill="#8b6f5c" />
        <rect x="8" y="13" width="4" height="1" fill="#5c4033" />
        
        {/* Neck/Body hint */}
        <rect x="6" y="18" width="8" height="6" fill="#00a8a8" />
        <rect x="4" y="18" width="2" height="4" fill="#c4a484" /> {/* Left arm */}
        <rect x="14" y="18" width="2" height="4" fill="#c4a484" /> {/* Right arm */}
      </svg>
    ),
    creeper: (
      <svg width="80" height="96" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        {/* Head base */}
        <rect x="2" y="2" width="16" height="16" fill="#50c878" />
        <rect x="4" y="4" width="12" height="12" fill="#3cb371" />
        
        {/* Darker patches */}
        <rect x="2" y="2" width="4" height="4" fill="#2e8b57" />
        <rect x="14" y="2" width="4" height="4" fill="#2e8b57" />
        <rect x="8" y="14" width="4" height="4" fill="#2e8b57" />
        
        {/* Eyes */}
        <rect x="4" y="5" width="4" height="5" fill="#1a1a1a" />
        <rect x="12" y="5" width="4" height="5" fill="#1a1a1a" />
        
        {/* Mouth */}
        <rect x="8" y="10" width="4" height="2" fill="#1a1a1a" />
        <rect x="6" y="12" width="8" height="4" fill="#1a1a1a" />
        <rect x="8" y="12" width="4" height="4" fill="#0d0d0d" />
        
        {/* Body hint */}
        <rect x="4" y="18" width="12" height="6" fill="#50c878" />
        <rect x="6" y="18" width="8" height="6" fill="#3cb371" />
      </svg>
    ),
    zombie: (
      <svg width="80" height="96" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        {/* Head base - green zombie skin */}
        <rect x="2" y="2" width="16" height="16" fill="#5a7d4c" />
        <rect x="4" y="4" width="12" height="12" fill="#6b8f5c" />
        
        {/* Hair - messy dark */}
        <rect x="2" y="2" width="16" height="3" fill="#2d3a29" />
        <rect x="4" y="5" width="2" height="2" fill="#2d3a29" />
        <rect x="14" y="5" width="2" height="2" fill="#2d3a29" />
        
        {/* Eyes - hollow dark */}
        <rect x="4" y="6" width="4" height="4" fill="#1a1a1a" />
        <rect x="12" y="6" width="4" height="4" fill="#1a1a1a" />
        <rect x="5" y="7" width="2" height="2" fill="#2d5a1a" /> {/* Glowing green */}
        <rect x="13" y="7" width="2" height="2" fill="#2d5a1a" />
        
        {/* Nose */}
        <rect x="9" y="10" width="2" height="2" fill="#4a6b3c" />
        
        {/* Mouth - grimace */}
        <rect x="6" y="13" width="8" height="3" fill="#3d4f35" />
        <rect x="7" y="14" width="1" height="1" fill="#1a1a1a" />
        <rect x="9" y="14" width="2" height="1" fill="#1a1a1a" />
        <rect x="12" y="14" width="1" height="1" fill="#1a1a1a" />
        
        {/* Body - zombie clothes */}
        <rect x="6" y="18" width="8" height="6" fill="#4a6b8a" />
        <rect x="4" y="18" width="2" height="4" fill="#5a7d4c" />
        <rect x="14" y="18" width="2" height="4" fill="#5a7d4c" />
      </svg>
    ),
    enderman: (
      <svg width="80" height="96" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        {/* Head base - pure black */}
        <rect x="2" y="2" width="16" height="16" fill="#1a1a1a" />
        <rect x="4" y="4" width="12" height="12" fill="#0d0d0d" />
        
        {/* Eyes - purple glowing */}
        <rect x="3" y="8" width="6" height="3" fill="#ff00ff" />
        <rect x="11" y="8" width="6" height="3" fill="#ff00ff" />
        <rect x="4" y="9" width="4" height="1" fill="#ff66ff" /> {/* Highlight */}
        <rect x="12" y="9" width="4" height="1" fill="#ff66ff" />
        
        {/* Subtle face details */}
        <rect x="8" y="12" width="4" height="2" fill="#0d0d0d" />
        
        {/* Long neck/body - enderman is tall */}
        <rect x="7" y="18" width="6" height="6" fill="#1a1a1a" />
        <rect x="4" y="18" width="3" height="5" fill="#0d0d0d" /> {/* Long arm */}
        <rect x="13" y="18" width="3" height="5" fill="#0d0d0d" />
        
        {/* Particles effect */}
        <rect x="1" y="10" width="1" height="1" fill="#8b00ff" />
        <rect x="18" y="6" width="1" height="1" fill="#8b00ff" />
        <rect x="0" y="14" width="1" height="1" fill="#8b00ff" />
        <rect x="19" y="12" width="1" height="1" fill="#8b00ff" />
      </svg>
    )
  };

  return (
    <div className="opacity-90">
      {heads[type]}
    </div>
  );
};

export default MinecraftCharacters;
