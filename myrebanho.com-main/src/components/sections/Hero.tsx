"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { hero } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";
import { PlataformaViewer } from "@/components/sections/PlataformaTabs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, skewY: 2 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { abrir } = useContactModal();

  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-20">
      {/* Foto real da operação */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/confinamento-corredor.jpg')" }}
      />

      {/* Overlays de leitura + fade para charcoal sólido na parte de baixo */}
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal" />

      {/* Aurora sutil — véu dourado/bordô em movimento lento */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="aurora-blob w-[55vw] h-[55vw] -top-[15%] -left-[10%] opacity-[0.14]"
          style={{
            background:
              "radial-gradient(circle at center, #D9A653 0%, transparent 65%)",
          }}
        />
        <div
          className="aurora-blob w-[50vw] h-[50vw] top-[20%] -right-[8%] opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at center, #9B3224 0%, transparent 65%)",
            animationDuration: "18s",
            animationDelay: "-7s",
          }}
        />
      </div>

      {/* Textura de grão */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Linhas decorativas douradas */}
      <div className="absolute top-0 left-0 w-1 h-48 bg-gradient-to-b from-ouro to-transparent opacity-60" />
      <div className="absolute top-0 right-24 w-48 h-px bg-gradient-to-l from-ouro to-transparent opacity-40" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloco de texto */}
        <div className="text-center max-w-6xl mx-auto">
          {/* Headline com stagger — 2 linhas */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-5"
          >
            {hero.headline.map((line, i) => (
              <span key={i} className="block">
                <motion.span
                  variants={wordVariants}
                  className={`font-bebas block whitespace-normal md:whitespace-nowrap leading-[1.06] tracking-normal text-[clamp(1.9rem,5.2vw,4.4rem)] ${
                    i === 1 ? "pt-[0.12em] text-ouro" : "text-branco"
                  }`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="text-branco/70 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed"
          >
            {hero.subAntes}
            <span className="text-ouro font-medium">{hero.subDestaque}</span>
            {hero.subDepois}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={abrir}
              className="group flex items-center gap-2 px-8 py-4 bg-bordo hover:bg-bordo-dark text-branco font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-bordo/30 hover:shadow-bordo/50 hover:scale-105"
            >
              {hero.ctaPrimario.label}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <Link
              href={hero.ctaSecundario.href}
              className="group flex items-center gap-2 px-8 py-4 border-2 border-ouro text-ouro hover:bg-ouro/10 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Play size={16} className="fill-ouro" />
              {hero.ctaSecundario.label}
            </Link>
          </motion.div>
        </div>

        {/* Dashboard do produto — já na primeira dobra */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow dourado atrás do dashboard */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[85%] h-[70%] rounded-full bg-ouro/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <PlataformaViewer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
