import { causes } from "@/data/causes";

export function Causes() {
  return (
    <section id="causes" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        What I Stand For
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {causes.map((cause, index) => (
          <li
            key={cause.title}
            className="rounded-lg border border-border p-6 transition-colors hover:border-foreground"
          >
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">
              {cause.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {cause.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
