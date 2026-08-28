"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Zap } from "lucide-react";
import { planos } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";

export default function Planos() {
  const { abrir } = useContactModal();

  return (
    <section className="relative bg-[#161616] py-24 overflow-hidden" id="planos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-ouro/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-4">
            {planos.tag}
          </span>
          <h2 className="font-bebas text-5xl md:text-7xl text-branco tracking-wider leading-none mb-6">
            {planos.tituloAntes}
            <span className="text-gradient-ouro">{planos.tituloDestaque}</span>
          </h2>
          <p className="text-branco/60 text-lg max-w-2xl mx-auto">
            {planos.descricao}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {planos.lista.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border-2 ${
                plan.highlight
                  ? "border-ouro bg-gradient-to-b from-ouro/10 to-transparent shadow-ouro-lg"
                  : "border-white/10 bg-white/[0.03]"
              } p-6 flex flex-col`}
            >
              {/* Badge de destaque */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-ouro rounded-full text-charcoal text-xs font-bold tracking-wider uppercase shadow-ouro whitespace-nowrap">
                  <Zap size={12} className="fill-charcoal" />
                  {plan.badge}
                </div>
              )}

              {/* Cabeçalho do plano */}
              <div className="mb-6">
                <div className="text-branco/40 text-xs uppercase tracking-widest mb-2">
                  {plan.subtitle}
                </div>
                <h3
                  className={`font-bebas text-3xl tracking-wider mb-3 ${
                    plan.highlight ? "text-ouro" : "text-branco"
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Limite de animais: a principal diferença entre os planos */}
                <div
                  className={`inline-block rounded-lg px-3 py-1.5 mb-3 text-sm font-bold ${
                    plan.highlight
                      ? "bg-ouro/15 text-ouro border border-ouro/30"
                      : "bg-white/5 text-branco/80 border border-white/10"
                  }`}
                >
                  {plan.limite}
                </div>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-bebas text-xl ${
                      plan.highlight ? "text-ouro" : "text-branco/50"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
              </div>

              {/* Divisor */}
              <div
                className={`h-px mb-5 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-transparent via-ouro/40 to-transparent"
                    : "bg-white/5"
                }`}
              />

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-ouro" : "text-ouro/60"
                      }`}
                    />
                    <span className="text-branco/70 text-[13px]">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 opacity-30">
                    <span className="text-branco/40 text-[13px] flex-shrink-0 mt-0.5 pl-0.5">
                      ✕
                    </span>
                    <span className="text-branco/40 text-[13px] line-through">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={abrir}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-ouro text-charcoal hover:bg-ouro-light shadow-ouro hover:shadow-ouro-lg hover:scale-105"
                    : "border border-ouro/30 text-ouro hover:bg-ouro/10 hover:border-ouro"
                }`}
              >
                <MessageCircle size={16} />
                {planos.ctaLabel}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-branco/30 text-sm mt-10"
        >
          {planos.notaRodape}
        </motion.p>
      </div>
    </section>
  );
}
