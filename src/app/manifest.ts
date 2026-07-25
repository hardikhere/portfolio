import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Hardik K.",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#fafaf9",
    theme_color: "#fafaf9",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
