import { GraduationCap, Calendar, Target, Cpu } from 'lucide-react';
import { aboutCards, personalInfo } from '@/data/portfolio';

const icons = [GraduationCap, Calendar, Target, Cpu];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Get to know me</span>
          <h2 className="heading-2">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div className="space-y-5 text-base leading-relaxed text-[var(--text-muted)]">
            <p>
              I'm <strong className="text-[var(--text)]">Hamathi Thazin</strong>, a final-year{' '}
              <strong className="text-[var(--text)]">Bachelor of Computer Applications (BCA)</strong>{' '}
              student graduating in <strong className="text-[var(--text)]">2027</strong>. My journey
              into technology is driven by curiosity and a genuine love for building things that work.
            </p>
            <p>
              My interests span <strong className="text-[var(--text)]">Python programming</strong>,{' '}
              <strong className="text-[var(--text)]">software development</strong>,{' '}
              <strong className="text-[var(--text)]">artificial intelligence</strong>,{' '}
              <strong className="text-[var(--text)]">machine learning</strong>,{' '}
              <strong className="text-[var(--text)]">web development</strong>, and{' '}
              <strong className="text-[var(--text)]">database management</strong>. I'm continuously
              developing my technical skills through practical projects and independent learning.
            </p>
            <p>
              I don't claim to be an expert — I'm a student of the craft. Every project I take on is
              an opportunity to learn something new, solve a real problem, and grow a little more as
              a developer.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, i) => {
              const Icon = icons[i] ?? Target;
              return (
                <div key={card.label} className="card card-hover p-5">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-lavender/15 text-lavender">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {card.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-snug">{card.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-lavender bg-lavender/5 p-5 text-sm italic text-[var(--text-muted)]" style={{ borderColor: 'var(--border)' }}>
          &ldquo;{personalInfo.tagline}&rdquo;
        </div>
      </div>
    </section>
  );
}
