import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Experience {
  role: string
  company: string
  dateRange: string
  summary: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Acme Labs',
    dateRange: '2024 - Present',
    summary:
      'Leading UI architecture for a multi-product SaaS platform with focus on performance and accessibility.',
    highlights: ['React', 'TypeScript', 'Design Systems'],
  },
  {
    role: 'Product Designer and Developer',
    company: 'Freelance',
    dateRange: '2022 - 2024',
    summary:
      'Designed and built end-to-end web experiences for startups, from wireframes to production deployments.',
    highlights: ['Figma', 'Tailwind', 'Vite'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Blue Horizon',
    dateRange: '2021 - 2022',
    summary:
      'Contributed to internal tools, improved dashboard UX, and implemented reusable UI components.',
    highlights: ['UI Components', 'QA', 'Collaboration'],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="container-max py-16">
      <h2 className="mb-8 border-b border-blue-500/30 pb-4 text-3xl font-bold">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <Card
            key={`${experience.company}-${experience.role}`}
            className="transition-all hover:border-blue-400 hover:bg-blue-500/15"
          >
            <CardHeader className="gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <CardTitle className="text-xl text-blue-300">{experience.role}</CardTitle>
                <span className="text-sm text-slate-400">{experience.dateRange}</span>
              </div>
              <p className="text-base font-medium text-slate-200">{experience.company}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="leading-relaxed text-slate-300">{experience.summary}</p>

              <div className="flex flex-wrap gap-2">
                {experience.highlights.map((item) => (
                  <Badge key={`${experience.company}-${item}`} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

