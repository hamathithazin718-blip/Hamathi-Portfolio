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
            {/* Timeline track line - dynamically sizing down to the final element */}
            <span 
              className="absolute left-2.5 top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-lavender via-softblue to-transparent sm:left-3.5" 
              aria-hidden="true" 
            />

            {/* Container for vertical milestone list */}
            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative animate-fade-up">
                  {/* Timeline indicator node */}
                  <span 
                    className="absolute -left-[1.4rem] top-3 grid h-5 w-5 place-items-center rounded-full bg-lavender ring-4 ring-lavender/20 sm:-left-[2.1rem]" 
                    aria-hidden="true" 
                  />

                  <div className="card card-hover p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow">
                        <GraduationCap className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold">{item.degree}</h3>
                        {'board' in item && (
                          <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.board}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-softblue/15 px-3 py-1 text-xs font-medium text-softblue-600 dark:text-softblue-300">
                        <CalendarClock className="h-3.5 w-3.5" />
                        {item.graduation}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/15 px-3 py-1 text-xs font-medium text-lavender-600 dark:text-lavender-300">
                        <BookOpen className="h-3.5 w-3.5" />
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
