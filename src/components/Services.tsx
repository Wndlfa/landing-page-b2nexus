import { motion } from "framer-motion";
import { Bot, Target, Zap, TrendingUp, Mail, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Automação com IA",
    description: "Chatbots inteligentes e fluxos automatizados que qualificam leads 24/7 sem intervenção humana."
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas otimizadas por IA para Google, Meta e LinkedIn com ROI maximizado."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Sequências automatizadas personalizadas que nutrem leads até a conversão."
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Estratégias data-driven para acelerar crescimento com experimentos validados."
  },
  {
    icon: Zap,
    title: "Integração de Sistemas",
    description: "Conectamos seu CRM, marketing e vendas em um ecossistema automatizado."
  },
  {
    icon: BarChart3,
    title: "Analytics Avançado",
    description: "Dashboards em tempo real com insights acionáveis para tomada de decisão."
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
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Soluções completas para seu <span className="text-gradient">crescimento</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos tecnologia de ponta com estratégias comprovadas para entregar resultados mensuráveis.
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