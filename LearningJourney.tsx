import {
  Code2, Database, Network, Layers, BrainCircuit, Globe, type LucideIcon,
} from 'lucide-react';
import { learningPriorities } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Network,
  Layers,
  BrainCircuit,
  Globe,
};

export default function LearningJourney() {
  return (
    <section id="learning" className="section-pad">
      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-3">Always growing</span>
          <h2 className="heading-2">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            My current development priorities — focused study areas I'm actively investing time into.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learningPriorities.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2;
            return (
              <div
                key={item.title}
                className="card card-hover group flex items-center gap-4 p-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lavender/15 text-lavender transition-all group-hover:bg-lavender-gradient group-hover:text-navy-600">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold leading-snug">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
