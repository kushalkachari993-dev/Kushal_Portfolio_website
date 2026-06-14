import { ExternalLink, FileText, Github, Play, Images, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string[];
  label?: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  screenshotsUrl?: string;
  reportUrl?: string;
  accent?: string;
}

export const ProjectCard = ({
  title,
  summary,
  tech,
  label = "Project",
  liveUrl = "#",
  githubUrl = "#",
  videoUrl = "#",
  screenshotsUrl = "#",
  reportUrl = "#",
  accent = "from-primary/30 to-accent/30",
}: ProjectCardProps) => {
  const hasLive = liveUrl !== "#";
  const hasGithub = githubUrl !== "#";
  const hasVideo = videoUrl !== "#";
  const hasScreenshots = screenshotsUrl !== "#";
  const hasReport = reportUrl !== "#";

  return (
    <article className="group relative border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elegant">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />

      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {label}
            </p>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
          </div>
          {hasLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 shrink-0 place-items-center border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              aria-label="Open live"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        <p className="mb-6 leading-relaxed text-muted-foreground">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <Badge key={t} variant="tech">{t}</Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5">
          {hasLive && (
            <Button asChild variant="hero" size="sm">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            </Button>
          )}
          {hasGithub && (
            <Button asChild variant="outline" size="sm">
              <a href={githubUrl} target="_blank" rel="noreferrer">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </Button>
          )}
          {hasVideo && (
            <Button asChild variant="ghost" size="sm">
              <a href={videoUrl} target="_blank" rel="noreferrer">
                <Play className="w-3.5 h-3.5" /> Video
              </a>
            </Button>
          )}
          {hasScreenshots && (
            <Button asChild variant="ghost" size="sm">
              <a href={screenshotsUrl} target="_blank" rel="noreferrer">
                <Images className="w-3.5 h-3.5" /> Screenshots
              </a>
            </Button>
          )}
          {hasReport && (
            <Button asChild variant="outline" size="sm">
              <a href={reportUrl} target="_blank" rel="noreferrer">
                <FileText className="w-3.5 h-3.5" /> Report
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
