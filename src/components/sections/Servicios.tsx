"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Car,
  Home,
  HeartPulse,
  Shield,
  PawPrint,
  Building2,
  ArrowRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const servicios = [
  {
    icon: Car,
    titulo: "Seguro Vehicular",
    descripcion:
      "Cobertura total o limitada para tu vehículo. Asistencia vial 24/7, grúa, conductor elegido y vehículo de reemplazo.",
    color: "#71BF44",
  },
  {
    icon: Home,
    titulo: "Seguro de Hogar",
    descripcion:
      "Protege tu casa y todo lo que hay dentro. Daños por agua, robo, incendio y responsabilidad civil familiar.",
    color: "#007991",
  },
  {
    icon: HeartPulse,
    titulo: "Seguro Médico",
    descripcion:
      "Atención hospitalaria, ambulatoria y dental. Red de clínicas privadas en todo Ecuador y cobertura internacional opcional.",
    color: "#FFAB5E",
  },
  {
    icon: Shield,
    titulo: "Seguro de Vida",
    descripcion:
      "Tranquilidad para los tuyos. Capital asegurado a la familia, ahorro programado y coberturas por enfermedades graves.",
    color: "#5A9F44",
  },
  {
    icon: PawPrint,
    titulo: "Seguro Mascotas",
    descripcion:
      "Atención veterinaria, accidentes, cirugías y responsabilidad civil. Para perros y gatos desde los 3 meses de edad.",
    color: "#BC7A5B",
  },
  {
    icon: Building2,
    titulo: "Seguro Empresarial",
    descripcion:
      "Multirriesgo industrial, transporte, fianzas, equipo electrónico y responsabilidad civil profesional.",
    color: "#2E4A66",
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="py-24 lg:py-32 bg-[var(--color-oim-paper)]"
    >
      <div className="oim-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 lg:mb-16"
        >
          <div className="section-ordinal mb-3">01 / Servicios</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-oim-ink)] leading-[1.05] mb-5">
            Nuestros{" "}
            <span style={{ color: "var(--color-oim-teal)" }} className="italic">
              servicios
            </span>
          </h2>
          <p className="text-lg text-[var(--color-oim-ink)]/70 leading-relaxed">
            Cobertura familiar y empresarial con respaldo de las mejores
            aseguradoras del país. Trabajamos con cada cliente uno a uno para
            encontrar la póliza que realmente le conviene.
          </p>
        </motion.div>

        {/* Mobile + tablet: Swiper carousel */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            className="!pb-12"
          >
            {servicios.map((s) => (
              <SwiperSlide key={s.titulo}>
                <ServicioCard {...s} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ServicioCard {...s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicioCard({
  icon: Icon,
  titulo,
  descripcion,
  color,
}: {
  icon: typeof Car;
  titulo: string;
  descripcion: string;
  color: string;
}) {
  return (
    <div className="oim-card p-7 h-full flex flex-col">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{ background: `${color}18` }}
      >
        <Icon size={26} color={color} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-oim-ink)] mb-3">
        {titulo}
      </h3>
      <p className="text-sm text-[var(--color-oim-ink)]/70 leading-relaxed flex-1">
        {descripcion}
      </p>
      <a
        href="#contacto"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group"
        style={{ color }}
      >
        Cotizar ahora
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </div>
  );
}
