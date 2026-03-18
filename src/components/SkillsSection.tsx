import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: 'TS', name: 'TypeScript' },
  { icon: '🎨', name: 'Tailwind' },
  { icon: '🟩', name: 'Node.js' },
  { icon: '🗄️', name: 'PostgreSQL' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🎭', name: 'Figma' },
]

export function SkillsSection() {
  return (
    <section id="skills" className="container-max py-16">
      <h2 className="mb-8 border-b border-blue-500/30 pb-4 text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="group transition-all hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/20"
          >
            <CardContent className="flex flex-col items-center gap-3 p-4">
              <div className="text-2xl">{skill.icon}</div>
              <Badge variant="secondary">{skill.name}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

