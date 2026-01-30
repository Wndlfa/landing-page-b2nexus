import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-glow opacity-50" />
      </div>

      <main className="container max-w-4xl pt-32 pb-20 px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gradient">
            Termos de Uso – B2 Nexus
          </h1>
          <p className="text-muted-foreground font-medium">
            Data de vigência: <time dateTime="2026-01-30">30 de janeiro de 2026</time>
          </p>
        </header>

        <article className="prose prose-invert prose-primary max-w-none">
          {/* 1. Aceitação */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ao acessar ou utilizar a plataforma <strong className="text-foreground">B2 Nexus</strong> (“Serviço”), disponível em{" "}
              <a href="https://app.b2nexus.com.br" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                https://app.b2nexus.com.br
              </a>, você declara que leu, entendeu e concorda com estes Termos de Uso. 
              Se você não concordar com qualquer condição aqui descrita, não deverá utilizar o Serviço.
            </p>
          </section>

          {/* 2. Sobre o B2 Nexus */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Sobre o B2 Nexus</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O <strong className="text-foreground">B2 Nexus</strong> é uma plataforma em modelo “software como serviço” (SaaS) que oferece um dashboard para:
            </p>
            <ul className="grid gap-3 text-muted-foreground">
              {[
                "automação de atendimento via WhatsApp com inteligência artificial;",
                "funcionalidades de CRM e gestão de contatos;",
                "disparo em massa de mensagens, respeitada a legislação aplicável e políticas das plataformas;",
                "conexão e captação de leads via Facebook;",
                "automação de atendimento via Instagram (comentários e mensagens diretas);",
                "integração com Google Calendar para criação e gerenciamento de compromissos;",
                "autenticação via Login com Google."
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Cadastro */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro, Conta e Autenticação</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para utilizar o Serviço, o usuário deve criar uma conta ou autenticar-se por meio de provedores externos, como o Google. 
              Ao se cadastrar, você se compromete a fornecer informações verdadeiras, atualizadas e completas, bem como a manter a confidencialidade de suas credenciais de acesso. 
              Você é integralmente responsável por todas as atividades realizadas em sua conta.
            </p>
          </section>

          {/* 4. Uso Permitido */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Uso Permitido e Responsabilidades do Usuário</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você concorda em utilizar o B2 Nexus em conformidade com a legislação aplicável, incluindo, mas não se limitando à Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e às políticas das plataformas integradas (WhatsApp, Instagram, Facebook, Google).
            </p>
            <div className="bg-secondary/30 rounded-xl p-6 border border-border">
              <p className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">É expressamente proibido:</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-red-500">✕</span> utilizar a plataforma para envio de spam, mensagens em massa não autorizadas ou comunicações abusivas;</li>
                <li className="flex gap-2"><span className="text-red-500">✕</span> coletar, armazenar ou tratar dados pessoais sem base legal adequada (como consentimento ou outra hipótese prevista em lei);</li>
                <li className="flex gap-2"><span className="text-red-500">✕</span> utilizar o Serviço para fins ilícitos, difamatórios, discriminatórios ou que violem direitos de terceiros;</li>
                <li className="flex gap-2"><span className="text-red-500">✕</span> tentar obter acesso não autorizado a sistemas, contas ou dados de terceiros.</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              O usuário é o único responsável pelo conteúdo das mensagens enviadas, fluxos configurados, listas de contatos cadastradas e integrações ativas na plataforma.
            </p>
          </section>

          {/* 5. Planos */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Planos, Pagamentos e Cancelamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando aplicável, determinadas funcionalidades do B2 Nexus poderão depender da contratação de planos pagos. 
              As condições específicas de cada plano (preço, forma de pagamento, período de cobrança, renovação automática e política de cancelamento) serão apresentadas na página de oferta ou na própria interface da plataforma no momento da contratação.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Salvo disposição em contrário na oferta do plano ou exigência legal, <strong className="text-foreground">valores já pagos não são reembolsáveis</strong> em caso de cancelamento pelo usuário. 
              O cancelamento interrompe cobranças futuras, mas não gera créditos relativos ao período já utilizado ou contratado.
            </p>
          </section>

          {/* 6. Privacidade */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Tratamento de Dados Pessoais e Privacidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O uso do B2 Nexus envolve o tratamento de dados pessoais de usuários e, eventualmente, de terceiros cadastrados na plataforma (contatos, leads, clientes etc.). 
              Esses dados são tratados em conformidade com a LGPD e legislação aplicável, conforme descrito na Política de Privacidade, disponível em:{" "}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                https://b2nexus.com/privacy-policy
              </a>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A Política de Privacidade detalha, entre outros pontos, quais dados são coletados, para quais finalidades são utilizados, com quem podem ser compartilhados, por quanto tempo são armazenados e quais são os direitos dos titulares de dados. 
              Ao utilizar o Serviço, você declara estar ciente e de acordo com a nossa Política de Privacidade.
            </p>
          </section>

          {/* 7. Integrações (Featured) */}
          <section className="mb-12 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-6 border-b border-border bg-secondary/20">
              <h2 className="text-2xl font-bold text-foreground">7. Integrações com Terceiros</h2>
              <p className="text-muted-foreground mt-2">
                O B2 Nexus pode integrar-se a serviços como APIs do WhatsApp, Facebook/Meta e Google.
              </p>
            </div>
            
            <div className="p-6 space-y-8">
              {/* 7.1 */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 7.1 Login com Google
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l border-border ml-1">
                  Ao escolher “Login com Google”, o Serviço acessará seus dados básicos de conta (como nome, e-mail e identificador da conta) exclusivamente para autenticação, criação e gerenciamento do seu perfil dentro da plataforma. 
                  Esses dados não são vendidos nem utilizados para fins de marketing sem seu consentimento específico.
                </p>
              </div>

              {/* 7.2 */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 7.2 Google Calendar
                </h3>
                <div className="pl-4 border-l border-border ml-1 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Quando você conecta o Google Calendar ao B2 Nexus, a plataforma poderá:
                  </p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-2">
                    <li>visualizar seus calendários e eventos necessários à funcionalidade de agendamento;</li>
                    <li>criar, atualizar ou excluir eventos em seu calendário em seu nome, quando solicitado pelas automações ou fluxos configurados por você (por exemplo, IA agendando horários).</li>
                  </ul>
                  
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <p className="text-sm text-foreground font-medium mb-2">Google API Services User Data Policy & Limited Use:</p>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      <li className="flex gap-2">✓ os dados obtidos via Google Calendar são utilizados apenas para fornecer e melhorar os recursos de agendamento e gestão de compromissos do B2 Nexus;</li>
                      <li className="flex gap-2">✓ os dados não são utilizados para fins de publicidade ou criação de perfis de usuários sem consentimento explícito;</li>
                      <li className="flex gap-2">✓ os dados não são vendidos ou compartilhados com terceiros para usos não relacionados às funcionalidades do Serviço;</li>
                      <li className="flex gap-2">✓ o usuário pode revogar a qualquer momento o acesso do B2 Nexus à sua conta Google por meio das configurações de segurança da própria Google.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7.3 */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 7.3 Outras Integrações
                </h3>
                <div className="pl-4 border-l border-border ml-1">
                  <p className="text-sm text-muted-foreground mb-2">Ao ativar integrações com WhatsApp, Instagram, Facebook ou outros serviços, você declara que:</p>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-2">
                    <li>possui autorização para utilizar esses canais em nome de sua empresa ou de seus clientes;</li>
                    <li>cumprirá as políticas dessas plataformas, inclusive regras contra spam, conteúdo proibido e violação de direitos;</li>
                    <li>informará de forma clara aos titulares de dados sobre o uso de automações e canais de atendimento, obtendo consentimento quando exigido.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 8. LGPD */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Obrigações de Conformidade com a LGPD</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O usuário é o <strong className="text-foreground">controlador</strong> dos dados pessoais que cadastra ou importa para o B2 Nexus (por exemplo, lista de contatos, leads, clientes), sendo responsável por garantir que:
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-2 ml-4">
                <li>a coleta e o uso desses dados tenham base legal adequada;</li>
                <li>os titulares sejam informados sobre o tratamento realizado e seus direitos;</li>
                <li>exista canal de atendimento para solicitações de acesso, correção, exclusão e outras demandas de titulares.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                O B2 Nexus atua como <strong className="text-foreground">operador</strong> em relação a esses dados, tratando-os apenas conforme suas instruções e de acordo com estes Termos e a Política de Privacidade.
              </p>
            </div>
          </section>

          {/* 9. Propriedade Intelectual */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Todos os direitos de propriedade intelectual relacionados ao B2 Nexus, incluindo código-fonte, interfaces, funcionalidades, marcas, logotipos e conteúdos disponibilizados, pertencem ao responsável pela plataforma, salvo indicação em contrário. 
              O usuário recebe apenas uma licença limitada, não exclusiva, revogável e intransferível para uso do Serviço, conforme estes Termos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              É vedado copiar, modificar, descompilar, realizar engenharia reversa, distribuir, alugar, sublicenciar ou criar obras derivadas com base na plataforma, salvo autorização prévia e por escrito.
            </p>
          </section>

          {/* 10. Responsabilidade */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Disponibilidade, Suporte e Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empregamos esforços razoáveis para manter o B2 Nexus disponível e seguro, porém não garantimos que o Serviço será ininterrupto, livre de erros ou totalmente imune a falhas técnicas, indisponibilidades de terceiros (como provedores de API) ou eventos de força maior.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Na máxima extensão permitida pela legislação aplicável, o B2 Nexus não se responsabiliza por:
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2 ml-4 mb-4">
              <li>perdas de lucros, receitas, dados ou outras perdas indiretas decorrentes do uso ou da indisponibilidade do Serviço;</li>
              <li>configurações equivocadas realizadas pelo usuário, incluindo automações, disparos em massa e campanhas que violem políticas de terceiros ou a legislação;</li>
              <li>conteúdos enviados pelo usuário a seus contatos por meio da plataforma.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Quando houver responsabilidade comprovada do B2 Nexus, esta ficará limitada ao montante efetivamente pago pelo usuário pelos últimos 12 (doze) meses de uso do Serviço.
            </p>
          </section>

          {/* 11. Suspensão */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Suspensão e Encerramento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos suspender ou encerrar o acesso ao B2 Nexus, total ou parcialmente, caso:
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2 ml-4 mb-4">
              <li>haja descumprimento destes Termos;</li>
              <li>haja suspeita de fraude, uso indevido ou violação de direitos de terceiros;</li>
              <li>seja necessário para atender determinação legal ou ordem de autoridade competente.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Quando possível, notificaremos o usuário por e-mail ou outro canal cadastrado, indicando o motivo da suspensão ou encerramento.
            </p>
          </section>

          {/* 12. Alterações */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Alterações dos Termos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Estes Termos podem ser atualizados periodicamente para refletir mudanças na plataforma, na legislação ou em nossas práticas internas. 
              A versão vigente será sempre a mais recente, indicada pela data de vigência no início do documento.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O uso continuado do B2 Nexus após a publicação de alterações será interpretado como concordância com a nova versão dos Termos.
            </p>
          </section>

          {/* Footer Grid: Contato & Foro */}
          <section className="mb-20 pt-12 border-t border-border">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">13. Contato</h2>
                <p className="text-muted-foreground mb-2">Em caso de dúvidas, solicitações ou reclamações:</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="text-primary text-xl">✉</span>
                  <a href="mailto:suporte@b2nexus.com" className="text-primary font-bold hover:underline">
                    contato@b2nexus.com.br
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">14. Foro e Legislação</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos são regidos pelas leis da República Federativa do Brasil. <br/>
                  Fica eleito o foro da comarca de <strong className="text-foreground">Uberaba/MG</strong> (ou outra de sua preferência) para dirimir eventuais controvérsias.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
