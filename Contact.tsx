import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard may be unavailable; keep button from breaking
      setCopied(false);
    }
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(personalInfo.emailSubject)}`;

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    personalInfo.emailSubject
  )}`;

  return (
    <section id="contact" className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Open to opportunities</span>
          <h2 className="heading-2">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Whether it&apos;s an internship, a collaboration, or just a hello — I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="card overflow-hidden p-0">
            <div className="grid md:grid-cols-[1fr_1.2fr]">
              {/* Left panel */}
              <div className="relative overflow-hidden bg-navy-gradient p-8 text-white">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lavender/20 blur-2xl" aria-hidden />
                <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-softblue/20 blur-2xl" aria-hidden />
                <h3 className="font-display text-xl font-bold">Get in touch</h3>
                <p className="mt-3 text-sm text-white/70">
                  The fastest way to reach me is email. I usually respond within a day or two.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
                    <a
                      href={mailtoUrl}
                      className="flex items-center gap-3 text-sm transition-colors hover:text-lavender"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-lavender" />
                      <span className="break-all">{personalInfo.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/80 transition-colors hover:border-lavender hover:text-lavender"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" /> Copy email
                        </>
                      )}
                    </button>
                    {copied && (
                      <p className="flex items-center gap-1.5 text-[11px] text-emerald-400" role="status">
                        <Check className="h-3 w-3" /> Email address copied to clipboard.
                      </p>
                    )}
                  </div>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors hover:text-softblue"
                  >
                    <Linkedin className="h-4 w-4 text-softblue" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm transition-colors hover:text-lavender"
                  >
                    <Github className="h-4 w-4 text-lavender" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs text-white/50">
                  <MapPin className="h-3.5 w-3.5" />
                  Available for remote opportunities
                </div>
              </div>

              {/* Right panel — actions */}
              <div className="flex flex-col justify-center gap-3 p-8">
                <a href={mailtoUrl} className="btn-primary group">
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Email Me
                </a>
                <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Mail className="h-4 w-4" />
                  Open Gmail
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="h-4 w-4" />
                  Explore My GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
