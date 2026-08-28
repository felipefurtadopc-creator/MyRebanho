"use client";

import { motion } from "framer-motion";
import {
  Tag,
  TrendingUp,
  Satellite,
  Wallet,
  HeartPulse,
  Smartphone,
  X,
  Check,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { solucoes } from "@/content/site";

const icones: Record<string, LucideIcon> = {
  tag: Tag,
  trending: TrendingUp,
  satellite: Satellite,
  wallet: Wallet,
  heart: HeartPulse,
  smartphone: Smartphone,
};

// Link com animações do framer-motion — cards clicáveis que levam a /solucoes
const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Mini-visual do card grande: linha de animais com GMD */
function MiniControleAnimais() {
  const linhas = [
    { brinco: "BR 0234", peso: "412 kg", gmd: "1,32", bom: true },
    { brinco: "BR 0567", peso: "388 kg", gmd: "1,10", bom: true },
    { brinco: "BR 0891", peso: "301 kg", gmd: "0,41", bom: false },
  ];
  return (
    <div className="mt-6 rounded-xl bg-black/30 border border-white/5 p-3 space-y-1.5">
      <div className="flex text-[9px] uppercase tracking-wider text-branco/30 px-2">
        <span className="flex-1">Brinco</span>
        <span className="w-16 text-right">Peso</span>
        <span className="w-20 text-right">GMD kg/dia</span>
      </div>
      {linhas.map((l, i) => (
        <motion.div
          key={l.brinco}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + i * 0.15 }}
          className={`flex items-center text-[11px] rounded-lg px-2 py-1.5 ${
            l.bom ? "bg-white/[0.03]" : "bg-bordo/15 border border-bordo/30"
          }`}
        >
          <span className="flex-1 font-mono text-branco/70">{l.brinco}</span>
          <span className="w-16 text-right text-branco/60">{l.peso}</span>
          <span
            className={`w-20 text-right font-semibold ${
              l.bom ? "text-ouro" : "text-bordo-light"
            }`}
          >
            {l.gmd}
          </span>
        </motion.div>
      ))}
      <div className="text-[9px] text-bordo-light/80 px-2 pt-0.5">
        ⚠ BR 0891 abaixo da meta: animal improdutivo identificado
      </div>
    </div>
  );
}

export default function Solucoes() {
  const cardGrande = solucoes.itens.find((i) => i.grande);
  const cardsMenores = solucoes.itens.filter((i) => !i.grande);
  const IconGrande = cardGrande ? icones[cardGrande.icon] : Tag;

  return (
    <section className="relative bg-charcoal py-24 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-ouro/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-bordo/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-4">
            {solucoes.tag}
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-branco tracking-wider leading-none mb-6">
            {solucoes.tituloAntes}
            <span className="text-gradient-ouro">{solucoes.tituloDestaque}</span>
          </h2>
          <p className="text-branco/60 text-lg max-w-2xl mx-auto leading-relaxed">
            {solucoes.descricao}
          </p>
        </motion.div>

        {/* Bento grid: card grande + cards menores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Card grande (2 colunas × 2 linhas no desktop) */}
          {cardGrande && (
            <MotionLink
              href={solucoes.ctaHref}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative block md:col-span-2 lg:row-span-2 bg-gradient-to-br from-ouro/[0.08] to-transparent border border-ouro/20 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-ouro/50 hover:shadow-ouro"
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl border border-ouro/40 bg-ouro/15 flex items-center justify-center mb-6 group-hover:bg-ouro/25 transition-all duration-300">
                  <IconGrande size={26} className="text-ouro stroke-[1.5]" />
                </div>
                <h3 className="font-bebas text-3xl md:text-4xl text-branco tracking-wider mb-3 group-hover:text-ouro transition-colors duration-300">
                  {cardGrande.title}
                </h3>
                <p className="text-branco/55 text-sm md:text-base leading-relaxed">
                  {cardGrande.description}
                </p>
                <div className="flex-1" />
                <MiniControleAnimais />
              </div>
            </MotionLink>
          )}

          {/* Cards menores */}
          {cardsMenores.map((solution) => {
            const Icon = icones[solution.icon];
            return (
              <MotionLink
                href={solucoes.ctaHref}
                key={solution.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative block lg:col-span-1 bg-white/[0.03] border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-ouro/40 hover:shadow-ouro"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-ouro/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl border border-ouro/30 bg-ouro/10 flex items-center justify-center mb-4 group-hover:border-ouro/60 group-hover:bg-ouro/20 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-ouro stroke-[1.5] group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bebas text-xl text-branco tracking-wider mb-2 group-hover:text-ouro transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-branco/50 text-xs leading-relaxed group-hover:text-branco/70 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>
              </MotionLink>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href={solucoes.ctaHref}
            className="inline-flex items-center gap-2 px-8 py-4 border border-ouro/40 text-ouro font-semibold rounded-xl hover:bg-ouro/10 hover:border-ouro transition-all duration-300"
          >
            {solucoes.ctaLabel}
            <span>→</span>
          </Link>
        </motion.div>

        {/* Comparação Planilha × MyRebanho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <span className="inline-block tag bg-bordo/20 text-bordo-light border border-bordo/30 mb-4">
              {solucoes.comparacao.tag}
            </span>
            <h3 className="font-bebas text-4xl md:text-5xl text-branco tracking-wider leading-none">
              {solucoes.comparacao.titulo}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Antes — planilha */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
              <div className="text-branco/40 text-xs uppercase tracking-widest font-semibold mb-5">
                {solucoes.comparacao.antes.titulo}
              </div>
              <ul className="space-y-3.5">
                {solucoes.comparacao.antes.itens.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 text-branco/45 text-sm"
                  >
                    <X size={15} className="text-bordo-light/70 shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Depois — MyRebanho */}
            <div className="relative rounded-2xl border border-ouro/30 bg-gradient-to-b from-ouro/[0.08] to-transparent p-7 shadow-ouro">
              <div className="text-ouro text-xs uppercase tracking-widest font-semibold mb-5">
                {solucoes.comparacao.depois.titulo}
              </div>
              <ul className="space-y-3.5">
                {solucoes.comparacao.depois.itens.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 text-branco/80 text-sm"
                  >
                    <Check size={15} className="text-ouro shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
