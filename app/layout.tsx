import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fubar-starter.vercel.app"),
  title: "FUBAR Athletic Club — Beyond Recovery",
  description: "Technical running and training apparel from Grimstad, Norway. Limited drops. When it's gone, it's gone.",
  openGraph: {
    title: "FUBAR Athletic Club — Beyond Recovery",
    description: "Technical running and training apparel from Grimstad, Norway. Limited drops.",
    url: "https://fubar-starter.vercel.app",
    siteName: "FUBAR Athletic Club",
    images: [
      {
        url: "/img/hero.jpg",
        width: 1200,
        height: 630,
        alt: "FUBAR Athletic Club — Beyond Recovery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FUBAR Athletic Club — Beyond Recovery",
    description: "Technical running and training apparel from Grimstad, Norway. Limited drops.",
    images: ["/img/hero.jpg"],
  },
  icons: {
    icon: "/fubar-monogram.svg",
    shortcut: "/fubar-monogram.svg",
    apple: "/fubar-monogram.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
