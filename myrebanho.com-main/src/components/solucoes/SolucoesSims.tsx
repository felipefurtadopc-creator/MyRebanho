"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BarChart3,
  Calendar,
  Check,
  CloudOff,
  FileText,
  History,
  RefreshCw,
  Scale,
  TrendingUp,
  Wallet,
} from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const easing = [0.22, 1, 0.36, 1] as const;

/* Moldura de navegador compartilhada pelas telas */
function Janela({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easing }}
      className="rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-4 bg-[#2a2a2a] rounded-md px-3 py-0.5 text-[10px] text-branco/30 text-center">
          app.myrebanho.com
        </div>
      </div>
      {children}
    </motion.div>
  );
}

/* ============================================================
   1. PERFIL DO ANIMAL — abas GERAL ⇄ CUSTOS (fiel ao produto)
   ============================================================ */

const custosAnimal = [
  { label: "Custo de Nutrição", valor: 842.1 },
  { label: "Custo Sanitários", valor: 156.4 },
  { label: "Custo de Compra", valor: 2400.0 },
  { label: "Custo Atribuído", valor: 310.25 },
];

const historicoAnimal = [
  { data: "02/07/2026", manejo: "Pesagem", obs: "450.00 kg no tronco" },
  { data: "18/06/2026", manejo: "Manejo nutricional", obs: "Ajuste de dieta" },
  { data: "05/06/2026", manejo: "Manejo sanitário", obs: "Vacinação aftosa" },
];

const linhasCusto = [
  { data: "18/06/2026", manejo: "Nutricional", item: "Ração engorda", valor: "R$ 212,40" },
  { data: "05/06/2026", manejo: "Sanitário", item: "Vacina aftosa", valor: "R$ 38,60" },
  { data: "22/05/2026", manejo: "Nutricional", item: "Suplemento mineral", valor: "R$ 96,80" },
];

export function AnimalProfileSim() {
  const [aba, setAba] = useState<"geral" | "custos">("geral");

  // Alterna entre as abas automaticamente
  useEffect(() => {
    const timer = setInterval(() => {
      setAba((a) => (a === "geral" ? "custos" : "geral"));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Janela>
      <div className="bg-[#F8FAFC] p-3 md:p-4">
        {/* Header do animal + abas */}
        <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
          <div className="flex items-center gap-2 mb-2.5">
            <ArrowLeft size={13} className="text-gray-400" />
            <span className="text-sm font-semibold text-gray-800">
              BR 0234 · Nelore
            </span>
            <span className="ml-auto text-[9px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              Ativo
            </span>
          </div>
          <div className="flex gap-4 border-b border-gray-100">
            {(["geral", "custos"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setAba(t)}
                className={`relative pb-1.5 text-[10px] font-bold tracking-wider uppercase transition-colors ${
                  aba === t ? "text-[#D9A653]" : "text-gray-400"
                }`}
              >
                {t === "geral" ? "Geral" : "Custos"}
                {aba === t && (
                  <motion.span
                    layoutId="abaAnimal"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-[#D9A653]"
                  />
                )}
              </button>
            ))}
            <span className="pb-1.5 text-[10px] font-bold tracking-wider uppercase text-gray-300">
              Manejos
            </span>
            <span className="pb-1.5 text-[10px] font-bold tracking-wider uppercase text-gray-300">
              Genealogia
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {aba === "geral" ? (
            <motion.div
              key="geral"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: easing }}
              className="space-y-3"
            >
              {/* Informações */}
              <div className="bg-white rounded-lg shadow-sm p-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { l: "Nº de controle", v: "0234" },
                    { l: "Sexo", v: "Macho" },
                    { l: "Raça", v: "Nelore" },
                    { l: "Lote", v: "Lote 12" },
                    { l: "Idade", v: "26 meses" },
                    { l: "Aptidão", v: "Corte" },
                  ].map((c) => (
                    <div key={c.l}>
                      <div className="text-[8px] text-gray-400 uppercase tracking-wide">
                        {c.l}
                      </div>
                      <div className="text-[11px] font-medium text-gray-800">
                        {c.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Pesagens */}
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Scale size={11} className="text-[#8B6A2F]" />
                    <span className="text-[10px] font-bold text-gray-700">
                      Pesagens
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { l: "Último Peso", v: "450.00 kg" },
                      { l: "GMD Último", v: "1.180 kg/dia" },
                      { l: "Peso Nascer", v: "32.00 kg" },
                      { l: "Peso Desmame", v: "180.00 kg" },
                    ].map((c, i) => (
                      <motion.div
                        key={c.l}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.1 }}
                        className="bg-gray-50 rounded-md px-2 py-1.5"
                      >
                        <div className="text-[7px] text-gray-400 uppercase">
                          {c.l}
                        </div>
                        <div className="text-[10px] font-bold text-gray-800">
                          {c.v}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Histórico */}
                <div className="bg-white rounded-lg shadow-sm p-3">
                  <div className="flex items-center gap-1.5 mb-2">
                    <History size={11} className="text-[#8B6A2F]" />
                    <span className="text-[10px] font-bold text-gray-700">
                      Histórico
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {historicoAnimal.map((h, i) => (
                      <motion.div
                        key={h.data}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.18 }}
                        className="border border-gray-100 rounded-md bg-gray-50/60 px-2 py-1"
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="text-[8px] text-gray-400 tabular-nums">
                            {h.data}
                          </span>
                          <span className="text-[9px] font-semibold text-gray-700">
                            {h.manejo}
                          </span>
                        </div>
                        <div className="text-[8px] text-gray-400">{h.obs}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="custos"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: easing }}
              className="space-y-3"
            >
              {/* Cards de custo */}
              <div className="grid grid-cols-2 gap-2">
                {custosAnimal.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-lg shadow-sm p-2.5"
                  >
                    <div className="text-[7px] text-gray-400 uppercase tracking-wide mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      <CountUp value={c.valor} decimals={2} prefix="R$ " duration={1.2} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Custo total em destaque */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 }}
                className="bg-[#FFF9ED] border border-[#E9D2A2] rounded-lg p-3 flex items-center justify-between"
              >
                <div>
                  <div className="text-[8px] text-[#8B6A2F] uppercase tracking-wide font-semibold">
                    Custo Total
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    <CountUp value={3708.75} decimals={2} prefix="R$ " duration={1.6} />
                  </div>
                </div>
                <Wallet size={18} className="text-[#D9A653]" />
              </motion.div>

              {/* Tabela de custos */}
              <div className="bg-white rounded-lg shadow-sm p-2.5">
                <div className="grid grid-cols-[52px_1fr_1fr_54px] gap-1 text-[7px] text-gray-400 uppercase tracking-wide pb-1 border-b border-gray-100">
                  <span>Data</span>
                  <span>Manejo</span>
                  <span>Item</span>
                  <span className="text-right">Custo Total</span>
                </div>
                {linhasCusto.map((l, i) => (
                  <motion.div
                    key={l.data + l.item}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                    className="grid grid-cols-[52px_1fr_1fr_54px] gap-1 text-[9px] text-gray-600 py-1 border-b border-gray-50"
                  >
                    <span className="tabular-nums text-gray-400">{l.data}</span>
                    <span>{l.manejo}</span>
                    <span className="truncate">{l.item}</span>
                    <span className="text-right font-semibold text-gray-800">
                      {l.valor}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Janela>
  );
}

/* ============================================================
   2. RELATÓRIOS — lista de modelos → Arrobas Produzidas
   ============================================================ */

const modelosRelatorios = {
  "Controle de Peso": [
    { nome: "Relatório de Pesagem", icone: FileText },
    { nome: "Arrobas Produzidas", icone: BarChart3, destaque: true },
    { nome: "Custo da Arroba", icone: Wallet },
    { nome: "Ganho de Peso", icone: TrendingUp },
  ],
  Financeiro: [
    { nome: "Fluxo de Caixa", icone: TrendingUp },
    { nome: "Desembolso por Cabeça", icone: Wallet },
  ],
};

const barrasArrobas = [42, 58, 49, 72, 64, 88];

export function RelatoriosSim() {
  const [tela, setTela] = useState<"lista" | "relatorio">("lista");

  useEffect(() => {
    const timer = setInterval(() => {
      setTela((t) => (t === "lista" ? "relatorio" : "lista"));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Janela>
      <div className="bg-[#F8FAFC] p-3 md:p-4 min-h-[330px]">
        <AnimatePresence mode="wait">
          {tela === "lista" ? (
            <motion.div
              key="lista"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: easing }}
              className="space-y-3"
            >
              {/* Header */}
              <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center justify-between">
                <div>
                  <div className="text-[8px] text-gray-400 uppercase tracking-widest">
                    Relatórios
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    Relatórios
                  </div>
                </div>
                <span className="text-[8px] font-semibold px-2 py-1 rounded-full bg-[#FFF7E8] text-[#8B6A2F] border border-[#E9D2A2]">
                  28 modelos disponíveis
                </span>
              </div>

              {/* Categorias */}
              {Object.entries(modelosRelatorios).map(([cat, itens], ci) => (
                <div
                  key={cat}
                  className="bg-white rounded-xl border border-gray-200 p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-3.5 w-1 rounded-full bg-[#D9A653]" />
                    <span className="text-[9px] font-bold text-gray-700 uppercase tracking-wider">
                      {cat}
                    </span>
                    <span className="text-[8px] text-gray-400">
                      {itens.length} itens
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {itens.map((item, i) => {
                      const Icon = item.icone;
                      const destaque = "destaque" in item && item.destaque;
                      return (
                        <motion.div
                          key={item.nome}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + ci * 0.2 + i * 0.08 }}
                          className={`relative flex items-center gap-2 rounded-lg border px-2 py-1.5 ${
                            destaque
                              ? "border-[#D9A653] bg-[#FFFCF6]"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                              destaque ? "bg-[#FFF7E8]" : "bg-gray-50"
                            }`}
                          >
                            <Icon size={11} className="text-[#8B6A2F]" />
                          </span>
                          <span className="text-[9px] font-semibold text-gray-700 leading-tight">
                            {item.nome}
                          </span>
                          {destaque && (
                            <motion.span
                              className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-[#D9A653]"
                              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
                              transition={{ duration: 1.4, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="relatorio"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: easing }}
              className="space-y-3"
            >
              {/* Header do relatório */}
              <div className="bg-white rounded-xl border border-gray-200 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowLeft size={12} className="text-gray-400" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">
                        Arrobas Produzidas
                      </div>
                      <div className="text-[8px] text-gray-400">
                        Fazenda Fortaleza
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[8px] font-semibold px-2 py-1 rounded-lg border border-gray-200 text-gray-600">
                    <Calendar size={9} className="text-[#D9A653]" />
                    Este ano
                  </span>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { l: "@s Produzidas", v: 1254.5, d: 1, s: " @" },
                  { l: "Custo / @", v: 203.64, d: 2, p: "R$ " },
                  { l: "GMD Global", v: 1.79, d: 2, s: " kg/dia" },
                  { l: "Taxa de Desfrute", v: 22.4, d: 1, s: "%" },
                ].map((k, i) => (
                  <motion.div
                    key={k.l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="bg-white rounded-xl border border-gray-200 p-2.5"
                  >
                    <div className="text-[7px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">
                      {k.l}
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      <CountUp
                        value={k.v}
                        decimals={k.d}
                        prefix={k.p ?? ""}
                        suffix={k.s ?? ""}
                        duration={1.4}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Gráfico de barras douradas */}
              <div className="bg-white rounded-xl border border-gray-200 p-3">
                <div className="text-[9px] font-bold text-gray-700 mb-2">
                  Arrobas por mês
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {barrasArrobas.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        duration: 0.5,
                        ease: easing,
                      }}
                      className="flex-1 rounded-t-md bg-[#D9A653]"
                      style={{ opacity: 0.55 + (h / 100) * 0.45 }}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5 mt-1">
                  {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((m) => (
                    <span
                      key={m}
                      className="flex-1 text-center text-[7px] text-gray-400"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Janela>
  );
}

/* ============================================================
   3. APP NO CAMPO — pesagens offline sincronizando
   ============================================================ */

const pesagensOffline = [
  { brinco: "BR 0234", peso: "450.00 kg" },
  { brinco: "BR 0567", peso: "412.50 kg" },
  { brinco: "BR 0891", peso: "398.00 kg" },
];

export function AppOfflineSim() {
  // 0-2: registrando pesagens · 3: sincronizando · 4: sincronizado
  const [fase, setFase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFase((f) => (f + 1) % 6);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easing }}
      className="flex justify-center"
    >
      <div className="w-56 bg-[#1a1a1a] rounded-[26px] border-2 border-white/10 shadow-2xl shadow-black/70 overflow-hidden">
        <div className="h-5 bg-[#111] flex items-center justify-center">
          <div className="w-14 h-2 rounded-full bg-[#242424]" />
        </div>
        <div className="bg-[#F8FAFC] p-3 min-h-[300px]">
          {/* Status de conexão */}
          <div
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 mb-2.5 text-[9px] font-semibold transition-colors duration-500 ${
              fase < 3
                ? "bg-amber-50 text-amber-700 border border-amber-200"
                : fase === 3
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-green-50 text-green-700 border border-green-200"
            }`}
          >
            {fase < 3 ? (
              <>
                <CloudOff size={11} />
                Sem sinal · modo offline
              </>
            ) : fase === 3 ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="inline-flex"
                >
                  <RefreshCw size={11} />
                </motion.span>
                Sincronizando 3 pesagens...
              </>
            ) : (
              <>
                <Check size={11} />
                Sincronizado com a nuvem
              </>
            )}
          </div>

          <div className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
            Pesagens de hoje
          </div>

          <div className="space-y-1.5">
            {pesagensOffline.map((p, i) => (
              <AnimatePresence key={p.brinco}>
                {fase >= i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm px-2.5 py-2 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-bold text-gray-800 font-mono">
                        {p.brinco}
                      </div>
                      <div className="text-[8px] text-gray-400">
                        Pesagem · Lote 12
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-bold text-[#9B3224]">
                        {p.peso}
                      </div>
                      <div
                        className={`text-[7px] font-semibold ${
                          fase >= 4 ? "text-green-600" : "text-amber-500"
                        }`}
                      >
                        {fase >= 4 ? "✓ Enviado" : "Aguardando sinal"}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>
        </div>
        <div className="h-6 bg-[#111] flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   4. REPRODUÇÃO — histórico reprodutivo + previsão de partos
   ============================================================ */

const previsaoPartos = [
  { mes: "Ago", n: 4 },
  { mes: "Set", n: 9 },
  { mes: "Out", n: 14 },
  { mes: "Nov", n: 7 },
];

export function ReproducaoSim() {
  return (
    <Janela>
      <div className="bg-[#F8FAFC] p-3 md:p-4 space-y-3">
        {/* Histórico reprodutivo da matriz */}
        <div className="bg-white rounded-lg shadow-sm p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[#8B6A2F]">♥</span>
            <span className="text-[10px] font-bold text-gray-700">
              Histórico Reprodutivo · BR 0512
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { l: "Partos Registrados", v: "3 Partos" },
              { l: "Categoria", v: "Multípara" },
              { l: "Previsão de Parto", v: "12/09/2026" },
              { l: "Situação Reprodutiva", v: "Prenha", badge: true },
            ].map((c, i) => (
              <motion.div
                key={c.l}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="bg-gray-50 rounded-md px-2 py-1.5"
              >
                <div className="text-[7px] text-gray-400 uppercase">{c.l}</div>
                {c.badge ? (
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold text-green-700">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-green-500"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                    {c.v}
                  </span>
                ) : (
                  <div className="text-[10px] font-bold text-gray-800">
                    {c.v}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Previsão de partos */}
        <div className="bg-white rounded-xl border border-gray-200 p-3">
          <div className="text-[9px] font-bold text-gray-700 mb-2">
            Previsão de Partos
          </div>
          <div className="space-y-1.5">
            {previsaoPartos.map((p, i) => (
              <div key={p.mes} className="flex items-center gap-2">
                <span className="w-6 text-[8px] text-gray-400">{p.mes}</span>
                <div className="flex-1 h-3.5 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(p.n / 14) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: easing }}
                    className="h-full rounded-full bg-[#D9A653]"
                    style={{ opacity: 0.5 + (p.n / 14) * 0.5 }}
                  />
                </div>
                <span className="w-10 text-[9px] font-bold text-gray-700 text-right">
                  {p.n} partos
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between text-[8px]">
            <span className="text-gray-400">Taxa de prenhez da estação</span>
            <span className="font-bold text-[#8B6A2F]">
              <CountUp value={87} suffix="%" duration={1.4} />
            </span>
          </div>
        </div>
      </div>
    </Janela>
  );
}
