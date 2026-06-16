import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
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

export const metadata: Metadata = {
  title: "Stylish Living Furniture",
  description: "Curated furniture for slow living and timeless spaces.",
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
          <Toaster closeButton richColors position="top-right" />
        </TooltipProvider>
      </body>
    </html>
  );
}
