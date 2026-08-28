"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blog } from "@/content/site";

export default function BlogPage() {
  const featuredPost = blog.posts.find((p) => p.featured);
  const regularPosts = blog.posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block tag bg-ouro/10 text-ouro border border-ouro/20 mb-6">
              {blog.tag}
            </span>
            <h1 className="font-bebas text-6xl md:text-8xl text-branco tracking-wider leading-none mb-6">
              {blog.paginaTituloLinha1}
              <br />
              <span className="text-gradient-ouro">
                {blog.paginaTituloDestaque}
              </span>
            </h1>
            <p className="text-branco/60 text-xl max-w-2xl mx-auto">
              {blog.paginaDescricao}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros de categoria */}
      <section className="sticky top-20 z-40 bg-charcoal/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {blog.categorias.map((cat, i) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  i === 0
                    ? "bg-ouro text-charcoal"
                    : "text-branco/50 border border-white/10 hover:border-ouro/30 hover:text-ouro"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Post em destaque */}
      {featuredPost && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="group grid md:grid-cols-2 gap-8 bg-white/[0.03] border border-white/5 rounded-3xl overflow-hidden hover:border-ouro/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden min-h-64">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${featuredPost.image}')`,
                    minHeight: "300px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="tag bg-ouro text-charcoal font-bold text-xs border-0">
                    Em destaque
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`tag border text-xs ${featuredPost.categoryColor}`}
                  >
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="font-bebas text-3xl md:text-4xl text-branco tracking-wider leading-tight mb-4 group-hover:text-ouro transition-colors duration-300">
                  {featuredPost.title}
                </h2>

                <p className="text-branco/50 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-branco/30 text-xs">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {featuredPost.readTime} de leitura
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="flex items-center gap-2 text-ouro font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Ler artigo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Grid de posts */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden hover:border-ouro/20 transition-all duration-300 hover:shadow-ouro flex flex-col"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden h-48"
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`tag border text-xs ${post.categoryColor}`}>
                      {post.category}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-semibold text-branco text-base leading-snug mb-3 group-hover:text-ouro transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-branco/40 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <div className="flex items-center gap-3 text-branco/25 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-ouro/50 group-hover:text-ouro text-xs font-medium flex items-center gap-1 transition-colors"
                    >
                      Ler
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
