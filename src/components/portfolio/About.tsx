import { SectionHeading } from "./SectionHeading";

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="A bit about me"
        />

        <div className="max-w-3xl mx-auto mt-14 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="text-foreground font-semibold">Kushal Kachari</span>, a GenAI Developer
            and Machine Learning Developer who enjoys solving complex problems through agentic AI
            architectures, automation, and data-driven applications.
          </p>
          <p>
            My work focuses on building practical AI products using LLMs, RAG systems, LangGraph,
            FastAPI, React, PostgreSQL, and modern cloud deployment platforms. I care about clean
            architecture, useful demos, and solutions that move from idea to working product quickly.
          </p>
          <p className="font-mono text-sm text-primary/80">
            // Believe in solving problems smartly through an agentic approach.
          </p>
        </div>
      </div>
    </section>
  );
};
