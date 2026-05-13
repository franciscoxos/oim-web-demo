"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Car,
  Bike,
  HeartPulse,
  Shield,
  PawPrint,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

type Servicio = {
  icon: LucideIcon;
  titulo: string;
  resumen: string;
  detalle: string;
  destacado?: boolean;
};

const servicios: Servicio[] = [
  {
    icon: Car,
    titulo: "Auto",
    resumen: "Cobertura completa para tu carro.",
    detalle:
      "Daños, robo, choque, asistencia vial 24/7 en todo Ecuador. Grúa y conductor elegido cuando lo necesites.",
    destacado: true,
  },
  {
    icon: Bike,
    titulo: "Moto",
    resumen: "Para los que se mueven sobre dos ruedas.",
    detalle:
      "Robo, daños propios, accidentes personales del conductor y responsabilidad civil. Incluye casco y equipamiento.",
  },
  {
    icon: HeartPulse,
    titulo: "Salud",
    resumen: "Particular o familiar, sin sorpresas.",
    detalle:
      "Atención hospitalaria, ambulatoria, maternidad y dental. Red de clínicas privadas en todo Ecuador.",
    destacado: true,
  },
  {
    icon: Shield,
    titulo: "Vida",
    resumen: "Tranquilidad para los tuyos.",
    detalle:
      "Capital asegurado a tu familia, ahorro programado y coberturas adicionales por enfermedades graves.",
  },
  {
    icon: PawPrint,
    titulo: "Mascotas",
    resumen: "Tu perro o gato también está cubierto.",
    detalle:
      "Veterinaria, accidentes, cirugías, responsabilidad civil por daños a terceros. Desde los 3 meses de edad.",
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="relative py-24 lg:py-32 bg-[var(--color-oim-paper)]"
    >
      <div className="oim-container">
        {/* ────── Header sección ────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 lg:mb-20"
        >
          <p className="section-eyebrow">01 · Servicios</p>
          <h2 className="section-headline mt-3 text-balance">
            Cinco coberturas pensadas para{" "}
            <em className="hero-headline-green">tu día a día</em>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-oim-ink-soft)] text-pretty max-w-xl">
            No vendemos pólizas enlatadas. Te armamos un programa a tu medida
            con las mejores aseguradoras del país.
          </p>
        </motion.div>

        {/* ────── Mobile + tablet: Swiper carousel ────── */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.1, spaceBetween: 18 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="!pb-14"
          >
            {servicios.map((s) => (
              <SwiperSlide key={s.titulo} className="h-auto">
                <ServicioCard servicio={s} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ────── Desktop: grid asymmetric ────── */}
        <div className="hidden lg:grid grid-cols-12 gap-5">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className={
                // Asymmetric grid: 2 destacados ocupan 6 cols, 3 restantes ocupan 4 cols
                s.destacado ? "col-span-6 lg:col-span-4" : "col-span-4"
              }
            >
              <ServicioCard servicio={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicioCard({ servicio }: { servicio: Servicio }) {
  const Icon = servicio.icon;

  return (
    <a
      href={`#contacto?producto=${servicio.titulo.toLowerCase()}`}
      className="oim-card group block h-full p-7 lg:p-8 cursor-pointer"
    >
      {/* Ícono · cuadrado redondeado con tinte verde-soft */}
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-oim-green-soft)] mb-6 group-hover:bg-[var(--color-oim-green)] transition-all duration-300">
        <Icon
          size={22}
          strokeWidth={2.2}
          className="text-[var(--color-oim-green-deep)] group-hover:text-white transition-colors duration-300"
        />
      </div>

      {/* Título + resumen */}
      <h3 className="font-display text-[28px] font-medium text-[var(--color-oim-ink)] tracking-tight leading-tight">
        {servicio.titulo}
      </h3>
      <p className="mt-2 text-[15px] font-medium text-[var(--color-oim-ink-soft)]">
        {servicio.resumen}
      </p>

      {/* Línea separadora orgánica */}
      <div className="h-px bg-[var(--color-oim-line)] my-5" />

      {/* Detalle */}
      <p className="text-[14px] leading-[1.65] text-[var(--color-oim-ink-soft)] text-pretty">
        {servicio.detalle}
      </p>

      {/* CTA pie */}
      <div className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-[var(--color-oim-orange-deep)] group-hover:gap-3 transition-all">
        <span className="uppercase font-mono text-[11px] tracking-[0.18em]">
          Cotizar {servicio.titulo.toLowerCase()}
        </span>
        <ArrowRight size={14} strokeWidth={2.4} className="transition-transform group-hover:translate-x-1" />
      </div>
    </a>
  );
}
