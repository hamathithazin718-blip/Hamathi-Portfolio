import { useState } from 'react';
import {
  Github, ExternalLink, ArrowUpRight, Clock, Video, X, CheckCircle2, FolderGit2,
} from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const statusStyles: Record<Project['status'], string> = {
  Completed: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  Academic: 'bg-softblue/20 text-softblue-600 dark:text-softblue-300',
  Planned: 'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  'In Development': 'bg-lavender/20 text-lavender-600 dark:text-lavender-300',
};

function LinkButton({
  href,
  icon,
  label,
  available,
}: {
  href: string | null;
  icon: React.ReactNode;
  label: string;
  available: boolean;
}) {
  if (!available || !href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-dashed px-3 py-1.5 text-xs text-[var(--text-muted)] opacity-70"
        style={{ borderColor: 'var(--border)' }}
        aria-disabled="true"
      >
        <Clock className="h-3.5 w-3.5" />
        {label} coming soon
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
      style={{ borderColor: 'var(--border)' }}
    >
      {icon}
      {label}
      <ArrowUpRight className="h-3 w-3" />
    </a>
  );
}

function ProjectCard({
  project,
  onDetails,
}: {
  project: Project;
  onDetails: (p: Project) => void;
}) {
  return (
    <article className="card card-hover group flex flex-col overflow-hidden p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold leading-snug">{project.title}</h3>
        <span
          className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset transition-all duration-200 hover:scale-[1.03] ${
            project.status === 'In Development'
              ? 'bg-lavender/25 text-lavender-700 ring-lavender/40 shadow-[0_0_12px_rgba(200,162,200,0.14)] dark:text-lavender-100'
              : `ring-lavender/20 ${statusStyles[project.status]}`
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lavender" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
        <LinkButton
          href={project.repoUrl}
          icon={<Github className="h-3.5 w-3.5" />}
          label="Repository"
          available={Boolean(project.repoUrl)}
        />
        <LinkButton
          href={project.demoVideoUrl}
          icon={<Video className="h-3.5 w-3.5" />}
          label="Demo Video"
          available={Boolean(project.demoVideoUrl)}
        />
        <LinkButton
          href={project.liveUrl}
          icon={<ExternalLink className="h-3.5 w-3.5" />}
          label="Live Demo"
          available={Boolean(project.liveUrl)}
        />
        <button
          type="button"
          onClick={() => onDetails(project)}
          className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-softblue-600 transition-colors hover:text-softblue dark:text-softblue-300"
        >
          <FolderGit2 className="h-3.5 w-3.5" />
          Details
        </button>
      </div>
    </article>
  );
}

function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        aria-label="Close project details"
        onClick={onClose}
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
      />
      <div className="card relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={`mb-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[project.status]}`}>
              {project.status}
            </span>
            <h3 id="project-modal-title" className="font-display text-xl font-bold leading-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {project.longDescription && (
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
            {project.longDescription}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-lavender">
              Highlights
            </h4>
            <ul className="space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lavender" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-lavender">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-lavender">
              Screenshots
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="rounded-xl border object-cover"
                  style={{ borderColor: 'var(--border)' }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
          <LinkButton
            href={project.repoUrl}
            icon={<Github className="h-3.5 w-3.5" />}
            label="Repository"
            available={Boolean(project.repoUrl)}
          />
          <LinkButton
            href={project.demoVideoUrl}
            icon={<Video className="h-3.5 w-3.5" />}
            label="Demo Video"
            available={Boolean(project.demoVideoUrl)}
          />
          <LinkButton
            href={project.liveUrl}
            icon={<ExternalLink className="h-3.5 w-3.5" />}
            label="Live Demo"
            available={Boolean(project.liveUrl)}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [details, setDetails] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Things I&apos;ve built &amp; am building</span>
          <h2 className="heading-2">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            A mix of completed work, academic projects, and ongoing builds. Each card links to its
            repository, demo video, and live demo when available.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} onDetails={setDetails} />
          ))}
        </div>
      </div>

      <ProjectDetailsModal project={details} onClose={() => setDetails(null)} />
    </section>
  );
}
