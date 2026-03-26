import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import styles from "@/components/HeroSection.module.css";
import { SiGithub } from 'react-icons/si'
import { GlobeIcon } from 'lucide-react'
import {projects} from "@/components/Projects.ts";

export function ProjectsSection() {

  // on click for the portfolio website link, show an alert if the user clicks portfolio website link (they are already there)
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

      {/*title section*/}
      <h1 className="mb-12 border-b border-blue-500/30 pb-4 text-[60px] font-bold">
        Personal <span className={styles.heroNameGradient}>Projects</span>
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col overflow-hidden border border-slate-700/50 bg-slate-900/40 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-blue-500/20"
          >
            {/* Preview Image Placeholder */}
            <div className="aspect-video bg-linear-to-br from-blue-500/10 to-slate-900/50">
              <img src={project.image} alt={`Screenshot of the ${project.title} project - ${project.description}`} className="object-cover w-full h-full" />
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
