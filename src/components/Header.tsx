'use client';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-blue-500/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container-max flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold gradient-text">
          JP
        </a>
        <nav className="flex gap-8">
          <a href="#about" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
