import { useState } from 'react';
import {
  Code2, Globe, Database, BrainCircuit, type LucideIcon, MousePointerClick,
} from 'lucide-react';
import { skillCategories, skillDetails, type SkillDetail } from '@/data/portfolio';
import SkillModal from '@/components/SkillModal';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Database,
  BrainCircuit,
};

export default function Skills() {
  const [active, setActive] = useState<SkillDetail | null>(null);

  const detailByName = (name: string) =>
    skillDetails.find((s) => s.name.toLowerCase() === name.toLowerCase());

  return (
    <section id="skills" className="section-pad" style={{ background: 'var(--bg-elev)' }}>
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">What I work with</span>
          <h2 className="heading-2">
            Interactive <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Technologies and concepts I&apos;m actively studying.{' '}
            <span className="inline-flex items-center gap-1 font-medium text-lavender">
              <MousePointerClick className="h-3.5 w-3.5" /> Click any skill
            </span>{' '}
            to see details, related projects, and certificates.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <div key={cat.title} className="card group p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-lavender-gradient text-navy-600 shadow-glow transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skillName) => {
                    const detail = detailByName(skillName);
                    const clickable = Boolean(detail);
                    return (
                      <button
                        key={skillName}
                        type="button"
                        disabled={!clickable}
                        onClick={() => detail && setActive(detail)}
                        aria-label={`${skillName} — view details`}
                        className={`badge transition-all ${
                          clickable
                            ? 'cursor-pointer hover:scale-105 hover:bg-lavender/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender'
                            : 'cursor-default opacity-70'
                        }`}
                      >
                        {skillName}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SkillModal skill={active} onClose={() => setActive(null)} />
    </section>
  );
}
