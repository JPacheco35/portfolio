import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="about" className="container-max animate-slideUp pb-16 pt-32">
      <Card className="border-blue-500/25 bg-slate-900/60 backdrop-blur-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-4xl sm:text-5xl">
            Hello, I&apos;m{' '}
            <span className={styles.heroNameGradient}>John Pacheco</span> <span aria-hidden>🙂</span>
          </CardTitle>
          <p className="text-xl font-semibold text-blue-400 sm:text-2xl">
            Designer and Developer
          </p>
        </CardHeader>

        <CardContent>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Brief description of myself goes here.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

