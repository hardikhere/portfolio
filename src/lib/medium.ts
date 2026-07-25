import { XMLParser } from "fast-xml-parser";

const MEDIUM_USERNAME = "web.hardikhere";
const FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function firstImage(html: string): string | null {
  const match = html.match(/<img[^>]*src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const parser = new XMLParser({ ignoreAttributes: false });
    const data = parser.parse(xml);

    const items = data?.rss?.channel?.item;
    if (!items) return [];

    const list = Array.isArray(items) ? items : [items];

    return list.slice(0, 6).map((item) => {
      const description: string = item["content:encoded"] ?? item.description ?? "";
      const excerpt = stripHtml(description).slice(0, 160);

      return {
        title: item.title ?? "Untitled",
        link: item.link ?? "#",
        pubDate: item.pubDate ?? "",
        excerpt: excerpt ? `${excerpt}…` : "",
        thumbnail: firstImage(description),
      };
    });
  } catch {
    return [];
  }
}
