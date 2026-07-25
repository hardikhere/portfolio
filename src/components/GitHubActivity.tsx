const GITHUB_USERNAME = "hardikhere";
const CHART_URL = `https://ghchart.rshah.org/2563eb/${GITHUB_USERNAME}`;

export function GitHubActivity() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
          GitHub Activity
        </h2>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          View profile →
        </a>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-border p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={CHART_URL}
          alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
          className="min-w-[600px]"
        />
      </div>
    </section>
  );
}
