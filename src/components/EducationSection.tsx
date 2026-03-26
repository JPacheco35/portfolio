// Education history and academic achievements with UCF degrees

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import styles from './HeroSection.module.css'
import UCFLogo from '@/assets/ucf.png'

// education data structure
interface EducationEntry {
  degree: string
  field: string
  school: string
  graduationYear: number
  honors: string[]
  achievements?: string[]
}

// education history - most recent first
const educationHistory: EducationEntry[] = [
  {
    degree: "Master's Degree in Computer Science",
    field: "College of Engineering and Computer Science",
    school: "University of Central Florida (UCF)",
    graduationYear: 2025,
    honors: ["Dean's List"],
    achievements: [
      "Advanced coursework in cybersecurity, computational theory, machine learning, & augmented reality",
      "Cumulative GPA: 3.8+"
    ]
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    field: "College of Engineering and Computer Science",
    school: "University of Central Florida (UCF)",
    graduationYear: 2024,
    honors: ["Dean's List", "Scholarship Recipient"],
    achievements: [
      "Advanced coursework in full-stack development, systems design, algorithms, & data science",
      "Cumulative GPA: 3.8+"
    ]
  }
]

export function EducationSection() {
  return (
    <section id="education" className="container-max py-16 border-b border-blue-500/30">
      {/* Section Header */}
      <div className="mb-12">
        <p className="mb-2 text-sm uppercase tracking-wider text-cyan-400">
          my background
        </p>
        <h1 className="text-[60px] font-bold">
          <span className={styles.heroNameGradient}>Education </span> & Achievements{' '}
        </h1>
      </div>

      {/* Education Timeline */}
      <div className="space-y-6">
        {educationHistory.map((education) => (
          <Card
            key={`${education.degree}-${education.graduationYear}`}
            className="overflow-hidden transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15 border-slate-700/50"
          >
            <CardHeader className="gap-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* Logo and Degree Info */}
                <div className="flex gap-4 flex-1">
                  <div className="shrink-0">
                    <img 
                      src={UCFLogo} 
                      alt="University of Central Florida logo" 
                      className="h-16 w-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-blue-300 mb-2">
                      {education.degree}
                    </CardTitle>
                    <p className="text-lg font-semibold text-slate-200">
                      {education.field}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      {education.school}
                    </p>
                  </div>
                </div>

                {/* Graduation Year */}
                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-sm font-semibold text-cyan-400">
                    Graduated
                  </span>
                  <span className="text-2xl font-bold text-blue-300">
                    {education.graduationYear}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Honors and Awards */}
              {education.honors.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Honors & Awards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.honors.map((honor) => (
                      <Badge 
                        key={honor}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30"
                      >
                        {honor}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {education.achievements && education.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 ml-4">
                    {education.achievements.map((achievement) => (
                      <li 
                        key={achievement}
                        className="text-sm text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-blue-400 font-bold mt-0.5">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="mt-8 h-0.5 bg-linear-to-r from-blue-500/50 via-cyan-500/50 to-transparent rounded-full" />
    </section>
  )
}
