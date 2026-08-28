"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/components/ui/ContactModal";

interface ArtigoCTAProps {
  titulo: string;
  texto: string;
  botao: string;
}

export default function ArtigoCTA({ titulo, texto, botao }: ArtigoCTAProps) {
  const { abrir } = useContactModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl border border-ouro/30 bg-gradient-to-br from-ouro/[0.12] to-transparent p-8 md:p-10 overflow-hidden"
    >
      {/* Brilho decorativo */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-ouro/10 blur-3xl pointer-events-none" />

      <div className="relative">
        <h3 className="font-bebas text-3xl md:text-4xl text-branco tracking-wider leading-none mb-3">
          {titulo}
        </h3>
        <p className="text-branco/60 text-base leading-relaxed mb-6 max-w-xl">
          {texto}
        </p>
        <button
          onClick={abrir}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-ouro text-charcoal font-semibold rounded-xl hover:bg-ouro-light transition-all duration-300 shadow-ouro hover:shadow-ouro-lg hover:scale-105"
        >
          {botao}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}
