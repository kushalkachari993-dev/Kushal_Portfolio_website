import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
