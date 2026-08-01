import type { Metadata } from "next";
import { Urbanist, Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const siteUrl = "https://bee2consulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BEE² — Fractional CMO and Project Management",
  description:
    "BEE² is a fractional consultancy run by Timothy Grech and Josef N. Grech. Senior marketing leadership and structured project delivery, without the full-time hire.",
  openGraph: {
    title: "BEE² — Fractional CMO and Project Management",
    description:
      "BEE² is a fractional consultancy run by Timothy Grech and Josef N. Grech. Senior marketing leadership and structured project delivery, without the full-time hire.",
    url: siteUrl,
    siteName: "BEE² Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEE² — Fractional CMO and Project Management",
    description:
      "BEE² is a fractional consultancy run by Timothy Grech and Josef N. Grech. Senior marketing leadership and structured project delivery, without the full-time hire.",
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
      className={`${urbanist.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
