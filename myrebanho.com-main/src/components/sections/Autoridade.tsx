"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { autoridade } from "@/content/site";
import CountUp from "@/components/ui/CountUp";

export default function Autoridade() {
  return (
    <section className="relative bg-bordo overflow-hidden py-16">
      {/* Textura de fundo */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.05) 20px,
            rgba(255,255,255,0.05) 21px
          )`,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Esquerda — confiança da marca */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start gap-6"
          >
            {/* Selo Areopagus */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-branco/10 border border-branco/20 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-ouro/20 border border-ouro/40 flex items-center justify-center">
                <span className="font-bebas text-ouro text-lg leading-none">A</span>
              </div>
              <div>
                <div className="text-xs text-branco/60 uppercase tracking-widest">
                  Desenvolvido por
                </div>
                <div className="font-bebas text-xl text-branco tracking-wider">
                  {autoridade.desenvolvidoPor}
                </div>
              </div>
            </div>

            <div>
              <p className="text-branco/70 text-sm uppercase tracking-widest font-medium mb-3">
                {autoridade.tagCaso}
              </p>
              <h2 className="font-bebas text-5xl md:text-6xl text-branco leading-none tracking-wider mb-4">
                {autoridade.tituloLinha1}
                <br />
                <span className="text-marfim">{autoridade.tituloLinha2}</span>
              </h2>
              <p className="text-branco/70 text-base leading-relaxed max-w-lg">
                {autoridade.descricao}
              </p>
            </div>

            {/* Stats com count-up */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {autoridade.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-bebas text-3xl text-marfim tracking-wider">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-branco/50 text-xs leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Direita — depoimento */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-branco/10 border border-branco/20 rounded-2xl p-8 backdrop-blur-sm">
              {/* Ícone de aspas */}
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-xl bg-ouro flex items-center justify-center shadow-lg shadow-ouro/30">
                <Quote size={20} className="fill-charcoal text-charcoal" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="fill-ouro text-ouro" />
                ))}
              </div>

              <blockquote className="text-branco text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
                &ldquo;{autoridade.quote.split(autoridade.quoteDestaque)[0]}
                <span className="text-marfim font-semibold not-italic">
                  {autoridade.quoteDestaque}
                </span>
                {autoridade.quote.split(autoridade.quoteDestaque)[1]}&rdquo;
              </blockquote>

              {/* Autor com foto real */}
              <div className="flex items-center gap-4">
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-ouro/50 bg-cover flex-shrink-0"
                  style={{
                    backgroundImage: "url('/images/antonio-confinamento-1.jpg')",
                    backgroundPosition: "center 30%",
                    backgroundSize: "220%",
                  }}
                />
                <div>
                  <div className="font-semibold text-branco text-base">
                    {autoridade.autor}
                  </div>
                  <div className="text-branco/50 text-sm">
                    {autoridade.autorHandle} · {autoridade.autorCargo}
                  </div>
                  <div className="text-ouro/70 text-xs mt-1">
                    {autoridade.autorFazenda}
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-ouro/20 opacity-40" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-ouro/10 opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
