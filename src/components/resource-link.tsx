import { ExternalLink } from "lucide-react"
import { ResourceProps } from "@/types"

export function ResourceLink({ resource }: { resource: ResourceProps }) {
  const getBadgeColor = (type: string) => {
    const colors = {
      curso: "bg-emerald-100 text-emerald-800",
      leitura: "bg-blue-100 text-blue-800",
      artigo: "bg-purple-100 text-purple-800",
      ferramenta: "bg-amber-100 text-amber-800",
      repositório: "bg-gray-100 text-gray-800",
      modelo: "bg-pink-100 text-pink-800",
      quiz: "bg-red-100 text-red-800",
      desafio: "bg-red-100 text-red-600",
      youtube: "bg-red-100 text-red-600",
      exercício: "bg-red-100 text-red-600",
      documentação: "bg-indigo-100 text-indigo-800",
      recursos: "bg-teal-100 text-teal-800",
      roadmap: "bg-teal-100 text-teal-800",
      livro: "bg-orange-100 text-orange-800",
      tutorial: "bg-cyan-100 text-cyan-800",
      site: "bg-violet-100 text-violet-800",
    }

    return colors[type as keyof typeof colors] || "bg-slate-100 text-slate-800"
  }

  return (
    <div className="border border-slate-200 rounded-lg p-3 hover:bg-slate-50">
      <a
        href={resource.url}
        target="_blank"
        className="hover:no-underline"
      >
        <div className="flex items-start gap-2 mb-2">
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getBadgeColor(resource.type)}`}>
            {resource.type}
          </span>
          <div

            className="flex-1 font-medium text-slate-800 hover:text-slate-900 hover:underline flex items-center gap-1"
          >
            {resource.title}
            <ExternalLink className="h-3 w-3 inline opacity-70" />
          </div>
        </div>
        <p className="text-sm text-slate-600 pl-1 font-normal">{resource.description}</p>
      </a>
    </div>
  )
}
