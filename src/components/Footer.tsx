import { EMAIL, GITHUB_URL, MEDIUM_URL, RESUME_URL, X_URL } from "@/lib/links";

export function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 py-16">
      <div className="border-t border-border pt-8">
        <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
          Contact
        </h2>
        <p className="mt-4 text-base">
          <a href={`mailto:${EMAIL}`} className="text-accent hover:underline">
            {EMAIL}
          </a>
        </p>
        <div className="mt-4 flex gap-4 text-sm text-muted">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            X
          </a>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Medium
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
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
