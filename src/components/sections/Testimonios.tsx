"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const testimonios = [
  {
    nombre: "María Fernanda R.",
    rol: "Cliente desde 2019 · Quito",
    iniciales: "MF",
    color: "#71BF44",
    quote:
      "Tuve un accidente vehicular un domingo a las 11 de la noche. Llamé al número de OIM pensando que iba a caer en un buzón. Me respondió Fernando en persona y a los 40 minutos tenía la grúa en mi puerta. Ese trato no se compra en internet.",
    rating: 5,
  },
  {
    nombre: "Carlos Andrade",
    rol: "Empresario · Guayaquil",
    iniciales: "CA",
    color: "#007991",
    quote:
      "Llevo cuatro años con OIM cubriendo la flota de mi empresa. Cuando tuvimos un siniestro grande con un camión, ellos pelearon con la aseguradora por mí. No tuve que mover un dedo. El reembolso llegó completo.",
    rating: 5,
  },
  {
    nombre: "Lucía Espinoza",
    rol: "Familia desde 2021 · Cuenca",
    iniciales: "LE",
    color: "#FFAB5E",
    quote:
      "Cuando mi mamá se enfermó, OIM nos guió en todo el proceso del seguro médico. No sabíamos dónde acudir, ni qué cubría. Mauricio nos llamó dos veces a la semana hasta que terminó la hospitalización. Eso es valor real.",
    rating: 5,
  },
];

export function Testimonios() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-oim-paper)]">
      <div className="oim-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="section-ordinal mb-3">03 / Testimonios</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-oim-ink)] leading-[1.05] mb-5">
            Lo que dicen
            <br />
            <span style={{ color: "var(--color-oim-teal)" }} className="italic">
              nuestros clientes
            </span>
          </h2>
          <p className="text-lg text-[var(--color-oim-ink)]/70 leading-relaxed">
            Tres historias reales de personas que pasaron por un siniestro y
            tuvieron a OIM al otro lado del teléfono.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 28 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="!pb-14"
        >
          {testimonios.map((t) => (
            <SwiperSlide key={t.nombre}>
              <div className="oim-card p-7 lg:p-8 h-full flex flex-col relative">
                <Quote
                  size={36}
                  className="absolute top-7 right-7 opacity-20"
                  color={t.color}
                />
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#FFAB5E"
                      stroke="#FFAB5E"
                    />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--color-oim-ink)]/85 italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 pt-5 border-t border-[var(--color-oim-line)] flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: t.color }}
                  >
                    {t.iniciales}
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-oim-ink)] text-sm">
                      {t.nombre}
                    </div>
                    <div className="text-xs text-[var(--color-oim-ink)]/60 mt-0.5">
                      {t.rol}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
