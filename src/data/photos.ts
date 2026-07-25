// Placeholder images — swap `src` for your own hosted photo URLs
// (e.g. Cloudinary, S3, Imgur) and update the `alt` text.
export type Photo = {
  src: string;
  alt: string;
};

export const photos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Mountain range at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    alt: "City street at night",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    alt: "Forest path in fog",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
    alt: "Desert dunes",
  },
];
