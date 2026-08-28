"use client";

import { motion } from "framer-motion";
import { Scale, ScanLine } from "lucide-react";
import { parceiros } from "@/content/site";

interface Marca {
  nome: string;
  tipo: "balanca" | "bastao";
}

const marcas: Marca[] = [
  ...parceiros.balancas.map((nome): Marca => ({ nome, tipo: "balanca" })),
  ...parceiros.bastoes.map((nome): Marca => ({ nome, tipo: "bastao" })),
];

function FilaMarcas() {
  return (
    <div className="flex items-center shrink-0">
      {marcas.map((marca, i) => (
        <div
          key={`${marca.nome}-${i}`}
          className="flex items-center gap-3 px-10 shrink-0"
        >
          {marca.tipo === "balanca" ? (
            <Scale size={16} className="text-ouro/40 shrink-0" />
          ) : (
            <ScanLine size={16} className="text-ouro/40 shrink-0" />
          )}
          <span className="font-bebas text-2xl tracking-widest text-branco/40 whitespace-nowrap transition-colors duration-300 hover:text-ouro">
            {marca.nome}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeParceiros() {
  return (
    <section className="relative bg-charcoal py-12 overflow-hidden border-y border-white/5">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-branco/40 text-xs md:text-sm tracking-[0.2em] uppercase mb-8 px-4"
      >
        {parceiros.titulo}
      </motion.p>

      {/* Esteira infinita — a fila é duplicada para o loop ser perfeito */}
      <div className="marquee relative">
        {/* Máscaras de fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          <FilaMarcas />
          <FilaMarcas />
        </div>
      </div>
    </section>
  );
}
