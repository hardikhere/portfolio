import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Experience
      </h2>
      <ul className="mt-6 space-y-10">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`}>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-base font-medium">
                {entry.role} · {entry.company}
              </h3>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
            <p className="mt-1 text-xs text-muted">{entry.location}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {entry.highlights.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
