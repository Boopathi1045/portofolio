import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    icon: "🤖",
    title: "AI Customer Support Agent",
    description:
      "Built an autonomous customer support agent using LangChain and GPT-4. Handles complex queries, escalates when needed, and learns from interactions.",
    techStack: ["LangChain", "GPT-4", "FastAPI", "Redis"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    icon: "📚",
    title: "Document Q&A with RAG",
    description:
      "Enterprise-grade RAG system for document question-answering. Supports PDF, DOCX, and web content with semantic search and citation tracking.",
    techStack: ["LlamaIndex", "Pinecone", "Claude", "Streamlit"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    icon: "🔄",
    title: "Multi-Agent Research System",
    description:
      "A system of specialized AI agents that collaborate to research topics, synthesize information, and generate comprehensive reports.",
    techStack: ["CrewAI", "AutoGen", "GPT-4", "Python"],
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3 animate-fade-in-up gradient-text">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-16 animate-fade-in-up font-mono" style={{ animationDelay: "0.1s" }}>
            {'>'} Showcasing my work in AI, ML, and intelligent systems
          </p>

          <h2 className="font-heading text-2xl font-semibold mb-8 animate-fade-in-up text-primary text-glow-cyan" style={{ animationDelay: "0.2s" }}>
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
