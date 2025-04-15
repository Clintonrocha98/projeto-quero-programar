import { ResourceSection } from "./components/resource-section";

function App() {
  const querFazerSite = [
    {
      title: "javascript4noobs",
      url: "https://github.com/ThiagoDellaNoce/javascript4noobs",
      type: "leitura",
    },
    {
      title: "javascript 40 horas",
      url: "https://github.com/ThiagoDellaNoce/javascript4noobs",
      type: "curso",
    },
    {
      title: "css4noobs",
      url: "https://github.com/he4rt/css4noobs",
      type: "leitura",
    },
    {
      title: "html4noobs",
      url: "https://github.com/lucassoren/HTML4Noobs",
      type: "leitura",
    },
    {
      title: "html/css - módulo 1",
      url: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
      type: "curso",
    },
    {
      title: "html/css - módulo 2",
      url: "https://www.youtube.com/watch?v=vPNIAJ9B4hg&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s",
      type: "curso",
    },
    {
      title: "html/css - módulo 3",
      url: "https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ",
      type: "curso",
    },
    {
      title: "html/css - módulo 4",
      url: "https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT",
      type: "curso",
    },
  ];
  const oBasicoDaProgramacao = [
    {
      title: "Curso de lógica de programação e algoritmo",
      url: "https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV",
      type: "curso",
    },
    {
      title: "Curso de git e github",
      url: "https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA",
      type: "curso",
    },
    {
      title: "git4noobs",
      url: "https://github.com/DanielHe4rt/git4noobs",
      type: "leitura",
    },
  ];

  const roteiroDeEstudos = [
    {
      title: "Roadmap.sh",
      url: "https://roadmap.sh",
      type: "ferramenta",
    },
    {
      title: "Trilha.info",
      url: "https://www.trilha.info",
      type: "ferramenta",
    },
    {
      title: "Techguide.sh",
      url: "https://techguide.sh",
      type: "ferramenta",
    },
  ];

  const leituraRecomendada = [
    {
      title: "O mínimo que você precisa saber de JavaScript para frameworks",
      url: "https://felipperegazio.com/posts/o-minimo-necessario-js-para-frameworks/",
      type: "artigo",
    },
    {
      title: "12 Dicas NÃO TÉCNICAS para o primeiro emprego",
      url: "https://felipperegazio.com/posts/12-dicas-nao-tecnicas-primeiro-emprego/",
      type: "artigo",
    },
    {
      title: "Quero ser dev",
      url: "https://felipperegazio.com/posts/entao-vc-quer-ser-dev/",
      type: "artigo",
    },
  ];

  const outrosRecursos = [
    {
      title: "4noobs - O básico de várias tecnologias",
      url: "https://github.com/he4rt/4noobs",
      type: "repositório",
    },
    {
      title: "Learn X in Y minutes - Aprenda qualquer linguagem rapidamente",
      url: "https://learnxinyminutes.com",
      type: "ferramenta",
    },
    {
      title: "Modelo de currículo para devs",
      url: "https://github.com/sspacecoding/curriculodasguria/tree/main",
      type: "modelo",
    },
    {
      title: "Templates de README para projetos",
      url: "https://github.com/Fernanda-Kipper/Readme-Templates",
      type: "modelo",
    },
    {
      title: "Desafios e testes técnicos para praticar",
      url: "https://github.com/CollabCodeTech/backend-challenges",
      type: "desafios",
    },
    {
      title: "Padrões de projeto",
      url: "https://refactoring.guru/pt-br/design-patterns",
      type: "documentação",
    },
    {
      title: "Padrões de projeto para front-end",
      url: "https://www.patterns.dev",
      type: "documentação",
    },
    {
      title: "Acervo de Figmas para praticar front-end",
      url: "https://leovargas.notion.site/ae7f8ce3605c486ab9437216e8b41ff6?v=307eebb71b34464389b93702da9bec72",
      type: "recursos",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Recursos para Iniciantes em Programação
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Uma coleção de recursos gratuitos para ajudar você a começar sua jornada na programação.
          </p>
        </header>

        <div className="grid gap-8">
          <ResourceSection
            title="O BÁSICO PARA TUDO DA PROGRAMAÇÃO"
            resources={oBasicoDaProgramacao}
          />

          <ResourceSection
            title="QUER FAZER SITE? APRENDA ISSO AQUI"
            resources={querFazerSite}
          />

          <ResourceSection
            title="ROTEIROS DE ESTUDOS"
            resources={roteiroDeEstudos}
          />

          <ResourceSection
            title="LEITURAS RECOMENDADAS"
            resources={leituraRecomendada}
          />

          <ResourceSection
            title="OUTROS RECURSOS ÚTEIS"
            resources={outrosRecursos}
          />
        </div>

        <footer className="mt-16 text-center text-sm text-slate-500">
          <p>Feito com ❤️ para ajudar iniciantes em programação</p>
          <a href="https://github.com/clintonrocha98" target="_blank">By: Clinton Rocha</a>
        </footer>
      </div>
    </main>
  )
}

export default App;
