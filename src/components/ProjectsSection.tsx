import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import styles from "@/components/HeroSection.module.css";
import { SiGithub } from 'react-icons/si'
import { GlobeIcon } from 'lucide-react'

import pheelsDemoImage from '../assets/images/pheels.png'
import truncc8DemoImage from '../assets/images/truncc8.png'
import dobleseisDemoImage from '../assets/images/dobleseis.png'
import portfolioDemoImage from '../assets/images/portfolio.png'

interface Project {
  id: string
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  links: { label: string; href: string; iconType: 'github' | 'demo' | 'docs' }[]
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Truncc8',
    category: 'Website',
    image: truncc8DemoImage,
    description:
      'Truncc8 is a URL shortener built with TypeScript, Express, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MantineUI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/JPacheco35/truncc8', iconType: 'github' },
      { label: 'Live Demo', href: 'https://truncc8.vercel.app/', iconType: 'demo' },
    ],
  },
  {
    id: '2',
    title: 'Pheels',
    category: 'Web Application',
    image: pheelsDemoImage,
    description:
      'A journaling and mood diary web app written in TypeScript using the MERN stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MantineUI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/JPacheco35/truncc8', iconType: 'github' },
      { label: 'Live Demo', href: 'https://truncc8.vercel.app', iconType: 'docs' },
    ],
  },
  {
    id: '3',
    title: 'Doble-Seis',
    category: 'Browser Game',
    image: dobleseisDemoImage,
    description: 'A 2v2 multiplayer browser dominoes team game built with the MERN stack, featuring real-time matches, a matchmaking system, and smooth interactive gameplay.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MantineUI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/JPacheco35/doble-seis', iconType: 'github' },
      { label: 'Live Demo', href: 'https://doble-seis.vercel.app', iconType: 'docs' },
    ],
  },
  {
    id: '4',
    title: 'Portfolio Website',
    category: 'Website',
    image: portfolioDemoImage,
    description: 'Portfolio website with experience history, skillset, contact form, and project showcase.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn-UI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/JPacheco35/portfolio', iconType: 'github' },
      { label: 'Live Demo', href: 'https://johnpacheco.org', iconType: 'docs' },
    ],
  }
]

export function ProjectsSection() {

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectTitle: string,
    linkLabel: string
  ) => {
    if (projectTitle === 'Portfolio Website' && linkLabel === 'Live Demo') {
      e.preventDefault()
      alert("You're already here!")
    }
  }

  return (
    <section id="projects" className="container-max py-16 border-b border-blue-500/30">
      <h2 className="mb-12 border-b border-blue-500/30 pb-4 text-[60px] font-bold">
        Personal <span className={styles.heroNameGradient}>Projects</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col overflow-hidden border border-slate-700/50 bg-slate-900/40 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {/* Preview Image Placeholder */}
            <div className="aspect-video bg-linear-to-br from-blue-500/10 to-slate-900/50">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
            </div>

            <CardContent className="flex flex-col gap-3 p-4">
              {/* Category Label */}
              <span className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                {project.category}
              </span>

              {/* Title */}
              <CardTitle className="text-lg font-bold text-slate-100">
                {project.title}
              </CardTitle>

              {/* Description */}
              <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={`${project.id}-${idx}`}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {project.links.map((link) => {
                  const getIcon = () => {
                    switch (link.iconType) {
                      case 'github':
                        return <SiGithub className="h-4 w-4" />
                      case 'demo':
                        return <GlobeIcon className="h-4 w-4" />
                      case 'docs':
                        return <GlobeIcon className="h-4 w-4" />
                      default:
                        return null
                    }
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleClick(e, project.title, link.label)}
                      className="inline-flex items-center gap-2 rounded border border-slate-600 px-3 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-slate-400 hover:text-slate-100"
                    >
                      {getIcon()}
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

