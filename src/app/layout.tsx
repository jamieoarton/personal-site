import type { Metadata } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Jamie Oarton",
  },
  twitter: {
    card: "summary_large_image",
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
        {children}
      </body>
    </html>
  );
}
