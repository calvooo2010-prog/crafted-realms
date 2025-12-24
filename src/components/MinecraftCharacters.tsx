import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Position = "left" | "right" | "top" | "bottom";

interface Character {
  id: number;
  type: "steve" | "creeper" | "zombie" | "enderman" | "skeleton" | "pig" | "witch" | "slime";
  position: Position;
  offset: number; // percentage along the edge
}

const MinecraftCharacters = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [lastPosition, setLastPosition] = useState<Position>("right");

  const getNextPosition = (last: Position): Position => {
    const positions: Position[] = ["left", "right", "top", "bottom"];
    const filtered = positions.filter(p => p !== last);
    return filtered[Math.floor(Math.random() * filtered.length)];
  };

  const spawnCharacter = useCallback(() => {
    const newPosition = getNextPosition(lastPosition);
    const types: Character["type"][] = ["steve", "creeper", "zombie", "enderman", "skeleton", "pig", "witch", "slime"];
    
    const newCharacter: Character = {
      id: Date.now(),
      type: types[Math.floor(Math.random() * types.length)],
      position: newPosition,
      offset: 15 + Math.random() * 70, // 15% to 85%
    };
    
    setCharacter(newCharacter);
    setLastPosition(newPosition);

    // Remove after 3.5 seconds
    setTimeout(() => {
      setCharacter(null);
    }, 3500);
  }, [lastPosition]);

  useEffect(() => {
    // Initial spawn after 1.5 seconds
    const initialTimeout = setTimeout(spawnCharacter, 1500);
    
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
  const { position, offset } = character;
  
  const getPositionStyles = () => {
    switch (position) {
      case "left":
        return { left: 0, top: `${offset}%`, transform: "translateY(-50%)" };
      case "right":
        return { right: 0, top: `${offset}%`, transform: "translateY(-50%)" };
      case "top":
        return { top: 0, left: `${offset}%`, transform: "translateX(-50%)" };
      case "bottom":
        return { bottom: 0, left: `${offset}%`, transform: "translateX(-50%)" };
    }
  };

  const getAnimation = () => {
    const peekDistance = 35;
    switch (position) {
      case "left":
        return { initial: { x: -120 }, animate: { x: -peekDistance }, exit: { x: -120 } };
      case "right":
        return { initial: { x: 120 }, animate: { x: peekDistance }, exit: { x: 120 } };
      case "top":
        return { initial: { y: -120 }, animate: { y: -peekDistance }, exit: { y: -120 } };
      case "bottom":
        return { initial: { y: 120 }, animate: { y: peekDistance }, exit: { y: 120 } };
    }
  };

  const getRotation = () => {
    switch (position) {
      case "left": return 0;
      case "right": return 0;
      case "top": return 180;
      case "bottom": return 0;
    }
  };

  const shouldFlip = position === "right";
  const animation = getAnimation();

  return (
    <motion.div
      className="absolute"
      style={getPositionStyles()}
      initial={animation.initial}
      animate={{ 
        ...animation.animate,
        transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
      }}
      exit={{ 
        ...animation.exit,
        transition: { duration: 0.5, ease: "easeIn" }
      }}
    >
      <motion.div 
        style={{ 
          transform: `${shouldFlip ? "scaleX(-1)" : ""} rotate(${getRotation()}deg)`,
        }}
        animate={{ rotate: [0, -3, 3, -2, 0] }}
        transition={{
          duration: 2.5,
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
  const heads: Record<Character["type"], JSX.Element> = {
    steve: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="2" y="2" width="16" height="16" fill="#c4a484" />
        <rect x="2" y="2" width="16" height="4" fill="#4a3728" />
        <rect x="2" y="2" width="2" height="10" fill="#4a3728" />
        <rect x="16" y="2" width="2" height="10" fill="#4a3728" />
        <rect x="4" y="6" width="4" height="4" fill="#4a3728" />
        <rect x="12" y="6" width="4" height="4" fill="#4a3728" />
        <rect x="5" y="7" width="2" height="2" fill="#ffffff" />
        <rect x="13" y="7" width="2" height="2" fill="#ffffff" />
        <rect x="5" y="7" width="1" height="2" fill="#6b4423" />
        <rect x="13" y="7" width="1" height="2" fill="#6b4423" />
        <rect x="9" y="10" width="2" height="2" fill="#a68b6a" />
        <rect x="7" y="13" width="6" height="2" fill="#8b6f5c" />
        <rect x="8" y="13" width="4" height="1" fill="#5c4033" />
        <rect x="6" y="18" width="8" height="6" fill="#00a8a8" />
        <rect x="4" y="18" width="2" height="4" fill="#c4a484" />
        <rect x="14" y="18" width="2" height="4" fill="#c4a484" />
      </svg>
    ),
    creeper: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="2" y="2" width="16" height="16" fill="#50c878" />
        <rect x="4" y="4" width="12" height="12" fill="#3cb371" />
        <rect x="2" y="2" width="4" height="4" fill="#2e8b57" />
        <rect x="14" y="2" width="4" height="4" fill="#2e8b57" />
        <rect x="8" y="14" width="4" height="4" fill="#2e8b57" />
        <rect x="4" y="5" width="4" height="5" fill="#1a1a1a" />
        <rect x="12" y="5" width="4" height="5" fill="#1a1a1a" />
        <rect x="8" y="10" width="4" height="2" fill="#1a1a1a" />
        <rect x="6" y="12" width="8" height="4" fill="#1a1a1a" />
        <rect x="8" y="12" width="4" height="4" fill="#0d0d0d" />
        <rect x="4" y="18" width="12" height="6" fill="#50c878" />
        <rect x="6" y="18" width="8" height="6" fill="#3cb371" />
      </svg>
    ),
    zombie: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="2" y="2" width="16" height="16" fill="#5a7d4c" />
        <rect x="4" y="4" width="12" height="12" fill="#6b8f5c" />
        <rect x="2" y="2" width="16" height="3" fill="#2d3a29" />
        <rect x="4" y="5" width="2" height="2" fill="#2d3a29" />
        <rect x="14" y="5" width="2" height="2" fill="#2d3a29" />
        <rect x="4" y="6" width="4" height="4" fill="#1a1a1a" />
        <rect x="12" y="6" width="4" height="4" fill="#1a1a1a" />
        <rect x="5" y="7" width="2" height="2" fill="#2d5a1a" />
        <rect x="13" y="7" width="2" height="2" fill="#2d5a1a" />
        <rect x="9" y="10" width="2" height="2" fill="#4a6b3c" />
        <rect x="6" y="13" width="8" height="3" fill="#3d4f35" />
        <rect x="7" y="14" width="1" height="1" fill="#1a1a1a" />
        <rect x="9" y="14" width="2" height="1" fill="#1a1a1a" />
        <rect x="12" y="14" width="1" height="1" fill="#1a1a1a" />
        <rect x="6" y="18" width="8" height="6" fill="#4a6b8a" />
        <rect x="4" y="18" width="2" height="4" fill="#5a7d4c" />
        <rect x="14" y="18" width="2" height="4" fill="#5a7d4c" />
      </svg>
    ),
    enderman: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="2" y="2" width="16" height="16" fill="#1a1a1a" />
        <rect x="4" y="4" width="12" height="12" fill="#0d0d0d" />
        <rect x="3" y="8" width="6" height="3" fill="#ff00ff" />
        <rect x="11" y="8" width="6" height="3" fill="#ff00ff" />
        <rect x="4" y="9" width="4" height="1" fill="#ff66ff" />
        <rect x="12" y="9" width="4" height="1" fill="#ff66ff" />
        <rect x="8" y="12" width="4" height="2" fill="#0d0d0d" />
        <rect x="7" y="18" width="6" height="6" fill="#1a1a1a" />
        <rect x="4" y="18" width="3" height="5" fill="#0d0d0d" />
        <rect x="13" y="18" width="3" height="5" fill="#0d0d0d" />
        <rect x="1" y="10" width="1" height="1" fill="#8b00ff" />
        <rect x="18" y="6" width="1" height="1" fill="#8b00ff" />
        <rect x="0" y="14" width="1" height="1" fill="#8b00ff" />
        <rect x="19" y="12" width="1" height="1" fill="#8b00ff" />
      </svg>
    ),
    skeleton: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="2" y="2" width="16" height="16" fill="#c8c8c8" />
        <rect x="4" y="4" width="12" height="12" fill="#e8e8e8" />
        <rect x="4" y="5" width="4" height="5" fill="#1a1a1a" />
        <rect x="12" y="5" width="4" height="5" fill="#1a1a1a" />
        <rect x="5" y="6" width="2" height="3" fill="#3a3a3a" />
        <rect x="13" y="6" width="2" height="3" fill="#3a3a3a" />
        <rect x="8" y="10" width="4" height="2" fill="#4a4a4a" />
        <rect x="6" y="13" width="8" height="3" fill="#1a1a1a" />
        <rect x="7" y="13" width="1" height="2" fill="#e8e8e8" />
        <rect x="9" y="13" width="2" height="2" fill="#e8e8e8" />
        <rect x="12" y="13" width="1" height="2" fill="#e8e8e8" />
        <rect x="6" y="18" width="8" height="6" fill="#c8c8c8" />
        <rect x="4" y="18" width="2" height="4" fill="#e8e8e8" />
        <rect x="14" y="18" width="2" height="4" fill="#e8e8e8" />
      </svg>
    ),
    pig: (
      <svg width="100" height="100" viewBox="0 0 20 20" className="pixelated drop-shadow-2xl">
        <rect x="2" y="4" width="16" height="12" fill="#ffb6c1" />
        <rect x="4" y="6" width="12" height="8" fill="#ffc0cb" />
        <rect x="2" y="2" width="4" height="4" fill="#ffb6c1" />
        <rect x="14" y="2" width="4" height="4" fill="#ffb6c1" />
        <rect x="5" y="7" width="3" height="3" fill="#1a1a1a" />
        <rect x="12" y="7" width="3" height="3" fill="#1a1a1a" />
        <rect x="6" y="8" width="1" height="1" fill="#ffffff" />
        <rect x="13" y="8" width="1" height="1" fill="#ffffff" />
        <rect x="7" y="11" width="6" height="4" fill="#ff9999" />
        <rect x="8" y="12" width="1" height="2" fill="#1a1a1a" />
        <rect x="11" y="12" width="1" height="2" fill="#1a1a1a" />
        <rect x="4" y="16" width="3" height="4" fill="#ffb6c1" />
        <rect x="13" y="16" width="3" height="4" fill="#ffb6c1" />
      </svg>
    ),
    witch: (
      <svg width="100" height="120" viewBox="0 0 20 24" className="pixelated drop-shadow-2xl">
        <rect x="4" y="8" width="12" height="10" fill="#c9a07a" />
        <rect x="6" y="10" width="8" height="6" fill="#d4b08c" />
        <rect x="4" y="0" width="12" height="10" fill="#1a1a1a" />
        <rect x="6" y="2" width="8" height="2" fill="#2d1b4e" />
        <rect x="8" y="0" width="4" height="2" fill="#3d2b5e" />
        <rect x="5" y="10" width="3" height="3" fill="#1a1a1a" />
        <rect x="12" y="10" width="3" height="3" fill="#1a1a1a" />
        <rect x="6" y="11" width="1" height="1" fill="#8b00ff" />
        <rect x="13" y="11" width="1" height="1" fill="#8b00ff" />
        <rect x="9" y="13" width="2" height="3" fill="#5c8a4a" />
        <rect x="7" y="16" width="6" height="2" fill="#5c4033" />
        <rect x="6" y="18" width="8" height="6" fill="#4a1a6a" />
        <rect x="4" y="18" width="2" height="4" fill="#c9a07a" />
        <rect x="14" y="18" width="2" height="4" fill="#c9a07a" />
      </svg>
    ),
    slime: (
      <svg width="100" height="100" viewBox="0 0 20 20" className="pixelated drop-shadow-2xl">
        <rect x="2" y="4" width="16" height="14" fill="#7cb342" />
        <rect x="4" y="6" width="12" height="10" fill="#8bc34a" />
        <rect x="3" y="8" width="14" height="6" fill="#9ccc65" />
        <rect x="4" y="7" width="4" height="4" fill="#1a1a1a" />
        <rect x="12" y="7" width="4" height="4" fill="#1a1a1a" />
        <rect x="5" y="8" width="2" height="2" fill="#2e7d32" />
        <rect x="13" y="8" width="2" height="2" fill="#2e7d32" />
        <rect x="7" y="12" width="6" height="3" fill="#1a1a1a" />
        <rect x="8" y="13" width="4" height="1" fill="#558b2f" />
        <rect x="4" y="16" width="4" height="2" fill="#689f38" />
        <rect x="12" y="16" width="4" height="2" fill="#689f38" />
      </svg>
    ),
  };

  return (
    <div className="opacity-90">
      {heads[type]}
    </div>
  );
};

export default MinecraftCharacters;
