import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Premium modern fonts
import "./globals.css";
import HomeButton from "./components/HomeButton";
import ProfileButton from "./components/ProfileButton";
import MetaPixel from "./components/analytics/MetaPixel";
import { Suspense } from "react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://caravanmatch.com.au"),
  title: "Caravan Match | Dream It. Tender It. Drive It.",
  description: "The premium reverse marketplace for custom caravans. Design your perfect van and let dealers compete for your business.",
  keywords: ["caravan", "camping", "custom caravan", "caravan builds", "buy caravan", "sell caravan"],
  openGraph: {
    title: "Caravan Match | Dream It. Tender It. Drive It.",
    description: "The premium reverse marketplace for custom caravans. Design your perfect van and let dealers compete for your business.",
    url: "https://caravanmatch.com.au",
    siteName: "Caravan Match",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caravan Match | Dream It. Tender It. Drive It.",
    description: "The premium reverse marketplace for custom caravans.",
  },
  verification: {
    google: "RnlAWm2eDmclQd7srZg6V61D0v9Wy5F8P-RQjRBMI84",
  },
};

import { CSPostHogProvider } from "./components/analytics/PostHogProvider";

// ... (imports remain)

import Navbar from "./components/Navbar";

// ... (imports remain)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
        suppressHydrationWarning
      >
        <CSPostHogProvider>
          {/* ... json-ld script ... */}
          <Navbar />
          {children}
          <HomeButton />
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
