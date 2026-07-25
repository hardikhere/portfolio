import Image from "next/image";
import { getMediumPosts } from "@/lib/medium";
import { MEDIUM_URL } from "@/lib/links";

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
          href={MEDIUM_URL}
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
            href={MEDIUM_URL}
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
                className="block overflow-hidden rounded-lg border border-border transition-colors hover:border-foreground"
              >
                {post.thumbnail && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
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
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
