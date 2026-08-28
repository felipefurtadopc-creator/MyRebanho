"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { captureUtms, getUtms } from "@/lib/utm";
import { ctaFinal } from "@/content/site";

function SelectField({
  label,
  name,
  value,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-branco/60 text-xs font-semibold uppercase tracking-widest">
        {label} *
      </label>
      <div className="relative">
        <select
          name={name}
          required
          value={value}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-branco text-sm focus:border-ouro focus:bg-white/[0.07] transition-all outline-none appearance-none cursor-pointer"
        >
          <option value="" className="bg-charcoal text-branco/40">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-charcoal text-branco">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-branco/30 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({
    firstname: "",
    telefone: "",
    email: "",
    tamanhoRebanho: "",
    tipoOperacao: "",
    comoConheceu: "",
    consentimento: false,
    site: "", // honeypot anti-spam (fica invisível)
  });

  // Captura UTMs da URL na montagem e persiste na sessão
  useEffect(() => {
    captureUtms();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "telefone") {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      let formatted = digits;
      if (digits.length > 2)
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
      if (digits.length > 7)
        formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
      setForm((prev) => ({ ...prev, telefone: formatted }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: bots que preenchem o campo oculto são silenciosamente ignorados
    if (form.site) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    setErro("");

    try {
      const utms = getUtms();

      console.log("[lead] Enviando lead:", {
        nome: form.firstname.trim(),
        email_profissional: form.email.toLowerCase(),
        whatsapp: form.telefone,
        tamanho_rebanho: form.tamanhoRebanho,
        tipo_operacao: form.tipoOperacao,
        como_conheceu: form.comoConheceu,
        consentimento: true,
        fonte: "landing_modal",
        pagina_origem:
          typeof window !== "undefined" ? window.location.pathname : "/",
        criado_em: Date.now(),
        ...utms,
      });

      // 1. Persistir no Firestore
      await addDoc(
        collection(
          db,
          process.env.NEXT_PUBLIC_FIRESTORE_LEADS_COLLECTION ?? "leads_site"
        ),
        {
          nome: form.firstname.trim(),
          email_profissional: form.email.toLowerCase(),
          status: "novo",
          whatsapp: form.telefone,
          tamanho_rebanho: form.tamanhoRebanho,
          tipo_operacao: form.tipoOperacao,
          como_conheceu: form.comoConheceu,
          consentimento: true,
          fonte: "landing_modal",
          pagina_origem:
            typeof window !== "undefined" ? window.location.pathname : "/",
          criado_em: serverTimestamp(),
          // UTMs capturados na chegada ao site (apenas os presentes)
          ...utms,
        }
      );

      // 2. Enviar ao HubSpot via Forms Submission API (fire-and-forget)
      // Só executa quando NEXT_PUBLIC_HUBSPOT_PORTAL_ID e NEXT_PUBLIC_HUBSPOT_FORM_GUID estiverem configurados
      const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
      const formGuid = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;
      if (portalId && formGuid) {
        const utmFields = Object.entries(utms).map(([name, value]) => ({
          name,
          value: value ?? "",
        }));
        fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields: [
                { name: "email", value: form.email.toLowerCase() },
                { name: "firstname", value: form.firstname },
                { name: "phone", value: form.telefone },
                { name: "tamanho_rebanho", value: form.tamanhoRebanho },
                { name: "tipo_operacao", value: form.tipoOperacao },
                { name: "como_conheceu", value: form.comoConheceu },
                ...utmFields,
              ],
              context: {
                pageUri: window.location.href,
                pageName: document.title,
              },
            }),
          }
        ).catch((err) => console.error("[lead] HubSpot Forms:", err));
      }

      setSubmitted(true);
    } catch (err) {
      console.error("[lead] erro ao salvar:", err);
      setErro("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 rounded-2xl bg-white/[0.03] border border-ouro/20"
      >
        <div className="w-20 h-20 rounded-full bg-ouro/10 border-2 border-ouro flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={36} className="text-ouro" />
        </div>
        <h3 className="font-bebas text-4xl text-branco tracking-wider mb-3">
          {ctaFinal.sucessoTitulo}
        </h3>
        <p className="text-branco/60 text-base">
          {ctaFinal.sucessoTexto}{" "}
          <span className="text-ouro font-semibold">
            {ctaFinal.sucessoDestaque}
          </span>
          .
          <br />
          {ctaFinal.sucessoRodape}
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:p-8"
    >
      {/* Honeypot: humanos não veem nem preenchem este campo */}
      <input
        type="text"
        name="site"
        value={form.site}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px opacity-0"
      />

      <div className="grid md:grid-cols-2 gap-5 mb-5">
        {/* Nome */}
        <div className="flex flex-col gap-2">
          <label className="text-branco/60 text-xs font-semibold uppercase tracking-widest">
            Seu nome *
          </label>
          <input
            type="text"
            name="firstname"
            required
            value={form.firstname}
            onChange={handleChange}
            placeholder="João da Silva"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-branco text-sm placeholder-branco/20 focus:border-ouro focus:bg-white/[0.07] transition-all outline-none"
          />
        </div>

        {/* WhatsApp / Telefone */}
        <div className="flex flex-col gap-2">
          <label className="text-branco/60 text-xs font-semibold uppercase tracking-widest">
            WhatsApp / Telefone *
          </label>
          <input
            type="tel"
            name="telefone"
            required
            value={form.telefone}
            onChange={handleChange}
            placeholder="(48) 99999-9999"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-branco text-sm placeholder-branco/20 focus:border-ouro focus:bg-white/[0.07] transition-all outline-none"
          />
        </div>

        {/* E-mail */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-branco/60 text-xs font-semibold uppercase tracking-widest">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="voce@fazenda.com.br"
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-branco text-sm placeholder-branco/20 focus:border-ouro focus:bg-white/[0.07] transition-all outline-none"
          />
        </div>

        {/* Tamanho do rebanho */}
        <SelectField
          label="Tamanho do rebanho"
          name="tamanhoRebanho"
          value={form.tamanhoRebanho}
          placeholder="Selecione o tamanho"
          options={ctaFinal.tamanhoRebanhoOpcoes}
          onChange={handleChange}
        />

        {/* Tipo de operação */}
        <SelectField
          label="Tipo de operação"
          name="tipoOperacao"
          value={form.tipoOperacao}
          placeholder="Selecione o tipo"
          options={ctaFinal.tipoOperacaoOpcoes}
          onChange={handleChange}
        />

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-branco/60 text-xs font-semibold uppercase tracking-widest">
            Como conheceu a MyRebanho? *
          </label>
          <input
            type="text"
            name="comoConheceu"
            required
            maxLength={300}
            value={form.comoConheceu}
            onChange={handleChange}
            placeholder="Ex.: indicação, Google, Instagram, evento..."
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-branco text-sm placeholder-branco/20 focus:border-ouro focus:bg-white/[0.07] transition-all outline-none"
          />
        </div>
      </div>

      {/* Consentimento */}
      <label className="flex items-start gap-3 mb-6 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={form.consentimento}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, consentimento: e.target.checked }))
          }
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#D9A653] cursor-pointer"
        />
        <span className="text-branco/50 text-xs leading-relaxed group-hover:text-branco/70 transition-colors">
          {ctaFinal.consentimentoAntes}
          <Link
            href="/privacidade"
            target="_blank"
            className="text-ouro underline hover:text-ouro-light"
          >
            {ctaFinal.consentimentoLink}
          </Link>
          {ctaFinal.consentimentoDepois}
        </span>
      </label>

      {/* Mensagem de erro */}
      {erro && (
        <div className="mb-4 rounded-xl border border-bordo/40 bg-bordo/10 px-4 py-3 text-bordo-light text-sm">
          {erro}
        </div>
      )}

      {/* Enviar */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-3 py-4 bg-bordo hover:bg-bordo-dark disabled:opacity-60 disabled:cursor-wait text-branco font-semibold rounded-xl transition-all duration-300 hover:shadow-bordo text-sm"
      >
        {loading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-branco/30 border-t-branco rounded-full"
            />
            {ctaFinal.botaoEnviando}
          </>
        ) : (
          <>
            <Send size={18} />
            {ctaFinal.botaoLabel}
          </>
        )}
      </button>

      <p className="text-center text-branco/20 text-xs mt-4">
        {ctaFinal.notaForm}
      </p>
    </form>
  );
}
