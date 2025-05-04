import { ResourceSectionProps } from "@/types";
import { ResourceLink } from "./resource-link";

export function ResourceSection({ title, description, resources, icon }: ResourceSectionProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-slate-100 p-2 rounded-full">{icon}</div>
          <h2 className="text-xl font-bold text-slate-800 mb-0">{title.toUpperCase()}</h2>
        </div>
        <p className="text-slate-600 mb-4 text-sm">{description}</p>
        <ul className="space-y-4">
          {[...resources]
            .sort((a, b) => a.type.localeCompare(b.type))
            .map((resource, index) => (
              <li key={index}>
                <ResourceLink resource={resource} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}