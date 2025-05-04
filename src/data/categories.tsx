import { Category } from "@/types";
import { BookOpen, FileCode, Code, Database, Server, Globe } from "lucide-react"

export const categories: Category[] = [
  {
    name: "Cursos Online",
    description: "Plataformas e cursos gratuitos e pagos para aprender programação de forma estruturada.",
    icon: <BookOpen className="h-6 w-6" />,
    url: "/recursos/cursos",
  },
  {
    name: "Documentações",
    description: "Guias oficiais e referências para linguagens de programação e frameworks.",
    icon: <FileCode className="h-6 w-6" />,
    url: "/recursos/documentacoes",
  },
  {
    name: "Ferramentas de Desenvolvimento",
    description: "IDEs, editores de código e outras ferramentas essenciais para programadores.",
    icon: <Code className="h-6 w-6" />,
    url: "/recursos/ferramentas",
  },
  {
    name: "Bancos de Dados",
    description: "Recursos para aprender SQL, NoSQL e outros sistemas de gerenciamento de dados.",
    icon: <Database className="h-6 w-6" />,
    url: "/recursos/bancos-de-dados",
  },
  {
    name: "DevOps e Infraestrutura",
    description: "Recursos para aprender sobre CI/CD, containers, cloud e infraestrutura.",
    icon: <Server className="h-6 w-6" />,
    url: "/recursos/devops",
  },
  {
    name: "Desafios e Exercícios",
    description: "Sites com problemas e desafios para praticar suas habilidades de programação.",
    icon: <Globe className="h-6 w-6" />,
    url: "/recursos/desafios",
  },
]