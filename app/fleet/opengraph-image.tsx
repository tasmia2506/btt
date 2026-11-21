import { ImageResponse } from "next/og";
import { vehicles } from "@/data/vehicles";

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
        <div style={{ color: "#C4E326", fontSize: 26, letterSpacing: 6, marginBottom: 20 }}>
          OUR FLEET
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          <span>Choose Your</span>
          <span>Travel Companion.</span>
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 44, fontSize: 24, color: "#8A8C8F" }}>
          {vehicles.map((v, i) => (
            <div key={v.slug} style={{ display: "flex" }}>
              {v.name}
              {i < vehicles.length - 1 ? "  ·" : ""}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
