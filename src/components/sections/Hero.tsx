"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--color-oim-paper)] text-[var(--color-oim-ink)] atmosphere-grain"
    >
      {/* ────── Atmósfera: glow naranja esquina superior derecha + verde sutil esquina inferior ────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-oim-orange) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-oim-green) 0%, transparent 70%)",
        }}
      />

      {/* ────── Bloque principal del hero ────── */}
      <div className="oim-container relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-oim-ink-soft)]"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-oim-orange-deep)] mr-2 align-middle" />
          Broker de Seguros · Quito · Desde 1995
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline mt-7 max-w-[15ch] text-balance"
        >
          ¿Tu seguro contesta a las{" "}
          <span className="hero-headline-accent">3 a.m.</span>?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="mt-8 max-w-[56ch] text-lg leading-[1.65] text-[var(--color-oim-ink-soft)] md:text-xl md:leading-[1.55] text-pretty"
        >
          Cuando algo pasa en la noche, OIM responde. Margarita atiende al primer
          tono, te conecta con tu aseguradora, y a las 8 a.m. tu asesor te llama
          personalmente.{" "}
          <span className="text-[var(--color-oim-ink)] font-medium">
            Esa es la diferencia.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <a href="#contacto" className="btn-primary group">
            <span>Pídeme tu cotización</span>
            <ArrowRight
              size={18}
              strokeWidth={2.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://wa.me/593997866343?text=Hola%20OIM%2C%20vi%20la%20web%20y%20quiero%20conversar"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-5 py-3 text-[var(--color-oim-ink)] font-medium hover:text-[var(--color-oim-orange-deep)] transition-colors"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-oim-green-soft)] text-[var(--color-oim-green-deep)] group-hover:bg-[var(--color-oim-green)] transition-colors">
              <MessageCircle size={16} strokeWidth={2.2} />
            </span>
            <span className="text-[15px]">Conversa con Margarita</span>
          </a>
        </motion.div>

        {/* Línea de prueba social — minimalista, NO compite con CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 lg:mt-24 pt-7 border-t border-[var(--color-oim-line)]"
        >
          <div className="grid grid-cols-3 gap-6 max-w-3xl">
            <div>
              <div className="counter-num text-3xl md:text-4xl">200+</div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-oim-ink-soft)] mt-2 leading-snug">
                Pólizas activas
              </div>
            </div>
            <div>
              <div className="counter-num text-3xl md:text-4xl">30</div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-oim-ink-soft)] mt-2 leading-snug">
                Años en Quito
              </div>
            </div>
            <div>
              <div className="counter-num text-3xl md:text-4xl">24/7</div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-oim-ink-soft)] mt-2 leading-snug">
                Atención siniestros
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
