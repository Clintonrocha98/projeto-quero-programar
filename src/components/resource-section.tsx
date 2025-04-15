import { ResourceSectionProps } from "../types/types";
import { ResourceLink } from "./resource-link";

export function ResourceSection({ title, resources }: ResourceSectionProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{title}</h2>
        <ul className="space-y-3">
          {resources.map((resource, index) => (
            <li key={index}>
              <ResourceLink resource={resource} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}