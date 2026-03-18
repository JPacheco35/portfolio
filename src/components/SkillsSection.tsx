'use client';

const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: 'TS', name: 'TypeScript' },
  { icon: '🎨', name: 'Tailwind' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🎭', name: 'Figma' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="container-max py-16">
      <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/30">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-badge">
            <div className="text-2xl">{skill.icon}</div>
            <div className="text-sm font-semibold text-blue-400 text-center">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
