import { Compass, CheckCircle2 } from 'lucide-react';
import { futureGoals } from '@/data/portfolio';

export default function FutureGoals() {
  return (
    <section id="goals" className="section-pad" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Where I'm headed</span>
          <h2 className="heading-2">
            Future <span className="gradient-text">Goals</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Aspirations I'm working toward — not finished achievements, but a clear direction.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2">
            {futureGoals.map((goal, i) => (
              <div
                key={goal}
                className="card card-hover group flex items-start gap-3 p-5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lavender transition-transform group-hover:scale-110" />
                <p className="text-sm font-medium leading-snug">{goal}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl border bg-lavender/5 p-5 text-center" style={{ borderColor: 'var(--border)' }}>
            <Compass className="h-5 w-5 text-lavender" />
            <p className="text-sm font-medium">
              Seeking internships and entry-level roles in software development, Python, and AI/ML.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}