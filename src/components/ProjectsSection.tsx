'use client';

interface Project {
  id: string;
  title: string;
  dateRange: string;
  badges: string[];
  description: string;
  technologies: string[];
  links: { label: string; href: string; icon: string }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    dateRange: 'May 2024 - Jun 2024',
    badges: ['Featured', '10K+ Users'],
    description:
      'Full-stack marketplace with real-time inventory, Stripe payment integration, and advanced filtering. View the live demo.',
    technologies: ['⚛️', '🟩', '🗄️', '💳', '☁️'],
    links: [
      { label: 'GitHub', href: '#', icon: '⭐' },
      { label: 'Live Demo', href: '#', icon: '🔗' },
    ],
  },
  {
    id: '2',
    title: 'Design System',
    dateRange: 'Jan 2024 - Present',
    badges: ['Open Source'],
    description:
      'Comprehensive component library with 50+ accessible components. Built for reusability and documented extensively.',
    technologies: ['▲', '🎨', '📖'],
    links: [
      { label: 'GitHub', href: '#', icon: '⭐' },
      { label: 'Docs', href: '#', icon: '📚' },
    ],
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    dateRange: 'Mar 2024 - Apr 2024',
    badges: ['Client Project'],
    description:
      'Real-time data visualization with custom charts, interactive filters, and export capabilities. Built for enterprise use.',
    technologies: ['⚛️', '📈', '🔌'],
    links: [{ label: 'Live Demo', href: '#', icon: '🔗' }],
  },
  {
    id: '4',
    title: 'AI Chat Interface',
    dateRange: 'Feb 2024 - Mar 2024',
    badges: ['Personal Project', '5K Views'],
    description:
      'Modern chat application with streaming responses, persistent history, and real-time collaboration features.',
    technologies: ['▲', '🧠', '🍃'],
    links: [
      { label: 'GitHub', href: '#', icon: '⭐' },
      { label: 'Live Demo', href: '#', icon: '🔗' },
    ],
  },
  {
    id: '5',
    title: 'Senior Design Project',
    dateRange: 'Sep 2023 - May 2024',
    badges: ['Capstone', 'Distinction Award'],
    description:
      'Led cross-functional team of 4 on a comprehensive product design and prototyping project. Delivered presentation to industry stakeholders.',
    technologies: ['🎭', '⚙️', '🔍'],
    links: [{ label: 'Case Study', href: '#', icon: '📄' }],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="container-max py-16">
      <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/30">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
              <span className="text-sm text-slate-400">{project.dateRange}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.badges.map((badge) => (
                <span key={badge} className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <div key={idx} className="tech-icon" title={tech}>
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a key={link.label} href={link.href} className="link-btn">
                  <span>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
