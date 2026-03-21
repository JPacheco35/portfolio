// Introduction section with animated typing effect and portrait image

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypewriterText } from '@/components/TypewriterText'
import OpportunityPill from '@/components/OpportunityPill'
import styles from './HeroSection.module.css'

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
  'Problem Solver',
  'Lifelong Learner',
  'Creative Thinker',
  'Gamer at Heart',
  'UI and UX Enthusiast',
  'Software Developer',
  'UCF Alumni',
  'Astronomy Nerd',
  'Pokemon Fan'
]

// hero description
const HERO_DESCRIPTIONS = ['Full-stack builder crafting beautiful digital experiences.',]

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

                <CardTitle className="text-[64px]">
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
            </div>

            {/*portrait image of me*/}
            <div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
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