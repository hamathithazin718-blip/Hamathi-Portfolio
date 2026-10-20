import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-10" style={{ borderColor: 'var(--border)' }}>
      <div className="container-app flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold">
            Hamathi <span className="gradient-text">Thazin</span>
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)]">
            {personalInfo.footerTagline}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-softblue hover:text-softblue"
            style={{ borderColor: 'var(--border)' }}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border transition-all hover:-translate-y-0.5 hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
          © {year} · Built with <Heart className="h-3.5 w-3.5 text-lavender" /> &amp; curiosity
        </p>
      </div>
    </footer>
  );
}
