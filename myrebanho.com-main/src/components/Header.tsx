"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { header } from "@/content/site";
import { useContactModal } from "@/components/ui/ContactModal";

const { navLinks } = header;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { abrir } = useContactModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logo-myrebanho-white.png"
              alt="MyRebanho"
              width={142}
              height={80}
              priority
              className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-branco/80 hover:text-ouro text-sm font-medium tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ouro group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={header.ctaSecundario.href}
              className="px-4 py-2 text-sm font-semibold text-ouro border border-ouro/50 rounded-lg hover:bg-ouro/10 hover:border-ouro transition-all duration-300"
            >
              {header.ctaSecundario.label}
            </Link>
            <button
              onClick={abrir}
              className="px-4 py-2 text-sm font-semibold text-branco bg-bordo rounded-lg hover:bg-bordo-dark transition-all duration-300 shadow-bordo/30 shadow-md hover:shadow-bordo"
            >
              {header.ctaPrimario.label}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-branco hover:text-ouro transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass border-t border-ouro/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-branco/80 hover:text-ouro text-base font-medium py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href={header.ctaSecundario.href}
                  className="py-3 text-center text-sm font-semibold text-ouro border border-ouro/50 rounded-lg hover:bg-ouro/10 transition-all"
                >
                  {header.ctaSecundario.label}
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    abrir();
                  }}
                  className="py-3 text-center text-sm font-semibold text-branco bg-bordo rounded-lg hover:bg-bordo-dark transition-all"
                >
                  {header.ctaPrimario.label}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
