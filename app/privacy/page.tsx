import type { Metadata } from "next";
import { PrivacyPage } from "../components/privacy-page";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy Policy — CW",
  description: "Privacy policy for this website.",
};

export default function Page() {
  return <PrivacyPage />;
}
