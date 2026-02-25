import { motion } from "framer-motion";
import { 
  AlertCircle, 
  MessageSquareOff, 
  Zap, 
  ArrowRight, 
  Bot, 
  Database, 
  Globe,  
  Users, 
  CheckCircle2
} from "lucide-react";

const ProblemCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-400 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, text, delay }: { icon: any, title: string, text: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
  >
    <div className="mt-1 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h4 className="font-semibold text-white text-base">{title}</h4>
      <p className="text-gray-400 text-xs mt-1">{text}</p>
    </div>
  </motion.div>
);

const ProblemAndSolution = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Column 1: Problems */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-400/10 text-red-400 text-1xl font-medium">
                O PROBLEMA
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Sua operação está <br />
                <span className="text-red-500">travada no manual?</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                Leads esfriando, chatbots que irritam clientes e informações perdidas em planilhas. O custo da ineficiência é a perda de vendas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProblemCard 
                icon={AlertCircle}
                title="Demora Fatal"
                description="Sua equipe demora para responder mensagens? 5 minutos de atraso reduzem as chances de conversão em 400%."
                delay={0.2}
              />
              <ProblemCard 
                icon={MessageSquareOff}
                title="IA Limitada"
                description="Seu chatbot atual parece um 'robô burro'? Respostas genéricas que afastam o cliente em vez de ajudar."
                delay={0.3}
              />
            </div>
          </div>

          {/* Column 2: B2 Nexus Solution - Interactive "Bridge" Feel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 mb-5 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-sm"
            >
              {/* Decorative border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/80 via-blue-500/50 to-primary/80 rounded-3xl blur-[2px] opacity-30" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">B2 Nexus: A Ponte Inteligente</h3>
                    <p className="text-primary text-sm font-medium">Automação B2B e B2C de nível superior</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                  <FeatureItem 
                    icon={Zap}
                    title="Resposta Instantânea"
                    text="Elimine o tempo de espera e converta leads enquanto eles ainda estão quentes."
                    delay={0.1}
                  />
                  <FeatureItem 
                    icon={Bot}
                    title="IA com Alma"
                    text="Agentes que entendem contexto, tom de voz e nuance, fugindo do padrão 'robô'."
                    delay={0.2}
                  />
                  <FeatureItem 
                    icon={Database}
                    title="Retenção de Conhecimento"
                    text="Toda a inteligência do seu negócio disponível 24/7 para clientes e equipe."
                    delay={0.3}
                  />
                  <FeatureItem 
                    icon={CheckCircle2}
                    title="Fim do Trabalho Manual"
                    text="Automações que cuidam do operacional para sua equipe focar no estratégico."
                    delay={0.4}
                  />
                  <FeatureItem 
                    icon={Users}
                    title="Escalabilidade Humana"
                    text="Transparência e transferência humana fluida quando necessário."
                    delay={0.5}
                  />
                  <FeatureItem 
                    icon={Globe}
                    title="Estratégia Multicanal"
                    text="Presença consistente onde seu cliente estiver, com dados centralizados."
                    delay={0.6}
                  />
                </div>
         
              </div>
            </motion.div>

            {/* Floating elements for extra cyberpunk feel */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"
            />
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
            />
          </div>

        </div>

        {/* Bottom stats or highlights */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8">
           {[
             { label: "Integrações", value: "20+" },
             { label: "Precisão IA", value: "99.8%" },
             { label: "Tempo Resposta", value: "< 2s" }
           ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="text-center"
             >
               <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
               <div className="text-gray-500 text-sm">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemAndSolution;
