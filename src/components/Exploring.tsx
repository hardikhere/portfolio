import { photos } from "@/data/photos";

export function Exploring() {
  return (
    <section id="exploring" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Exploring
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {photos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="aspect-square w-full rounded-lg border border-border object-cover"
          />
        ))}
      </div>
    </section>
  );
}
