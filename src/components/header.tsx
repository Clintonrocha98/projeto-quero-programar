import { useState } from "react"
import { Menu, X, Code, BookOpen, Home } from "lucide-react"
import { MobileNavLink } from "./mobile-nav-link"
import { NavLink } from "./nav-link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-slate-800" />
              <span className="font-bold text-xl text-slate-800">QueroProgramar</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/" icon={<Home className="h-4 w-4 mr-1" />} label="O começo" />
            <NavLink href="/tecnologias" icon={<Code className="h-4 w-4 mr-1" />} label="Tecnologias" />
            <NavLink href="/recursos" icon={<BookOpen className="h-4 w-4 mr-1" />} label="Recursos" />
            {/* <NavLink href="/comunidade" icon={<Users className="h-4 w-4 mr-1" />} label="Comunidade" />
            <NavLink href="/blog" icon={<Lightbulb className="h-4 w-4 mr-1" />} label="Blog" /> */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-slate-200 shadow-lg">
            <MobileNavLink href="/" icon={<Home className="h-5 w-5 mr-2" />} label="Início" />
            <MobileNavLink href="/tecnologias" icon={<Code className="h-5 w-5 mr-2" />} label="Tecnologias" />
            <MobileNavLink href="/recursos" icon={<BookOpen className="h-5 w-5 mr-2" />} label="Recursos" />
            {/* <MobileNavLink href="/comunidade" icon={<Users className="h-5 w-5 mr-2" />} label="Comunidade" />
            <MobileNavLink href="/blog" icon={<Lightbulb className="h-5 w-5 mr-2" />} label="Blog" /> */}
          </div>
        </div>
      )}
    </header>
  )
}

