const GITHUB_USERNAME = "hardikhere";

export type GithubRepo = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
};

type GithubApiRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};

export async function getTopRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );

    if (!res.ok) return [];

    const repos: GithubApiRepo[] = await res.json();

    return repos
      .filter((r) => !r.fork && r.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase())
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4)
      .map((r) => ({
        name: r.name,
        description: r.description,
        url: r.html_url,
        language: r.language,
        stars: r.stargazers_count,
      }));
  } catch {
    return [];
  }
}
