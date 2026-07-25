import Image from "next/image";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Experience
      </h2>
      <ul className="mt-6 space-y-10">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.period}`} className="flex gap-4">
            {entry.logo && (
              <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border">
                <Image
                  src={entry.logo}
                  alt={`${entry.company} logo`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1">
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
