import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DashboardImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // Estados do Carrossel
  const [isFlat, setIsFlat] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Array com as imagens do seu Dashboard B2Nexus
  const dashboardImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=2076"
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end start"], // Começa a animar quando o topo do container chega a 80% da tela

  });
  // Ajuste fino dos tempos: a imagem termina de levantar em 40% do scroll do container
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
  const opacityScroll = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.4 && latest < 0.8) {
      if (!isFlat) setIsFlat(true);
    } 
    else {
      if (isFlat) setIsFlat(false);
    }
  });

  const nextImage = () => {
    setCurrentImg((prev) => (prev === dashboardImages.length - 1 ? 0 : prev + 1));
  };
  const prevImage = () => {
    setCurrentImg((prev) => (prev === 0 ? dashboardImages.length - 1 : prev - 1));
  };

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full mt-4 pb-24">
      <div className="sticky top-[15vh] w-full flex justify-center" style={{ perspective: "1000px" }}>
      <motion.div
        style={{
          rotateX,
          scale,
          y,
          opacity: opacityScroll,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[1250px] px-4"
      >
        <div className="relative glass rounded-2xl p-2 md:p-4 border-primary/20 overflow-hidden shadow-2xl shadow-primary/10 group">
            
            {/* Imagem com AnimatePresence para uma transição suave de crossfade */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImg}
                src={dashboardImages[currentImg]}
                alt={`Dashboard View ${currentImg + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto rounded-xl shadow-inner border border-white/10"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />

            {/* Botões do Carrossel - Estilo Neon Outline */}
            <AnimatePresence>
              {isFlat && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none"
                >
                  {/* Botão Voltar */}
                  <button 
                    onClick={prevImage}
                    className="pointer-events-auto p-3 rounded-full bg-transparent hover:bg-white/5 group-hover:scale-110 scale-100 transition-all group backdrop-blur-sm border shadow-[0_0_15px_rgba(0,212,255,0.05)] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                    style={{
                      borderColor: 'rgba(0, 212, 255, 0.3)',
                      color: '#00d4ff',
                    }}
                  >
                    <ChevronLeft size={28} className="group-hover:scale-110 scale-100 transition-transform" />
                  </button>

                  {/* Botão Avançar */}
                  <button 
                    onClick={nextImage}
                    className="pointer-events-auto p-3 rounded-full bg-transparent hover:bg-white/5 group-hover:scale-110 scale-100 transition-all group backdrop-blur-sm border shadow-[0_0_15px_rgba(0,212,255,0.05)] hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                    style={{
                      borderColor: 'rgba(0, 212, 255, 0.3)',
                      color: '#00d4ff',
                    }}
                  >
                    <ChevronRight size={28} className="group-hover:scale-110 scale-100 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicadores de bolinha (Dots) combinando com o Neon */}
            <AnimatePresence>
              {isFlat && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
                >
                  {dashboardImages.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentImg 
                          ? "w-8" 
                          : "w-2 bg-white/30"
                      }`}
                      style={idx === currentImg ? { 
                        backgroundColor: '#00d4ff',
                        boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)' 
                      } : {}}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicadores de bolinha (Dots) no rodapé */}
            <AnimatePresence>
              {isFlat && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
                >
                  {dashboardImages.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-2 rounded-full transition-all duration-300 ${idx === currentImg ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full opacity-30 -z-10 animate-pulse-glow" />
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardImage;