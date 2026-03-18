'use client';

export function EducationSection() {
  return (
    <section id="education" className="container-max py-16">
      <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/30">Education</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-500/15 transition-all duration-300">
          <h3 className="text-lg font-bold text-blue-400 mb-2">Bachelor of Science</h3>
          <p className="text-slate-300 mb-2">Product Design & Engineering</p>
          <span className="text-sm text-slate-400">University Name • Graduated 2024</span>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 hover:border-blue-500 hover:bg-blue-500/15 transition-all duration-300">
          <h3 className="text-lg font-bold text-blue-400 mb-2">Honors & Awards</h3>
          <p className="text-slate-300 mb-2">Dean's List • Scholarship Recipient</p>
          <span className="text-sm text-slate-400">2021 - 2024</span>
        </div>
      </div>
    </section>
  );
}
