import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypewriterText } from '@/components/TypewriterText'
import portraitPlaceholder from '@/assets/portrait-placeholder.svg'
import styles from './HeroSection.module.css'

const HERO_GREETING_PREFIX = "Hello, I'm "
const HERO_NAME = 'John Pacheco'
const HERO_GREETING_FULL = `${HERO_GREETING_PREFIX}${HERO_NAME}`

const HERO_ROLES = ['Web Developer', 'Frontend Engineer', 'Problem Solver', 'Lifelong Learner', 'Creative Thinker', 'Gamer at Heart', 'UI and UX Enthusiast', 'Software Developer', 'UCF Alumni', 'Astronomy Nerd', 'Pokemon Fan',]

const HERO_DESCRIPTIONS = [
  'Full-stack builder crafting beautiful digital experiences.',
]

export function HeroSection() {
  const [typedGreeting, setTypedGreeting] = useState('')

  useEffect(() => {
    if (typedGreeting.length >= HERO_GREETING_FULL.length) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setTypedGreeting(HERO_GREETING_FULL.slice(0, typedGreeting.length + 1))
    }, 80)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [typedGreeting])

  const typedPrefix = useMemo(
    () => typedGreeting.slice(0, Math.min(typedGreeting.length, HERO_GREETING_PREFIX.length)),
    [typedGreeting],
  )

  const typedName = useMemo(
    () => typedGreeting.slice(HERO_GREETING_PREFIX.length),
    [typedGreeting],
  )

  return (
    <section id="about" className="container-max animate-slideUp pb-16 pt-32">
      <Card className="border-blue-500/25 bg-slate-900/60 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
            <div className="w-full max-w-3xl text-center">
              <CardHeader className="space-y-2 px-0 pt-0">
                <CardTitle className="text-[48px]">
                  <span>{typedPrefix}</span>
                  <span className={styles.heroNameGradient}>{typedName}</span>{' '}
                  <span aria-hidden>🙂</span>
                </CardTitle>
                <p
                  className="text-xl font-semibold text-blue-400 sm:text-2xl"
                >
                  <TypewriterText
                    words={HERO_ROLES}
                    minWidthCh={22}
                    ariaLabelPrefix="Current role"
                    pauseDurationMs={8000}
                  />
                </p>
              </CardHeader>

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

            <div className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <img
                src={portraitPlaceholder}
                alt="Portrait placeholder"
                className="h-auto w-full rounded-2xl border border-blue-400/30 bg-slate-800/40 shadow-[0_0_40px_rgba(37,99,235,0.2)]"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

