import { ImageResponse } from "next/og";

export const alt = "Giannis Katsanakis - Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e1b4b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Giannis Katsanakis
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#e2e8f0",
              fontWeight: 400,
            }}
          >
            Senior Software Engineer
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              marginTop: "12px",
            }}
          >
            Java | Spring Boot | AWS | Microservices | Kubernetes
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
