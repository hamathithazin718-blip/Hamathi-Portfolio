import { GraduationCap, CalendarClock, BookOpen } from 'lucide-react';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">My academic path</span>
          <h2 className="heading-2">
            Edu<span className="gradient-text">cation</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative pl-8 sm:pl-10">
            {/* Timeline line */}
            <span className="absolute left-2.5 top-2 h-full w-px bg-gradient-to-b from-lavender via-softblue to-transparent sm:left-3.5" aria-hidden />

            <div className="relative animate-fade-up">
              <span className="absolute -left-[1.4rem] top-1 grid h-5 w-5 place-items-center rounded-full bg-lavender ring-4 ring-lavender/20 sm:-left-[2.1rem]" aria-hidden />

              <div className="card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold">{education.degree}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-softblue/15 px-3 py-1 text-xs font-medium text-softblue-600 dark:text-softblue-300">
                    <CalendarClock className="h-3.5 w-3.5" />
                    {education.graduation}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/15 px-3 py-1 text-xs font-medium text-lavender-600 dark:text-lavender-300">
                    <BookOpen className="h-3.5 w-3.5" />
                    {education.status}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {education.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
