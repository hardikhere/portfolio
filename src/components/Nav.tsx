const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#causes", label: "Causes" },
  { href: "#exploring", label: "Exploring" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a href="#top" className="text-sm font-medium tracking-tight">
          Hardik Khanchandani
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
