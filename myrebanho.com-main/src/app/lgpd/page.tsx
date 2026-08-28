import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { lgpd } from "@/content/legal";

export const metadata: Metadata = {
  title: "LGPD | MyRebanho",
};

export default function LgpdPage() {
  return <LegalPage {...lgpd} />;
}
