import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#3D3D3D",
          color: "#EBECEE",
          padding: "80px",
        }}
      >
        <div style={{ color: "#C4E326", fontSize: 28, letterSpacing: 6, marginBottom: 24 }}>
          BENGALURU, INDIA
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, textTransform: "uppercase" }}>
          {business.shortName}
        </div>
        <div style={{ fontSize: 40, color: "#8A8C8F", marginTop: 12, textTransform: "uppercase", letterSpacing: 4 }}>
          Tours &amp; Travels
        </div>
        <div style={{ fontSize: 26, color: "#EBECEE", marginTop: 40, opacity: 0.8 }}>
          Local Sightseeing · Outstation Round Trips · One-Way Drops
        </div>
      </div>
    ),
    { ...size }
  );
}
