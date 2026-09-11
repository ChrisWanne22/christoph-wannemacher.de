import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./components/language-provider";
import { StickyContactButton } from "./components/sticky-contact-button";
import { withBasePath } from "./lib/paths";
import { LINKEDIN_PROFILE_URL, SITE_NAME, SITE_URL } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "Christoph Wannemacher – Product Owner, Innovation & Digital Transformation";
const description =
  "Christoph Wannemacher – Product Owner, Innovation Manager und Digital Transformation Manager. Geschichten über Menschen, Produkte, Innovation und das gemeinsame Machen.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Christoph Wannemacher",
    "Product Owner",
    "Product Management",
    "Digital Transformation",
    "Innovation",
    "Agile",
    "AI",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: withBasePath("/favicon.ico"),
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        url: withBasePath("/favicon-48.png"),
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: withBasePath("/favicon-96.png"),
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: withBasePath("/favicon.svg"),
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: withBasePath("/apple-touch-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Product Owner / Digital Transformation Manager",
  sameAs: [LINKEDIN_PROFILE_URL],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          {children}
          <StickyContactButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
