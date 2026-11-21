import { ImageResponse } from "next/og";
import { destinations, getDestination } from "@/data/destinations";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateImageMetadata() {
  return destinations.map((d) => ({ id: d.slug, size, contentType }));
}

export default async function OpengraphImage({ id }: { id: string }) {
  const destination = getDestination(id);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "relative",
          backgroundColor: "#3D3D3D",
          color: "#EBECEE",
        }}
      >
        {destination && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={destination.image}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", inset: 0, objectFit: "cover", opacity: 0.55 }}
          />
        )}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "80px" }}>
          <div style={{ color: "#C4E326", fontSize: 26, letterSpacing: 6, marginBottom: 16 }}>
            {destination ? destination.duration.toUpperCase() : "DESTINATION"}
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, textTransform: "uppercase" }}>
            {destination ? destination.name : "Badiger"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
