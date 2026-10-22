import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinh-nhat-luan-portfolio.vercel.app"),
  title: "Dinh Nhat Luan | AI Engineer & Fullstack Web",
  description:
    "Portfolio of Dinh Nhat Luan, an AI Engineer & Fullstack Web developer working on computer vision, face recognition, information retrieval and business automation.",
  keywords: [
    "Dinh Nhat Luan",
    "AI Engineer",
    "Fullstack Web Developer",
    "Computer Vision",
    "Face Recognition",
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
    title: "Dinh Nhat Luan | AI Engineer & Fullstack Web",
    description:
      "Portfolio of Dinh Nhat Luan, an AI Engineer & Fullstack Web developer working on computer vision, face recognition, information retrieval and business automation.",
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
    title: "Dinh Nhat Luan | AI Engineer & Fullstack Web",
    description:
      "Portfolio of Dinh Nhat Luan, an AI Engineer & Fullstack Web developer working on computer vision, face recognition, information retrieval and business automation.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
