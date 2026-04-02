import type { Metadata } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, personSchema, websiteSchema } from "@/components/schema";
import { Analytics } from "@/components/analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Jamie Oarton — AI Strategy & Fractional CAIO",
    template: "%s | Jamie Oarton",
  },
  description:
    "Helping businesses navigate AI with clarity. Writer, advisor, and fractional Chief AI Officer.",
  metadataBase: new URL("https://jamieoarton.com"),
  alternates: {
    canonical: "https://jamieoarton.com",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Jamie Oarton",
    images: [{ url: "/jamie.png", width: 1024, height: 1024, alt: "Jamie Oarton" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/jamie.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
