import React, { useState, useEffect, useMemo, memo } from 'react';
import { 
  Bot, 
  Calendar, 
  Kanban, 
  Megaphone, 
  Facebook, 
  Webhook, 
  Braces,
  LucideIcon,
  TerminalSquare,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GridScan from './GridScan';


interface AutomationNode {
  id: string;
  icon: LucideIcon;
  titulo: string;
  descricao: string;
  side: 'left' | 'right';
}

interface NodeWithPosition extends AutomationNode {
  x: number;
  y: number;
}

const automations: AutomationNode[] = [
  { id: 'bot', icon: Bot, titulo: "Automação com IA", descricao: "Automação Generativa inteligente e personalizada para otimizar processos e resultados.", side: 'right' },
  { id: 'cal', icon: Calendar, titulo: "Google Calendar", descricao: "Integração com Google Calendar para agendamentos no geral de forma automatizada.", side: 'right' },
  { id: 'crm', icon: Kanban, titulo: "CRM Kanban", descricao: "Integração com CRM para gerenciamento de leads e clientes com visualização ágil.", side: 'right' },
  { id: 'mass', icon: Megaphone, titulo: "Disparo em Massa", descricao: "Disparo em massa para envio de mensagens para seus clientes via WhatsApp.", side: 'right' },
  { id: 'fb', icon: Facebook, titulo: "Facebook Leads", descricao: "Coleta de leads dos formulários do Facebook e envio da primeira mensagem para leads de forma automatizada e personalizada.", side: 'left' },
  { id: 'web', icon: Webhook, titulo: "Webhooks", descricao: "Envie e receba eventos automaticamente entre sistemas de forma síncrona.", side: 'left' },
  { id: 'api', icon: Braces, titulo: "Integração API", descricao: "Integração avançada com outros sistemas e plataformas via consumo de APIs.", side: 'left' }
];

// ─── Isolated line component ───────────────────────────────────────────────
const HexLine = ({ x2, y2, index, isActive }: {
  x2: number; y2: number; index: number; isActive: boolean;
}) => {
  const d = `M0,0 L${x2},${y2}`;
  // Compute the approximate length of the line for dash animation
  const len = Math.round(Math.sqrt(x2 * x2 + y2 * y2));

  return (
    <g>
      {/* Base path — drawn once on scroll, always visible */}
      <motion.path
        d={d}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          pathLength: { duration: 1.2, delay: 0.3 + index * 0.1, ease: "easeInOut" },
          opacity:    { duration: 0.5, delay: 0.3 + index * 0.1 },
        }}
        fill="none"
        stroke="#778899"
        strokeWidth="1.5"
        style={{ pointerEvents: "none" }}
      />

      {/* Pulse overlay — CSS-driven animation, always reliable */}
      {isActive && (
        <path
          d={d}
          fill="none"
          stroke="hsl(207 84% 34%)"
          strokeWidth="3"
          filter="url(#neonGlow)"
          strokeDasharray={`${len} ${len}`}
          strokeDashoffset={len}
          style={{
            pointerEvents: "none",
            animation: "linePulse 1.5s ease-in-out infinite",
            animationFillMode: "both",
          }}
        />
      )}
    </g>
  );
};

// ─── Isolated hexagon node component ────────────────────────────────────────
const HexNode = memo(({ node, index, isActive, onEnter, onLeave }: {
  node: NodeWithPosition;
  index: number;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const Icon = node.icon;
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="absolute top-1/2 left-1/2 z-10 cursor-pointer p-2 flex items-center justify-center transition-transform hover:z-50"
      style={{
        transform: `translate(${node.x}px, ${node.y}px)`,
        width: '120px', height: '140px', // Slightly larger hit area
        marginLeft: '-60px', marginTop: '-70px',
      }}
    >
      <div style={{ width: '96px', height: '112px' }} className="relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isActive ? 1.1 : 1, opacity: 1 }}
        transition={{
          scale:   { duration: 0.22, ease: "easeOut" },
          opacity: { duration: 0.4, delay: 0.8 + index * 0.1 },
        }}
        className="relative w-full h-full pointer-events-none"
      >
        <div className="relative group flex items-center justify-center w-full h-full">
          {/* Background */}
          <div className={`absolute inset-0 hexagon-clip z-0 transition-colors duration-300 ${isActive ? 'bg-slate-900' : 'bg-slate-950'}`} />

          {/* SVG border */}
          <svg
            viewBox="0 0 100 115"
            className="absolute inset-0 w-full h-full z-10 transition-all duration-300"
            style={{ filter: isActive ? 'drop-shadow(0 0 14px rgba(0,243,255,0.9))' : 'drop-shadow(0 0 6px rgba(0,243,255,0.3))' }}
          >
            <polygon points="50 5, 95 28, 95 87, 50 110, 5 87, 5 28" fill="none" stroke={isActive ? "#fff" : "hsl(207 84% 34%)"} strokeWidth="2" className="transition-all duration-300" />
            <polygon points="50 12, 88 32, 88 83, 50 103, 12 83, 12 32" fill="none" stroke="hsl(207 84% 34%)" strokeWidth="1" strokeDasharray="6 4" />
          </svg>

          {/* Icon */}
          <div className={`relative z-20 transition-all duration-300 ${isActive ? 'text-primary scale-110' : 'text-white'}`}>
            <Icon size={36} strokeWidth={1.5} />
          </div>

          {/* Label */}
          <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-opacity duration-300 z-30 ${isActive ? 'opacity-0' : 'opacity-70'}`}>
            <span className="text-[10px] md:text-xs font-medium text-blue-200 uppercase tracking-widest bg-slate-950/80 px-2 py-1 rounded border border-blue-500/30">
              {node.titulo}
            </span>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  );
});

// ─── Main component ──────────────────────────────────────────────────────────
const CyberCore: React.FC = () => {
  const [activeNode, setActiveNode] = useState<NodeWithPosition | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  const numNodes = automations.length;
  const radius = 260;

  const nodesWithPos: NodeWithPosition[] = useMemo(() =>
    automations.map((node, i) => {
      const angle = (i * (360 / numNodes) - 90) * (Math.PI / 180);
      return { ...node, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
    }),
    [numNodes, radius]
  );

  // Stabilize the setActiveNode to prevent rapid flickering
  const [pendingNode, setPendingNode] = useState<NodeWithPosition | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveNode(pendingNode);
    }, 30); // Tiny buffer to bridge gaps between nodes
    return () => clearTimeout(timer);
  }, [pendingNode]);

  // Stable callbacks — prevents memo children from re-rendering on parent state change
  const handlers = useMemo(() =>
    nodesWithPos.map(node => ({
      onEnter: () => setPendingNode(node),
      onLeave: () => setPendingNode(null),
    })),
    [nodesWithPos]
  );

  return (
    <div id="ecossistema" className="relative w-full h-screen min-h-screen bg-slate-950 overflow-hidden flex items-center justify-center font-sans">
      <style>{`
        .bg-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(14, 103, 160, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 72, 160, 0.05) 1px, transparent 1px);
        }
        .hexagon-clip {
          clip-path: polygon(50% 4.3%, 95% 24.3%, 95% 75.7%, 50% 95.7%, 5% 75.7%, 5% 24.3%);
        }
        .neon-text { text-shadow: 0 0 8px rgba(0, 243, 255, 0.8); }
        .glass-panel {
          background: rgba(4, 13, 28, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(14, 103, 160, 0.3);
          box-shadow: 0 0 30px rgba(14, 103, 160, 0.2);
        }
        .custom-dashed {
          background: repeating-conic-gradient(
            from 0deg,
            rgba(14, 103, 160, 0.5) 0deg 2deg,
            transparent 6deg 12deg
          );
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 1px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 1px));
        }
        @keyframes linePulse {
          0%   { stroke-dashoffset: var(--len, 260); opacity: 0; }
          15%  { opacity: 1; }
          80%  { opacity: 1; stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}</style>
      

      
      {/* Backgrounds GridScan */}
      <div className="absolute inset-0 bg-zinc-950/90">
        <GridScan
          sensitivity={0.1}
          lineThickness={0.5}
          linesColor="#0E67A0"
          lineJitter={0.05}
          gridScale={0.1}
          scanColor="#4a95ce"
          scanGlow={0.40}
          scanOpacity={0.30}
          scanSoftness={2}
          scanDelay={4}
          scanDuration={5}
          enablePost
          bloomIntensity={0.5}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Main 3D container */}
      <div
        className={`relative w-[600px] h-[600px] transition-all duration-1000 transform-gpu ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(15deg)', overflow: 'visible' }}
      >
        {/* Central B2N node */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 z-20 flex flex-col items-center justify-center"
        >
          <div className="absolute inset-[-25px] custom-dashed rounded-full animate-spin" style={{ animationDuration: '40s' }} />
          <div className="absolute inset-[-50px] custom-dashed rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
          <div className="relative w-36 h-36 bg-slate-900 rounded-full flex items-center justify-center border-2 border-blue-400 z-10 shadow-[0_0_50px_rgba(14,103,160,0.4)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-600/20 to-blue-600/20 pointer-events-none" />
            <div className="text-center">
              <span className="block text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 neon-text tracking-wider">B2N</span>
              <span className="text-[12px] text-blue-300/70 uppercase tracking-[0.2em] font-mono">Core System</span>
            </div>
          </div>
        </motion.div>

        {/* SVG connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-300 -300 600 600">
          <defs>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {nodesWithPos.map((node, i) => (
            <HexLine
              key={node.id}
              x2={node.x} y2={node.y}
              index={i}
              isActive={activeNode?.id === node.id}
            />
          ))}
        </svg>

        {/* Hexagon nodes */}
        {nodesWithPos.map((node, i) => (
          <HexNode
            key={node.id}
            node={node}
            index={i}
            isActive={activeNode?.id === node.id}
            onEnter={handlers[i].onEnter}
            onLeave={handlers[i].onLeave}
          />
        ))}
      </div>

      {/* HUD info panel */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            key="hud-panel"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={{
              initial: { 
                opacity: 0, 
                width: 0, 
                height: 2,
                x: activeNode.side === 'right' ? 20 : -20,
              },
              visible: { 
                opacity: 1, 
                width: "min(calc(100vw - 40px), 430px)", 
                height: "auto",
                x: 0,
                transition: { 
                  width: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
                  height: { delay: 0.25, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }, // Pop-out feel
                  opacity: { duration: 0.2 }
                }
              },
              exit: { 
                height: 2, 
                width: 0,
                opacity: 0,
                transition: { 
                  height: { duration: 0.25, ease: "easeIn" },
                  width: { delay: 0.25, duration: 0.2, ease: "easeIn" },
                  opacity: { delay: 0.35, duration: 0.1 }
                }
              }
            }}
            className={`fixed md:absolute ${
              activeNode.side === 'right' ? 'md:right-8 lg:right-16' : 'md:left-8 lg:left-16'
            } md:top-1/2 md:-translate-y-1/2 bottom-8 md:bottom-auto w-[calc(100%-32px)] md:w-auto glass-panel md:rounded-xl rounded-2xl border border-cyan-500/30 overflow-hidden z-[100] pointer-events-none max-h-[85vh] md:max-h-[min(600px,90vh)]`}
            style={{ 
              originX: activeNode.side === 'right' ? 1 : 0,
              originY: 0.5,
              transformOrigin: activeNode.side === 'right' ? 'right center' : 'left center'
            }}
          >
            <div className="relative h-full flex flex-col overflow-hidden bg-slate-900/98 backdrop-blur-3xl p-1">
              {/* Horizontal Line (The "Sanfona" Base) */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                className="absolute top-0 left-0 right-0 h-[1.5px] bg-cyan-400/80 z-20"
                style={{ originX: activeNode.side === 'right' ? 1 : 0 }}
              />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-10 h-1.5 bg-cyan-400" />
              <div className="absolute bottom-0 right-0 w-10 h-1.5 bg-blue-500" />
              <div className="absolute top-0 right-0 w-1.5 h-10 bg-cyan-400" />
              <div className="absolute bottom-0 left-0 w-1.5 h-10 bg-blue-500" />

              <div className="bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-transparent p-3 md:p-5 border-b border-cyan-500/20 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2 md:gap-3 text-cyan-400">
                  <div className="relative shrink-0">
                    <TerminalSquare size={18} className="md:w-5 md:h-5" />
                    <motion.div 
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-cyan-400 blur-sm opacity-50"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] font-bold text-cyan-300 truncate max-w-[150px] md:max-w-none">
                    Protocol_{activeNode.id.toUpperCase()}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
                  <div className="hidden sm:block text-[9px] font-mono text-blue-400 uppercase opacity-60">Status: Active</div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.35, duration: 0.3 }} 
                className="p-4 md:p-7 relative overflow-y-auto custom-scrollbar"
              >
                {/* Scanline Pattern */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_49.5%,rgba(34,211,238,0.02)_50%)] bg-[length:100%_6px] opacity-40" />
                
                <div className="relative z-10 flex flex-col gap-4 md:gap-6">
                  <div className="flex items-start gap-4 md:gap-6">
                    <motion.div 
                      initial={{ rotate: -20, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                      className="p-3 md:p-4 bg-gradient-to-br from-blue-900/50 to-slate-900 rounded-xl md:rounded-2xl border border-cyan-500/30 text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.15)] shrink-0"
                    >
                      <activeNode.icon size={28} className="md:w-[34px] md:h-[34px]" strokeWidth={1.5} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight mb-1 truncate">
                        {activeNode.titulo}
                      </h2>
                      <div className="flex items-center gap-2">
                        <motion.div 
                          animate={{ width: ["0%", "100%", "0%"] }}
                          transition={{ repeat: Infinity, duration: 5 }}
                          className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-blue-500 to-transparent shrink-0" 
                        />
            
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed font-normal text-sm md:text-base opacity-90 border-l-2 border-blue-500/20 pl-3 md:pl-4 py-0.5 italic">
                    "{activeNode.descricao}"
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-1 md:mt-2">
                    <div className="bg-blue-950/20 rounded border border-blue-500/10 p-2 md:p-3">
                      <span className="block text-[9px] md:text-[10px] text-blue-400/60 font-mono uppercase mb-0.5 md:mb-1">Process_id</span>
                      <span className="text-[10px] md:text-xs text-blue-200 font-mono">#B2N_{activeNode.id.toUpperCase()}</span>
                    </div>
                    <div className="bg-cyan-950/20 rounded border border-cyan-500/10 p-2 md:p-3">
                      <span className="block text-[9px] md:text-[10px] text-cyan-400/60 font-mono uppercase mb-0.5 md:mb-1">Module</span>
                      <div className="flex items-center gap-2">
                        <Activity size={10} className="text-cyan-400 animate-pulse" />
                        <span className="text-[10px] md:text-xs text-cyan-200 font-mono uppercase">Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Stream Bottom Bar */}
              <div className="h-1 w-full bg-slate-900/50 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CyberCore;
