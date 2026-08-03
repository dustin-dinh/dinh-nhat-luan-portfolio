import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dinh-nhat-luan-portfolio.vercel.app"),
  title: "Dinh Nhat Luan | AI Engineer Intern",
  description:
    "Portfolio of Dinh Nhat Luan, an Information Systems student focused on information retrieval, AI engineering, backend development, and data-driven applications.",
  keywords: [
    "Dinh Nhat Luan",
    "AI Engineer Intern",
    "Information Retrieval",
    "Backend Developer",
    "Python",
    "FastAPI",
    "Semantic Search",
    "React",
    "Laravel",
    "Ho Chi Minh City",
    "Vietnam"
  ],
  authors: [{ name: "Dinh Nhat Luan" }],
  creator: "Dinh Nhat Luan",
  openGraph: {
    title: "Dinh Nhat Luan | AI Engineer Intern",
    description:
      "Portfolio of Dinh Nhat Luan, an Information Systems student focused on information retrieval, AI engineering, backend development, and data-driven applications.",
    url: "https://dinh-nhat-luan-portfolio.vercel.app",
    siteName: "Dinh Nhat Luan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dinh Nhat Luan, Data Systems, AI and Backend Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinh Nhat Luan | AI Engineer Intern",
    description:
      "Portfolio of Dinh Nhat Luan, an Information Systems student focused on information retrieval, AI engineering, backend development, and data-driven applications.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#37353E] text-[#D3DAD9] font-sans selection:bg-[#715A5A] selection:text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
