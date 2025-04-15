import { ExternalLink } from "lucide-react"
import { ResourceProps } from "../types/types"

export function ResourceLink({ resource }: { resource: ResourceProps }) {
  const getBadgeColor = (type: string) => {
    const colors = {
      curso: "bg-emerald-100 text-emerald-800",
      leitura: "bg-blue-100 text-blue-800",
      artigo: "bg-purple-100 text-purple-800",
      ferramenta: "bg-amber-100 text-amber-800",
      repositório: "bg-gray-100 text-gray-800",
      modelo: "bg-pink-100 text-pink-800",
      desafios: "bg-red-100 text-red-800",
      documentação: "bg-indigo-100 text-indigo-800",
      recursos: "bg-teal-100 text-teal-800",
    }

    return colors[type as keyof typeof colors] || "bg-slate-100 text-slate-800"
  }

  return (
    <a href={resource.url} target="_blank" className="group flex items-start gap-2 p-2 rounded-lg hover:bg-slate-50">
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded ${getBadgeColor(resource.type)}`}>
        {resource.type}
      </span>
      <div className="flex-1">
        <span className="text-slate-700 group-hover:text-slate-900 group-hover:underline flex items-center gap-1">
          {resource.title}
          <ExternalLink className="h-3 w-3 inline opacity-70" />
        </span>
      </div>
    </a>
  )
}
