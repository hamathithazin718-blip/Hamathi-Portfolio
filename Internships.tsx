import { Briefcase, Calendar, CircleDot, CheckCircle2, Building2, Wrench, FolderGit2, Github, ArrowUpRight } from 'lucide-react';
import { internships, type Internship } from '@/data/portfolio';

const statusStyles: Record<Internship['status'], string> = {
  Ongoing: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  Upcoming: 'bg-softblue/20 text-softblue-600 dark:text-softblue-300',
  Completed: 'bg-lavender/20 text-lavender-600 dark:text-lavender-300',
  Confirmed: 'bg-softblue/20 text-softblue-600 dark:text-softblue-300',
};

function formatDate(d: string) {
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function InternshipCard({ internship }: { internship: Internship }) {
  return (
    <article className="card card-hover group p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow transition-transform group-hover:scale-105">
            <Briefcase className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold leading-tight">{internship.role}</h3>
            <p className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <Building2 className="h-3.5 w-3.5" />
              {internship.organization}
            </p>
          </div>
        </div>
        <span className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[internship.status]}`}>
          <CircleDot className="h-3 w-3" />
          {internship.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(internship.startDate)} → {internship.endDate ? formatDate(internship.endDate) : 'Ongoing'}
        </span>
      </div>

      <div className="mt-5">
        <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lavender">
          <CheckCircle2 className="h-3.5 w-3.5" /> Responsibilities
        </h4>
        <ul className="space-y-1.5">
          {internship.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
          <Wrench className="h-3.5 w-3.5" /> Tech:
        </span>
        {internship.technologies.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      {internship.relatedProjects.length > 0 && (
        <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
          <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lavender">
            <FolderGit2 className="h-3.5 w-3.5" /> Related Projects
          </h4>
          <ul className="space-y-1">
            {internship.relatedProjects.map((p) => (
              <li key={p} className="text-sm text-[var(--text-muted)]">
                · {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {internship.repoUrl && (
        <div className="mt-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
          <a
            href={internship.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            <Github className="h-3.5 w-3.5" />
            View Repository
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      )}

      {internship.notes && (
        <p className="mt-4 rounded-lg bg-amber-500/10 px-3 py-2 text-xs italic text-amber-700 dark:text-amber-400">
          {internship.notes}
        </p>
      )}
    </article>
  );
}

export default function Internships() {
  return (
    <section id="internships" className="section-pad" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Real-world experience</span>
          <h2 className="heading-2">
            Intern<span className="gradient-text">ships</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Confirmed internships with accurate dates and statuses. New opportunities appear here
            once details are verified.
          </p>
        </div>

        {internships.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {internships.map((i) => (
              <InternshipCard key={i.id} internship={i} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed p-10 text-center" style={{ borderColor: 'var(--border)' }}>
            <Briefcase className="mx-auto h-8 w-8 text-lavender" />
            <p className="mt-4 text-sm font-semibold">No internships listed yet</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Confirmed internships will appear here once details are verified.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
