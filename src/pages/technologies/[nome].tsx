import { ResourceSection } from "@/components/resource-section";
import { technologiesData } from "@/data/technologies";
import { Lightbulb } from "lucide-react";
import { Navigate } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function LinksForTechnologie() {
  const { nome } = useParams();

  if (!nome || !(nome in technologiesData)) {
    return <Navigate to="/404" replace />;
  }

  const { title, resources } = technologiesData[nome as keyof typeof technologiesData];

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid gap-8">
        <ResourceSection
          title={title}
          resources={resources}
          description="Ferramentas, repositórios e recursos diversos para complementar seus estudos."
          icon={<Lightbulb className="h-5 w-5" />}
        />
      </div>
    </div>
  );
}