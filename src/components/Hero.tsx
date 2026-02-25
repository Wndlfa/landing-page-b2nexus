
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TrustIndicators } from "@/components/TrustIndicators";

function Particle({index}: {index: number}) {
  const size = Math.random() * 4 + 1;
  const left = Math.random() * 100;
  const animDuration = Math.random() * 8 + 6;
  const animDelay = Math.random() * 5;
  const opacity = Math.random() * 0.5 + 0.2;
  return (
    <div
      className="absolute rounded-full"
      style={{ 
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-5%',
        background: index % 3 === 0 ? '#00f4ff' : index % 3 === 1 ? '#6366f1' : '#0077ff',
        opacity,
        animation: `floatUp ${animDuration}s ${animDelay}s infinite linear`,
      }}
    />
  );
}

function RotatingShape ({ type, size, x, y, delay }: { type: string; size: number; x: number; y: number; delay: number }) {
  const shapeStyles: Record<string, React.CSSProperties> = {
    cube: {
      width: size,
      height: size,
      border: '1.5px solid rgba(0, 212, 255, 0.3)',
      animation: `rotateCube ${12 + delay}s ${delay}s infinite linear`,
      boxShadow: '0 0 15px rgba(0, 212, 255, 0.15), inset 0 0 15px rgba(0, 212, 255, 0.05)',     
    },
    diamond: {
      width: size,
      height: size,
      border: '1.5px solid rgba(99, 102, 241, 0.3)',
      transform: 'rotate(45deg)',
      animation: `rotateDiamond ${10 + delay}s ${delay}s infinite linear`,
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.15), inset 0 0 15px rgba(99, 102, 241, 0.05)',     
    },
    ring: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1.5px solid rgba(0, 119, 255, 0.3)',
      animation: `pulseRing ${8 + delay}s ${delay}s infinite ease-in-out`,
      boxShadow: '0 0 20px rgba(0, 119, 255, 0.1)',     
    },
  };
  
  return (
    <div className="absolute" 
      style={{
        left: `${x}%`,
        top: `${y}%`,
        ...shapeStyles[type],
      }}
    />
  );
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      });
    };
    const el = heroRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => {
      el?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const shapes = [
    { type: 'cube', size: 80, x: 10, y: 15, delay: 0 },
    { type: 'diamond', size: 60, x: 85, y: 20, delay: 2 },
    { type: 'ring', size: 100, x: 75, y: 60, delay: 1 },
    { type: 'cube', size: 50, x: 20, y: 70, delay: 3 },
    { type: 'diamond', size: 40, x: 90, y: 80, delay: 1.5 },
    { type: 'ring', size: 70, x: 5, y: 45, delay: 2.5 },
    { type: 'cube', size: 35, x: 50, y: 10, delay: 4 },
    { type: 'diamond', size: 55, x: 60, y: 75, delay: 0.5 },
  ];


  return (
    <section ref={heroRef} 
    className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    style={{
      background: 'linear-gradient(135deg, #030712 0%, #060f1c 50% , #0f172a 100%)',
      }}
      >
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            perspective: '500px',
            transform: `rotateX(${mousePos.y * 0.3}deg) rotateY(${mousePos.x * 0.3}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Radial glow */}
        <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(99, 102, 241, 0.1) 40% , transparent 70%)',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`,
          transition: 'transform 0.5s ease-out', 
        }}
        />

        {/* Floating 3D Shapes */}
        <div 
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
          transition: 'transform 0.4s ease-out',
        }}
        >
          {shapes.map((shape, i) => (
            <RotatingShape key={i} {...shape}/>
          ))}
        </div>

        {/* Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <Particle key={i} index={i}/>
          ))}
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.5) 2px, rgba(0, 212, 255, 0.5) 4px)',
          }}
        />
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ animation: 'fadeInUp 0.8s 0.2s ease-out both'}}>
            <span className="block">Escale seu </span>
            <span className="block bg-clip-text text-transparent text-gradient"
            style={{ 
              textShadow: 'none',
              filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.3))'
            }}>crescimento</span>
            <span className="block">com automação</span>
          </h1>
          
          {/* Subtitle */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: '#7b8ba8', animation: 'fadeInUp 0.8s 0.4s ease-out both'}}
          >
            A <strong className="text-foreground">B2 Nexus</strong> combina estratégia de marketing 
            com inteligência artificial para transformar leads em clientes de forma previsível e escalável.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animation: 'fadeInUp 0.8s 0.6s ease-out both'}}
          >
            <Button size="lg" 
            className="relative group px-8 py-6 text-base font-semibold rounded-xl border-0 text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(99, 102, 241, 0.15)',
            }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar consultoria grátis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)'}}
                />
           
            </Button>
            <Button size="lg" variant="outline" 
            className="px-8 py-6 text-base font-semibold rounded-xl !bg-transparent hover:!bg-white/5 transition-colors text-primary border-primary"
            >
              <span className="relative z-10 flex items-center gap-2">Ver resultados</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          {/* Trust Indicators */}
          <p className="text-md md:text-lg max-w-2xl mx-auto leading-relaxed" 
          style={{ color: '#7b8ba8', marginTop: '50px', animation: 'fadeInUp 0.8s 0.6s ease-out both'}}>
            Powered by:
          </p>  
          <TrustIndicators/>
        </div>
      </section>
  );
};

export default Hero;
