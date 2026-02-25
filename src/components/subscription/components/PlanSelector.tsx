import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PlanSelectorProps, BillingCycle } from '../types/subscription.types';

// Plan data structure
interface PlanData {
  name: string;
  description: string;
  basePrice: number;
  prices: Record<BillingCycle, number>;
  features: string[];
  popular: boolean;
  credits: {
    monthly: number;
    rolloverCeiling: number;
  };
  customAgents: number | 'unlimited';
}


import { PLAN_LIMITS } from '@/components/subscription/constants';

const basePlans: PlanData[] = [
  {
    name: 'Basic',
    description: 'Para quem quer começar a automatizar hoje.',
    basePrice: 99,
    prices: {
      mensal: 99,
      trimestral: 276,
      semestral: 528,
      anual: 931,
    },
    features: [
      '1.800 Créditos IA/mês (Uso Flexível)',
      'Créditos não utilizados acumulam (até 2.700)',
      `${PLAN_LIMITS.Basic.max_custom_agents} Agentes Personalizados`,
      `${PLAN_LIMITS.Basic.templates_enabled ? 'Agentes Templates Ilimitados' : 'Sem Templates'}`,
      'Disparo em Massa (Campanhas)',
      'Suporte via e-mail',
      'API & Webhooks',
    ],
    popular: false,
    credits: {
      monthly: PLAN_LIMITS.Basic.credits.monthly,
      rolloverCeiling: PLAN_LIMITS.Basic.credits.rolloverCeiling,
    },
    customAgents: PLAN_LIMITS.Basic.max_custom_agents,
  },
  {
    name: 'Standard',
    description: 'Para negócios que precisam de mais volume.',
    basePrice: 399,
    prices: {
      mensal: 399,
      trimestral: 1131,
      semestral: 2094,
      anual: 3811,
    },
    features: [
      '7.000 Créditos IA/mês (Uso Flexível)',
      'Créditos não utilizados acumulam (até 12.250)',
      `${PLAN_LIMITS.Standard.max_custom_agents} Agentes Personalizados`,
      `${PLAN_LIMITS.Standard.templates_enabled ? 'Agentes Templates Ilimitados' : 'Sem Templates'}`,
      'Disparo em Massa (Campanhas)',
      'Suporte via grupo de WhatsApp',
      `${PLAN_LIMITS.Standard.external_integration ? 'API & Webhooks' : ''}`
    ].filter(Boolean),
    popular: true,
    credits: {
      monthly: PLAN_LIMITS.Standard.credits.monthly,
      rolloverCeiling: PLAN_LIMITS.Standard.credits.rolloverCeiling,
    },
    customAgents: PLAN_LIMITS.Standard.max_custom_agents,
  },
  {
    name: 'Professional',
    description: 'Para operações intensas e agências.',
    basePrice: 999,
    prices: {
      mensal: 999,
      trimestral: 2847,
      semestral: 5292,
      anual: 9590,
    },
    features: [
      '20.000 Créditos IA/mês (Uso Flexível)',
      'Créditos não utilizados acumulam (até 40.000)',
      `${PLAN_LIMITS.Professional.max_custom_agents} Agentes Personalizados`,
      `${PLAN_LIMITS.Professional.templates_enabled ? 'Agentes Templates Ilimitados' : 'Sem Templates'}`,
      'Disparo em Massa (Campanhas)',
      'Suporte Prioritário (WhatsApp)',
      'API & Webhooks',
    ],
    popular: false,
    credits: {
      monthly: PLAN_LIMITS.Professional.credits.monthly,
      rolloverCeiling: PLAN_LIMITS.Professional.credits.rolloverCeiling,
    },
    customAgents: PLAN_LIMITS.Professional.max_custom_agents,
  },
];

const billingCycles: { key: BillingCycle; label: string; discount: number; badge?: string }[] = [
  { key: 'mensal', label: 'Mensal', discount: 0 },
  { key: 'trimestral', label: 'Trimestral', discount: 5, badge: '5% OFF' },
  { key: 'semestral', label: 'Semestral', discount: 12, badge: '12% OFF' },
  { key: 'anual', label: 'Anual', discount: 20, badge: '20% OFF' },
];

export function PlanSelector({
  currentPlan = 'Basic',
  billingCycle: externalBillingCycle,
  onBillingCycleChange,
  isExpired = false,
  userId,
  userEmail,
}: PlanSelectorProps) {
  const [internalBillingCycle, setInternalBillingCycle] = useState<BillingCycle>('mensal');
  
  // Use external prop if provided, otherwise use internal state
  const currentCycle = externalBillingCycle || internalBillingCycle;

  const handleCycleChange = (cycle: BillingCycle) => {
    setInternalBillingCycle(cycle);
    if (onBillingCycleChange) {
      onBillingCycleChange(cycle);
    }
  };

  return (
    <section id="preços" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#030712]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full-opacity-[0.04] radial-gradient(circle, #a855f7, transparent 70%)"></div>
      <div className="max-w-6xl mx-auto relative z-10 space-y-4">
        <div className="flex justify-center">
          <div className="inline-flex items-center text-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-1xl font-medium mb-4">
            PREÇOS
          </div>
        </div>
       <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
          Conheça nossos <span className="text-gradient">planos</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
            Sem desperdício: seus créditos não utilizados acumulam para o próximo mês. <br/>7 Dias Grátis para testar!
        </p>
        {/* Billing Cycle Selector */}
        <div className="mb-12 flex justify-center">
          <div className="p-2 mb-4 bg-muted/20 backdrop-blur-xl rounded-full border border-white/10 inline-flex flex-wrap md:flex-nowrap items-center gap-1 shadow-2xl">
            {billingCycles.map((cycle) => (
              <button
                key={cycle.key}
                onClick={() => handleCycleChange(cycle.key)}
                className={cn(
                  'px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 relative flex items-center gap-2 whitespace-nowrap',
                  currentCycle === cycle.key
                    ? 'bg-primary text-primary-foreground scale-[1.02]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                )}
              >
                {cycle.label}
                {cycle.badge && (
                  <Badge
                    variant={currentCycle === cycle.key ? "secondary" : "outline"}
                    className={cn(
                      "h-5 px-1.5 text-[10px] font-bold uppercase",
                      currentCycle === cycle.key ? "bg-emerald-600/90 text-white border-none hover:bg-emerald-600/90" : "text-emerald-600 border-emerald-600/20 bg-emerald-600/5"
                    )}
                  >
                    {cycle.badge}
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {basePlans.map((plan, index) => {
            const cycleTotalPrice = plan.prices[currentCycle];
            const monthlyPrice = plan.prices.mensal;
            const months = currentCycle === 'mensal' ? 1 : currentCycle === 'trimestral' ? 3 : currentCycle === 'semestral' ? 6 : 12;
            const monthlyEquivalent = Math.round(cycleTotalPrice / months);
            
            // Calculate savings
            const savings = currentCycle === 'mensal' ? 0 : (monthlyPrice * months) - cycleTotalPrice;

            return (
              <div
                key={plan.name}
                className={cn(
                  'animate-slide-up relative rounded-3xl border p-8 shadow-2xl transition-all duration-500 hover:scale-[1.02]',
                  plan.popular
                    ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-card ring-1 ring-primary/20'
                    : 'border-white/10 bg-card/50 backdrop-blur-sm hover:border-primary/30'
                )}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Savings Badge */}
                {savings > 0 && (
                  <div className="absolute -top-3 right-7 z-20">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none px-4 py-1 text-[11px] font-bold shadow-lg shadow-emerald-500/10">
                      Economia de R$ {savings.toLocaleString('pt-BR')} no ciclo
                    </Badge>
                  </div>
                )}



                {/* Recommended/Popular Badge */}
              {plan.popular && (
                <div
                  className={cn(
                    'absolute -top-3 z-50 transition-all duration-500',
                    currentCycle === 'mensal' 
                      ? 'left-1/2 -translate-x-1/2' 
                      : 'left-6'
                  )}
                >
                  <span className="rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold text-primary-foreground shadow-lg shadow-primary/20 whitespace-nowrap border border-white/10 uppercase tracking-wider">
                    {currentCycle === 'mensal' ? 'Recomendado' : 'Popular'}
                  </span>
                </div>
              )}
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                
                {/* Pricing */}
              <div className="mt-4">
                <p className="text-4xl font-bold text-foreground">
                  R$ {monthlyEquivalent}
                  <span className="text-base font-normal text-muted-foreground">/mês</span>
                </p>
                {currentCycle === 'mensal' ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Cobrado mensalmente.
                  </p>
                ) : (
                  <div className="mt-1">
                    <p className="text-xs text-muted-foreground line-through opacity-50">
                      De R$ {monthlyPrice}/mês
                    </p>
                    <p className="text-xs text-emerald-400 font-medium">
                      Faturado{' '}
                      {currentCycle === 'trimestral' ? 'trimestralmente' : 
                       currentCycle === 'semestral' ? 'semestralmente' : 
                       currentCycle === 'anual' ? 'anualmente' : 'periodicamente'}{' '}
                      em R$ {cycleTotalPrice.toLocaleString('pt-BR')}{' '}
                    </p>
                  </div>
                )}
              </div>
                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Action Button */}
                  <Button variant="default" className="mt-6 w-full rounded-full">
                    Selecionar
                  </Button>
              </div>
            );
          })}
        </div>
        {/* Enterprise & Agências Card */}
        <div className="mt-12 w-full rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-muted/30 p-8 shadow-lg ring-1 ring-primary/10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      
            {/* Cabeçalho */}
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Rocket className="mr-2 h-6 w-6" />
                <span className="text-base font-semibold">Para Alta Escala</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground">
                Enterprise & Agências
              </h3>
              <p className="text-lg text-muted-foreground">
                Soluções sob medida para operações de alto volume. Contratos personalizados e gestão dedicada.
              </p>
            </div>
            {/* Botão de Ação */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="w-full bg-primary text-lg font-semibold shadow-md hover:bg-primary/90 sm:w-auto px-8 py-6"
                onClick={() => window.open('https://wa.me/message/SHS36AFKSQGYA1', '_blank', 'noopener noreferrer')}
              >
                Falar com Consultor
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Atendimento exclusivo via WhatsApp
              </p>
            </div>
          </div>
          {/* Lista de Benefícios (Grid interno) */}
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Agentes Ilimitados",
              "Volume de Créditos no Atacado",
              "API & Webhooks Avançados",
              "Auditoria Mensal de Conversas",
              "Gestor de Conta Dedicado",
              "Contrato e NF Corporativa",
              "Setup e Implementação Inclusos",
              "SLA de Prioridade Máxima"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                {/* Ícone de Check estilizado */}
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanSelector;