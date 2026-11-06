import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE_URL, profile } from "@/data/content";
import "@/styles/globals.scss";

const title = "Sanket Gabhane – Node.js Full Stack Developer";
const description =
  "Full stack developer in Pune with 4+ years building React, Node.js and MongoDB products. Immediate joiner.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: {
    type: "website",
    title,
    description,
    url: SITE_URL,
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};
export const viewport: Viewport = { themeColor: "#0f1218" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Node.js Full Stack Developer",
  email: profile.email,
  url: profile.github,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=cabinet-grotesk:500,800|satoshi:400,500,700|jetbrains-mono:400,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
