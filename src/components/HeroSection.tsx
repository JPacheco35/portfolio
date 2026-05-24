// Introduction section with animated typing effect and portrait image

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypewriterText } from '@/components/TypewriterText'
import OpportunityPill from '@/components/OpportunityPill'
import styles from './HeroSection.module.css'
import { BsFiletypePdf, BsFiletypeDocx } from 'react-icons/bs'

import Portrait from '../assets/images/portrait.jpg'

// text for the hero section -- needed for typewriter effect
const heroPrefix = "Hello, I'm "
const heroName = 'John Pacheco'
const heroFull = `${heroPrefix}${heroName}`

const isLookingForOpportunities = true

// list of hero roles to alternate between
const heroRoles = [
  'Web Developer',
  'Frontend Engineer',
  'Fullstack Developer',
  'Database Administrator',
  'Problem Solver',
  'Lifelong Learner',
  'Creative Thinker',
  'UI and UX Enthusiast',
  'Software Developer',
  'UCF Alumni',
  'Astronomy Nerd',
  'Pokemon Fan',
  'Gamer at Heart'
]

// hero description
const HERO_DESCRIPTIONS = [
    "Full-stack developer focused on creating stylish, intuitive, & efficient web applications. UCF graduate with a B.S. and M.S. in Computer Science."
]

export function HeroSection() {
  // keep track of what's been typed so far
  const [typedGreeting, setTypedGreeting] = useState('')

  // typewriter effect: add a character every 80ms
  useEffect(() => {
    // stop if fully typed out
    if (typedGreeting.length >= heroFull.length) {return}

    const timeoutId = window.setTimeout(() => {
      setTypedGreeting(heroFull.slice(0, typedGreeting.length + 1))
    }, 80)

    return () => {window.clearTimeout(timeoutId)}
  }, [typedGreeting])


  // pull out name and prefix and apply css to my name only
  const typedPrefix = useMemo(
      () => typedGreeting.slice(0, Math.min(typedGreeting.length, heroPrefix.length)),
      [typedGreeting], // Recalculate whenever typed greeting changes
  )
  const typedName = useMemo(
      () => typedGreeting.slice(heroPrefix.length),
      [typedGreeting],
  )

  // Animation state for resume card fade-in
  const [showResumeCard, setShowResumeCard] = useState(false)
  useEffect(() => {
    // Trigger fade-in after mount, avoid cascading render warning
    const timeout = setTimeout(() => setShowResumeCard(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="about" className="container-max animate-slideUp pb-60 pt-32 border-b border-blue-500/30">
      <Card className="border-0 bg-transparent">
        <CardContent className="p-6 sm:p-8">

          {/*2x1 horizontal grid*/}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">

            {/*introduction and bio*/}
            <div className="w-full max-w-3xl text-center">

              {/*introduction*/}
              <CardHeader className="space-y-2 px-0 pt-0">
                <OpportunityPill isLookingForOpportunities={isLookingForOpportunities} />

                <CardTitle className="text-[60px]">
                  <span>{typedPrefix}</span>
                  <span className={styles.heroNameGradient}>{typedName}</span>{' '}
                </CardTitle>
                <p
                  className="text-xl font-semibold text-blue-400 sm:text-2xl"
                >
                  <TypewriterText
                    words={heroRoles}
                    minWidthCh={22}
                    ariaLabelPrefix="Current role"
                    pauseDurationMs={8000}
                  />
                </p>
              </CardHeader>

              {/*bio*/}
              <p className="text-lg leading-relaxed text-slate-300">
                <TypewriterText
                  words={HERO_DESCRIPTIONS}
                  minWidthCh={60}
                  pauseDurationByWord={[1400, 1400, 1400]}
                  typingSpeedMs={40}
                  deletingSpeedMs={30}
                />
              </p>

              {/* Resume download buttons in a card with fade-in */}
              <div className="flex flex-col items-center mt-6">
                <Card
                  className={`bg-slate-900/80 border border-blue-500/20 shadow-lg px-4 py-3 transition-opacity duration-700 ${showResumeCard ? 'opacity-100' : 'opacity-0'}`}
                >
                  <span className="text-md font-semibold text-slate-400 mb-2 tracking-wide flex justify-center">
                    Resume Download
                  </span>
                  <div className="flex flex-row gap-4 justify-center items-center">
                    <a
                        href="/JohnPacheco_Resume.pdf"
                        download
                        className="inline-flex items-center justify-center border border-cyan-500 text-cyan-500 hover:bg-cyan-100 hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md text-2xl font-medium transition-all duration-200 h-12 w-12 hover:scale-110 focus:scale-110"
                    >
                      <BsFiletypePdf className="text-cyan-500 text-4xl" />
                    </a>
                    <a
                        href="/JohnPacheco_Resume.docx"
                        download
                        className="inline-flex items-center justify-center border border-blue-300 text-blue-400 hover:bg-blue-100 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300 rounded-md text-2xl font-medium transition-all duration-200 h-12 w-12 hover:scale-110 focus:scale-110"
                    >
                      <BsFiletypeDocx className="text-blue-400 text-4xl" />
                    </a>
                  </div>
                </Card>
              </div>


            </div>

            {/*portrait image of me*/}
            <div className="w-full max-w-70 md:max-w-[320px] lg:max-w-90">
              {/*<img*/}
              {/*  src={portraitPlaceholder}*/}
              {/*  alt="Portrait placeholder"*/}
              {/*  className="h-auto w-full rounded-2xl border border-emerald-400/30 bg-slate-800/40 shadow-[0_0_40px_rgba(16,185,129,0.22)]"*/}
              {/*/>*/}
              <img
                  src={Portrait}
                  alt="Portrait placeholder"
                  className="h-auto w-full rounded-2xl border border-blue-500/30 bg-slate-800/40 shadow-[0_0_40px_rgba(16,185,129,0.22)]"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}