import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CookieTable from "@/components/sections/cookie-table";

export const metadata: Metadata = {
  title: "Política de Privacidade | Porto Vale Seguros",
  description:
    "Saiba como a Porto Vale Seguros coleta, utiliza, compartilha e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

const h1Cls = "text-3xl font-bold text-foreground md:text-4xl";
const h2Cls = "mt-10 border-t pt-4 text-lg font-bold text-foreground md:text-xl";
const h3Cls = "mt-5 text-base font-semibold text-foreground";
const pCls = "leading-relaxed text-muted-foreground";
const ulCls = "list-disc space-y-1 pl-5 leading-relaxed text-muted-foreground";

export default function PoliticasDePrivacidadePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className={h1Cls}>Política de Privacidade e Proteção de Dados Pessoais</h1>

          <h2 className={h2Cls}>1. APRESENTAÇÃO</h2>
          <p className={pCls}>
            <strong>PORTO VALE CORRETORA DE CONSÓRCIOS E SEGUROS LTDA.</strong>
          </p>
          <p className={pCls}>
            Porto Vale, comprometida com a proteção da privacidade, da segurança da informação e
            dos dados pessoais de seus clientes, parceiros, colaboradores, fornecedores,
            visitantes e usuários de seus canais digitais, apresenta a presente Política de
            Privacidade.
          </p>
          <p className={pCls}>
            Este documento tem por objetivo esclarecer de forma transparente como realizamos a
            coleta, utilização, armazenamento, compartilhamento, proteção e demais operações de
            tratamento de dados pessoais, em conformidade com a Lei nº 13.709/2018 (Lei Geral de
            Proteção de Dados Pessoais – LGPD), regulamentações da Autoridade Nacional de Proteção
            de Dados (ANPD) e demais normas aplicáveis.
          </p>
          <p className={pCls}>
            Ao acessar nosso site, utilizar nossos serviços ou interagir com nossos canais de
            atendimento, o titular declara estar ciente das disposições desta Política.
          </p>

          <h2 className={h2Cls}>2. QUEM SOMOS</h2>
          <p className={pCls}>
            A Porto Vale atua no segmento de consórcios, seguros, soluções financeiras e produtos
            correlatos, oferecendo atendimento presencial e digital a clientes em todo o
            território nacional.
          </p>
          <p className={pCls}>
            Para fins da LGPD, a Porto Vale atua como Controladora dos dados pessoais tratados no
            âmbito de suas atividades comerciais e operacionais.
          </p>
          <p className={pCls}>
            <strong>Dados da empresa:</strong>
          </p>
          <p className={pCls}>
            <strong>Razão Social:</strong> Porto Vale Corretora de Consórcios e Seguros Ltda.
          </p>
          <p className={pCls}>
            <strong>CNPJ:</strong> 07.081.058/0001-56
          </p>
          <p className={pCls}>
            <strong>Endereço:</strong> Rua Comendador de Vicente Paulo Penido, 374, Parque
            Residencial Aquarius, São José dos Campos – SP, CEP: 12246-856.
          </p>
          <p className={pCls}>
            <strong>E-mail para assuntos relacionados à privacidade:</strong>{" "}
            juridico@portovaleconsorcios.com.br
          </p>

          <h2 className={h2Cls}>3. CONCEITOS IMPORTANTES</h2>
          <p className={pCls}>Para facilitar a compreensão desta Política, consideram-se:</p>
          <p className={pCls}>
            <strong>Dados Pessoais:</strong> informações relacionadas a pessoa natural
            identificada ou identificável.
          </p>
          <p className={pCls}>
            <strong>Titular:</strong> pessoa natural a quem os dados pessoais se referem.
          </p>
          <p className={pCls}>
            <strong>Tratamento:</strong> qualquer operação realizada com dados pessoais, incluindo
            coleta, armazenamento, consulta, utilização, compartilhamento, eliminação e
            arquivamento.
          </p>
          <p className={pCls}>
            <strong>Controlador:</strong> pessoa responsável pelas decisões relacionadas ao
            tratamento dos dados pessoais.
          </p>
          <p className={pCls}>
            <strong>Operador:</strong> pessoa que realiza o tratamento em nome do Controlador.
          </p>
          <p className={pCls}>
            <strong>ANPD:</strong> Autoridade Nacional de Proteção de Dados.
          </p>

          <h2 className={h2Cls}>4. QUAIS DADOS PESSOAIS COLETAMOS</h2>
          <p className={pCls}>
            A Porto Vale poderá coletar dados pessoais fornecidos diretamente pelo titular ou
            obtidos de forma legítima durante o relacionamento comercial.
          </p>

          <h3 className={h3Cls}>4.1 Dados de identificação</h3>
          <ul className={ulCls}>
            <li>Nome completo;</li>
            <li>CPF;</li>
            <li>RG;</li>
            <li>CNH;</li>
            <li>Data de nascimento;</li>
            <li>Estado civil;</li>
            <li>Nacionalidade.</li>
          </ul>

          <h3 className={h3Cls}>4.2 Dados de contato</h3>
          <ul className={ulCls}>
            <li>Telefone;</li>
            <li>Celular;</li>
            <li>E-mail;</li>
            <li>Endereço residencial ou comercial.</li>
          </ul>

          <h3 className={h3Cls}>4.3 Dados profissionais</h3>
          <ul className={ulCls}>
            <li>Cargo;</li>
            <li>Empresa;</li>
            <li>Atividade profissional;</li>
            <li>Informações relacionadas à renda e capacidade financeira.</li>
          </ul>

          <h3 className={h3Cls}>4.4 Dados financeiros</h3>
          <ul className={ulCls}>
            <li>Dados bancários;</li>
            <li>Informações de pagamento;</li>
            <li>Informações necessárias para contratação de produtos financeiros.</li>
          </ul>

          <h3 className={h3Cls}>4.5 Dados de navegação</h3>
          <ul className={ulCls}>
            <li>Endereço IP;</li>
            <li>Data e horário de acesso;</li>
            <li>Geolocalização aproximada;</li>
            <li>Navegador utilizado;</li>
            <li>Sistema operacional;</li>
            <li>Páginas visitadas;</li>
            <li>Cookies e identificadores eletrônicos.</li>
          </ul>

          <h3 className={h3Cls}>4.6 Dados fornecidos voluntariamente</h3>
          <ul className={ulCls}>
            <li>Informações encaminhadas por formulários;</li>
            <li>Mensagens enviadas por WhatsApp;</li>
            <li>E-mails;</li>
            <li>Atendimento telefônico;</li>
            <li>Redes sociais;</li>
            <li>Solicitações e reclamações.</li>
          </ul>

          <h2 className={h2Cls}>5. COMO COLETAMOS OS DADOS</h2>
          <p className={pCls}>Os dados pessoais podem ser coletados por meio de:</p>
          <ul className={ulCls}>
            <li>Formulários disponíveis no site;</li>
            <li>Landing pages;</li>
            <li>Campanhas publicitárias;</li>
            <li>Redes sociais;</li>
            <li>WhatsApp;</li>
            <li>E-mail;</li>
            <li>Atendimento telefônico;</li>
            <li>Atendimento presencial;</li>
            <li>Contratos e propostas comerciais;</li>
            <li>Ferramentas de CRM;</li>
            <li>Plataformas de marketing digital;</li>
            <li>Cookies e tecnologias semelhantes.</li>
          </ul>

          <h2 className={h2Cls}>6. FINALIDADES DO TRATAMENTO DOS DADOS</h2>
          <p className={pCls}>
            Os dados pessoais poderão ser tratados para as seguintes finalidades:
          </p>

          <h3 className={h3Cls}>Atendimento e relacionamento</h3>
          <ul className={ulCls}>
            <li>Atender solicitações;</li>
            <li>Responder dúvidas;</li>
            <li>Realizar contatos solicitados pelo titular;</li>
            <li>Gerenciar o relacionamento comercial.</li>
          </ul>

          <h3 className={h3Cls}>Contratação de produtos e serviços</h3>
          <ul className={ulCls}>
            <li>Elaborar propostas;</li>
            <li>Realizar simulações;</li>
            <li>Formalizar contratos;</li>
            <li>Processar solicitações relacionadas aos produtos oferecidos.</li>
          </ul>

          <h3 className={h3Cls}>Marketing e prospecção comercial</h3>
          <ul className={ulCls}>
            <li>Apresentar produtos e serviços;</li>
            <li>Realizar campanhas promocionais;</li>
            <li>Enviar conteúdos institucionais;</li>
            <li>Entrar em contato com potenciais clientes.</li>
          </ul>

          <h3 className={h3Cls}>Segurança e prevenção à fraude</h3>
          <ul className={ulCls}>
            <li>Validar informações cadastrais;</li>
            <li>Identificar tentativas de fraude;</li>
            <li>Garantir a segurança dos sistemas e operações.</li>
          </ul>

          <h3 className={h3Cls}>Cumprimento legal e regulatório</h3>
          <ul className={ulCls}>
            <li>Atender exigências legais;</li>
            <li>Cumprir determinações judiciais;</li>
            <li>Responder solicitações de órgãos reguladores e autoridades públicas.</li>
          </ul>

          <h3 className={h3Cls}>Exercício regular de direitos</h3>
          <ul className={ulCls}>
            <li>Defesa em processos judiciais;</li>
            <li>Procedimentos administrativos;</li>
            <li>Arbitragem;</li>
            <li>Produção de provas.</li>
          </ul>

          <h2 className={h2Cls}>7. BASES LEGAIS PARA O TRATAMENTO</h2>
          <p className={pCls}>
            A Porto Vale realiza o tratamento de dados pessoais com fundamento nas bases legais
            previstas na LGPD, incluindo:
          </p>
          <ul className={ulCls}>
            <li>Consentimento do titular;</li>
            <li>Execução de contrato ou procedimentos preliminares;</li>
            <li>Cumprimento de obrigação legal ou regulatória;</li>
            <li>Exercício regular de direitos;</li>
            <li>Legítimo interesse;</li>
            <li>Proteção ao crédito;</li>
            <li>Prevenção à fraude e segurança do titular.</li>
          </ul>

          <h2 className={h2Cls}>8. COMUNICAÇÕES COMERCIAIS E GERAÇÃO DE LEADS</h2>
          <p className={pCls}>A Porto Vale poderá entrar em contato com pessoas que:</p>
          <ul className={ulCls}>
            <li>Preencheram formulários em nossos canais;</li>
            <li>Solicitaram informações sobre produtos;</li>
            <li>Participaram de eventos ou campanhas;</li>
            <li>Manifestaram interesse em nossos serviços;</li>
            <li>Autorizaram o recebimento de comunicações;</li>
            <li>Mantêm relacionamento comercial conosco.</li>
          </ul>
          <p className={pCls}>As comunicações poderão ocorrer por:</p>
          <ul className={ulCls}>
            <li>Telefone;</li>
            <li>WhatsApp;</li>
            <li>SMS;</li>
            <li>E-mail;</li>
            <li>Plataformas digitais.</li>
          </ul>
          <p className={pCls}>
            O titular poderá solicitar a interrupção dessas comunicações a qualquer momento.
          </p>

          <h2 className={h2Cls}>9. COMPARTILHAMENTO DE DADOS PESSOAIS</h2>
          <p className={pCls}>Os dados poderão ser compartilhados, quando necessário, com:</p>
          <ul className={ulCls}>
            <li>Administradoras de consórcios;</li>
            <li>Seguradoras;</li>
            <li>Instituições financeiras;</li>
            <li>Prestadores de serviços tecnológicos;</li>
            <li>Empresas de armazenamento em nuvem;</li>
            <li>Escritórios de advocacia;</li>
            <li>Consultorias;</li>
            <li>Auditores;</li>
            <li>Parceiros comerciais;</li>
            <li>Autoridades públicas e órgãos reguladores.</li>
          </ul>
          <p className={pCls}>
            Todo compartilhamento observará os princípios da necessidade, adequação e segurança
            previstos na LGPD.
          </p>

          <h2 className={h2Cls}>10. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
          <p className={pCls}>
            Alguns fornecedores contratados pela Porto Vale poderão armazenar ou processar dados
            pessoais em servidores localizados fora do Brasil.
          </p>
          <p className={pCls}>
            Nesses casos, a Porto Vale adotará medidas técnicas, administrativas e contratuais
            adequadas para garantir a proteção dos dados pessoais, observando a LGPD e as
            regulamentações da ANPD, inclusive a Resolução CD/ANPD nº 19/2024.
          </p>

          <h2 className={h2Cls}>11. RETENÇÃO E DESCARTE DOS DADOS</h2>
          <p className={pCls}>
            Os dados pessoais serão armazenados somente pelo período necessário para:
          </p>
          <ul className={ulCls}>
            <li>Cumprimento das finalidades informadas;</li>
            <li>Atendimento de obrigações legais e regulatórias;</li>
            <li>Exercício regular de direitos;</li>
            <li>Defesa em processos judiciais, administrativos ou arbitrais.</li>
          </ul>
          <p className={pCls}>
            Após o término do prazo aplicável, os dados serão eliminados ou anonimizados de forma
            segura, salvo quando houver obrigação legal que autorize ou determine sua manutenção.
          </p>

          <h2 className={h2Cls}>12. DIREITOS DOS TITULARES DE DADOS</h2>
          <p className={pCls}>
            Nos termos dos artigos 17 e 18 da LGPD, o titular poderá exercer os seguintes direitos:
          </p>
          <ul className={ulCls}>
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados pessoais;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados;</li>
            <li>Eliminação dos dados tratados com consentimento;</li>
            <li>Informação sobre compartilhamentos realizados;</li>
            <li>Revogação do consentimento;</li>
            <li>Oposição ao tratamento;</li>
            <li>Solicitação de revisão de decisões automatizadas, quando aplicável.</li>
          </ul>
          <p className={pCls}>
            As solicitações poderão ser encaminhadas ao canal de privacidade indicado nesta
            Política.
          </p>

          <h2 className={h2Cls}>13. SEGURANÇA DA INFORMAÇÃO</h2>
          <p className={pCls}>
            A Porto Vale adota medidas técnicas e administrativas adequadas para proteger os dados
            pessoais contra acessos não autorizados, perda, alteração, vazamento, destruição ou
            qualquer forma de tratamento inadequado.
          </p>
          <p className={pCls}>Entre as medidas adotadas estão:</p>
          <ul className={ulCls}>
            <li>Controle de acesso aos sistemas;</li>
            <li>Gestão de perfis e permissões;</li>
            <li>Monitoramento de ambientes tecnológicos;</li>
            <li>Utilização de antivírus e ferramentas de proteção;</li>
            <li>Backup periódico;</li>
            <li>Criptografia quando aplicável;</li>
            <li>Treinamento de colaboradores;</li>
            <li>Procedimentos internos de segurança da informação;</li>
            <li>Gestão de incidentes de segurança.</li>
          </ul>
          <p className={pCls}>
            Apesar de nossos esforços, nenhum ambiente tecnológico é completamente livre de
            riscos, razão pela qual recomendamos que os usuários também adotem boas práticas de
            segurança digital.
          </p>

          <h2 className={h2Cls}>14. INCIDENTES DE SEGURANÇA</h2>
          <p className={pCls}>
            Na hipótese de ocorrência de incidente de segurança que possa acarretar risco ou dano
            relevante aos titulares dos dados pessoais, a Porto Vale adotará as medidas exigidas
            pela legislação aplicável, incluindo, quando necessário:
          </p>
          <ul className={ulCls}>
            <li>Contenção do incidente;</li>
            <li>Investigação e mitigação dos impactos;</li>
            <li>Comunicação à ANPD;</li>
            <li>Comunicação aos titulares afetados, quando exigido.</li>
          </ul>

          <h2 className={h2Cls}>15. CRIANÇAS E ADOLESCENTES</h2>
          <p className={pCls}>
            Os produtos e serviços da Porto Vale não são direcionados especificamente a crianças
            ou adolescentes.
          </p>
          <p className={pCls}>
            Caso seja identificado tratamento de dados pessoais de menores de idade, a Porto Vale
            adotará as medidas necessárias para assegurar a observância da legislação aplicável e
            do melhor interesse do menor.
          </p>

          <h2 className={h2Cls}>16. POLÍTICA DE COOKIES</h2>

          <h3 className={h3Cls}>O que são cookies?</h3>
          <p className={pCls}>
            Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário durante a
            navegação em sites e aplicações digitais. Eles permitem reconhecer o navegador ou
            dispositivo utilizado, armazenar preferências, coletar informações estatísticas e
            auxiliar na prestação dos serviços oferecidos.
          </p>
          <p className={pCls}>
            A Porto Vale utiliza cookies e tecnologias semelhantes para garantir o funcionamento
            adequado do site, melhorar a experiência do usuário, realizar análises estatísticas e
            mensurar a efetividade de campanhas de marketing digital.
          </p>

          <h3 className={h3Cls}>Categorias de Cookies Utilizadas</h3>

          <h3 className={h3Cls}>1. Cookies Estritamente Necessários</h3>
          <p className={pCls}>
            São indispensáveis para o funcionamento adequado do site e de seus recursos
            essenciais. Esses cookies possibilitam funcionalidades como navegação segura, acesso a
            áreas restritas e armazenamento das preferências de consentimento.
          </p>
          <p className={pCls}>
            A desativação desses cookies poderá comprometer o funcionamento de determinadas
            funcionalidades do site.
          </p>
          <CookieTable
            caption="Cookies estritamente necessários utilizados pela Porto Vale"
            columns={["Nome do Cookie", "Categoria", "Duração / Expiração", "Finalidade", "Responsável"]}
            rows={[
              [
                "is_eu",
                "Estritamente Necessário",
                "Sessão (enquanto o navegador estiver aberto)",
                "Armazena a região do usuário (ex.: UE) para exibição adequada do banner de privacidade e do gerenciamento de consentimento.",
                "Porto Vale (próprio)",
              ],
            ]}
          />

          <h3 className={h3Cls}>2. Cookies de Desempenho e Análise</h3>
          <p className={pCls}>
            Permitem compreender como os visitantes utilizam o site, possibilitando a geração de
            estatísticas e a melhoria contínua da experiência de navegação.
          </p>
          <p className={pCls}>A Porto Vale utiliza ferramentas de análise como:</p>
          <ul className={ulCls}>
            <li>Google Analytics;</li>
            <li>Microsoft Clarity.</li>
          </ul>
          <CookieTable
            caption="Cookies de desempenho e análise utilizados pela Porto Vale"
            columns={["Nome do Cookie", "Categoria", "Duração / Expiração", "Finalidade", "Responsável"]}
            rows={[
              [
                "_ga",
                "Desempenho",
                "2 anos",
                "Identificação estatística de usuários para análise de tráfego através do Google Analytics.",
                "Google LLC",
              ],
              [
                "_ga_*",
                "Desempenho",
                "2 anos",
                "Medição de sessões e comportamento dos visitantes no site.",
                "Google LLC",
              ],
              [
                "_clck",
                "Desempenho",
                "1 ano",
                "Identificação de visitantes para análise de navegação através do Microsoft Clarity.",
                "Microsoft Corporation",
              ],
              [
                "_clsk",
                "Desempenho",
                "24 horas",
                "Agrupamento de ações e eventos do usuário em uma mesma sessão de navegação.",
                "Microsoft Corporation",
              ],
            ]}
          />
          <p className={pCls}>
            As informações coletadas por esses cookies são utilizadas de forma agregada e não têm
            como objetivo identificar diretamente os usuários.
          </p>

          <h3 className={h3Cls}>3. Cookies de Marketing e Publicidade</h3>
          <p className={pCls}>
            Utilizados para mensurar campanhas publicitárias, compreender a origem dos acessos e
            apresentar conteúdos mais relevantes aos usuários.
          </p>
          <p className={pCls}>A Porto Vale utiliza ferramentas de marketing digital como:</p>
          <ul className={ulCls}>
            <li>Google Ads;</li>
            <li>Meta Pixel (Facebook e Instagram).</li>
          </ul>
          <p className={pCls}>
            Esses cookies podem ser utilizados para mensuração de conversões, análise de
            campanhas publicitárias e ações de remarketing.
          </p>
          <CookieTable
            caption="Cookies de marketing e publicidade utilizados pela Porto Vale"
            columns={["Nome do Cookie", "Categoria", "Duração / Expiração", "Finalidade", "Responsável"]}
            rows={[
              [
                "_fbp",
                "Marketing",
                "90 dias",
                "Mensuração de campanhas publicitárias e remarketing através da plataforma Meta (Facebook e Instagram).",
                "Meta Platforms, Inc.",
              ],
              [
                "_gcl_au",
                "Marketing",
                "90 dias",
                "Medição de conversões e desempenho de campanhas do Google Ads.",
                "Google LLC",
              ],
            ]}
          />

          <h3 className={h3Cls}>Cookies Utilizados — Resumo</h3>
          <CookieTable
            caption="Resumo dos cookies utilizados pela Porto Vale"
            columns={["Nome do Cookie", "Categoria", "Finalidade"]}
            rows={[
              [
                "_ga",
                "Desempenho",
                "Identificação estatística de usuários para análise de tráfego através do Google Analytics.",
              ],
              ["_ga_*", "Desempenho", "Medição de sessões e comportamento dos visitantes no site."],
              [
                "_clck",
                "Desempenho",
                "Identificação de visitantes para análise de navegação através do Microsoft Clarity.",
              ],
              [
                "_clsk",
                "Desempenho",
                "Agrupamento de ações e eventos do usuário em uma mesma sessão de navegação.",
              ],
              [
                "_fbp",
                "Marketing",
                "Mensuração de campanhas publicitárias e remarketing através da plataforma Meta.",
              ],
              ["_gcl_au", "Marketing", "Medição de conversões e desempenho de campanhas do Google Ads."],
            ]}
          />

          <h3 className={h3Cls}>Tecnologias de Terceiros Utilizadas</h3>
          <p className={pCls}>
            A Porto Vale poderá utilizar serviços de terceiros para análise de navegação,
            mensuração de campanhas e melhoria da experiência dos usuários, incluindo:
          </p>
          <ul className={ulCls}>
            <li>Google Analytics;</li>
            <li>Google Tag Manager;</li>
            <li>Google Ads;</li>
            <li>Microsoft Clarity;</li>
            <li>Meta Pixel.</li>
          </ul>
          <p className={pCls}>
            Essas ferramentas poderão coletar informações sobre a navegação do usuário de acordo
            com suas respectivas políticas de privacidade.
          </p>

          <h3 className={h3Cls}>Gerenciamento de Cookies</h3>
          <p className={pCls}>
            O usuário poderá, a qualquer momento, configurar seu navegador para aceitar, recusar
            ou excluir cookies já armazenados.
          </p>
          <p className={pCls}>
            O bloqueio de determinados cookies poderá afetar a disponibilidade e o correto
            funcionamento de algumas funcionalidades do site.
          </p>

          <h3 className={h3Cls}>Atualizações desta Política</h3>
          <p className={pCls}>
            A Porto Vale poderá atualizar esta Política de Cookies periodicamente em razão de
            alterações legais, regulatórias ou da implementação, substituição ou descontinuação de
            tecnologias utilizadas em seus ambientes digitais.
          </p>
          <p className={pCls}>
            Recomenda-se a consulta periódica desta seção para acompanhamento de eventuais
            atualizações.
          </p>

          <h2 className={h2Cls}>17. LINKS PARA SITES DE TERCEIROS</h2>
          <p className={pCls}>O site da Porto Vale poderá conter links para páginas de terceiros.</p>
          <p className={pCls}>
            A presente Política não se aplica a sites externos, sendo recomendada a leitura das
            respectivas políticas de privacidade.
          </p>
          <p className={pCls}>
            A Porto Vale não se responsabiliza pelas práticas de privacidade adotadas por
            terceiros.
          </p>

          <h2 className={h2Cls}>18. EXERCÍCIO DOS DIREITOS E CANAL DE PRIVACIDADE</h2>
          <p className={pCls}>
            Para exercer qualquer direito previsto na LGPD ou esclarecer dúvidas relacionadas ao
            tratamento de dados pessoais, o titular poderá entrar em contato por meio dos canais
            abaixo:
          </p>
          <p className={pCls}>
            <strong>Telefone:</strong> (12) 2018-1515
          </p>
          <p className={pCls}>
            <strong>E-mail:</strong> juridico@portovaleconsorcios.com.br
          </p>
          <p className={pCls}>
            A Porto Vale analisará e responderá às solicitações nos prazos previstos pela
            legislação aplicável.
          </p>

          <h2 className={h2Cls}>19. ENCARREGADO PELO TRATAMENTO DE DADOS PESSOAIS (DPO)</h2>
          <p className={pCls}>
            Nos termos do artigo 41 da Lei Geral de Proteção de Dados, a Porto Vale disponibiliza
            canal de comunicação para assuntos relacionados à proteção de dados pessoais.
          </p>
          <p className={pCls}>
            <strong>Encarregado (DPO):</strong> Talita de Fátima Lemes
          </p>
          <p className={pCls}>
            <strong>E-mail:</strong> juridico@portovaleconsorcios.com.br
          </p>
          <p className={pCls}>
            O Encarregado atua como canal de comunicação entre a Porto Vale, os titulares dos
            dados e a Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h2 className={h2Cls}>20. ALTERAÇÕES DESTA POLÍTICA</h2>
          <p className={pCls}>
            Esta Política poderá ser alterada a qualquer momento para refletir alterações legais,
            regulatórias, tecnológicas ou operacionais.
          </p>
          <p className={pCls}>
            A versão vigente estará sempre disponível no site da Porto Vale, contendo a respectiva
            data de atualização.
          </p>
          <p className={pCls}>Recomendamos a consulta periódica deste documento.</p>

          <h2 className={h2Cls}>21. LEGISLAÇÃO APLICÁVEL</h2>
          <p className={pCls}>
            Esta Política é regida pelas leis da República Federativa do Brasil, especialmente:
          </p>
          <ul className={ulCls}>
            <li>Lei nº 13.709/2018 (LGPD);</li>
            <li>Marco Civil da Internet (Lei nº 12.965/2014);</li>
            <li>Código de Defesa do Consumidor (Lei nº 8.078/1990);</li>
            <li>Regulamentações da Autoridade Nacional de Proteção de Dados – ANPD.</li>
          </ul>
          <p className={pCls}>
            Ao utilizar os serviços e canais da Porto Vale, o usuário declara ter lido e
            compreendido integralmente esta Política de Privacidade.
          </p>

          <h2 className={h2Cls}>22. CENTRAL DE PRIVACIDADE E EXERCÍCIO DE DIREITOS LGPD</h2>
          <p className={pCls}>
            A Porto Vale disponibiliza aos titulares de dados pessoais uma Central de Privacidade
            destinada ao exercício dos direitos previstos na Lei Geral de Proteção de Dados
            Pessoais (LGPD).
          </p>
          <p className={pCls}>Por meio da Central de Privacidade, o titular poderá solicitar:</p>
          <ul className={ulCls}>
            <li>Confirmação da existência de tratamento de seus dados pessoais;</li>
            <li>Acesso aos dados tratados pela Porto Vale;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Portabilidade dos dados pessoais, quando aplicável;</li>
            <li>Eliminação dos dados tratados com base no consentimento;</li>
            <li>Informações sobre compartilhamento de dados;</li>
            <li>Revogação do consentimento;</li>
            <li>Oposição ao tratamento realizado com fundamento no legítimo interesse;</li>
            <li>Revisão de decisões automatizadas, quando aplicável.</li>
          </ul>
          <p className={pCls}>
            Para garantir a segurança das informações, a Porto Vale poderá solicitar informações
            complementares para validação da identidade do solicitante antes de atender à
            requisição.
          </p>
          <p className={pCls}>
            As solicitações serão analisadas e respondidas dentro dos prazos previstos na
            legislação vigente.
          </p>

          <h2 className={h2Cls}>23. GOVERNANÇA EM PRIVACIDADE E PROTEÇÃO DE DADOS</h2>
          <p className={pCls}>
            A Porto Vale mantém programa interno de governança em privacidade e proteção de dados
            pessoais, visando garantir a conformidade com a legislação aplicável e promover a
            melhoria contínua dos processos relacionados ao tratamento de dados.
          </p>
          <p className={pCls}>O programa contempla, entre outras medidas:</p>
          <ul className={ulCls}>
            <li>Políticas e procedimentos internos de proteção de dados;</li>
            <li>Treinamento e conscientização de colaboradores;</li>
            <li>Gestão de acessos e controles de segurança;</li>
            <li>Avaliação de fornecedores e parceiros;</li>
            <li>Gestão de incidentes de segurança;</li>
            <li>Revisão periódica de processos e controles;</li>
            <li>Adequação às orientações da Autoridade Nacional de Proteção de Dados (ANPD).</li>
          </ul>
          <p className={pCls}>
            A Porto Vale poderá revisar e atualizar continuamente seus processos internos para
            acompanhar alterações legislativas, regulatórias e tecnológicas.
          </p>

          <h2 className={h2Cls}>24. REGISTRO DAS ATIVIDADES DE TRATAMENTO</h2>
          <p className={pCls}>
            A Porto Vale mantém registros das operações de tratamento de dados pessoais
            realizadas em suas atividades empresariais, conforme previsto na legislação aplicável.
          </p>
          <p className={pCls}>Os registros poderão conter informações relacionadas:</p>
          <ul className={ulCls}>
            <li>À finalidade do tratamento;</li>
            <li>À categoria dos dados tratados;</li>
            <li>À base legal utilizada;</li>
            <li>Aos operadores e fornecedores envolvidos;</li>
            <li>Aos compartilhamentos realizados;</li>
            <li>Aos prazos de retenção;</li>
            <li>Às medidas de segurança adotadas.</li>
          </ul>
          <p className={pCls}>
            Esses registros são mantidos para fins de conformidade, auditoria, governança e
            atendimento às exigências da Autoridade Nacional de Proteção de Dados (ANPD).
          </p>

          <h2 className={h2Cls}>25. CANAL DE COMUNICAÇÃO COM O TITULAR E COM A ANPD</h2>
          <p className={pCls}>
            A Porto Vale disponibiliza canal específico para comunicação sobre assuntos
            relacionados à privacidade e proteção de dados pessoais.
          </p>
          <p className={pCls}>Por meio desse canal, poderão ser encaminhadas:</p>
          <ul className={ulCls}>
            <li>Solicitações relacionadas aos direitos previstos na LGPD;</li>
            <li>Reclamações;</li>
            <li>Questionamentos sobre o tratamento de dados;</li>
            <li>Comunicações relacionadas à privacidade;</li>
            <li>Demandas oriundas da Autoridade Nacional de Proteção de Dados.</li>
          </ul>
          <p className={pCls}>
            <strong>Canal de Privacidade:</strong>
          </p>
          <p className={pCls}>
            <strong>E-mail:</strong> juridico@portovaleconsorcios.com.br
          </p>
          <p className={pCls}>
            <strong>Encarregado pelo Tratamento de Dados Pessoais (DPO):</strong> Talita de Fátima
            Lemes
          </p>
          <p className={pCls}>
            A Porto Vale compromete-se a atuar com transparência, boa-fé e cooperação no
            atendimento das solicitações apresentadas pelos titulares e autoridades competentes.
          </p>

          <p className="mt-10 text-xs text-muted-foreground">Última atualização: 25/06/2026.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
