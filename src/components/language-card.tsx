import { Link } from "react-router-dom";
import { TecnologiesInformationsInterface } from "@/types";

export default function LanguageCard({ language }: { language: TecnologiesInformationsInterface }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${language.color} text-white p-3 rounded-lg font-bold text-lg`}>{language.icon}</div>
        <Link to={language.url} className="block">
          <h2 className="text-xl font-bold text-slate-800">{language.name}</h2>
        </Link>
      </div>
      <p className="text-slate-600">{language.description}</p>
    </div>
  )
}