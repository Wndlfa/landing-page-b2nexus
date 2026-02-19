import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Activity, Cpu, Globe } from "lucide-react";

const companies = [
  { name: 'TechFlow', icon: Activity },
  { name: 'Innovate', icon: Zap },
  { name: 'ScaleUp', icon: Cpu },
  { name: 'GrowthCo', icon: Globe },
  { name: 'NextGen', icon: Shield },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-glow" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container relative z-10 px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-start max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full my-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Marketing potencializado por IA</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-start">
            <span className="text-foreground">Escale seu </span>
            <span className="text-gradient">crescimento</span>
            <br />
            <span className="text-foreground">com automação</span>
          </h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-start"
          >
            A <strong className="text-foreground">B2 Nexus</strong> combina estratégia de marketing 
            com inteligência artificial para transformar leads em clientes de forma previsível e escalável.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-start items-start "
          >
            <Button variant="hero" size="lg" className="group">
              Agendar consultoria grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              Ver resultados
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="w-full aspect-square max-w-xl bg-muted/10 rounded-3xl border-2 border-dashed border-primary/20 flex items-center justify-center relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-3xl" />
            
            <div className="text-center p-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 shadow-lg shadow-primary/5">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Visualização do Produto</h3>
              <p className="text-sm text-muted-foreground">Adicione sua imagem ou mockup aqui</p>
            </div>
          </div>
        </motion.div>

       
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="container relative z-10 px-4 mt-12 pb-20 overflow-hidden"
      >
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-8 text-center uppercase tracking-wider font-medium opacity-80">
            Empresas que confiam na B2 Nexus
          </p>
          
          {/* Marquee Container */}
          <div className="relative group">
            {/* Gradient Mask for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex overflow-hidden">
              <motion.div 
                className="flex gap-12 items-center whitespace-nowrap"
                animate={{
                  x: [0, -1035], // Adjust based on content width roughly
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {/* Double the list for seamless loop */}
                {[...companies, ...companies].map((company, index) => (
                  <div 
                    key={`${company.name}-${index}`} 
                    className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group/item"
                  >
                    <div className="p-2 rounded-lg bg-muted/30 group-hover/item:bg-primary/10 transition-colors">
                      <company.icon className="w-5 h-5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                    </div>
                    <span className="text-lg font-bold text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {company.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;