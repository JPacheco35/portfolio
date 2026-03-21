// skill listed by category
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
import type {IconType} from "react-icons";

// skill object
interface Skill {
    icon: IconType
    name: string
    color: string
}

export const skillCategories: Record<'frontend' | 'backend' | 'database' | 'tools', Skill[]> = {
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