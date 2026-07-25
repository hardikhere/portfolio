import { ImageResponse } from "next/og";
import { PROFILE_PHOTO, SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          backgroundColor: "#fafaf9",
          color: "#18181b",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={PROFILE_PHOTO}
          width={120}
          height={120}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          alt=""
        />
        <div style={{ marginTop: 40, fontSize: 64, fontWeight: 600, letterSpacing: -1 }}>
          Hardik Khanchandani
        </div>
        <div style={{ marginTop: 16, fontSize: 32, color: "#71717a" }}>
          Senior React Native Engineer
        </div>
        <div style={{ marginTop: 32, fontSize: 24, color: "#2563eb" }}>
          Bengaluru, India
        </div>
      </div>
    ),
    { ...size },
  );
}
