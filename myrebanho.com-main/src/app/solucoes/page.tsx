"use client";

import { motion } from "framer-motion";
import {
  Tag,
  Satellite,
  Wallet,
  HeartPulse,
  Bell,
  FileText,
  Users,
  RefreshCw,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { solucoesPage } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";
import {
  AnimalProfileSim,
  AppOfflineSim,
  RelatoriosSim,
  ReproducaoSim,
} from "@/components/solucoes/SolucoesSims";

const iconesCategorias: Record<string, LucideIcon> = {
  tag: Tag,
  satellite: Satellite,
  wallet: Wallet,
  heart: HeartPulse,
};

const iconesIntegracoes: Record<string, LucideIcon> = {
  scale: Scale,
  file: FileText,
  bell: Bell,
  users: Users,
  refresh: RefreshCw,
};

/* Tela animada de cada categoria (mesma ordem de solucoesPage.categorias) */
const simsPorCategoria = [
  AnimalProfileSim, // Gestão de Rebanho → perfil do animal (custos + histórico)
  AppOfflineSim, // Tecnologia de Campo → app offline sincronizando
  RelatoriosSim, // Gestão Financeira → relatórios (Arrobas Produzidas)
  ReproducaoSim, // Reprodução → histórico reprodutivo + previsão de partos
];

export default function SolucoesPage() {
  const { abrir } = useContactModal();

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: "url('/images/confinamento-cocho.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-charcoal" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-6">
              {solucoesPage.tag}
            </span>
            <h1 className="font-bebas text-6xl md:text-8xl text-branco tracking-wider leading-none mb-6">
              {solucoesPage.tituloLinha1}
              <br />
              <span className="text-gradient-ouro">
                {solucoesPage.tituloDestaque}
              </span>
            </h1>
            <p className="text-branco/60 text-xl max-w-3xl mx-auto leading-relaxed">
              {solucoesPage.descricao}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorias com telas animadas do sistema */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {solucoesPage.categorias.map((cat, catIndex) => {
            const Icon = iconesCategorias[cat.icon];
            const Sim = simsPorCategoria[catIndex];
            const isEven = catIndex % 2 === 0;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Texto da categoria */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex flex-col gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${
                        cat.color === "ouro"
                          ? "border-ouro/40 bg-ouro/10"
                          : "border-bordo/40 bg-bordo/10"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          cat.color === "ouro" ? "text-ouro" : "text-bordo-light"
                        }
                      />
                    </div>
                    <div>
                      <p className="text-branco/40 text-xs uppercase tracking-widest mb-2">
                        {cat.subtitle}
                      </p>
                      <h2 className="font-bebas text-4xl md:text-5xl text-branco tracking-wider leading-none">
                        {cat.title}
                      </h2>
                    </div>
                    <div
                      className={`h-px bg-gradient-to-r ${
                        cat.color === "ouro"
                          ? "from-ouro/40 to-transparent"
                          : "from-bordo/40 to-transparent"
                      }`}
                    />

                    {/* Features */}
                    <div className="space-y-3">
                      {cat.features.map((feature, i) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:border-ouro/20 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-branco text-sm mb-1.5">
                            {feature.name}
                          </h3>
                          <p className="text-branco/50 text-sm leading-relaxed">
                            {feature.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tela animada do sistema */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <Sim />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Integrações */}
      <section className="py-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bebas text-4xl text-branco tracking-wider mb-3">
              {solucoesPage.integracoesTitulo}
            </h2>
            <p className="text-branco/50">{solucoesPage.integracoesDescricao}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {solucoesPage.integracoes.map(({ name, icon }) => {
              const Icon = iconesIntegracoes[icon];
              return (
                <div
                  key={name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-ouro/20 transition-colors text-center"
                >
                  <Icon size={24} className="text-ouro/60" />
                  <span className="text-branco/50 text-xs">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-bebas text-5xl text-branco tracking-wider mb-4">
            {solucoesPage.ctaTitulo}
          </h2>
          <p className="text-branco/50 mb-8">{solucoesPage.ctaDescricao}</p>
          <button
            onClick={abrir}
            className="inline-flex items-center gap-2 px-10 py-4 bg-bordo hover:bg-bordo-dark text-branco font-semibold rounded-xl transition-all duration-300 hover:shadow-bordo"
          >
            {solucoesPage.ctaLabel}
          </button>
        </div>
      </section>
    </div>
  );
}
