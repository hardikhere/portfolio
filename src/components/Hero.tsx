import Image from "next/image";
import { EMAIL, GITHUB_URL, RESUME_URL, X_URL } from "@/lib/links";
import { COVER_PHOTO, PROFILE_PHOTO } from "@/lib/site";

export function Hero() {
  return (
    <section id="top">
      <div className="relative h-48 w-full overflow-hidden sm:h-64">
        <Image
          src={COVER_PHOTO}
          alt=""
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
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            Resume ↓
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            Say hi
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            GitHub
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-foreground"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}
