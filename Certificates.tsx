import { useMemo, useState } from 'react';
import { Award, Search, ShieldCheck, ExternalLink, FileText, CalendarClock, Loader2 } from 'lucide-react';
import { certificates, type Certificate } from '@/data/portfolio';

type Filter = 'All' | 'Completed' | 'In Progress';

const statusStyles: Record<Certificate['status'], string> = {
  Completed: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  'In Progress': 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
};

function formatDate(d: string | null) {
  if (!d) return 'In progress';
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

function CertificateCard({ cert }: { cert: Certificate }) {
  return (
    <article className="card card-hover group flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lavender/15 text-lavender transition-transform group-hover:scale-105">
            <Award className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold leading-tight">{cert.name}</h3>
            <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[cert.status]}`}>
          {cert.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <CalendarClock className="h-3.5 w-3.5" />
          {formatDate(cert.completionDate)}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-lavender/10 px-2 py-0.5 text-lavender">
          {cert.relatedSkill}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
        {cert.fileUrl ? (
          <a
            href={cert.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            <FileText className="h-3.5 w-3.5" />
            Preview
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <FileText className="h-3.5 w-3.5" />
            No file uploaded
          </span>
        )}

        {cert.verificationUrl ? (
          <a
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-softblue-600 transition-colors hover:text-softblue dark:text-softblue-300"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Verify
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : (
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <ShieldCheck className="h-3.5 w-3.5" />
            No verification link
          </span>
        )}
      </div>
    </article>
  );
}

export default function Certificates() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(() => {
    return certificates.filter((c) => {
      const matchesFilter = filter === 'All' || c.status === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q) ||
        c.relatedSkill.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const completed = certificates.filter((c) => c.status === 'Completed').length;
  const inProgress = certificates.filter((c) => c.status === 'In Progress').length;

  return (
    <section id="certificates" className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Verified achievements</span>
          <h2 className="heading-2">
            Certifi<span className="gradient-text">cates</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Searchable certifications and courses. Completed certificates are shown separately from
            those still in progress.
          </p>
        </div>

        {/* Controls */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, issuer, or skill…"
              aria-label="Search certificates"
              className="w-full rounded-full border bg-transparent py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-lavender"
              style={{ borderColor: 'var(--border)' }}
            />
          </div>
          <div className="flex gap-1 rounded-full border p-1" style={{ borderColor: 'var(--border)' }} role="tablist" aria-label="Filter certificates">
            {(['All', 'Completed', 'In Progress'] as Filter[]).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  filter === f ? 'bg-lavender-gradient text-navy-600' : 'text-[var(--text-muted)] hover:text-lavender'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-4 text-xs text-[var(--text-muted)]">
          <span>{completed} completed</span>
          <span>·</span>
          <span>{inProgress} in progress</span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <CertificateCard key={c.id} cert={c} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-dashed p-10 text-center" style={{ borderColor: 'var(--border)' }}>
            <Loader2 className="mx-auto h-8 w-8 text-lavender" />
            <p className="mt-4 text-sm font-semibold">No certificates to show yet</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">
              Completed certificates and in-progress courses will appear here once they&apos;re added.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
