interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  icon: string;
  title: string;
  skills: Skill[];
  delay?: number;
}

const SkillCard = ({ icon, title, skills, delay = 0 }: SkillCardProps) => {
  return (
    <div
      className="bg-card p-8 rounded-2xl shadow-lg card-hover animate-fade-in-up border border-primary/20"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center text-2xl glow-cyan">
          {icon}
        </div>
        <h3 className="font-heading text-lg font-semibold text-primary">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium font-mono text-foreground">{skill.name}</span>
              <span className="text-primary font-mono">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full skill-bar-fill"
                style={{
                  "--width": `${skill.level}%`,
                  "--delay": `${delay + index * 0.1}s`,
                } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
