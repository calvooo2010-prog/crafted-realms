import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Character {
  id: number;
  type: "steve" | "creeper" | "pig" | "chicken";
  side: "left" | "right";
  top: number;
  action: "walk" | "peek" | "jump";
}

const MinecraftCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Only trigger on significant scroll
      if (scrollDelta > 300 && characters.length < 2) {
        const shouldSpawn = Math.random() > 0.6; // 40% chance
        
        if (shouldSpawn) {
          const newCharacter: Character = {
            id: Date.now(),
            type: ["steve", "creeper", "pig", "chicken"][Math.floor(Math.random() * 4)] as Character["type"],
            side: Math.random() > 0.5 ? "left" : "right",
            top: Math.min(Math.max(currentScrollY + 200, 100), document.body.scrollHeight - 400),
            action: ["walk", "peek", "jump"][Math.floor(Math.random() * 3)] as Character["action"],
          };
          
          setCharacters(prev => [...prev, newCharacter]);
          
          // Remove character after animation
          timeout = setTimeout(() => {
            setCharacters(prev => prev.filter(c => c.id !== newCharacter.id));
          }, 4000);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, [lastScrollY, characters.length]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {characters.map((char) => (
          <CharacterSprite key={char.id} character={char} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const CharacterSprite = ({ character }: { character: Character }) => {
  const isLeft = character.side === "left";
  
  const getVariants = () => {
    const baseInitial = { x: isLeft ? -80 : 80, opacity: 0 };
    const baseExit = { x: isLeft ? -80 : 80, opacity: 0 };
    
    switch (character.action) {
      case "walk":
        return {
          initial: baseInitial,
          animate: { x: isLeft ? 20 : -20, opacity: 1 },
          exit: baseExit
        };
      case "peek":
        return {
          initial: { x: isLeft ? -60 : 60, opacity: 0 },
          animate: { x: isLeft ? -20 : 20, opacity: 1 },
          exit: { x: isLeft ? -60 : 60, opacity: 0 }
        };
      case "jump":
        return {
          initial: { x: isLeft ? -80 : 80, y: 50, opacity: 0 },
          animate: { x: isLeft ? 10 : -10, y: 0, opacity: 1 },
          exit: { x: isLeft ? -80 : 80, y: 50, opacity: 0 }
        };
      default:
        return {
          initial: baseInitial,
          animate: { x: isLeft ? 20 : -20, opacity: 1 },
          exit: baseExit
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      className={`absolute ${isLeft ? "left-0" : "right-0"}`}
      style={{ top: character.top }}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
    >
      <div className={`${!isLeft ? "scale-x-[-1]" : ""}`}>
        <PixelCharacter type={character.type} action={character.action} />
      </div>
    </motion.div>
  );
};

const PixelCharacter = ({ type, action }: { type: Character["type"]; action: Character["action"] }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (action === "walk") {
      const interval = setInterval(() => {
        setFrame(f => (f + 1) % 2);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [action]);

  const characters = {
    steve: (
      <svg width="48" height="64" viewBox="0 0 12 16" className="pixelated">
        {/* Head */}
        <rect x="2" y="0" width="8" height="8" fill="#c4a484" />
        <rect x="3" y="2" width="2" height="2" fill="#4a3728" /> {/* Left eye */}
        <rect x="7" y="2" width="2" height="2" fill="#4a3728" /> {/* Right eye */}
        <rect x="5" y="4" width="2" height="1" fill="#8b7355" /> {/* Nose */}
        <rect x="4" y="5" width="4" height="1" fill="#8b6f5c" /> {/* Mouth */}
        <rect x="2" y="0" width="8" height="2" fill="#4a3728" /> {/* Hair */}
        {/* Body */}
        <rect x="2" y="8" width="8" height="4" fill="#00a8a8" />
        {/* Legs */}
        <rect x="2" y="12" width="3" height="4" fill="#3b5998" style={{ transform: frame === 1 ? "translateY(-1px)" : "" }} />
        <rect x="7" y="12" width="3" height="4" fill="#3b5998" style={{ transform: frame === 0 ? "translateY(-1px)" : "" }} />
        {/* Arms */}
        <rect x="0" y="8" width="2" height="4" fill="#c4a484" style={{ transform: action === "jump" ? "rotate(-45deg)" : "" }} />
        <rect x="10" y="8" width="2" height="4" fill="#c4a484" style={{ transform: action === "jump" ? "rotate(45deg)" : "" }} />
      </svg>
    ),
    creeper: (
      <svg width="48" height="64" viewBox="0 0 12 16" className="pixelated">
        {/* Head/Body - Creeper is basically a tall rectangle */}
        <rect x="2" y="0" width="8" height="12" fill="#50c878" />
        <rect x="3" y="0" width="6" height="12" fill="#3cb371" />
        {/* Face */}
        <rect x="3" y="2" width="2" height="3" fill="#1a1a1a" /> {/* Left eye */}
        <rect x="7" y="2" width="2" height="3" fill="#1a1a1a" /> {/* Right eye */}
        <rect x="5" y="5" width="2" height="1" fill="#1a1a1a" /> {/* Nose bridge */}
        <rect x="4" y="6" width="4" height="3" fill="#1a1a1a" /> {/* Mouth */}
        <rect x="5" y="6" width="2" height="3" fill="#0d0d0d" /> {/* Inner mouth */}
        {/* Legs */}
        <rect x="2" y="12" width="3" height="4" fill="#50c878" />
        <rect x="7" y="12" width="3" height="4" fill="#50c878" />
      </svg>
    ),
    pig: (
      <svg width="48" height="48" viewBox="0 0 12 12" className="pixelated">
        {/* Body */}
        <rect x="1" y="4" width="10" height="5" fill="#f5a9b8" />
        <rect x="2" y="4" width="8" height="5" fill="#ffb6c1" />
        {/* Head */}
        <rect x="3" y="1" width="6" height="5" fill="#ffb6c1" />
        {/* Eyes */}
        <rect x="4" y="2" width="1" height="2" fill="#1a1a1a" />
        <rect x="7" y="2" width="1" height="2" fill="#1a1a1a" />
        {/* Snout */}
        <rect x="4" y="4" width="4" height="2" fill="#ff9999" />
        <rect x="5" y="4" width="1" height="1" fill="#1a1a1a" />
        <rect x="6" y="4" width="1" height="1" fill="#1a1a1a" />
        {/* Legs */}
        <rect x="2" y="9" width="2" height="3" fill="#ffb6c1" />
        <rect x="8" y="9" width="2" height="3" fill="#ffb6c1" />
        {/* Ears */}
        <rect x="3" y="0" width="2" height="2" fill="#ffb6c1" />
        <rect x="7" y="0" width="2" height="2" fill="#ffb6c1" />
      </svg>
    ),
    chicken: (
      <svg width="40" height="48" viewBox="0 0 10 12" className="pixelated">
        {/* Body */}
        <rect x="2" y="4" width="6" height="5" fill="#f5f5f5" />
        <rect x="3" y="4" width="4" height="5" fill="#ffffff" />
        {/* Head */}
        <rect x="3" y="1" width="4" height="4" fill="#ffffff" />
        {/* Eyes */}
        <rect x="4" y="2" width="1" height="1" fill="#1a1a1a" />
        <rect x="6" y="2" width="1" height="1" fill="#1a1a1a" />
        {/* Beak */}
        <rect x="4" y="3" width="3" height="2" fill="#ffa500" />
        {/* Comb */}
        <rect x="4" y="0" width="2" height="2" fill="#ff0000" />
        {/* Wattle */}
        <rect x="5" y="5" width="1" height="1" fill="#ff0000" />
        {/* Legs */}
        <rect x="3" y="9" width="1" height="3" fill="#ffa500" />
        <rect x="6" y="9" width="1" height="3" fill="#ffa500" />
        {/* Wing */}
        <rect x="1" y="5" width="2" height="3" fill="#e8e8e8" />
      </svg>
    )
  };

  return (
    <div className="drop-shadow-lg opacity-70 hover:opacity-100 transition-opacity">
      {characters[type]}
    </div>
  );
};

export default MinecraftCharacters;
