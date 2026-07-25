import Image from "next/image";
import { photos } from "@/data/photos";

export function Exploring() {
  return (
    <section id="exploring" className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-sm font-mono uppercase tracking-wide text-muted">
        Exploring
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-square w-full overflow-hidden rounded-lg border border-border"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
