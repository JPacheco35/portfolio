import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Project {
  id: string
  title: string
  dateRange: string
  badges: string[]
  description: string
  technologies: string[]
  links: { label: string; href: string; icon: string }[]
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
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container-max py-16">
      <h2 className="mb-8 border-b border-blue-500/30 pb-4 text-3xl font-bold">Projects</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="transition-all hover:border-blue-400 hover:bg-blue-500/15"
          >
            <CardHeader className="gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <CardTitle className="text-xl text-blue-300">{project.title}</CardTitle>
                <span className="text-sm text-slate-400">{project.dateRange}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <Badge key={badge} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="leading-relaxed text-slate-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={`${project.id}-${idx}`}
                    variant="outline"
                    className="rounded-md px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-2')}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

