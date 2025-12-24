import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, Gift, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { toast } from "sonner";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Minecraft Hosting", href: "#planes" },
    { label: "Características", href: "#beneficios" },
    { label: "Nosotros", href: "#confianza" },
    { label: "Soporte", href: "#soporte" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      {/* Top banner */}
      <div className="bg-primary/10 border-b border-primary/20 py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">
              <span className="text-secondary font-semibold">Oferta especial:</span>{" "}
              Hasta un 40% de descuento en tu primer mes
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              <strong className="text-foreground">3.847</strong> jugadores activos
            </span>
            <span className="flex items-center gap-1">
              <Server className="w-4 h-4 text-primary" />
              <strong className="text-foreground">4.521</strong> servidores
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:glow-primary transition-all duration-300">
              <span className="font-display font-black text-primary-foreground text-xl">G</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Gamzy<span className="text-primary">Host</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium flex items-center gap-1 group"
              >
                {item.label}
                <ChevronDown className="w-4 h-4 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="gold" size="sm" className="gap-2" onClick={() => toast.info("Giftcards", { description: "Próximamente disponible" })}>
              <Gift className="w-4 h-4" />
              Giftcards
            </Button>
            <Button variant="heroOutline" size="sm" onClick={() => toast.info("Área de Clientes", { description: "Redirigiendo al panel..." })}>
              Área de Clientes
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-border pt-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  <Button variant="gold" className="w-full" onClick={() => { setIsOpen(false); toast.info("Giftcards", { description: "Próximamente disponible" }); }}>
                    <Gift className="w-4 h-4 mr-2" />
                    Giftcards
                  </Button>
                  <Button variant="heroOutline" className="w-full" onClick={() => { setIsOpen(false); toast.info("Área de Clientes", { description: "Redirigiendo al panel..." }); }}>
                    Área de Clientes
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
