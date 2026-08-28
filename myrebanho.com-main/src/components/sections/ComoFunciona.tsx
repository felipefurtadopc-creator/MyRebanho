"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Activity,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { comoFunciona } from "@/content/site";

const icones: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  activity: Activity,
  chart: LineChart,
};

export default function ComoFunciona() {
  const { passos } = comoFunciona;

  return (
    <section className="relative bg-[#161616] py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />

      {/* Padrão de fundo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(217,166,83,1) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-4">
            {comoFunciona.tag}
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-branco tracking-wider leading-none mb-6">
            {comoFunciona.tituloAntes}
            <span className="text-gradient-ouro">{comoFunciona.tituloDestaque}</span>
          </h2>
          <p className="text-branco/60 text-lg max-w-2xl mx-auto">
            {comoFunciona.descricao}
          </p>
        </motion.div>

        {/* Passos */}
        <div className="relative">
          {/* Linha conectora (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.5%] right-[16.5%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-ouro/60 via-ouro/30 to-ouro/60" />
            {/* Pulso animado */}
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-ouro to-transparent opacity-60"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {passos.map((step, index) => {
              const Icon = icones[step.icon];
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Número + ícone */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 rounded-full bg-charcoal border-2 border-ouro/30 flex flex-col items-center justify-center relative z-10 group hover:border-ouro transition-all duration-300 hover:shadow-ouro">
                      <Icon
                        size={32}
                        className="text-ouro mb-1 group-hover:scale-110 transition-transform duration-300 stroke-[1.5]"
                      />
                      <span className="font-bebas text-2xl text-ouro/50 leading-none tracking-wider">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-ouro/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Conteúdo */}
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex-1 w-full hover:border-ouro/20 transition-colors duration-300">
                    <h3 className="font-bebas text-2xl text-branco tracking-wider mb-3">
                      {step.title}
                    </h3>
                    <p className="text-branco/50 text-sm leading-relaxed mb-5">
                      {step.description}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-xs text-branco/40"
                        >
                          <span className="w-1 h-1 rounded-full bg-ouro flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seta mobile */}
                  {index < passos.length - 1 && (
                    <div className="lg:hidden mt-6 text-ouro/40 text-2xl">↓</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
