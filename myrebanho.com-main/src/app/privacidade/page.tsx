import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { privacidade } from "@/content/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade | MyRebanho",
};

export default function PrivacidadePage() {
  return <LegalPage {...privacidade} />;
}
