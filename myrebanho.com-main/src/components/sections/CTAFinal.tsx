"use client";

import { motion } from "framer-motion";
import { ctaFinal } from "@/content/site";
import ContactForm from "@/components/ui/ContactForm";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative bg-[#111] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/30 to-transparent" />

      {/* Fundo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('/images/pasto-nelore-arvore.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111]" />
      </div>

      {/* Círculos decorativos */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-ouro/5" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border border-ouro/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-ouro/[0.03]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block tag bg-bordo/20 text-bordo-light border border-bordo/30 mb-6">
            {ctaFinal.tag}
          </span>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-branco tracking-wider leading-none mb-6">
            {ctaFinal.tituloAntes}
            <span className="text-gradient-ouro">{ctaFinal.tituloDestaque}</span>
          </h2>
          <p className="text-branco/60 text-lg max-w-2xl mx-auto">
            {ctaFinal.descricao}
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        {/* Selos de confiança */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-branco/25 text-xs"
        >
          {ctaFinal.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
