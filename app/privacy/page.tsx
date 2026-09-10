import type { Metadata } from "next";
import { PrivacyPage } from "../components/privacy-page";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy Policy — CW",
  description: "Privacy policy for this website.",
  alternates: {
    canonical: "/privacy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PrivacyPage />;
}
