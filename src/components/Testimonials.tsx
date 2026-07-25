import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Testimonials
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="flex h-full flex-col rounded-lg border border-border p-6"
          >
            <p className="flex-1 text-sm leading-relaxed text-muted">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {t.context} · via LinkedIn
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
