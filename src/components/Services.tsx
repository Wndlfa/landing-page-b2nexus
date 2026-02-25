import { motion } from "framer-motion";
import { Bot, Calendar, Zap, Facebook, Webhook, Database, MessageSquare, ArrowUpDown } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Automação Generativa inteligente e personalizada para otimizar processos e resultados."
  },
  {
    icon: Calendar,
    title: "Integração com Google Calendar",
    description: "Integração com Google Calendar para agendamentos no geral de forma automatizada."
  },
  {
    icon: Database,
    title: "Integração com CRM Kanban",
    description: "Integração com CRM Kanban para gerenciamento de leads e clientes."
  },
  {
    icon: MessageSquare,
    title: "Disparo em Massa",
    description: "Disparo em massa para envio de mensagens para seus clientes via WhatsApp."
  },
  {
    icon: Facebook,
    title: "Facebook Leads",
    description: "Coleta de leads dos formulários do Facebook e envio da primeira mensagem para leads de forma automatizada e personalizada."
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Envie e receba eventos automaticamente entre sistemas."
  },
  {
    icon: ArrowUpDown,
    title: "API",
    description: "Integração com outros sistemas via API."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-2xl font-semibold uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Transformamos conversas em vendas,<span className="text-gradient"> 24 horas por dia!</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Com automação inteligente de atendimento, você nunca mais perde um cliente por demora de atendimento. WhatsApp, Instagram, Facebook, tudo integrado e automatizado! Resultado? Clientes felizes respondidos em segundos, e seu time livre para vender mais!
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;