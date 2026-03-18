import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function ContactSection() {
  const links = [
    { href: 'mailto:your@email.com', label: 'Email', icon: '📧' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
    { href: 'https://github.com', label: 'GitHub', icon: '⭐' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'X' },
  ]

  return (
    <section id="contact" className="container-max py-16">
      <Card className="text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-500/15">
        <CardHeader className="items-center gap-3">
          <Badge variant="secondary">Open to opportunities</Badge>
          <CardTitle className="gradient-text text-3xl">Let&apos;s Work Together</CardTitle>
          <p className="text-slate-300">
            Have a project or opportunity? I&apos;d love to hear from you.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'gap-2')}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

