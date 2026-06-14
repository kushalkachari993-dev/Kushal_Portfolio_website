import { ExternalLink, Github, Images, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const ctas = [
  {
    label: "Open App",
    description: "Try the live FinIntel AI application in your browser.",
    icon: ExternalLink,
    href: "https://finintel-ai-frontend.onrender.com/",
    variant: "hero" as const,
  },
  {
    label: "GitHub",
    description: "Explore the source code, architecture, and commit history.",
    icon: Github,
    href: "https://github.com/kushalkachari993-dev/Finintel-app",
    variant: "glass" as const,
  },
  {
    label: "Demo Video",
    description: "Watch the FinIntel AI demo video from Google Drive.",
    icon: Play,
    href: "https://drive.google.com/drive/folders/1JJmMtNywjfOs_9N-jirfbz5jR_H04oO0",
    variant: "outline" as const,
  },
  {
    label: "Screenshots",
    description: "View FinIntel AI screenshots and UI previews.",
    icon: Images,
    href: "https://drive.google.com/drive/folders/1PTuKp2o4Yff3891nrSGQDrHbU8iejtdx",
    variant: "outline" as const,
  },
];

export const LiveLinks = () => {
  return (
    <section id="live" className="py-24 sm:py-32 relative border-b border-border">
      <div className="container">
        <SectionHeading
          eyebrow="Try It Live"
          title="FinIntel AI Links"
          description="One-click access to the app, source code, demo video, and screenshots."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-14">
          {ctas.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group relative border border-border bg-card p-6 shadow-card hover:border-primary/50 hover:-translate-y-0.5 transition-smooth"
            >
              <div className="grid place-items-center w-10 h-10 border border-border text-primary mb-5 group-hover:border-primary transition-smooth">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">
                {c.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.description}</p>
              <Button variant={c.variant} size="sm" asChild>
                <span>{c.label} <ExternalLink className="w-3.5 h-3.5" /></span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
