import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kushalkachari993@gmail.com",
    href: "mailto:kushalkachari993@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kushal-kachari-6765a1195",
    href: "https://www.linkedin.com/in/kushal-kachari-6765a1195",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kushalkachari993-dev",
    href: "https://github.com/kushalkachari993-dev",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="container">
        <div className="relative border border-border bg-card p-8 sm:p-12 overflow-hidden shadow-card">
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Let's Connect"
              title="Get in touch"
              description="Open to collaborations, freelance work, and interesting GenAI / machine learning opportunities."
            />

            <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mt-12">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") || c.href === "#" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex flex-col gap-3 p-5 border border-border bg-background hover:border-primary/50 hover:-translate-y-0.5 transition-smooth"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid place-items-center w-10 h-10 border border-border text-primary">
                      <c.icon className="w-4 h-4" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {c.label}
                    </div>
                    <div className="font-medium text-sm break-all group-hover:text-primary transition-smooth">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button asChild variant="hero" size="xl">
                <a href="mailto:kushalkachari993@gmail.com">
                  <Mail className="w-4 h-4" /> Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>(c) {new Date().getFullYear()} Kushal Kachari. Built with React and Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};
