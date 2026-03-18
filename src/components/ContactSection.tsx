'use client';

export function ContactSection() {
  return (
    <section id="contact" className="container-max py-16">
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-500/15 transition-all duration-300">
        <h2 className="text-3xl font-bold gradient-text mb-3">Let's Work Together</h2>
        <p className="text-slate-300 mb-6">Have a project or opportunity? I'd love to hear from you.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:your@email.com" className="link-btn">
            <span>📧</span>
            Email
          </a>
          <a href="https://linkedin.com" className="link-btn">
            <span>💼</span>
            LinkedIn
          </a>
          <a href="https://github.com" className="link-btn">
            <span>⭐</span>
            GitHub
          </a>
          <a href="https://twitter.com" className="link-btn">
            <span>𝕏</span>
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
