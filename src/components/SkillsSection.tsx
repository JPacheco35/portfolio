import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import styles from './HeroSection.module.css'
import type { IconType } from 'react-icons'
import { skillCategories } from '@/components/Skills.ts'

// skill object
interface Skill {
  icon: IconType
  name: string
  color: string
}
type SkillCategory = keyof typeof skillCategories

// tab names for skills filter
const tabs = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const
type TabType = (typeof tabs)[number]

// repeat the marquee rows to avoid empty gaps
const marqueeRepeatCount = 3

// Fisher-Yates shuffle function
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function SkillsSection() {

  // which tab is currently selected
  const [activeTab, setActiveTab] = useState<TabType>('All')
  const activeCategory = activeTab === 'All' ? null : (activeTab.toLowerCase() as SkillCategory)

  // filter skills by selected category
  const uniqueSkills = useMemo(() => Array.from(new Map(Object.values(skillCategories).flat().map((skill) => [skill.name, skill])).values()), [],)
  const visibleGridSkills = activeTab === 'All' ? uniqueSkills : activeCategory ? skillCategories[activeCategory] : []

  // moving marquee rows, now truly randomized on every mount and shuffled independently
  const [marqueeRowOne, marqueeRowTwo] = useMemo(() => {
    // shuffle a copy of uniqueSkills for each row independently
    const shuffledOne = shuffle([...uniqueSkills])
    const shuffledTwo = shuffle([...uniqueSkills])
    return [
      shuffledOne,
      shuffledTwo,
    ]
  }, [uniqueSkills])

  // indivudal skill card
  const renderSkillCard = (skill: Skill) => (
    <Card
      key={skill.name}
      className="group cursor-pointer rounded-xl border-blue-500/20 bg-slate-900/55 transition-all hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500/20"
    >
      <CardContent className="flex flex-col items-center gap-1.5 p-2.5">
        <skill.icon className={`h-10 w-10 transition-colors group-hover:text-blue-300 ${skill.color}`} />
        <span className="text-center text-sm font-medium text-slate-300">{skill.name}</span>
      </CardContent>
    </Card>
  )

  return (
    <section id="skills" className="container-max py-16 pb-60 border-b border-blue-500/30">

      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-cyan-400">
          my skills
        </p>
        <h2 className="mb-4 text-[60px] font-bold">
          Technologies &{' '}
          <span className={styles.heroNameGradient}>Tools</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            variant="ghost"
            size="sm"
            className={cn(
              'rounded-full border px-6 py-2 text-sm font-medium transition-all',
              activeTab === tab
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'border-slate-600 bg-slate-900/40 text-slate-300 hover:border-slate-400 hover:bg-slate-800/50',
            )}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        key={activeTab}
        className="skills-tab-fade mb-12 grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
      >
        {visibleGridSkills.map((skill) => renderSkillCard(skill))}
      </div>

      {/*moving skills marquee*/}

      {/* row 1 */}
      <div className="space-y-4 overflow-hidden">
        <div className="skills-marquee">
          <div className="skills-marquee-track">
            {Array.from({ length: marqueeRepeatCount }, (_, repeatIndex) =>
              marqueeRowOne.map((skill, skillIndex) => (
                <Badge
                key={`row1-${repeatIndex}-${skill.name}-${skillIndex}`}
                variant="outline"
                className="group gap-2 border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-normal text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-700/50"
                >
                  <skill.icon className={`h-5 w-5 transition-colors ${skill.color}`} />
                  <span>{skill.name}</span>
                </Badge>
              )),
            )}
          </div>
        </div>

        {/*row 2*/}
        <div className="skills-marquee">
          <div className="skills-marquee-track skills-marquee-track-reverse">
            {Array.from({ length: marqueeRepeatCount }, (_, repeatIndex) =>
              marqueeRowTwo.map((skill, skillIndex) => (
                <Badge
                key={`row2-${repeatIndex}-${skill.name}-${skillIndex}`}
                variant="outline"
                className="group gap-2 border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-normal text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-700/50"
                >
                  <skill.icon className={`h-5 w-5 transition-colors ${skill.color}`} />
                  <span>{skill.name}</span>
                </Badge>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}