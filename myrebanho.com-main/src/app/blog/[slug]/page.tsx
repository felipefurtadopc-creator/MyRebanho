import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blog } from "@/content/site";
import { artigos, getArtigo } from "@/content/artigos";
import ArtigoCTA from "@/components/blog/ArtigoCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return artigos.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blog.posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artigo | MyRebanho" };
  return {
    title: `${post.title} | Blog MyRebanho`,
    description: post.excerpt,
  };
}

export default function ArtigoPage({ params }: PageProps) {
  const post = blog.posts.find((p) => p.slug === params.slug);
  const artigo = getArtigo(params.slug);
  if (!post || !artigo) notFound();

  const relacionados = blog.posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Capa */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-branco/40 hover:text-ouro text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={15} />
            Voltar para o blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className={`tag border text-xs ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-branco/30 text-xs">
              <Calendar size={12} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-branco/30 text-xs">
              <Clock size={12} />
              {post.readTime} de leitura
            </span>
          </div>

          <h1 className="font-bebas text-4xl md:text-6xl text-branco tracking-wider leading-[1.05] mb-6">
            {post.title}
          </h1>

          <p className="text-branco/70 text-lg md:text-xl leading-relaxed font-light">
            {artigo.intro}
          </p>
        </div>
      </section>

      {/* Corpo do artigo */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divider-ouro mb-12" />

          <div className="space-y-12">
            {artigo.secoes.map((secao) => (
              <div key={secao.titulo}>
                <h2 className="font-bebas text-2xl md:text-3xl text-ouro tracking-wider mb-4">
                  {secao.titulo}
                </h2>

                {secao.paragrafos.map((p, i) => (
                  <p
                    key={i}
                    className="text-branco/65 text-base leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}

                {secao.lista && (
                  <ul className="space-y-2.5 mb-4">
                    {secao.lista.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-ouro flex-shrink-0 mt-2" />
                        <span className="text-branco/65 text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {secao.tabela && (
                  <div className="overflow-x-auto mb-4 rounded-xl border border-white/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-ouro/10">
                          {secao.tabela.colunas.map((c) => (
                            <th
                              key={c}
                              className="text-left px-4 py-3 text-ouro font-semibold text-xs uppercase tracking-wider"
                            >
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {secao.tabela.linhas.map((linha, i) => (
                          <tr
                            key={i}
                            className="border-t border-white/5 hover:bg-white/[0.02]"
                          >
                            {linha.map((cel, j) => (
                              <td
                                key={j}
                                className={`px-4 py-3 ${
                                  j === 0
                                    ? "text-branco/70"
                                    : "text-branco/55"
                                }`}
                              >
                                {cel}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {secao.destaque && (
                  <div className="border-l-2 border-ouro bg-ouro/[0.06] rounded-r-xl px-5 py-4 my-6">
                    <p className="text-ouro/90 text-base font-medium leading-relaxed">
                      {secao.destaque}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fontes */}
          <div className="mt-14 pt-6 border-t border-white/5">
            <div className="text-branco/30 text-xs uppercase tracking-widest mb-3">
              Referências
            </div>
            <ul className="space-y-1.5">
              {artigo.fontes.map((f) => (
                <li key={f} className="text-branco/40 text-sm leading-relaxed">
                  · {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-14">
            <ArtigoCTA {...artigo.cta} />
          </div>
        </div>
      </section>

      {/* Artigos relacionados */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bebas text-3xl text-branco tracking-wider mb-8">
            CONTINUE LENDO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relacionados.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex gap-5 bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-ouro/30 transition-all duration-300 p-4"
              >
                <div
                  className="w-28 h-24 rounded-xl bg-cover bg-center flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${rel.image}')` }}
                />
                <div className="min-w-0">
                  <span className={`tag border text-[10px] ${rel.categoryColor} mb-2`}>
                    {rel.category}
                  </span>
                  <h3 className="font-semibold text-branco text-sm leading-snug line-clamp-2 group-hover:text-ouro transition-colors">
                    {rel.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-ouro/50 group-hover:text-ouro text-xs mt-2 transition-colors">
                    Ler artigo <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
