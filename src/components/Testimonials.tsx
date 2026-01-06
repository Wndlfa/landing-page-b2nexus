import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO, TechFlow",
    content: "A Nexus Rise transformou completamente nossa operação de marketing. Em 3 meses, triplicamos nossa base de leads qualificados.",
    rating: 5
  },
  {
    name: "Mariana Costa",
    role: "Diretora de Marketing, Innovate",
    content: "As automações implementadas economizam 40 horas semanais da minha equipe. O ROI foi absurdo.",
    rating: 5
  },
  {
    name: "Felipe Santos",
    role: "Fundador, ScaleUp",
    content: "Profissionalismo excepcional. A equipe entende de negócios e tecnologia como ninguém no mercado.",
    rating: 5
  }
];

const Testimonials = () => {
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
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;