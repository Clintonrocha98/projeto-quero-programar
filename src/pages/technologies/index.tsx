import LanguageCard from "@/components/language-card";
import { tecnologiesInformations } from "@/data/tecnologies-informations";


export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 pt-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Linguagens de Programação</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Recursos específicos para diferentes linguagens de programação, organizados por categoria e nível de
            experiência.
          </p>
        </header> */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tecnologiesInformations.map((language) => (
            <LanguageCard key={language.name} language={language} />
          ))}
        </div>
      </div>
    </main>
  )
}

