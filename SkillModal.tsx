import { useEffect, useRef } from 'react';
import { X, FolderGit2, Award, ShieldCheck, ExternalLink, BookOpen } from 'lucide-react';
import type { SkillDetail } from '@/data/portfolio';

type Props = {
  skill: SkillDetail | null;
  onClose: () => void;
};

export default function SkillModal({ skill, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!skill) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    // focus the dialog container
    const t = window.setTimeout(() => dialogRef.current?.focus(), 20);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [skill, onClose]);

  if (!skill) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skill-modal-title"
    >
      <button
        aria-label="Close skill details"
        onClick={onClose}
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
      />
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="card relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto p-6 outline-none sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow">
              <BookOpen className="h-6 w-6" />
            </span>
            <div>
              <h3 id="skill-modal-title" className="font-display text-xl font-bold leading-tight">
                {skill.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {skill.category}
              </p>
            </div>
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

        <div className="mt-6 space-y-5 text-sm leading-relaxed">
          <div>
            <p className="text-[var(--text-muted)]">{skill.description}</p>
          </div>

          <div>
            <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-lavender">
              Knowledge &amp; Experience
            </h4>
            <p className="text-[var(--text-muted)]">{skill.experience}</p>
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lavender">
              <FolderGit2 className="h-3.5 w-3.5" /> Related Projects
            </h4>
            {skill.relatedProjects.length > 0 ? (
              <ul className="space-y-1.5">
                {skill.relatedProjects.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-lavender" />
                    {p}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs italic text-[var(--text-muted)]">No linked projects yet.</p>
            )}
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lavender">
              <Award className="h-3.5 w-3.5" /> Related Certificates
            </h4>
            {skill.relatedCertificates.length > 0 ? (
              <ul className="space-y-1.5">
                {skill.relatedCertificates.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-softblue" />
                    {c}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs italic text-[var(--text-muted)]">No linked certificates yet.</p>
            )}
          </div>

          {skill.certificateVerificationUrl ? (
            <a
              href={skill.certificateVerificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              <ShieldCheck className="h-4 w-4" />
              Verify Certificate
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <p className="flex items-center gap-2 rounded-lg bg-lavender/5 px-3 py-2 text-xs text-[var(--text-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 text-lavender" />
              No verification link available yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
