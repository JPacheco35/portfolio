# Portfolio Website

A modern, vibrant portfolio built with Next.js, TypeScript, Tailwind CSS, and interactive particle animations.

## Features

✨ **Interactive Particle Background** - Responds to mouse movement  
🎨 **Modern Design** - Gradient text, smooth animations, glassmorphism  
📱 **Fully Responsive** - Mobile-first design  
⚡ **Fast Performance** - Optimized Next.js app  
🎯 **Customizable Sections** - Hero, Skills, Projects, Education, Contact  
🔗 **Project Showcase** - Detailed project cards with tech stacks and links  

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui (setup ready)
- **Animation**: CSS animations + Canvas particles

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Customize Content

Edit the following components to add your information:

- **Hero Section**: `src/components/HeroSection.tsx`
- **Skills**: `src/components/SkillsSection.tsx`
- **Projects**: `src/components/ProjectsSection.tsx`
- **Education**: `src/components/EducationSection.tsx`
- **Contact**: `src/components/ContactSection.tsx`

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ParticleBackground.tsx
│   └── lib/
│       └── utils.ts          # Utility functions
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json
├── package.json
└── README.md
```

## Customization Guide

### Adding Projects

Edit `src/components/ProjectsSection.tsx` and update the `projects` array:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    dateRange: 'Jan 2024 - Feb 2024',
    badges: ['Featured', '5K Users'],
    description: 'Your project description...',
    technologies: ['⚛️', '▲', '🎨'], // emoji icons
    links: [
      { label: 'GitHub', href: 'https://github.com/...', icon: '⭐' },
      { label: 'Live', href: 'https://...', icon: '🔗' },
    ],
  },
];
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme. Currently uses blue (`from-blue-400 to-blue-600`).

### Updating Skills

Edit `src/components/SkillsSection.tsx` and update the `skills` array:

```typescript
const skills = [
  { icon: '⚛️', name: 'React' },
  // Add more skills...
];
```

### Changing Contact Links

Edit `src/components/ContactSection.tsx` to update email, LinkedIn, GitHub, and Twitter links.

## Build for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:
- Netlify
- GitHub Pages
- AWS Amplify
- Render
- Railway

## Adding shadcn/ui Components

To add shadcn/ui components:

1. Install a component:
```bash
npx shadcn-ui@latest add button
```

2. Import and use in your components:
```tsx
import { Button } from '@/components/ui/button'
```

## Environment Variables

Create a `.env.local` file for any environment variables you need:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance Tips

- Images are optimized with Next.js Image component
- CSS is minified in production
- JavaScript is code-split automatically
- Particle background uses Canvas for performance

## License

This portfolio template is open source and available under the MIT License.

## Support

For issues or questions, feel free to open a GitHub issue or contact me directly!

---

Made with ❤️ by Juan Pacheco
