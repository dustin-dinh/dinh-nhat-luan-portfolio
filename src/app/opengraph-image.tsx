import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dinh Nhat Luan | AI Engineer Intern";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#f8fafc",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 20px",
            borderRadius: "9999px",
            backgroundColor: "#eff6ff",
            border: "1px solid #bfdbfe",
            color: "#1d4ed8",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          AI Engineer Intern | Backend & Information Retrieval
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#0f172a",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Dinh Nhat Luan
        </h1>

        <p
          style={{
            fontSize: "26px",
            color: "#475569",
            marginTop: "20px",
            maxWidth: "920px",
            lineHeight: 1.4,
          }}
        >
          Information Systems Student at VNU-HCM UIT specializing in legal search engines, REST APIs, and data-driven web applications.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "40px",
            fontSize: "20px",
            color: "#2563eb",
            fontWeight: 600,
          }}
        >
          <span>nhatluan.dinh.2901@gmail.com</span>
          <span>•</span>
          <span>github.com/dustin-dinh</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
