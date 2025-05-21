import { Link } from "react-router-dom";
import { TecnologiesInformationsInterface } from "@/types";

export default function LanguageCard({ language }: { language: TecnologiesInformationsInterface }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow p-6">
      <Link to={language.url} className="block hover:no-underline">
        <div className="flex items-center gap-4 mb-4">
          <div className={`${language.color} text-white p-3 rounded-lg font-bold text-lg`}>{language.icon}</div>
          <h2 className="text-xl font-bold text-slate-800 hover:underline">{language.name}</h2>
        </div>
        <p className="text-slate-600 font-normal">{language.description}</p>
      </Link>
    </div>
  )
}