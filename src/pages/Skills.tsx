import Header from "@/components/Header";
import SkillCard from "@/components/SkillCard";

const skillsData = [
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    skills: [
      { name: "Large Language Models (LLMs)", level: 95 },
      { name: "RAG Architecture", level: 90 },
      { name: "Multi-Agent Systems", level: 88 },
      { name: "Natural Language Processing", level: 92 },
      { name: "Deep Learning", level: 85 },
    ],
  },
  {
    icon: "💻",
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript/JavaScript", level: 80 },
      { name: "SQL", level: 85 },
      { name: "Rust", level: 60 },
    ],
  },
  {
    icon: "⚙️",
    title: "Frameworks & Tools",
    skills: [
      { name: "LangChain", level: 92 },
      { name: "HuggingFace", level: 88 },
      { name: "PyTorch", level: 85 },
      { name: "FastAPI", level: 90 },
    ],
  },
  {
    icon: "🗄️",
    title: "Databases & Storage",
    skills: [
      { name: "Vector Databases", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    icon: "🤖",
    title: "AI Agents & Automation",
    skills: [
      { name: "Autonomous Agents", level: 90 },
      { name: "CrewAI / AutoGen", level: 85 },
      { name: "Function Calling", level: 92 },
      { name: "Prompt Engineering", level: 95 },
    ],
  },
];

const technologies = [
  "OpenAI",
  "Claude",
  "LangChain",
  "ChromaDB",
  "HuggingFace",
  "PyTorch",
  "TensorFlow",
  "FastAPI",
  "Streamlit",
  "Git",
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3 animate-fade-in-up gradient-text">
            My Skills
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-16 animate-fade-in-up font-mono" style={{ animationDelay: "0.1s" }}>
            {'>'} Technologies and tools I use to build intelligent AI systems
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skillsData.map((category, index) => (
              <SkillCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                delay={index * 0.15}
              />
            ))}
          </div>

          {/* Technologies Section */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold mb-8 animate-fade-in-up gradient-text">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-3 stagger-children">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-primary px-5 py-2.5 rounded-full text-sm tag-hover font-mono border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
