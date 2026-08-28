"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Zap, Star } from "lucide-react";
import { planos } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";

export default function PlanosPage() {
  const { abrir } = useContactModal();

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-ouro/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-6">
              Planos e Preços
            </span>
            <h1 className="font-bebas text-6xl md:text-8xl text-branco tracking-wider leading-none mb-6">
              {planos.paginaTituloLinha1}
              <br />
              <span className="text-gradient-ouro">
                {planos.paginaTituloDestaque}
              </span>
            </h1>
            <p className="text-branco/60 text-xl max-w-2xl mx-auto">
              {planos.paginaDescricao}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planos */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {planos.lista.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl border-2 ${
                  plan.highlight
                    ? "border-ouro bg-gradient-to-b from-ouro/10 to-transparent shadow-ouro-lg"
                    : "border-white/10 bg-white/[0.03]"
                } p-6 flex flex-col`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-ouro rounded-full text-charcoal text-xs font-bold tracking-wider uppercase shadow-ouro whitespace-nowrap">
                    <Zap size={12} className="fill-charcoal" />
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-branco/40 text-xs uppercase tracking-widest mb-1">
                    {plan.subtitle}
                  </div>
                  <h2
                    className={`font-bebas text-3xl tracking-wider mb-3 ${
                      plan.highlight ? "text-ouro" : "text-branco"
                    }`}
                  >
                    {plan.name}
                  </h2>

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

                  <p className="text-branco/50 text-[13px] leading-relaxed mb-3">
                    {plan.description}
                  </p>
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

                <div
                  className={`h-px mb-5 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-transparent via-ouro/40 to-transparent"
                      : "bg-white/5"
                  }`}
                />

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
                    <li key={feature} className="flex items-start gap-2.5 opacity-25">
                      <span className="text-branco/40 text-[13px] pl-0.5">✕</span>
                      <span className="text-branco/40 text-[13px] line-through">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={abrir}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? "bg-ouro text-charcoal hover:bg-ouro-light shadow-ouro hover:shadow-ouro-lg"
                      : "border border-ouro/30 text-ouro hover:bg-ouro/10 hover:border-ouro"
                  }`}
                >
                  <MessageCircle size={16} />
                  {planos.ctaLabel}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bebas text-5xl text-branco tracking-wider mb-3">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-branco/50">
              Tudo que você precisa saber antes de decidir
            </p>
          </motion.div>

          <div className="space-y-4">
            {planos.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/[0.03] border border-white/5 rounded-xl p-6 hover:border-ouro/15 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Star size={14} className="text-ouro flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-branco mb-2 text-sm">
                      {faq.q}
                    </h3>
                    <p className="text-branco/50 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
