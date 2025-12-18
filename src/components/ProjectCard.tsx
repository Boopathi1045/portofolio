interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  delay?: number;
}

const ProjectCard = ({
  icon,
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div
      className="bg-card p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up border border-primary/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="font-heading text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-secondary px-3 py-1.5 rounded-full text-xs text-primary font-mono border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        {githubLink && (
          <a
            href={githubLink}
            className="text-primary font-semibold text-sm hover:text-neon-purple transition-colors font-mono"
          >
            GitHub →
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            className="text-primary font-semibold text-sm hover:text-neon-purple transition-colors font-mono"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
