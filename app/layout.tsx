import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./components/language-provider";
import { StickyContactButton } from "./components/sticky-contact-button";
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
  title: "Christoph Wannemacher — Ideen. Machen.",
  description:
    "Christoph Wannemacher: stories about having ideas, building things, figuring stuff out with people, and staying curious — including AI, digital products and life outside the laptop.",
  keywords: [
    "Christoph Wannemacher",
    "Product Owner",
    "Product Management",
    "Digital Transformation",
    "Innovation",
    "Agile",
    "AI",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <LanguageProvider>
          {children}
          <StickyContactButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
