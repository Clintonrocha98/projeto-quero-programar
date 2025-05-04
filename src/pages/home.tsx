import { ResourceSection } from "@/components/resource-section";
import { iniciante } from "@/data/iniciante";
import { Lightbulb } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container min-h-screen mx-auto px-4 max-w-5xl">
      {/* <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Recursos para Iniciantes na Programação
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Recursos essenciais para quem está começando na programação. Cursos, leituras e ferramentas que ajudam a entender os fundamentos e dar os primeiros passos.
        </p>
      </header> */}

      <div className="grid gap-8">
        <ResourceSection
          title="Recursos para Iniciantes na Programação"
          resources={iniciante}
          description="Recursos essenciais para quem está começando na programação. Cursos, leituras e ferramentas que ajudam a entender os fundamentos e dar os primeiros passos."
          icon={<Lightbulb className="h-5 w-5" />}
        />
      </div>
    </div>


  )
}