import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const finIntelScreenshots = "https://drive.google.com/drive/folders/1PTuKp2o4Yff3891nrSGQDrHbU8iejtdx";
const finIntelDemoVideo = "https://drive.google.com/drive/folders/1JJmMtNywjfOs_9N-jirfbz5jR_H04oO0";

const projects: ProjectCardProps[] = [
  {
    title: "FinIntel AI",
    summary: "AI-powered Indian financial analysis platform for stock research, fundamentals, comparison, education, and live finance insights.",
    tech: ["FastAPI", "React", "PostgreSQL", "LangGraph", "Render"],
    liveUrl: "https://finintel-ai-frontend.onrender.com/",
    githubUrl: "https://github.com/kushalkachari993-dev/Finintel-app",
    videoUrl: finIntelDemoVideo,
    screenshotsUrl: finIntelScreenshots,
    accent: "from-primary/40 to-accent/40",
  },
  {
    title: "KnowYourRepo",
    summary: "Repository Intelligence. Index a source, search its chunks, and ask grounded follow-up questions.",
    tech: ["RAG", "Repository Intelligence", "Vector Search", "LLMs", "Python"],
    liveUrl: "https://huggingface.co/spaces/kushalkachari/KnowYourRepo",
    githubUrl: "https://github.com/kushalkachari993-dev/KnowYourRepo",
    videoUrl: "https://drive.google.com/drive/folders/1qaUaP5N9M72YL283K7fVtodozf90NuxY",
    screenshotsUrl: "https://drive.google.com/drive/folders/1tugr7_CMM5DMRts8CFsNRAjjg4nDD1Ko",
    accent: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "AI Interviewer Platform",
    summary: "Adaptive multi-agent interview platform with Resume, Coding, System Design, HR, and Evaluation agents, voice interaction, candidate scorecards, and hiring recommendations.",
    tech: ["FastAPI", "React", "OpenAI", "Multi-Agent AI", "Voice API"],
    liveUrl: "https://ai-interviewer-qtga.vercel.app/",
    githubUrl: "https://github.com/kushalkachari993-dev/ai-interviewer",
    videoUrl: "#",
    screenshotsUrl: "https://drive.google.com/drive/folders/1eN9gXENj9wpx__pIFmUyO8jOQLAGsyo3",
    accent: "from-indigo-500/30 to-sky-500/30",
  },
  {
    title: "ResumeLink AI",
    summary: "Upload a resume, review optional identity fields, and generate a public link recruiters can chat with. The assistant answers from the resume context, not from generic guesses.",
    tech: ["RAG", "Resume Parsing", "Conversational AI", "React", "Vercel"],
    liveUrl: "https://resume-chatbot-ochre.vercel.app/",
    githubUrl: "https://github.com/kushalkachari993-dev/resume-chatbot",
    videoUrl: "https://drive.google.com/drive/folders/1WQuXBw5Equ5PqbR5qsvOT4a6s0Rh_mrk",
    screenshotsUrl: "https://drive.google.com/drive/folders/1bW0Af89pjl0GSXg9p1DGFAbNJuiBSNN_",
    accent: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "MediNotes Pro",
    summary: "AI-powered assistant that generates professional summaries, action items, and patient communications from your consultation notes.",
    tech: ["AI Summaries", "Healthcare SaaS", "Automation", "React", "Vercel"],
    liveUrl: "https://saas-865d0k7q9-kushalkachari993-3417s-projects.vercel.app/",
    githubUrl: "https://github.com/kushalkachari993-dev/doctor-consultant",
    videoUrl: "https://drive.google.com/drive/folders/1C2-LhuUuroK6oC5mETY_n-XKcmc81wdQ",
    screenshotsUrl: "https://drive.google.com/drive/folders/1p2OJyvEeohR8Pd4VhZtbKyc2oJG5sJ4z",
    accent: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "Personal MCP Server",
    summary: "Deployed a personal MCP server on Fly.io for future AI assistant workflows, tool access, and reusable automation experiments.",
    tech: ["MCP", "Fly.io", "Docker", "Python", "Automation"],
    liveUrl: "#",
    githubUrl: "https://github.com/kushalkachari993-dev/mcp-server-fly",
    videoUrl: "#",
    screenshotsUrl: "https://drive.google.com/drive/folders/1VxACYiNwRev2LsXAGFRkbUww71w0wHZL",
    accent: "from-slate-500/30 to-indigo-500/30",
  },
];

const researchProjects: ProjectCardProps[] = [
  {
    title: "Assamese POS Tagger",
    summary: "Final-year research on part-of-speech tagging for Assamese, comparing BiLSTM approaches across word, character, bigram, trigram, and hybrid representations for a low-resource language setting.",
    tech: ["BiLSTM", "TensorFlow", "Keras", "PSM-Taylor SoftMax", "Assamese"],
    label: "Research",
    liveUrl: "#",
    githubUrl: "#",
    videoUrl: "#",
    screenshotsUrl: "#",
    reportUrl: "/research/final_year_project_kushal_2024.pdf",
    accent: "from-rose-500/30 to-red-500/30",
  },
];

export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-24 sm:py-32 relative border-b border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects & Demos"
            description="Production-grade applications and demos that showcase agentic AI, RAG, automation, and full-stack engineering."
          />

          <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-2 mt-14">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-24 sm:py-32 relative border-b border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Machine Learning Research"
            title="Assamese Language Research"
            description="Final-year research on supervised part-of-speech tagging for Assamese using deep learning, representation experiments, and custom activation functions."
          />

          <div className="grid gap-5 md:grid-cols-1 lg:grid-cols-2 mt-14">
            {researchProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
