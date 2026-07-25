export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
          Contact
        </h2>
        <p className="mt-4 text-base">
          <a
            href="mailto:web.hardikhere@gmail.com"
            className="text-accent hover:underline"
          >
            web.hardikhere@gmail.com
          </a>
        </p>
        <div className="mt-4 flex gap-4 text-sm text-muted">
          <a
            href="https://github.com/hardikhere"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@web.hardikhere"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Medium
          </a>
          <a href="/resume.pdf" className="transition-colors hover:text-foreground">
            Resume
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-muted">
          © {new Date().getFullYear()} Hardik Khanchandani
        </p>
      </div>
    </footer>
  );
}
