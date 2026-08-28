"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

interface ContactModalContextValue {
  abrir: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue>({
  abrir: () => {},
});

/** Hook para abrir o modal de contato de qualquer CTA do site */
export function useContactModal() {
  return useContext(ContactModalContext);
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [aberto, setAberto] = useState(false);

  const abrir = useCallback(() => setAberto(true), []);
  const fechar = useCallback(() => setAberto(false), []);

  // Trava o scroll da página e fecha com ESC enquanto o modal está aberto
  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [aberto, fechar]);

  return (
    <ContactModalContext.Provider value={{ abrir }}>
      {children}

      <AnimatePresence>
        {aberto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            // Clicar em qualquer lugar fora do formulário fecha o modal
            onClick={fechar}
            className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-4 pt-5 sm:pt-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl my-0 sm:my-8 max-h-[calc(100dvh-2.5rem)] sm:max-h-[calc(100dvh-4rem)] overflow-y-auto bg-charcoal border border-ouro/20 rounded-3xl shadow-2xl shadow-black/60"
            >
              {/* Fechar */}
              <button
                onClick={fechar}
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-branco/50 hover:text-ouro hover:border-ouro/40 transition-all"
              >
                <X size={16} />
              </button>

              <div className="p-6 md:p-8">
                <div className="mb-6 pr-10">
                  <h3 className="font-bebas text-3xl md:text-4xl text-branco tracking-wider leading-none mb-2">
                    FALE COM UM <span className="text-gradient-ouro">CONSULTOR</span>
                  </h3>
                  <p className="text-branco/50 text-sm">
                    Preencha os dados e nosso time entra em contato com você.
                  </p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactModalContext.Provider>
  );
}
