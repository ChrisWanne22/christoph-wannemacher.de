import type { Metadata } from "next";
import { ImprintPage } from "../components/imprint-page";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice — CW",
  description: "Legal notice and imprint information.",
};

export default function Page() {
  return <ImprintPage />;
}
