"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { depoimento } from "@/content/site";

export default function Depoimento() {
  return (
    <section className="relative bg-charcoal py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />

      {/* Fundo com foto real da operação */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('/images/confinamento-corredor-2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal" />
      </div>

      {/* Detalhe dourado */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-40 bg-gradient-to-b from-transparent via-ouro to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Esquerda — foto real do Antônio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Molduras douradas */}
              <div className="absolute -inset-3 rounded-3xl border border-ouro/20 -z-10" />
              <div className="absolute -inset-6 rounded-3xl border border-ouro/10 -z-10" />

              {/* Foto */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#2a2a2a]">
                <div
                  className="w-full h-full bg-cover"
                  style={{
                    backgroundImage: `url('${depoimento.foto}')`,
                    backgroundPosition: "center 20%",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

                {/* Nome sobre a foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-bebas text-2xl text-branco tracking-wider">
                    {depoimento.autor}
                  </div>
                  <div className="text-ouro text-sm">{depoimento.autorHandle}</div>
                </div>
              </div>

              {/* Badge de prova social */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-6 top-8 bg-ouro rounded-xl px-4 py-3 shadow-lg shadow-ouro/30"
              >
                <div className="font-bebas text-2xl text-charcoal leading-none">
                  {depoimento.seguidores}
                </div>
                <div className="text-charcoal/70 text-xs font-medium">
                  Seguidores
                </div>
              </motion.div>

              {/* Badge de verificação */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -left-4 bottom-28 bg-charcoal border border-ouro/30 rounded-xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-ouro/20 flex items-center justify-center">
                    <span className="text-ouro text-xs">✓</span>
                  </div>
                  <span className="text-branco/80 text-xs font-medium">
                    {depoimento.parceiroOficial}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Direita — citação */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {/* Estrelas */}
            <div className="flex gap-1.5 mb-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={20} className="fill-ouro text-ouro" />
                ))}
            </div>

            <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-6">
              {depoimento.tag}
            </span>

            <Quote
              size={48}
              className="fill-ouro/20 text-ouro/20 mb-4 -ml-1"
            />

            <blockquote className="font-bebas text-4xl md:text-5xl text-branco leading-[1.2] tracking-wider mb-8">
              {depoimento.quoteAntes}
              <span className="text-gradient-ouro">{depoimento.quoteDestaque}</span>
              {depoimento.quoteDepois}
            </blockquote>

            <p className="text-branco/60 text-base leading-relaxed mb-8">
              {depoimento.texto}
            </p>

            {/* Card do autor */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10">
              <div
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-ouro/40 bg-cover flex-shrink-0"
                style={{
                  backgroundImage: `url('${depoimento.foto}')`,
                  backgroundPosition: "center 30%",
                  backgroundSize: "220%",
                }}
              />
              <div>
                <div className="font-semibold text-branco">
                  {depoimento.autor}
                </div>
                <div className="text-ouro/70 text-sm">{depoimento.autorHandle}</div>
                <div className="text-branco/40 text-xs mt-0.5">
                  {depoimento.autorCargo}
                </div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-branco/30 text-xs">
                  {depoimento.autorFazendaLabel}
                </div>
                <div className="text-ouro/60 text-sm font-medium">
                  {depoimento.autorFazenda}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
