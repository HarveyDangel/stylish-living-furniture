import type { Metadata } from "next";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";


const EB_GaramondSans = EB_Garamond({
   variable: "--font-eb-garamond-sans",
   subsets: ["latin"],
}); 

const Hanken_GroteskMono = Hanken_Grotesk({
   variable: "--font-hanken-grotesk",
   subsets: ["latin"],
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
      className={`${EB_GaramondSans.variable} ${Hanken_GroteskMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
