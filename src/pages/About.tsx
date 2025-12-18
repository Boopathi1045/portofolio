import Header from "@/components/Header";
import avatar from "@/assets/avatar.png";

const interests = [
  "Large Language Models",
  "RAG Systems",
  "Multi-Agent AI",
  "Autonomous Agents",
  "NLP",
  "Deep Learning",
  "Open Source",
  "AI Research",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Header />

      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center mb-3 animate-fade-in-up gradient-text">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-16 animate-fade-in-up font-mono" style={{ animationDelay: "0.1s" }}>
            {'>'} My journey in AI and Machine Learning
          </p>

          {/* Journey Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Image */}
            <div className="relative animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-2xl rounded-2xl" />
              <img
                src={avatar}
                alt="Boopathi R"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl relative z-10 border border-primary/20"
              />
              <div className="absolute -bottom-5 -right-5 md:right-0 bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground px-6 py-5 rounded-2xl text-center shadow-lg animate-scale-in glow-cyan z-20" style={{ animationDelay: "0.4s" }}>
                <span className="block text-3xl font-heading font-bold">1+</span>
                <span className="text-xs uppercase tracking-wider font-mono">Years Experience</span>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2 animate-slide-in-right">
              <h2 className="font-heading text-3xl font-semibold mb-6 gradient-text">My Journey</h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  I'm an AI/ML Engineer passionate about building intelligent systems that make a real 
                  difference. My expertise lies in Large Language Models (LLMs), Retrieval-Augmented 
                  Generation (RAG), and multi-agent AI systems.
                </p>
                <p>
                  I started my journey in software development and gradually transitioned into the 
                  fascinating world of artificial intelligence. Today, I specialize in creating 
                  autonomous AI agents that can reason, learn, and solve complex problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest research papers, 
                  contributing to open-source projects, or experimenting with new AI frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Interests Section */}
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold mb-8 animate-fade-in-up gradient-text">
              Interests & Focus Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-4 stagger-children">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-secondary text-primary px-6 py-2.5 rounded-full text-sm tag-hover font-mono border border-primary/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
