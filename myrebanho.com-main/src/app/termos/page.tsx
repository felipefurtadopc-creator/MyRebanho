import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { termos } from "@/content/legal";

export const metadata: Metadata = {
  title: "Termos e Condições | MyRebanho",
};

export default function TermosPage() {
  return <LegalPage {...termos} />;
}
