
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  Play, 
  Volume2, 
  Thermometer, 
  FileText, 
  Globe, 
  Table, 
  Youtube, 
  FileCode,
  Check,
  Mic,
  MessageSquare,
  User,
  Repeat,
  Clock,
  X,
  Kanban,
  CalendarCheck,
  Bot
} from "lucide-react";
import MagicBento, { ParticleCard } from "./magic-bento-grid/MagicBento";
import * as SliderPrimitive from "@radix-ui/react-slider";

// --- Sub-components for Bento Blocks ---

const VoiceSelector = () => {
  const [selected, setSelected] = useState("alloy");
  const voices = [
    { id: "alloy", name: "Alloy", provider: "OpenAI", type: "Neutro" },
    { id: "echo", name: "Echo", provider: "OpenAI", type: "Sério" },
    { id: "shimmer", name: "Shimmer", provider: "OpenAI", type: "Suave" },
    { id: "rachel", name: "Rachel", provider: "ElevenLabs", type: "Natural" },
    { id: "domi", name: "Domi", provider: "ElevenLabs", type: "Enérgico" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <Volume2 className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Voz do Agente</span>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
        {voices.map((voice) => (
          <button
            key={voice.id}
            onClick={() => setSelected(voice.id)}
            className={`w-full flex items-center justify-between p-2 rounded-lg border transition-all ${
              selected === voice.id 
                ? "bg-primary/20 border-primary/50 text-white" 
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
            }`}
          >
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold">{voice.name}</span>
              <span className="text-[10px] opacity-60">{voice.provider} • {voice.type}</span>
            </div>
            {selected === voice.id && <Check className="w-3 h-3 text-primary" />}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-primary/80 bg-primary/10 p-2 rounded-md">
        <Mic className="w-3 h-3" />
        <span>Prévia de voz disponível no painel</span>
      </div>
    </div>
  );
};

const KnowledgeBase = () => {
  const files = [
    { ext: ".pdf", icon: FileText, color: "text-red-400" },
    { ext: ".txt", icon: FileText, color: "text-blue-400" },
    { ext: ".md", icon: FileCode, color: "text-orange-400" },
    { ext: ".csv", icon: Table, color: "text-green-400" },
    { ext: ".url", icon: Globe, color: "text-purple-400" },
    { ext: ".yt", icon: Youtube, color: "text-red-600" },
  ];

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <Upload className="w-6 h-6 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Base de Conhecimento (Treinamento)</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {files.map((file, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <file.icon className={`w-5 h-5 ${file.color} mb-1`} />
            <span className="text-[10px] font-medium text-gray-300">{file.ext}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-2 text-[10px] text-center text-gray-500 italic">
        Anexe arquivos no treinamento via texto
      </div>
    </div>
  );
};

const TempToggle = () => {
  const [temp, setTemp] = useState(0.5);
  
  const getLabel = (val: number) => {
    if (val < 0.3) return { title: "Preciso e Factual", desc: "Respostas diretas e consistentes. Ideal para suporte técnico." };
    if (val < 0.5) return { title: "Equilibrado", desc: "Equilíbrio entre precisão e naturalidade. Recomendado para a maioria dos casos." };
    if (val < 0.7) return { title: "Moderado", desc: "Respostas mais dinâmicas e envolventes." };
    return { title: "Criativo e Ousado", desc: "Máxima criatividade e variedade. Ideal para geração de ideias." };
  };

  const label = getLabel(temp);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Thermometer className="w-6 h-6 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Temperatura (Criatividade)</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <SliderPrimitive.Root 
          className="relative flex items-center select-none touch-none w-full h-5 mb-6 group/slider"
          defaultValue={[0.5]}
          min={0.1}
          max={1}
          step={0.1}
          value={[temp]}
          onValueChange={(vals) => setTemp(vals[0])}
        >
          <SliderPrimitive.Track className="bg-white/10 relative grow rounded-full h-1.5 overflow-hidden border border-white/5">
            <SliderPrimitive.Range className="absolute bg-primary rounded-full h-full shadow-[0_0_10px_rgba(8,96,197,0.5)]" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb 
            className="block w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all hover:scale-110 active:scale-95 cursor-grab active:cursor-grabbing z-20"
            aria-label="Temperatura"
          />
        </SliderPrimitive.Root>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={label.title}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="space-y-1"
          >
            <div className="text-lg font-bold text-white flex items-center justify-between">
              {label.title}
              <span className="text-primary text-sm font-mono">{temp.toFixed(1)}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              {label.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const HumanTouch = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 text-left">O "Toque Humano"</span>
      </div>
      
      <div className="flex-1 flex flex-col gap-3 justify-center">
        {/* Robotic Response */}
        <div className="flex justify-start opacity-50 grayscale-[0.5]">
          <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 max-w-[80%] relative group">
            <X className="absolute -top-1 -right-1 w-4 h-4 text-red-500 bg-black rounded-full p-0.5 border border-red-500/50" />
            <p className="text-[11px] text-gray-400 leading-tight">
              <span className="font-bold text-primary">Bot:</span> Olá! Bem-vindo à empresa X. Para agendamentos digite 1, para suporte digite 2, para falar com consultor digite 3...
            </p>
            <p className="text-[11px] text-gray-400">
              <span className="font-bold text-emerald-500">Cliente:</span> Quero marcar pra amanhã às 14h.
            </p>
            <p className="text-[11px] text-gray-400 leading-tight">
              <span className="font-bold text-primary">Bot:</span> Opção inválida. Por favor, digite apenas o número correspondente.
            </p>
          </div>
        </div>

        {/* B2 Nexus Response */}
        <div className="flex justify-end pr-2">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none p-3 max-w-[85%] relative"
          >
            <Check className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full p-0.5 border border-emerald-500/50 animate-pulse" />
            <p className="text-[11px] text-white leading-tight font-medium">
              <span className="font-bold text-emerald-500">Cliente:</span> Oi, gostaria de ver os horários para amanhã à tarde.
            </p>
            <p className="text-[11px] text-white">
              <span className="font-bold text-primary">Bot:</span> Oi, tudo bem? 😄 Verifiquei aqui na agenda e temos as 14h e as 16h disponíveis. Qual fica melhor para você?
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-bold text-white text-left">Respostas que convertem</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed text-left">Inteligência que entende o contexto, consulta sua agenda real e fecha o negócio na hora.</p>
      </div>
    </div>
  );
};

const HandoverRelay = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-4">
        <Repeat className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 text-left">O "Revezamento"</span>
      </div>

      <div className="flex-1 flex items-center justify-center relative py-6">
        <div className="flex items-center gap-8 relative">
          <div className="relative">
            <Bot className="w-12 h-12 text-primary animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-1 border-emerald-600" />
          </div>
          
          <div className="flex flex-col items-center">
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-white/10 px-3 py-1 rounded-full border border-white/20 text-[10px] text-white font-bold whitespace-nowrap mb-2"
            >
              Transferir para Humano →
            </motion.div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-green-500 rounded-full" />
          </div>

          <div className="relative">
            <User className="w-12 h-12 text-green-500" />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1 opacity-60">
              <CalendarCheck className="w-5 h-5 text-white" />
              <Kanban className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-white text-left">Escala com supervisão</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed text-left">Qualifica o lead e agenda automaticamente no Calendar.</p>
      </div>
    </div>
  );
};

const PersistentFollowUp = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400 text-left">O "Persistente"</span>
      </div>

      <div className="flex-1 flex gap-4 pl-4 py-2">
        <div className="relative w-0.5 bg-white/10 rounded-full">
          <div className="absolute top-0 -left-1 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_8px_rgba(8,96,197,0.8)]" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2.5 h-2.5 bg-primary/40 rounded-full" />
          <div className="absolute bottom-0 -left-1 w-2.5 h-2.5 bg-primary/20 rounded-full" />
        </div>
        
        <div className="flex-1 flex flex-col justify-between text-[11px]">
          <div className="space-y-0.5">

            <p className="text-white font-medium">Lead Qualificado ✔</p>
          </div>
          <div className="space-y-0.5 mt-3">
            <span className="text-gray-500 font-mono">Menos de 10s</span>
            <p className="text-primary font-medium italic">IA respondeu</p>
          </div>
          <div className="space-y-0.5">
            <span className="text-gray-500 font-mono">1h depois</span>
            <p className="text-white/60 italic">"Oi, ainda tem interesse?"</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-bold text-white text-left">Nenhum lead esquecido</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed text-left">Fluxos de Follow Up automáticos para recuperar leads.</p>
      </div>
    </div>
  );
};

// --- Main Bento Component ---

const BentoFeatures = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-1xl font-medium mb-4">
              FUNCIONALIDADES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Controle total na <span className="text-gradient">palma da sua mão</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma interface intuitiva projetada para transformar complexidade tecnológica em resultados práticos para o seu negócio.
          </p>
        </motion.div>

        <MagicBento 
          className="grid-cols-1 md:grid-cols-10 md:grid-rows-3 gap-4 h-full md:h-[1000px] !p-0"
          enableStars={false} // We will use ParticleCard manually
          enableSpotlight={true}
          spotlightRadius={400}
          enableTilt={false}
          clickEffect={true}
          glowColor="8, 96, 197"
        >
          {/* Main Block - Video/Showcase (60%) */}
          <ParticleCard 
            className="card card--border-glow md:col-span-6 md:row-span-2 relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden group shadow-2xl"
            enableTilt={false}
            
            particleCount={20}
            glowColor="8, 96, 197"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-50" />
            
            {/* Mock Dashboard UI Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] text-gray-300 border border-white/10">
                app.b2nexus.com.br
              </div>
            </div>

            <div className="h-full flex items-center justify-center p-12">
              <div className="relative w-full aspect-video bg-gray-900 rounded-xl border border-white/10 shadow-inner flex items-center justify-center overflow-hidden">
                {/* Visual placeholder for Video/GIF */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40">
                   <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm cursor-pointer"
                  >
                    <Play className="w-6 h-6 text-primary fill-current ml-1" />
                  </motion.div>
                  <span className="text-white font-medium tracking-wide">Assista o B2 Nexus em ação</span>
                </div>
              </div>
            </div>

            {/* Glowing labels */}
            <div className="absolute bottom-6 left-6 flex gap-4">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/5">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xs text-white font-medium">Sistema Online</span>
               </div>
               <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/5">
                 <span className="text-xs text-gray-400 font-mono">ms_response: 1.2s</span>
               </div>
            </div>
          </ParticleCard>

          {/* Voice Selector Block (20% on row 1) */}
          <ParticleCard 
            className="card card--border-glow md:col-span-4 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            enableTilt={false}
            
            particleCount={10}
            glowColor="8, 96, 197"
          >
            <VoiceSelector />
          </ParticleCard>

          {/* Knowledge and Temperature */}
          <ParticleCard 
            className="card card--border-glow md:col-span-2 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            enableTilt={false}
            particleCount={8}
            glowColor="8, 96, 197"
          >
            <KnowledgeBase />
          </ParticleCard>

          <ParticleCard 
            className="card card--border-glow md:col-span-2 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors overflow-hidden group"
            enableTilt={false}
            particleCount={8}
            glowColor="8, 96, 197"
          >
            <TempToggle />
          </ParticleCard>

          {/* --- New Row 3 --- */}
          <ParticleCard 
            className="card card--border-glow md:col-span-4 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            enableTilt={false}
            particleCount={10}
            glowColor="8, 96, 197"
          >
            <HumanTouch />
          </ParticleCard>

          <ParticleCard 
            className="card card--border-glow md:col-span-3 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            enableTilt={false}
            particleCount={10}
            glowColor="8, 96, 197"
          >
            <HandoverRelay />
          </ParticleCard>

          <ParticleCard 
            className="card card--border-glow md:col-span-3 md:row-span-1 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
            enableTilt={false}
            particleCount={10}
            glowColor="8, 96, 197"
          >
            <PersistentFollowUp />
          </ParticleCard>
        </MagicBento>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(8, 96, 197, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(8, 96, 197, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(8, 96, 197, 0.5);
        }

        /* Slider Animations & Effects */
        [data-radix-slider-thumb] {
          box-shadow: 0 0 0 4px rgba(8, 96, 197, 0.1);
        }
        [data-radix-slider-thumb]:hover {
          box-shadow: 0 0 0 6px rgba(8, 96, 197, 0.15);
        }
      `}} />
    </section>
  );
};

export default BentoFeatures;
