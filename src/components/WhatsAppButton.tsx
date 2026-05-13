"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} aria-hidden="true" {...props}>
    <path d="M20.5 3.5A11.5 11.5 0 003 19.04L1.5 24l5.16-1.36A11.49 11.49 0 0020.5 3.5zm-8.49 18.06a9.49 9.49 0 01-4.84-1.32l-.35-.21-3.06.81.82-2.98-.23-.36a9.5 9.5 0 1115.66 4.06zm5.21-7.12c-.29-.14-1.7-.84-1.96-.94-.26-.1-.46-.14-.65.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.62.07a7.79 7.79 0 01-3.83-3.35c-.29-.5.29-.46.83-1.54.09-.19.04-.34-.02-.48-.07-.14-.65-1.56-.89-2.13-.23-.55-.47-.48-.65-.49h-.55a1.06 1.06 0 00-.77.36 3.22 3.22 0 00-1 2.4c0 1.41 1.03 2.77 1.18 2.96.14.19 2.04 3.11 4.94 4.36 2.9 1.25 2.9.84 3.43.79.52-.05 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
  </svg>
);

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Tooltip / mini-card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[280px] bg-white rounded-2xl shadow-[0_18px_60px_-12px_rgba(15,30,46,0.25)] border border-[var(--color-oim-line-strong)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 bg-[var(--color-oim-paper-warm)] border-b border-[var(--color-oim-line)]">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-oim-green)] to-[var(--color-oim-orange)] flex items-center justify-center font-display font-semibold text-[16px] text-white">
                M
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-display font-semibold text-[15px] text-[var(--color-oim-ink)]">
                  Margarita · OIM
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-oim-green)]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-oim-ink-soft)]">
                    En línea · 24/7
                  </span>
                </div>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="text-[14px] leading-[1.55] text-[var(--color-oim-ink-soft)]">
                Hola, soy Margarita. ¿Necesitas cotizar un seguro o consultar
                un siniestro? Contestamos al primer tono.
              </p>
              <a
                href="https://wa.me/593997866343?text=Hola%20Margarita%2C%20quiero%20conversar"
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-[13.5px] rounded-full transition-colors"
              >
                <WhatsAppIcon width={14} height={14} />
                Abrir conversación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante principal */}
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.55)] flex items-center justify-center hover:bg-[#1da851] hover:scale-105 transition-all"
      >
        <WhatsAppIcon />
        {/* Pulso sutil */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"
          style={{ animationDuration: "2.4s" }}
        />
      </motion.button>
    </>
  );
}
