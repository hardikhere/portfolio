import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Skills
      </h2>
      <div className="mt-6 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-xs text-muted">{group.label}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
