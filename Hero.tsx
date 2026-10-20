import { Github, Linkedin, FileDown, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-hero-radial" aria-hidden />
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(139,123,200,0.15), transparent 40%), radial-gradient(circle at 85% 75%, rgba(167,199,231,0.18), transparent 45%)',
        }}
        aria-hidden
      />
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-32 -z-10 h-72 w-72 rounded-full bg-lavender/20 blur-3xl animate-float-slow" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-24 -z-10 h-80 w-80 rounded-full bg-softblue/20 blur-3xl animate-float" aria-hidden />

      <div className="container-app grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="eyebrow mb-5">
            <Sparkles className="h-3.5 w-3.5" /> Final-year BCA Student · Class of 2027
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl md:text-7xl">
            Hamathi Thazin
            <span className="gradient-text"> A</span>
          </h1>

          <p className="mt-4 font-display text-lg font-semibold text-[var(--text)] sm:text-xl">
            Aspiring Software Developer · Python Developer · AI/ML Enthusiast
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
            {personalInfo.intro}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {personalInfo.subtitle.map((s) => (
              <span key={s} className="badge badge-blue">
                {s}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-lg border-l-2 border-lavender/60 pl-4 text-base italic text-[var(--text-muted)]">
            &ldquo;{personalInfo.tagline}&rdquo;
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary group"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            {/* Resume button — placeholder until actual PDF is provided */}
            {personalInfo.resumeUrl ? (
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-secondary"
              >
                <FileDown className="h-4 w-4" />
                Download Resume
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="Resume PDF will be added soon"
                className="btn-secondary cursor-not-allowed opacity-60"
                aria-disabled="true"
              >
                <FileDown className="h-4 w-4" />
                Resume coming soon
              </button>
            )}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Find me
            </span>
            <span className="h-px w-8 bg-[var(--border)]" />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
              style={{ borderColor: 'var(--border)' }}
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-softblue hover:text-softblue"
              style={{ borderColor: 'var(--border)' }}
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden animate-fade-in md:block" aria-hidden>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Rotating ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-lavender/30" />
            <div className="absolute inset-6 rounded-full border border-softblue/30" />

            {/* Center avatar */}
            <div className="absolute inset-10 grid place-items-center rounded-full bg-lavender-gradient shadow-glow">
              <div className="grid h-full w-full place-items-center rounded-full bg-navy-600/85 backdrop-blur-sm">
                <span className="font-display text-7xl font-extrabold gradient-text">HT</span>
              </div>
            </div>

            {/* Orbiting chips */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold shadow-soft dark:bg-navy-500/80" style={{ borderColor: 'var(--border)' }}>
              Python
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold shadow-soft dark:bg-navy-500/80" style={{ borderColor: 'var(--border)' }}>
              AI / ML
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold shadow-soft dark:bg-navy-500/80" style={{ borderColor: 'var(--border)' }}>
              Web Dev
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border bg-white/80 px-3 py-1.5 text-xs font-semibold shadow-soft dark:bg-navy-500/80" style={{ borderColor: 'var(--border)' }}>
              DSA
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[var(--text-muted)] transition-colors hover:text-lavender sm:flex"
        aria-label="Scroll to About"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border pt-1.5" style={{ borderColor: 'var(--border)' }}>
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-lavender" />
        </span>
      </a>
    </section>
  );
}
