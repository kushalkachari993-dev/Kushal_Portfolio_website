interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "center" }: Props) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <div className={`inline-flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-2 w-2 rounded-sm bg-accent" />
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
};
