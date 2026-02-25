import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";

const benefits = [
  "Consultoria gratuita de 30 minutos",
  "Análise completa do seu funil",
  "Plano de ação personalizado",
  "Sem compromisso"
];

const CTA = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden" style={{ background: '#030712' }}>
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="bg-cyber-core.png"
            alt="Background CTA"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #030712 0%, rgba(3, 7, 18, 0.7) 50%, #030712 100%)',
            }}
          />
        </div>

        {/* Animated gradient mesh */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
            `,
            animation: 'meshFloat 10s ease-in-out infinite alternate',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollAnimator animation="scale">
            <div
              className="p-12 md:p-16 rounded-3xl border relative overflow-hidden"
              style={{
                background: 'rgba(15, 30, 60, 0.4)',
                borderColor: 'rgba(0, 212, 255, 0.15)',
                backdropFilter: 'blur(30px)',
                boxShadow: '0 0 80px rgba(0, 212, 255, 0.06), 0 40px 100px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, #6366f1, transparent)' }}
              />

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#f0f4ff' }}>
                Pronto para{' '}
                <span
                  className="bg-clip-text text-transparent text-gradient"
                >
                  Acelerar
                </span>
                <br />
                seus resultados?
              </h2>

              <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#7b8ba8' }}>
                Crie uma conta e teste gratuitamente por 7 dias e descubra como podemos transformar seu negócio com IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group px-10 py-6 text-base font-semibold rounded-xl border-0 text-white relative overflow-hidden"
                  onClick={() => window.open('https://app.b2nexus.com.br', '_blank', 'noopener noreferrer')}
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
                    boxShadow: '0 0 40px rgba(0, 212, 255, 0.3), 0 0 80px rgba(99, 102, 241, 0.15)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Criar conta gratuita
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-6 text-base font-semibold rounded-xl !bg-transparent hover:!bg-white/5 transition-colors text-primary border-primary"
                  onClick={() => window.open('https://wa.me/message/SHS36AFKSQGYA1', '_blank', 'noopener noreferrer')}
                >
                  Falar com um especialista
                </Button>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </>
  );
}

export default CTA;