import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function EducationSection() {
  return (
    <section id="education" className="container-max py-16">
      <h2 className="mb-8 border-b border-blue-500/30 pb-4 text-3xl font-bold">Education</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card className="transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15">
          <CardHeader>
            <CardTitle className="text-lg text-blue-300">Bachelor of Science</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-slate-300">Product Design &amp; Engineering</p>
            <span className="text-sm text-slate-400">
              University Name - Graduated 2024
            </span>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15">
          <CardHeader>
            <CardTitle className="text-lg text-blue-300">Honors &amp; Awards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-slate-300">Dean&apos;s List - Scholarship Recipient</p>
            <span className="text-sm text-slate-400">2021 - 2024</span>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

