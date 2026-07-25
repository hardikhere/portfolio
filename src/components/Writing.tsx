import { getMediumPosts } from "@/lib/medium";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export async function Writing() {
  const posts = await getMediumPosts();

  return (
    <section id="writing" className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
          Writing
        </h2>
        <a
          href="https://medium.com/@web.hardikhere"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-muted transition-colors hover:text-foreground"
        >
          View on Medium →
        </a>
      </div>

      {posts.length === 0 ? (
        <p className="mt-6 text-sm text-muted">
          Posts are on{" "}
          <a
            href="https://medium.com/@web.hardikhere"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Medium
          </a>
          .
        </p>
      ) : (
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <li key={post.link}>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-border p-4 transition-colors hover:border-foreground"
              >
                <p className="font-mono text-xs text-muted">
                  {formatDate(post.pubDate)}
                </p>
                <h3 className="mt-2 text-sm font-medium leading-snug">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
