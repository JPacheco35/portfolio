'use client';

export function HeroSection() {
  return (
    <section id="about" className="container-max pt-32 pb-16 animate-slideUp">
      <h1 className="text-5xl font-bold mb-2">
        Hi, I'm <span className="gradient-text">John</span> 🤘
      </h1>
      <p className="text-2xl text-blue-400 font-semibold mb-6">Designer and Developer</p>
      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
        I build beautiful, functional web experiences. After creating{' '}
        <a href="#" className="text-blue-400 underline hover:text-blue-300">
          my senior design project
        </a>
        , I fell in love with building. My current tech stack includes{' '}
        <strong>React, TypeScript, Next.js, and Tailwind CSS</strong>. Beyond frontend, I also have
        experience with <strong>Node.js, PostgreSQL, and AWS</strong>. I'm passionate about
        creating user-centered designs and shipping projects that matter.
      </p>
    </section>
  );
}
