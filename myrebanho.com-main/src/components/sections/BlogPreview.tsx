"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { blog } from "@/content/site";

export default function BlogPreview() {
  // A home mostra os 3 primeiros posts
  const posts = blog.posts.slice(0, 3);

  return (
    <section className="relative bg-charcoal py-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-4">
              {blog.tag}
            </span>
            <h2 className="font-bebas text-5xl md:text-6xl text-branco tracking-wider leading-none">
              {blog.tituloAntes}
              <span className="text-gradient-ouro">{blog.tituloDestaque}</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-ouro font-semibold hover:gap-3 transition-all duration-300 text-sm flex-shrink-0"
          >
            {blog.verTodos}
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-ouro/30 transition-all duration-300 hover:shadow-ouro cursor-pointer"
            >
              {/* Imagem */}
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />

                  {/* Categoria */}
                  <div className="absolute top-4 left-4">
                    <span className={`tag border text-xs ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Conteúdo */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-branco/30 text-xs mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime} de leitura
                  </span>
                </div>

                {/* Título */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-semibold text-branco text-base leading-snug mb-3 group-hover:text-ouro transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Resumo */}
                <p className="text-branco/40 text-sm leading-relaxed line-clamp-2 mb-5">
                  {post.excerpt}
                </p>

                {/* Ler mais */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-2 text-ouro/60 group-hover:text-ouro text-sm font-medium transition-all duration-300"
                >
                  Ler artigo
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
