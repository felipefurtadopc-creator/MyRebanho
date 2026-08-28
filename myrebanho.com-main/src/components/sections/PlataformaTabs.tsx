"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Beef,
  CalendarClock,
  CheckCircle2,
  MonitorSmartphone,
  Satellite,
  Scale,
  ScanLine,
} from "lucide-react";
import { plataforma } from "@/content/site";
import CountUp from "@/components/ui/CountUp";

const easing = [0.22, 1, 0.36, 1] as const;

/* ============================================================
   ABA 1 — VISÃO GERAL (dashboard fiel ao produto, tema claro)
   ============================================================ */

function GraficoEvolucaoPeso() {
  const { pesos } = plataforma.dashboard;
  const W = 560;
  const H = 190;
  const PAD_X = 34;
  const PAD_Y = 18;
  const min = 300;
  const max = 440;

  const pts = pesos.map((p, i) => ({
    x: PAD_X + (i * (W - PAD_X * 2)) / (pesos.length - 1),
    y: PAD_Y + (H - PAD_Y * 2) * (1 - (p - min) / (max - min)),
  }));

  const linha = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${linha} L${pts[pts.length - 1].x},${H - PAD_Y} L${pts[0].x},${H - PAD_Y} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <linearGradient id="gradOuro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9A653" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D9A653" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Linhas de grade + eixo Y */}
      {[320, 360, 400].map((v) => {
        const y = PAD_Y + (H - PAD_Y * 2) * (1 - (v - min) / (max - min));
        return (
          <g key={v}>
            <line
              x1={PAD_X}
              x2={W - PAD_X}
              y1={y}
              y2={y}
              stroke="#1e1e1e"
              strokeOpacity="0.08"
              strokeDasharray="4 4"
            />
            <text
              x={PAD_X - 6}
              y={y + 3}
              textAnchor="end"
              fontSize="9"
              fill="#1e1e1e"
              fillOpacity="0.4"
            >
              {v}kg
            </text>
          </g>
        );
      })}

      {/* Área com gradiente dourado */}
      <motion.path
        d={area}
        fill="url(#gradOuro)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
      />

      {/* Linha desenhando-se */}
      <motion.path
        d={linha}
        fill="none"
        stroke="#D9A653"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Pontos medidos (vinho) */}
      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="4"
          fill="#9B3224"
          stroke="#fff"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.2, duration: 0.3 }}
        />
      ))}
    </svg>
  );
}

function DashboardSim() {
  const d = plataforma.dashboard;

  return (
    <div className="bg-[#F3F3F3] p-3 md:p-5 space-y-3 md:space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
        {d.kpis.map((kpi, i) => (
          <motion.div
            key={kpi.titulo}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: easing }}
            className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4"
          >
            <div className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wide mb-1">
              {kpi.titulo}
            </div>
            <div className="font-bold text-gray-800 text-base md:text-xl leading-none mb-1.5">
              <CountUp
                value={kpi.valor}
                decimals={kpi.decimais}
                prefix={kpi.prefixo}
                suffix={kpi.sufixo}
              />
            </div>
            <span
              className={`inline-block text-[9px] md:text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                kpi.positivo
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {kpi.variacao}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Gráfico + Próximas Ações */}
      <div className="grid lg:grid-cols-3 gap-2 md:gap-3">
        <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs md:text-sm font-bold text-gray-800">
              {d.graficoTitulo}
            </div>
            <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[#9B3224]" />
              Medido
            </div>
          </div>
          <GraficoEvolucaoPeso />
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4">
          <div className="text-xs md:text-sm font-bold text-gray-800 mb-2.5">
            {d.acoesTitulo}
          </div>
          <div className="space-y-2">
            {d.acoes.map((acao, i) => (
              <motion.div
                key={acao.titulo}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                className={`rounded-lg bg-gray-50 px-2.5 py-2 border-l-[3px] ${
                  acao.cor === "amarelo"
                    ? "border-amber-400"
                    : acao.cor === "azul"
                    ? "border-blue-400"
                    : "border-green-500"
                }`}
              >
                <div className="text-[10px] md:text-[11px] font-semibold text-gray-800 leading-tight">
                  {acao.titulo}
                </div>
                <div className="flex items-center gap-1 text-[9px] md:text-[10px] text-gray-400 mt-0.5">
                  <CalendarClock size={10} />
                  {acao.quando}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Atividades Recentes + Status do Rebanho */}
      <div className="grid lg:grid-cols-3 gap-2 md:gap-3">
        <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4">
          <div className="text-xs md:text-sm font-bold text-gray-800 mb-2.5">
            {d.atividadesTitulo}
          </div>
          <div className="space-y-1.5">
            {d.atividades.map((atv, i) => (
              <motion.div
                key={atv.detalhe}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.25, duration: 0.4 }}
                className="flex items-center gap-2 rounded-lg bg-gray-50 px-2.5 py-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9A653] shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] md:text-[11px] font-semibold text-gray-800">
                    {atv.tipo}
                  </span>
                  <span className="text-[10px] md:text-[11px] text-gray-500">
                    {" "}
                    · {atv.detalhe}
                  </span>
                </div>
                <span
                  className={`hidden sm:inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                    atv.status === "Aprovado"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {atv.status}
                </span>
                <span className="text-[9px] md:text-[10px] text-gray-400 shrink-0">
                  {atv.quando}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4">
          <div className="text-xs md:text-sm font-bold text-gray-800 mb-2.5">
            {d.statusTitulo}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {d.statusRebanho.map((s) => (
              <div
                key={s.label}
                className="rounded-lg bg-gray-50 px-2.5 py-2 text-center"
              >
                <div className="font-bold text-gray-800 text-sm md:text-lg leading-none">
                  <CountUp value={s.valor} />
                </div>
                <div className="text-[9px] md:text-[10px] text-gray-500 mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ABA 2 — MAPA POR SATÉLITE
   ============================================================ */

function SateliteSim() {
  const s = plataforma.satelite;

  return (
    <div className="bg-[#1a221a] p-3 md:p-5">
      {/* Cards de área */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-3">
        {s.cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: easing }}
            className="bg-white/[0.06] border border-white/10 rounded-xl px-3 py-2.5"
          >
            <div className="text-[9px] md:text-[10px] text-branco/50 uppercase tracking-wide">
              {card.label}
            </div>
            <div className="font-bebas text-lg md:text-2xl text-ouro tracking-wide leading-none mt-1">
              {card.valor}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mapa com piquetes */}
      <div className="relative rounded-xl overflow-hidden border border-white/10">
        <svg viewBox="0 0 560 260" className="w-full h-auto block">
          {/* Fundo do terreno */}
          <rect width="560" height="260" fill="#26301f" />
          <rect width="560" height="260" fill="url(#texturaPasto)" />
          <defs>
            <pattern
              id="texturaPasto"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="6" cy="8" r="1" fill="#3a4a2e" />
              <circle cx="20" cy="20" r="1.4" fill="#2e3b25" />
              <circle cx="14" cy="2" r="0.9" fill="#39482c" />
            </pattern>
          </defs>

          {/* Estrada */}
          <path
            d="M0,150 C120,140 220,170 320,155 C420,140 500,160 560,150"
            stroke="#4a4436"
            strokeWidth="10"
            fill="none"
            opacity="0.7"
          />

          {/* Piquete 14 — em uso */}
          <motion.polygon
            points="30,30 240,22 250,120 40,132"
            fill="#D9A653"
            fillOpacity="0.13"
            stroke="#D9A653"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          {/* Piquete 17 — descanso */}
          <motion.polygon
            points="270,20 530,28 522,118 262,112"
            fill="#ffffff"
            fillOpacity="0.04"
            stroke="#8a8a7a"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.6 }}
          />
          {/* Piquete 21 — em uso */}
          <motion.polygon
            points="60,175 300,168 310,245 72,250"
            fill="#9B3224"
            fillOpacity="0.16"
            stroke="#b85a48"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />

          {/* Pontos de animais pulsando */}
          {[
            [110, 70],
            [170, 92],
            [95, 105],
            [140, 210],
            [220, 200],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="#FBDE8A"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Labels dos piquetes */}
          <text x="52" y="58" fontSize="13" fill="#FBDE8A" fontWeight="700">
            Piquete 14
          </text>
          <text x="52" y="74" fontSize="10" fill="#ffffff" opacity="0.55">
            320 animais · Em uso
          </text>
          <text x="292" y="52" fontSize="13" fill="#c9c9b8" fontWeight="700">
            Piquete 17
          </text>
          <text x="292" y="68" fontSize="10" fill="#ffffff" opacity="0.45">
            Descanso · 21 dias
          </text>
          <text x="84" y="200" fontSize="13" fill="#f0b7a8" fontWeight="700">
            Piquete 21
          </text>
          <text x="84" y="216" fontSize="10" fill="#ffffff" opacity="0.55">
            275 animais · Em uso
          </text>
        </svg>

        {/* Selo satélite */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[10px] text-branco/70">
          <Satellite size={11} className="text-ouro" />
          Imagem de satélite
        </div>
      </div>

      <p className="text-branco/40 text-[10px] md:text-xs text-center mt-3">
        {s.legenda}
      </p>
    </div>
  );
}

/* ============================================================
   ABA 3 — NO CAMPO (tronco + bastão + balança)
   ============================================================ */

const iconesPassos = [Beef, ScanLine, Scale, MonitorSmartphone];

function CampoSim() {
  const c = plataforma.campo;
  // Começa já no primeiro passo (sem esperar um ciclo) para iniciar mais rápido
  const [passoAtivo, setPassoAtivo] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPassoAtivo((p) => (p + 1) % (c.passos.length + 1));
    }, 1200);
    return () => clearInterval(timer);
  }, [c.passos.length]);

  return (
    <div className="bg-[#171512] p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Passos do fluxo */}
        <div className="space-y-2.5">
          {c.passos.map((passo, i) => {
            const Icon = iconesPassos[i];
            const ativo = passoAtivo > i;
            const atual = passoAtivo === i + 1;
            return (
              <div
                key={passo.titulo}
                className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition-all duration-500 ${
                  ativo
                    ? "bg-ouro/10 border-ouro/40"
                    : "bg-white/[0.03] border-white/8"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ${
                    ativo
                      ? "bg-ouro/20 border border-ouro/50"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <Icon
                    size={17}
                    className={
                      ativo
                        ? "text-ouro transition-colors duration-500"
                        : "text-branco/30 transition-colors duration-500"
                    }
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-xs md:text-sm font-semibold transition-colors duration-500 ${
                      ativo ? "text-branco" : "text-branco/40"
                    }`}
                  >
                    {passo.titulo}
                  </div>
                  <div className="text-[10px] md:text-xs text-branco/35">
                    {passo.detalhe}
                  </div>
                </div>
                {ativo && !atual && (
                  <CheckCircle2 size={15} className="text-ouro/70 shrink-0" />
                )}
                {atual && (
                  <motion.span
                    className="w-2 h-2 rounded-full bg-ouro shrink-0"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Celular recebendo a leitura */}
        <div className="flex justify-center">
          <div className="w-52 bg-[#1a1a1a] rounded-[24px] border-2 border-white/10 shadow-2xl shadow-black/70 overflow-hidden">
            <div className="h-5 bg-[#111] flex items-center justify-center">
              <div className="w-14 h-2 rounded-full bg-[#242424]" />
            </div>
            <div className="bg-[#F3F3F3] p-3 min-h-[210px]">
              <div className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Nova pesagem
              </div>

              <AnimatePresence>
                {passoAtivo >= 2 && (
                  <motion.div
                    key="brinco"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm px-2.5 py-2 mb-2"
                  >
                    <div className="text-[8px] text-gray-400 uppercase">
                      Brinco eletrônico
                    </div>
                    <div className="text-[11px] font-bold text-gray-800 font-mono">
                      {c.leitura.brinco}
                    </div>
                    <div className="text-[8px] text-gray-400">
                      {c.leitura.lote}
                    </div>
                  </motion.div>
                )}

                {passoAtivo >= 3 && (
                  <motion.div
                    key="peso"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm px-2.5 py-2 mb-2"
                  >
                    <div className="text-[8px] text-gray-400 uppercase">
                      Peso na balança
                    </div>
                    <div className="text-lg font-bold text-[#9B3224] leading-none">
                      {c.leitura.peso}
                    </div>
                  </motion.div>
                )}

                {passoAtivo >= 4 && (
                  <motion.div
                    key="gmd"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#D9A653]/15 rounded-lg border border-[#D9A653]/40 px-2.5 py-2"
                  >
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-[#b8883a]" />
                      <span className="text-[10px] font-bold text-gray-800">
                        {c.leitura.gmd}
                      </span>
                    </div>
                    <div className="text-[8px] text-gray-500 mt-0.5">
                      Registrado, sincroniza ao voltar o sinal
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <p className="text-branco/40 text-[10px] md:text-xs text-center mt-5">
        {c.legenda}
      </p>
    </div>
  );
}

/* ============================================================
   VISUALIZADOR — barra de abas + janela do sistema + checklist
   (usado dentro do Hero, na primeira dobra)
   ============================================================ */

export function PlataformaViewer() {
  const [aba, setAba] = useState(plataforma.abas[0].id);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Barra de abas */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10">
          {plataforma.abas.map((a) => (
            <button
              key={a.id}
              onClick={() => setAba(a.id)}
              className={`relative px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-colors duration-300 ${
                aba === a.id
                  ? "text-charcoal"
                  : "text-branco/50 hover:text-branco"
              }`}
            >
              {aba === a.id && (
                <motion.span
                  layoutId="abaAtiva"
                  className="absolute inset-0 rounded-xl bg-ouro shadow-ouro"
                  transition={{ duration: 0.35, ease: easing }}
                />
              )}
              <span className="relative z-10">{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Janela do sistema */}
      <div className="rounded-2xl border border-white/10 shadow-2xl shadow-black/60 overflow-hidden">
        {/* Barra de navegador */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-4 bg-[#2a2a2a] rounded-md px-3 py-1 text-xs text-branco/30 text-center">
            app.myrebanho.com
          </div>
        </div>

        {/* Painel da aba ativa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={aba}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: easing }}
          >
            {aba === "dashboard" && <DashboardSim />}
            {aba === "satelite" && <SateliteSim />}
            {aba === "campo" && <CampoSim />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Checklist de recursos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 mt-10 max-w-3xl mx-auto">
        {plataforma.checklist.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-sm text-branco/60"
          >
            <CheckCircle2 size={14} className="text-ouro flex-shrink-0" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
