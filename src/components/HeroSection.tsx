import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import portraitPlaceholder from '@/assets/portrait-placeholder.svg'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section id="about" className="container-max animate-slideUp pb-16 pt-32">
      <Card className="border-blue-500/25 bg-slate-900/60 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            <div className="w-full max-w-3xl text-left">
              <CardHeader className="space-y-2 px-0 pt-0">
                <CardTitle className="text-4xl sm:text-5xl">
                  Hello, I&apos;m{' '}
                  <span className={styles.heroNameGradient}>John Pacheco</span>{' '}
                  <span aria-hidden>🙂</span>
                </CardTitle>
                <p className="text-xl font-semibold text-blue-400 sm:text-2xl">
                  Designer and Developer
                </p>
              </CardHeader>

              <p className="text-lg leading-relaxed text-slate-300">
                Brief description of myself goes here.
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

