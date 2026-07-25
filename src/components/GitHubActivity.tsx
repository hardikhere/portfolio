import { getTopRepos } from "@/lib/github";

const GITHUB_USERNAME = "hardikhere";
const CHART_URL = `https://ghchart.rshah.org/2563eb/${GITHUB_USERNAME}`;

export async function GitHubActivity() {
  const repos = await getTopRepos();

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

      {repos.length > 0 && (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {repos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="block h-full rounded-lg border border-border p-4 transition-colors hover:border-foreground"
              >
                <p className="text-sm font-medium">{repo.name}</p>
                {repo.description && (
                  <p className="mt-1 line-clamp-2 text-sm text-muted">
                    {repo.description}
                  </p>
                )}
                <div className="mt-2 flex items-center gap-3 font-mono text-xs text-muted">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stars}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
