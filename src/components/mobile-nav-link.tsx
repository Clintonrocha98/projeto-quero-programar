import { NavLinkProps } from "@/types";

export function MobileNavLink({ href, icon, label }: NavLinkProps) {
  return (
    <a
      href={href}
      className="flex items-center text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-3 py-3 rounded-md transition-colors"
    >
      {icon}
      {label}
    </a>
  )
}
