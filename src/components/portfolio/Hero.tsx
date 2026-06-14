import { ArrowDown, Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden border-b border-border">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-96 grid-pattern pointer-events-none opacity-50" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground animate-fade-in">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              GenAI and ML Developer
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight mt-8 mb-6 animate-fade-up">
              Kushal Kachari builds practical AI products.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-9 animate-fade-up [animation-delay:160ms]">
              I work on RAG systems, agentic workflows, ML applications, and deployment-ready full-stack tools with clear demos and useful interfaces.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
              <Button asChild variant="hero" size="lg">
                <a href="#projects">
                  View Projects <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="#contact">
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </Button>
              <Button asChild variant="glass" size="lg">
                <a href="https://github.com/kushalkachari993-dev" target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="border border-border bg-card p-6 shadow-card animate-fade-up [animation-delay:320ms]">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-6">
              Current focus
            </p>
            <div className="space-y-5">
              {[
                ["01", "Building agentic AI systems with routing, retrieval, and evaluation"],
                ["02", "Developing production-ready RAG pipelines and LLM applications"],
                ["03", "Creating deployable AI products using FastAPI, React, and cloud platforms"],
                ["04", "Designing scalable AI architectures for real-world business use cases"],
              ].map(([n, text]) => (
                <div key={n} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border pt-5 first:border-t-0 first:pt-0">
                  <span className="font-mono text-sm text-primary">{n}</span>
                  <p className="text-sm leading-relaxed text-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
