import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-blue-200/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container-max flex h-16 items-center justify-between">
        <a
          href="#"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'h-auto px-2 text-xl font-bold gradient-text hover:bg-transparent',
          )}
        >
          John Pacheco
        </a>
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

