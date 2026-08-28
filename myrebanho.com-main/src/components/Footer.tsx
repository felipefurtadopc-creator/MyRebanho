"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { footer } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";

const iconesSociais: Record<string, LucideIcon> = {
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
};

const colunas = [
  { titulo: "Produto", links: footer.colunas.produto },
  { titulo: "Empresa", links: footer.colunas.empresa },
  { titulo: "Suporte", links: footer.colunas.suporte },
  { titulo: "Legal", links: footer.colunas.legal },
].filter((coluna) => coluna.links.length > 0);

function FooterLink({ href, label }: { href: string; label: string }) {
  const { abrir } = useContactModal();
  const externo = href.startsWith("http");
  const classes =
    "text-sm text-branco/50 hover:text-ouro transition-colors";

  // "Contato" abre o modal de formulário (funciona em qualquer página)
  if (href === "#contato") {
    return (
      <button onClick={abrir} className={classes}>
        {label}
      </button>
    );
  }
  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal relative">
      {/* Borda dourada superior */}
      <div className="divider-ouro" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Grid superior */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Coluna da marca */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-myrebanho-white.png"
                alt="MyRebanho"
                width={178}
                height={100}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-branco/50 text-sm leading-relaxed mb-6">
              {footer.descricao}
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              {footer.socials.map(({ rede, href }) => {
                const Icon = iconesSociais[rede];
                return (
                  <a
                    key={rede}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={rede}
                    className="w-9 h-9 rounded-lg border border-ouro/20 flex items-center justify-center text-branco/50 hover:text-ouro hover:border-ouro/60 hover:bg-ouro/10 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colunas de links */}
          {colunas.map((coluna) => (
            <div key={coluna.titulo}>
              <h4 className="font-bebas text-xl text-ouro mb-4 tracking-wider">
                {coluna.titulo}
              </h4>
              <ul className="flex flex-col gap-2">
                {coluna.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divisor */}
        <div className="divider-ouro mb-8" />

        {/* Rodapé */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-branco/30">
          <p>
            © {new Date().getFullYear()} {footer.copyrightEmpresa}.
            Todos os direitos reservados.
          </p>
          <p>{footer.assinatura}</p>
        </div>
      </div>
    </footer>
  );
}
