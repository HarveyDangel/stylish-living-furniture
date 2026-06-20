import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const EB_GaramondSans = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond-sans",
});

const Hanken_GroteskMono = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://stylishlivingfurniture.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stylish Living Furniture",
    template: "%s | Stylish Living Furniture",
  },
  description:
    "Curated furniture for slow living and timeless spaces. Discover our collections of living, bedroom, dining, office, and outdoor furniture.",
  keywords: [
    "furniture",
    "home furniture",
    "living room furniture",
    "bedroom furniture",
    "dining furniture",
    "office furniture",
    "outdoor furniture",
    "stylish living",
    "Philippines furniture",
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Stylish Living Furniture",
    title: "Stylish Living Furniture",
    description:
      "Curated furniture for slow living and timeless spaces. Discover our collections.",
    images: [
      {
        url: "/Images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Stylish Living Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylish Living Furniture",
    description: "Curated furniture for slow living and timeless spaces.",
    images: ["/Images/hero.webp"],
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
      className={cn(
        "h-full",
        "antialiased",
        "light",
        EB_GaramondSans.variable,
        Hanken_GroteskMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>
          {children}
          <Toaster closeButton position="top-right" />
        </TooltipProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
