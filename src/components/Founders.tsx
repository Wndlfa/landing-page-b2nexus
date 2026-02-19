import { motion } from "framer-motion";
import { User, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Jhordan Borges",
    role: "CEO & Co-founder",
    description: "Visionário estratégico com mais de 10 anos de experiência em growth hacking e escala de negócios digitais.",
    image: "jhordan-perfil.webp", 
    linkedin: "https://www.linkedin.com/in/", 
    twitter: "https://twitter.com/", 
    instagram: "https://instagram.com/", 
  },
  {
    name: "Wendel Lucas",
    role: "CTO & Founder",
    description: "Especialista em inteligência artificial e arquitetura de sistemas distribuídos de alta performance.",
    image: "wendel-perfil.webp", 
    linkedin: "https://www.linkedin.com/in/",
    twitter: "https://twitter.com/", 
    instagram: "https://instagram.com/", 
  },
  {
    name: "Rodrigo Santos",
    role: "CMO & Co-founder",
    description: "Mestre em branding e psicologia do consumidor, focado em criar conexões autênticas.",
    image: "rodrigo-perfil.webp", 
    linkedin: "https://www.linkedin.com/in/", 
    twitter: "https://twitter.com/", 
    instagram: "https://instagram.com/", 
  },
];

const Founders = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Liderança
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conheça quem faz <span className="text-gradient">acontecer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa equipe de fundadores combina expertise técnica, visão de negócios e criatividade para revolucionar o marketing digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass p-1 rounded-3xl h-full flex flex-col transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                <div className="bg-card/50 rounded-[1.25rem] p-6 h-full flex flex-col items-center text-center backdrop-blur-sm border border-white/5">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-square mb-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:from-primary/10 group-hover:to-accent/5 transition-colors">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,transparent)]" />
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover text-muted-foreground/30 group-hover:text-primary/50 transition-all duration-500 transform-gpu" 
                      style={{ 
                        imageRendering: '-webkit-optimize-contrast',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                    
                    {/* Placeholder content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-3">
                      <Button size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 rounded-full bg-background/20 hover:bg-primary hover:text-white backdrop-blur-md"
                      onClick={() => window.open(founder.linkedin, "_blank noopener noreferrer")}>
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 rounded-full bg-background/20 hover:bg-primary hover:text-white backdrop-blur-md"
                      onClick={() => window.open(founder.twitter, "_blank noopener noreferrer")}>
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 rounded-full bg-background/20 hover:bg-primary hover:text-white backdrop-blur-md"
                      onClick={() => window.open(founder.instagram, "_blank noopener noreferrer")}>
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center w-full">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{founder.name}</h3>
                    <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">{founder.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {founder.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
