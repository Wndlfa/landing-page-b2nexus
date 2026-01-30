import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
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
            Política de Privacidade – B2 Nexus
          </h1>
          <p className="text-muted-foreground font-medium">
            Data de vigência: <time dateTime="2026-01-30">30 de janeiro de 2026</time>
          </p>
        </header>

        <article className="prose prose-invert prose-primary max-w-none">
          
          {/* 1. Introdução */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Esta Política de Privacidade descreve como o <strong className="text-foreground">B2 Nexus</strong> (“nós”, “nosso” ou “plataforma”) coleta, utiliza, armazena e protege dados pessoais de usuários e de terceiros no contexto do uso de nosso dashboard SaaS disponível em{" "}
              <a href="https://app.b2nexus.com.br" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                https://app.b2nexus.com.br
              </a>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O B2 Nexus realiza o tratamento de dados em conformidade com a legislação aplicável, em especial a <strong className="text-foreground">Lei Geral de Proteção de Dados Pessoais – LGPD</strong> (Lei nº 13.709/2018).
            </p>
          </section>

          {/* 2. Controlador */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Controlador e Contato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na maioria dos casos, o cliente/usuário do B2 Nexus é o <strong className="text-foreground">controlador</strong> dos dados pessoais que insere ou importa na plataforma (por exemplo, contatos, leads e clientes), e o B2 Nexus atua como <strong className="text-foreground">operador</strong>, tratando esses dados conforme instruções do controlador.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas sobre esta Política ou sobre o tratamento de dados, entre em contato pelo e-mail: <a href="mailto:contato@b2nexus.com.br" className="text-primary font-medium hover:underline">contato@b2nexus.com.br</a>.
            </p>
          </section>

          {/* 3. Dados coletados */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">3. Dados que Coletamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Coletamos diferentes categorias de dados, a depender de como você interage com o B2 Nexus e as integrações ativadas.
            </p>
            
            <div className="grid gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Dados de cadastro e conta</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Nome, e-mail, senha (quando aplicável) e demais informações básicas fornecidas no registro.</li>
                  <li>Dados de autenticação via Login com Google (como nome, e-mail e identificador da conta Google).</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Dados de uso da plataforma</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Logs de acesso, endereço IP, tipo de navegador, páginas acessadas, datas e horários de uso.</li>
                  <li>Configurações de conta, preferências de notificação e parâmetros de automações criadas por você (ex.: fluxos de atendimento, regras de disparo).</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Dados de contatos, leads e clientes</h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Nome, telefone, e-mail, identificadores em WhatsApp, Instagram, Facebook e outros canais.</li>
                  <li>Histórico de interações, mensagens, tags, etapas de funil e anotações incluídas por você ou pela sua equipe.</li>
                </ul>
              </div>
              
               <div className="bg-secondary/20 border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                   3.4 Dados de integrações com terceiros
                </h3>
                <p className="text-sm text-muted-foreground mb-3">Dependendo das integrações que você ativa, podemos acessar:</p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">WhatsApp / Automação:</strong> metadados de conversas, mensagens enviadas/recebidas, números de telefone vinculados às campanhas.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Meta (Facebook/Instagram):</strong> comentários, mensagens diretas, leads captados em formulários.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Google (Login e Calendar):</strong> dados básicos da conta, calendários e eventos para agendamento.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Bases Legais */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Bases Legais e Finalidades</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tratamos dados pessoais com base em fundamentos legais previstos na LGPD, incluindo consentimento, execução de contrato, cumprimento de obrigação legal e legítimo interesse, quando aplicável. Usamos os dados para:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {[
                "Criar e gerenciar sua conta",
                "Fornecer automações, CRM e integrações",
                "Permitir Login com Google e Calendar",
                "Enviar comunicações de suporte e segurança",
                "Cumprir obrigações legais",
                "Prevenir fraudes e abusos"
              ].map((item, i) => (
                <li key={i} className="flex gap-2 px-3 py-2 bg-secondary/10 rounded-lg border border-border/50 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Login com Google */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Login com Google</h2>
            <div className="glass rounded-2xl p-6 border border-border">
              <p className="text-muted-foreground mb-4">
                Quando você opta por se autenticar com <strong className="text-foreground">Login com Google</strong>, solicitamos acesso a informações básicas (nome, e-mail e ID de usuário) exclusivamente para:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside mb-4">
                <li>identificar o usuário de forma segura;</li>
                <li>criar e manter seu perfil no B2 Nexus;</li>
                <li>facilitar futuros logins sem necessidade de nova senha.</li>
              </ul>
              <p className="text-sm text-muted-foreground italic border-t border-border/50 pt-4">
                Esses dados não são vendidos, alugados ou usados para publicidade direcionada sem seu consentimento específico.
              </p>
            </div>
          </section>

          {/* 6. Google Calendar (Focus) */}
          <section className="mb-12">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-6 border-b border-border bg-gradient-to-r from-secondary/40 to-transparent">
                 <h2 className="text-2xl font-bold text-foreground">6. Integração com Google Calendar</h2>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Quando você conecta o Google Calendar ao B2 Nexus, poderemos acessar os calendários e eventos necessários para exibir compromissos existentes e criar/atualizar eventos em seu nome, conforme suas automações (ex: IA agendando horários).
                </p>

                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                   <h3 className="text-base font-bold text-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                     <span className="text-lg">🛡️</span> Google API Services User Data Policy / Limited Use
                   </h3>
                   <p className="text-sm text-muted-foreground mb-3">Seguimos rigorosamente os requisitos de <strong>Limited Use</strong>:</p>
                   <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Usamos os dados apenas para recursos de agendamento e gestão no B2 Nexus.</li>
                      <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Não utilizamos para publicidade, segmentação ou venda a terceiros.</li>
                      <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Não compartilhamos com terceiros, exceto quando estritamente necessário para o serviço ou lei.</li>
                      <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Armazenamos apenas o estritamente necessário (ex: IDs de eventos).</li>
                      <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Você pode revogar o acesso a qualquer momento nas configurações da sua conta Google.</li>
                   </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Outras Integrações */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. WhatsApp, Meta e Outros</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ao integrar canais como WhatsApp, Instagram e Facebook, tratamos metadados de conversas, mensagens e leads. Você é responsável por obter consentimento dos titulares, informar sobre o uso de automação e respeitar as políticas dessas plataformas.
            </p>
          </section>

          {/* 8. Compartilhamento */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Podemos compartilhar dados com:
            </p>
            <ul className="text-muted-foreground list-disc list-inside space-y-2 ml-2">
              <li>Fornecedores de infraestrutura e tecnologia (atuando como operadores sob contrato de sigilo).</li>
              <li>Provedores de APIs (Google, Meta) para execução das integrações.</li>
              <li>Autoridades, para cumprimento de obrigações legais.</li>
              <li>Em fusões ou aquisições, mantendo a proteção dos dados.</li>
            </ul>
            <p className="text-muted-foreground font-medium mt-4">Não vendemos dados pessoais a terceiros.</p>
          </section>

          {/* 9. Retenção */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Retenção e Exclusão</h2>
            <p className="text-muted-foreground leading-relaxed">
              Mantemos dados pelo tempo necessário para cumprir as finalidades, obrigações legais e exercício de direitos. Mediante solicitação, podemos excluir, anonimizar ou bloquear dados, respeitados os prazos legais de guarda.
            </p>
          </section>

          {/* 10. Segurança */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Segurança da Informação</h2>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos criptografia (HTTPS/TLS), controle de acesso rigoroso e logs de auditoria. Embora empreguemos as melhores práticas, nenhum sistema é 100% imune a riscos.
            </p>
          </section>

          {/* 11. Direitos (Grid) */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">11. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground mb-4">Você pode exercer seus direitos a qualquer momento:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
               {[
                 "Confirmação de tratamento", "Acesso aos dados", "Correção de dados",
                 "Anonimização/Bloqueio", "Portabilidade", "Eliminação (consentimento)",
                 "Info sobre compartilhamento", "Revogação do consentimento"
               ].map((right, idx) => (
                 <div key={idx} className="p-4 rounded-xl bg-card border border-border flex items-center justify-center text-center text-muted-foreground hover:border-primary/40 transition-colors">
                   {right}
                 </div>
               ))}
            </div>
            <p className="text-center mt-6 text-muted-foreground">
              Para exercer, envie e-mail para <a href="mailto:contato@b2nexus.com.br" className="text-primary hover:underline">contato@b2nexus.com.br</a>
            </p>
          </section>

          {/* 12, 13 */}
          <section className="mb-12 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">12. Crianças e Adolescentes</h2>
              <p className="text-muted-foreground text-sm">
                O B2 Nexus não é direcionado a menores de idade. Se identificarmos dados de menores sem base legal, eles serão excluídos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">13. Atualizações</h2>
              <p className="text-muted-foreground text-sm">
                Podemos atualizar esta política periodicamente. A versão vigente é a mais recente no topo desta página.
              </p>
            </div>
          </section>

           {/* 14. Contato (Footer Style) */}
           <section className="mb-20 pt-12 border-t border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">14. Contato</h2>
            <p className="text-muted-foreground mb-6">Dúvidas sobre sua privacidade?</p>
            <a href="mailto:contato@b2nexus.com.br" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
               <span>✉</span> Falar com Encarregado de Dados (DPO)
            </a>
           </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
