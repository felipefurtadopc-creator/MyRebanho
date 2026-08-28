"use client";

import { useEffect, useRef } from "react";

/**
 * Luz dourada sutil que segue o cursor por toda a página.
 * Usa mix-blend-mode: screen para "iluminar" o fundo escuro
 * sem interferir nos cliques (pointer-events: none).
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Sem efeito em telas de toque
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      // Interpolação para o movimento ficar suave
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[60] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle at center, rgba(217,166,83,0.10) 0%, rgba(217,166,83,0.04) 35%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
