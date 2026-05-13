"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)]"
    >
      {/* ────── Atmósfera: glow ember en esquina superior derecha + noise sutil ────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full opacity-[0.22] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-ember) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[380px] w-[380px] rounded-full opacity-[0.08] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-moss) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ────── Top-bar: marca izquierda · teléfono real derecha ────── */}
      <div className="relative z-10 border-b border-[var(--color-line)]">
        <div className="oim-container flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--color-ember)" }}
              aria-hidden="true"
            />
            <span className="font-display text-base font-semibold tracking-tight">
              OIM Seguros
            </span>
            <span className="hidden text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-ink-soft)] sm:inline">
              · Quito, Ecuador
            </span>
          </div>
          <a
            href="tel:+593997866343"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-ember)]"
          >
            <Phone
              size={15}
              className="text-[var(--color-ember)]"
              strokeWidth={2.4}
            />
            <span className="font-mono tabular-nums">099 786 6343</span>
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-ink-soft)] group-hover:text-[var(--color-ember)]">
              · 24/7
            </span>
          </a>
        </div>
      </div>

      {/* ────── Bloque principal del hero ────── */}
      <div className="oim-container relative z-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-ink-soft)]"
        >
          Agencia Asesora · Desde 1995
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline mt-7 max-w-[14ch] font-display text-[var(--color-ink)]"
        >
          ¿Tu seguro contesta a las{" "}
          <span className="hero-headline-ember">3 a.m.</span>?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="mt-8 max-w-[56ch] text-lg leading-[1.65] text-[var(--color-ink-soft)] md:text-xl md:leading-[1.6]"
        >
          Cuando algo pasa en la noche, OIM responde. Margarita atiende al
          primer tono, te conecta con tu aseguradora, y a las 8 a.m. tu asesor
          te llama personalmente. <span className="text-[var(--color-ink)] font-medium">Esa es la diferencia.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34, ease: "easeOut" }}
          className="mt-12 flex flex-col items-start gap-4"
        >
          <a
            href="#contacto"
            className="hero-cta group inline-flex items-center gap-3"
          >
            <span>Conversa con Margarita ahora</span>
            <ArrowRight
              size={18}
              strokeWidth={2.4}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#como-trabajamos"
            className="hero-link inline-flex items-center gap-2 text-sm"
          >
            <span>Ver cómo trabajamos</span>
            <span aria-hidden="true">↓</span>
          </a>
        </motion.div>

        {/* Línea de prueba social — minimalista, monospace, NO compite con CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-20 border-t border-[var(--color-line)] pt-6"
        >
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]">
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-ember)]">◉</span> 200+ pólizas
              activas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-ember)]">◉</span> 30 años en
              Quito
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[var(--color-ember)]">◉</span> Atendemos
              todo Ecuador
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
