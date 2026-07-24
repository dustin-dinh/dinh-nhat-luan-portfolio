import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinh Nhat Luan | AI Engineer Intern",
    description:
      "Portfolio of Dinh Nhat Luan, an Information Systems student focused on information retrieval, AI engineering, backend development, and data-driven applications.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
