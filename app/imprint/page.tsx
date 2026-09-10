import type { Metadata } from "next";
import { ImprintPage } from "../components/imprint-page";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice — CW",
  description: "Legal notice and imprint information.",
  alternates: {
    canonical: "/imprint/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ImprintPage />;
}
