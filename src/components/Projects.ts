import truncc8DemoImage from "@/assets/images/truncc8.png";
import pheelsDemoImage from "@/assets/images/pheels.png";
import dobleseisDemoImage from "@/assets/images/dobleseis.png";
import portfolioDemoImage from "@/assets/images/portfolio.png";

interface Project {
    id: string
    title: string
    category: string
    image: string
    description: string
    technologies: string[]
    links: { label: string; href: string; iconType: 'github' | 'demo' | 'docs' }[]
}

export const projects: Project[] = [
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