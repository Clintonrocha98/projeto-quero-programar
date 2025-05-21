import { ResourceSection } from "@/components/resource-section";
import { artigosLinks } from "@/data/artigos";
import { Lightbulb } from "lucide-react";

export default function ArticlesPage() {
  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-8">
          <ResourceSection
            title="Leituras Recomendadas"
            resources={artigosLinks}
            description="Aprenda com artigos que explicam conceitos, técnicas e boas práticas de programação, além de perfis que compartilham conteúdos didáticos e aprofundados para quem quer evoluir na área."
            icon={<Lightbulb className="h-5 w-5" />}
          />
        </div>
      </div>
    </>
  )
}






