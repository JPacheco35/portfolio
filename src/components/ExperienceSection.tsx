import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import styles from './HeroSection.module.css'

interface Experience {
  role: string
  company: string
  dateRange: string
  summary: string[]
  highlights: string[]
}

const experiences: Experience[] = [
  {
    role: 'Lead UI/Front-End Developer',
    company: 'CompositionToday (Senior Design Project)',
    dateRange: 'August 2023 - May 2024',
    summary:[
      'Expanded upon and improved existing codebase and systems documentation and introduced novel code reviewing and testing procedures to increase operational efficiency.',
      'Developed an understanding of software development processes and practices by conducting inquiries with colleagues industry members, and project sponsors.',
      'Implemented a novel site administration control suite to enable for more efficient content moderation and regulation of user-submitted content',
      'Introduced new accessibility focused options for existing UI features to increase site usability in accordance with industry standard practices around accessibility',
      'Incorporated UI and site design principles, techniques, and policies to improve the SEO performance of the site, which pushed the site to the top of most of the search engines current used.',
    ],
    highlights: ['React', 'TypeScript', 'Design Systems', 'MongoDB', 'Nginx', 'Linux', 'DigitalOcean', 'MantineUI'],
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="container-max py-16 mb-60 border-b border-blue-500/30">
      <h2 className="mb-8 text-[60px] font-bold">
        Work <span className={styles.heroNameGradient}> Experience</span>
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
              <p className="leading-relaxed ml-5 text-slate-300">
                {experience.summary.map((item) => (
                    <li className="mb-3">{item}</li>
                ))}
              </p>

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

