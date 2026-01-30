import { motion } from "framer-motion";
import { Zap, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">B2 Nexus</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Transformando negócios através de marketing inteligente e automação com IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Automação com IA</li>
              <li className="hover:text-primary transition-colors cursor-pointer">CRM</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Disparos em Massa</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">contato@b2nexus.com.br</li>
              <li className="hover:text-primary transition-colors cursor-pointer">+55 34 9940-7901</li>
            </ul>
            
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 B2 Nexus. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => window.open("/privacy-policy", "_blank")}>Política de Privacidade</span>
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => window.open("/terms-of-use", "_blank")}>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;