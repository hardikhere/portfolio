export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pb-12 pt-16 sm:pt-24">
      <p className="font-mono text-sm text-muted">Bengaluru, India</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Hardik Khanchandani
      </h1>
      <p className="mt-3 text-lg text-muted">
        Senior React Native Engineer building mobile products end to end.
      </p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <a
          href="/resume.pdf"
          className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
        >
          Resume ↓
        </a>
        <a
          href="mailto:web.hardikhere@gmail.com"
          className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
        >
          Say hi
        </a>
        <a
          href="https://github.com/hardikhere"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
