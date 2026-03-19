import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import styles from './HeroSection.module.css'
import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

interface Skill {
  icon: IconType
  name: string
  color: string
}

const skillCategories: Record<'frontend' | 'backend' | 'database' | 'tools', Skill[]> = {
  frontend: [
    { icon: SiReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-400' },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-300' },
  ],
  backend: [
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
    { icon: SiExpress, name: 'Express', color: 'text-white' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },
    { icon: SiPython, name: 'Python', color: 'text-blue-300' },
  ],
  database: [
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  ],
  tools: [
    { icon: SiGit, name: 'Git', color: 'text-orange-500' },
    { icon: SiDocker, name: 'Docker', color: 'text-blue-400' },
    { icon: SiFigma, name: 'Figma', color: 'text-purple-400' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  ],
}

type SkillCategory = keyof typeof skillCategories

const tabs = ['All', 'Frontend', 'Backend', 'Database', 'Tools'] as const
type TabType = (typeof tabs)[number]

const marqueeRepeatCount = 3

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<TabType>('All')
  const activeCategory =
    activeTab === 'All' ? null : (activeTab.toLowerCase() as SkillCategory)
  const uniqueSkills = useMemo(
    () => Array.from(new Map(Object.values(skillCategories).flat().map((skill) => [skill.name, skill])).values()),
    [],
  )

  const visibleGridSkills =
    activeTab === 'All' ? uniqueSkills : activeCategory ? skillCategories[activeCategory] : []

  const marqueeRowOne = uniqueSkills
  const marqueeRowTwo = [...uniqueSkills.slice(3), ...uniqueSkills.slice(0, 3)]

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
    <section id="skills" className="container-max py-16">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm uppercase tracking-wider text-cyan-400">MY SKILLS</p>
        <h2 className="mb-4 text-[50px] font-bold">
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

      {/* Moving skills rows */}
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

