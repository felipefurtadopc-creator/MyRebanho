import Hero from "@/components/sections/Hero";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Solucoes from "@/components/sections/Solucoes";
import MarqueeParceiros from "@/components/sections/MarqueeParceiros";
import Depoimento from "@/components/sections/Depoimento";
import Planos from "@/components/sections/Planos";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <ComoFunciona />
      <Solucoes />
      <MarqueeParceiros />
      <Depoimento />
      <Planos />
      <CTAFinal />
    </>
  );
}
