import Image from "next/image";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Education
      </h2>
      <ul className="mt-6 space-y-10">
        {education.map((entry) => (
          <li key={`${entry.degree}-${entry.period}`} className="flex gap-4">
            {entry.logo && (
              <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-md border border-border">
                <Image
                  src={entry.logo}
                  alt={`${entry.institution} logo`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-base font-medium">{entry.degree}</h3>
                <span className="font-mono text-xs text-muted">{entry.period}</span>
              </div>
              <p className="mt-1 text-xs text-muted">{entry.institution}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
