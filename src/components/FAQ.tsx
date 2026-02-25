import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollAnimator from './ScrollAnimator';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'Como funcionam os 7 dias grátis?',
    answer: 'Você pode explorar todos os recursos da B2 Nexus sem custo por uma semana. O processo é gerenciado com segurança via Stripe. Se você decidir que a plataforma não é para você, basta cancelar dentro do período de teste sem qualquer cobrança.',
  },
  {
    question: 'Preciso de conhecimentos técnicos para começar?',
    answer: 'Não! No modelo de Agente Template, a configuração é instantânea: basta escanear o QR Code da Evolution API no seu WhatsApp e seu assistente já sai funcionando com pré-configurações otimizadas.',
  },
  {
    question: 'Qual a diferença entre o Agente Personalizado e o Agente Template?',
    answer: (
      <>
        <p>
          <b>• Agente Personalizado:</b> É a sua IA sob medida. Você tem controle total sobre o system prompt, voz, modelo e personalidade. O número de agentes que você pode criar depende dos slots disponíveis no seu plano.
        </p>
        <p>
          <strong>• Agente Template:</strong> É a nossa solução Plug-and-Play. Ele já vem pré-configurado com as melhores práticas de conversão para o seu nicho. Você só precisa escanear o QR Code da Evolution API no seu WhatsApp, configurar sua agenda ou produtos e pronto, com slots ilimitados.
        </p>
      </>
    ),
  },
  {
    question: 'O que são os Créditos de IA e como funciona o consumo?',
    answer: (
      <>
        <p>
          Os créditos são o combustível da sua automação e são renovados mensalmente. Cada resposta gerada pela IA consome uma quantidade de créditos baseada no modelo que você escolher, exemplo:
        </p>
        <p className='mt-1'>
          <strong>• GPT- 4o mini:</strong> 1 crédito por resposta (Eficiência e velocidade).
        </p>
        <p>
          <strong>• GPT- 4o:</strong> 15 créditos por resposta (Raciocínio complexo e máxima precisão).
        </p>
        <p className='mt-1'>
          Isso dá a você liberdade total para equilibrar custo e performance de acordo com suas necessidades.
        </p>
      </>
    ),
  },
  {
    question: 'Meus créditos não utilizados expiram no final do mês?',
    answer: 'Não! Na B2 Nexus, os créditos não utilizados acumulam para o mês seguinte (respeitando o teto de acúmulo de cada plano). Assim, se você tiver um mês com menos volume, não perde o que pagou; seus créditos estarão lá para quando sua demanda aumentar.',
  },
  {
    question: 'E se o cliente fizer uma pergunta que a IA não sabe responder?',
    answer: 'A B2 Nexus é configurada com um gatilho de transição. Você pode definir uma regra de transferência, ela aciona seu time humano e envia todo o histórico do chat para o seu sistema, garantindo que o atendimento continue sem interrupções.',
  },
  {
    question: 'Posso personalizar a "personalidade" e a voz da IA?',
    answer: 'Com certeza. No Agente Personalizado, você define o System Prompt (as regras de comportamento), escolhe o modelo de IA, o nível de criatividade e integra vozes ultra-realistas da OpenAI ou ElevenLabs.',
  },
  {
    question: 'Quais canais de atendimento a plataforma suporta?',
    answer: 'Atualmente, focamos em WhatsApp (via Evolution API ou API Oficial com coexistência). Em breve, liberaremos automação para Instagram (Direct e Comentários). Também oferecemos integração nativa com Facebook Leads, onde o lead preenche o formulário e o agente já inicia o contato automaticamente.',
  },
  {
    question: 'A B2 Nexus se conecta com outras ferramentas?',
    answer: 'Sim. Possuímos integração com Google Calendar para agendamentos, suporte a servidores MCP para funções avançadas, Webhooks de workspace e uma API Pública para funcionalidades específicas, permitindo que os leads sejam cadastrados automaticamente no seu CRM.',
  },
  {
    question: 'A IA consegue transferir o atendimento para um humano?',
    answer: 'Sim. O sistema possui transferência de atendimento e gestão de follow-up, garantindo que, se a IA chegar ao limite do conhecimento ou se o cliente solicitar um humano, sua equipe seja acionada.'
  },
  {
    question: 'O que são as "Habilidades"?',
    answer: 'Habilidades (Intenções) é um recurso que permite ao seu agente executar ações externas (como consultar um status de pedido ou disparar um gatilho em outro sistema) através de requisições HTTP baseadas na intenção do cliente.'
  },
];

function AccordionItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accentColors = ['#00d4ff', '#6366f1', '#00d4ff', '#6366f1'];
  const accent = accentColors[index % accentColors.length];

  return (
    <ScrollAnimator animation="fade-up" delay={index * 80}>
      <div
        className="group rounded-xl border transition-all duration-400 overflow-hidden bg-slate-800/10 border-primary-800/10"
        style={{
          boxShadow: isOpen ? `0 0 30px ${accent}08, 0 10px 40px rgba(0, 0, 0, 0.2)` : 'none',
          backdropFilter: 'blur(16px)',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${accent}20`;
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0, 212, 255, 0.06)';
          }
        }}
      >
        {/* Top glow line when open */}
        <div
          className="h-[1px] transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, #1178cc, transparent)`,
            opacity: isOpen ? 0.8 : 0,
          }}
        />

        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                background: isOpen ? `${accent}20` : `${accent}08`,
                border: `1px solid ${isOpen ? `${accent}40` : `${accent}15`}`,
              }}
            >
              <span
                className="text-xs font-bold font-mono transition-colors duration-300"
                style={{ color: isOpen ? accent : '#1178cc' }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h3
              className="text-base md:text-lg font-semibold transition-colors duration-300"
              style={{ color: isOpen ? '#f0f4ff' : '#b0bdd0' }}
            >
              {faq.question}
            </h3>
          </div>

          <div
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{
              background: isOpen ? `${accent}15` : 'transparent',
              border: `1px solid ${isOpen ? `${accent}30` : 'rgba(0, 212, 255, 0.1)'}`,
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            <ChevronDown
              className="w-4 h-4 transition-colors duration-300"
              style={{ color: isOpen ? accent : '#1178cc' }}
            />
          </div>
        </button>

        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: isOpen ? '300px' : '0px',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.25rem] md:pl-[4.75rem]">
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#7b8ba8' }}>
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </ScrollAnimator>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-6 overflow-hidden" style={{ background: '#030712' }}>
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)' }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollAnimator animation="fade-up" className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-1xl font-medium mb-6">
              FAQ
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: '#f0f4ff' }}>
              Perguntas{' '}
              <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: '#7b8ba8' }}>
              Tudo o que você precisa saber sobre a B2 Nexus. Não encontrou sua resposta? Entre em contato conosco.
            </p>
          </motion.div>
        </ScrollAnimator>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Contact prompt */}
        <ScrollAnimator animation="fade-up" delay={500} className="text-center mt-12">
          <p className="text-sm mb-4" style={{ color: '#7b8ba8' }}>
            Ainda tem dúvidas?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-6 text-base font-semibold rounded-xl !bg-transparent hover:!bg-white/5 transition-colors text-primary border-primary"
            onClick={() => window.open('https://wa.me/message/SHS36AFKSQGYA1', '_blank', 'noopener noreferrer')}
          >
            Fale Conosco
          </Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}