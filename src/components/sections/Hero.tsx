"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #71BF44 0%, #5A9F44 55%, #4A8F3C 100%)",
      }}
    >
      {/* Blob naranja decorativo (Editorial Trust) */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-32 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, #FFAB5E 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at center, #FBF8F8 0%, transparent 70%)",
        }}
      />

      {/* Grain texture muy sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="oim-container relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Texto */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0.4, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-xs uppercase tracking-[3px] font-semibold text-white/95 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-oim-orange)]" />
            Agencia Asesora · Ecuador
          </motion.div>

          <motion.h1
            initial={{ opacity: 0.6, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-white font-bold leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
            }}
          >
            Aseguramos
            <br />
            <span className="italic font-bold">Tu Bienestar</span>
            <span style={{ color: "#FFAB5E" }}>!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0.6, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-white/92 leading-relaxed max-w-xl"
          >
            OIM Seguros es tu Agencia Asesora Productora de Seguros, creada
            para orientar la protección del patrimonio Familiar y Empresarial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0.7, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#contacto" className="btn-primary">
              Contacta un asesor
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold tracking-wider text-sm uppercase border-2 border-white/40 rounded-full hover:bg-white/10 transition-colors"
            >
              Ver servicios
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-xl"
          >
            {[
              { icon: ShieldCheck, label: "+200 pólizas activas" },
              { icon: Users, label: "+20 años de experiencia" },
              { icon: Clock, label: "Atención 24/7" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 text-white/90"
              >
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <b.icon size={18} />
                </div>
                <span className="text-xs sm:text-sm font-medium leading-tight">
                  {b.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Card visual: badge "siniestros 24/7" */}
        <motion.div
          initial={{ opacity: 0.6, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative">
            {/* Card principal */}
            <div className="bg-white rounded-[28px] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <div className="section-ordinal mb-3">El diferencial</div>
              <h3 className="text-2xl md:text-3xl text-[var(--color-oim-ink)] leading-tight">
                <span style={{ color: "var(--color-oim-teal)" }}>Atención inmediata</span>
                <br />
                ante un siniestro
              </h3>
              <p className="mt-4 text-[var(--color-oim-ink)]/75 text-sm leading-relaxed">
                Cuando llamas a OIM no esperas en una centralita. Te responde
                un asesor real, las 24 horas, los 365 días. Esa es la diferencia
                entre un broker familiar y una aseguradora gigante.
              </p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-[var(--color-oim-line)]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-oim-orange)] to-[var(--color-oim-orange-dark)] flex items-center justify-center text-white">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-oim-ink)]/60 font-semibold">
                    Llámanos ahora
                  </div>
                  <div className="text-lg font-bold text-[var(--color-oim-ink)]">
                    +593 99 000 0000
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 180 }}
              className="absolute -top-4 -right-4 bg-[var(--color-oim-orange)] text-white rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(255,171,94,0.5)]"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-90">
                Cotización
              </div>
              <div className="text-base font-bold">en 24h</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
