import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./SectionHeading";

const skills = [
  "Python",
  "FastAPI",
  "React",
  "LangGraph",
  "LangChain",
  "RAG",
  "Generative AI",
  "Machine Learning",
  "Agentic AI",
  "PostgreSQL",
  "Docker",
  "Git",
  "Render",
  "Vercel",
  "Streamlit",
  "Vector Databases",
  "API Development",
  "Automation",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative border-b border-border">
      <div className="container">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Stack"
          description="The tools and technologies I use to build intelligent, agentic, deployment-ready software."
        />

        <div className="flex flex-wrap justify-center gap-3 mt-14 max-w-4xl mx-auto">
          {skills.map((s, i) => (
            <Badge
              key={s}
              variant="skill"
              className="text-sm py-2 px-4 animate-fade-up"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};
