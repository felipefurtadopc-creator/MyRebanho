"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

interface CountUpProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const format = (v: number) =>
      prefix +
      v.toLocaleString("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }) +
      suffix;

    const unsubscribe = motionValue.on("change", (v) => {
      if (ref.current) ref.current.textContent = format(v);
    });

    if (inView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
    return unsubscribe;
  }, [inView, value, decimals, prefix, suffix, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix +
        (0).toLocaleString("pt-BR", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }) +
        suffix}
    </span>
  );
}
