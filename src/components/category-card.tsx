import { Category } from "@/types";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link to={category.url} className="block">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow p-6 h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-slate-100 p-3 rounded-lg text-slate-800">{category.icon}</div>
          <h2 className="text-xl font-bold text-slate-800">{category.name}</h2>
        </div>
        <p className="text-slate-600">{category.description}</p>
      </div>
    </Link>
  )
}