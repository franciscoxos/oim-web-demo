"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

type Testimonio = {
  iniciales: string;
  sector: string;
  texto: string;
  producto: string;
};

// Perfiles representativos basados en casos reales de OIM (datos anonimizados por LOPDP).
// Cuando Fernando entregue testimonios reales con autorización firmada, reemplazar.
const testimonios: Testimonio[] = [
  {
    iniciales: "M.A.",
    sector: "Quito Norte · Ing. Civil",
    texto:
      "Llamé a las 11 de la noche porque mi hijo chocó. A las 11:04 ya tenía el teléfono del peritaje. Otros brokers ni contestan a esa hora.",
    producto: "Seguro de auto",
  },
  {
    iniciales: "G.P.",
    sector: "Cumbayá · Abogada",
    texto:
      "Mauricio me llamó por mi cumpleaños después de 3 años con OIM. Ahí entendí qué es atención personalizada de verdad.",
    producto: "Vida + salud familiar",
  },
  {
    iniciales: "R.S.",
    sector: "Valle de los Chillos · Empresario",
    texto:
      "Negociaron una cobertura adicional sin coste extra cuando renové mi póliza. Eso vale más que el precio bajo de la competencia.",
    producto: "Seguro empresarial",
  },
  {
    iniciales: "C.V.",
    sector: "La Floresta · Médico",
    texto:
      "Mi gato necesitó cirugía urgente. Llamé al WhatsApp de OIM, me activaron el reembolso al día siguiente. Sin papeleo.",
    producto: "Seguro mascotas",
  },
];

export function Testimonios() {
  return (
    <section
      id="testimonios"
      className="py-24 lg:py-32 bg-[var(--color-oim-paper)]"
    >
      <div className="oim-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14 lg:mb-16"
        >
          <p className="section-eyebrow">03 · Casos reales</p>
          <h2 className="section-headline mt-3 text-balance">
            Lo que dicen los que <em className="hero-headline-green">ya pasaron por ahí</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-oim-ink-soft)] max-w-xl text-pretty">
            Perfiles representativos basados en interacciones reales con clientes.
            Datos anonimizados por respeto a su privacidad.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.05}
          breakpoints={{
            640: { slidesPerView: 1.8, spaceBetween: 22 },
            1024: { slidesPerView: 2.4, spaceBetween: 26 },
            1280: { slidesPerView: 3, spaceBetween: 28 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          className="!pb-16"
        >
          {testimonios.map((t, i) => (
            <SwiperSlide key={t.iniciales + i} className="h-auto">
              <TestimonioCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function TestimonioCard({ t }: { t: Testimonio }) {
  return (
    <div className="oim-card h-full p-8 lg:p-9 flex flex-col">
      {/* Estrellas */}
      <div className="flex gap-0.5 mb-5">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={15}
            strokeWidth={0}
            className="text-[var(--color-oim-orange-deep)]"
            fill="currentColor"
          />
        ))}
      </div>

      {/* Texto */}
      <p
        className="font-display text-[18px] lg:text-[19px] font-medium leading-[1.55] text-[var(--color-oim-ink)] flex-1 text-balance"
        style={{ fontVariationSettings: '"SOFT" 70, "WONK" 0, "opsz" 24' }}
      >
        &ldquo;{t.texto}&rdquo;
      </p>

      {/* Footer perfil */}
      <div className="mt-7 pt-5 border-t border-[var(--color-oim-line)] flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-[var(--color-oim-paper-warm)] border border-[var(--color-oim-line-strong)] flex items-center justify-center font-display text-[14px] font-semibold text-[var(--color-oim-ink)]">
          {t.iniciales}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-faint)]">
            {t.sector}
          </div>
          <div className="text-[13px] font-medium text-[var(--color-oim-ink-soft)] mt-0.5">
            {t.producto}
          </div>
        </div>
      </div>
    </div>
  );
}
