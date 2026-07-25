import Image from "next/image";

const COVER_PHOTO =
  "https://imagedelivery.net/bN8wtBatORoBF6VNcDJRLQ/c8236398-c19c-438f-2efa-83fcca781100/public";
const PROFILE_PHOTO =
  "https://imagedelivery.net/bN8wtBatORoBF6VNcDJRLQ/0a728240-f029-4241-e003-cf220f9aab00/public";

export function Hero() {
  return (
    <section id="top">
      <div className="relative h-48 w-full overflow-hidden sm:h-64">
        <Image
          src={COVER_PHOTO}
          alt="Cover photo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-12 pt-8">
        <div className="relative -mt-16 h-24 w-24 overflow-hidden rounded-full border-4 border-background sm:-mt-20 sm:h-28 sm:w-28">
          <Image
            src={PROFILE_PHOTO}
            alt="Hardik Khanchandani"
            fill
            priority
            sizes="112px"
            className="object-cover"
          />
        </div>
        <p className="mt-4 font-mono text-sm text-muted">Bengaluru, India</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hardik Khanchandani
        </h1>
        <p className="mt-3 text-lg text-muted">
          Senior React Native Engineer building mobile products end to end.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="/resume.pdf"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            Resume ↓
          </a>
          <a
            href="mailto:web.hardikhere@gmail.com"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            Say hi
          </a>
          <a
            href="https://github.com/hardikhere"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
