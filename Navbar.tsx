import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b py-3' : 'py-5'
      }`}
      style={scrolled ? { borderColor: 'var(--border)' } : undefined}
    >
      <nav className="container-app flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow transition-transform group-hover:scale-105">
            <Code2 className="h-5 w-5" />
          </span>
          <span className="font-display text-base font-bold tracking-tight">
            Hamathi<span className="gradient-text"> Thazin</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors hover:text-lavender ${
                  active === link.href ? 'text-lavender' : 'text-[var(--text-muted)]'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-lavender-gradient" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-10 w-10 place-items-center rounded-full border transition-all hover:border-lavender hover:text-lavender"
            style={{ borderColor: 'var(--border)' }}
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border lg:hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-app mt-3 flex flex-col gap-1 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active === link.href
                    ? 'bg-lavender/10 text-lavender'
                    : 'hover:bg-lavender/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
