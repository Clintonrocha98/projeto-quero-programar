import { ResourceSection } from "@/components/resource-section";
import { resources } from "@/data/resources";
import { Lightbulb } from "lucide-react";

export default function ResourcesPage() {
  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Recursos de Aprendizado</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Ferramentas, tutoriais, cursos e documentações para ajudar você a aprender programação e tecnologias
            relacionadas.
          </p>
        </header> */}

        <div className="grid gap-8">
          <ResourceSection
            title="Ferramentas e Recursos Úteis para Desenvolvedores"
            resources={resources}
            description=" Uma seleção de links úteis com ferramentas, modelos, desafios e artigos para ajudar no seu aprendizado e jornada como dev."
            icon={<Lightbulb className="h-5 w-5" />}
          />
          {/* {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))} */}
        </div>
      </div>
    </>
  )
}






