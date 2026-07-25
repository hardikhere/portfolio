import { books } from "@/data/books";

const currentlyReading = books.filter((book) => book.status === "reading");
const read = books.filter((book) => book.status === "read");

export function Reading() {
  return (
    <section id="reading" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Reading
      </h2>
      <div className="mt-6 space-y-5">
        {currentlyReading.length > 0 && (
          <div>
            <p className="text-xs text-muted">Currently Reading</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {currentlyReading.map((book) => (
                <span
                  key={book.title}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                >
                  {book.title} — {book.author}
                </span>
              ))}
            </div>
          </div>
        )}
        {read.length > 0 && (
          <div>
            <p className="text-xs text-muted">Read</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {read.map((book) => (
                <span
                  key={book.title}
                  className="rounded-full border border-border px-3 py-1 text-xs"
                >
                  {book.title} — {book.author}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
