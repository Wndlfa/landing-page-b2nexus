import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Preços", href: "#preços" },
  { label: "FAQ", href: "#faq"}
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" style={{ background: '#030712' }}>
      {/* Fixed Navigation */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
        style={{
          background: scrollY > 50 ? 'rgba(3, 7, 18, 0.85)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(0, 212, 255, 0.06)' : '1px solid transparent',
        }}
      >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-20 h-12 rounded-lg flex items-center justify-center">
              <img src="logo-b2n.png" alt="B2 Nexus" className="w-16 h-16 rounded-lg object-contain" />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Ecossistema', 'Funcionalidades', 'Preços', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-md font-normal transition-colors duration-200 hover:text-primary text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          
          <div className="flex items-center gap-3">
            <a href="https://app.b2nexus.com.br/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transitions-colors duration-200 hover:text-primary hover:underline text-gray-300">
              Login
            </a>
            <Button
          variant="hero"
          size="sm"
          className="px-4 py-2 rounded-lg"
          onClick={() => window.open('https://app.b2nexus.com.br/login', '_blank noopener noreferrer')}
          >
            Testar Grátis
          </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-2">
                Fale conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
