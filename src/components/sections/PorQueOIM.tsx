"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ShieldCheck, Calendar, PhoneCall, Award } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    valor: 200,
    sufijo: "+",
    label: "Pólizas activas",
    descripcion: "Familias y empresas confían su patrimonio en OIM cada año.",
  },
  {
    icon: Calendar,
    valor: 20,
    sufijo: " años",
    label: "De experiencia",
    descripcion: "Dos décadas asesorando seguros con el mismo estándar.",
  },
  {
    icon: PhoneCall,
    valor: 24,
    sufijo: "/7",
    label: "Atención siniestros",
    descripcion: "Cuando llamas, te responde un asesor real. Día y noche.",
  },
  {
    icon: Award,
    valor: 8,
    sufijo: "+",
    label: "Aseguradoras aliadas",
    descripcion: "Comparamos pólizas para encontrar la mejor opción.",
  },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function PorQueOIM() {
  return (
    <section
      id="por-que-oim"
      className="py-24 lg:py-32"
      style={{ background: "var(--color-oim-paper-warm)" }}
    >
      <div className="oim-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <div className="section-ordinal mb-3">02 / Por qué OIM</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-oim-ink)] leading-[1.05] mb-5">
            ¿Por qué prefieren{" "}
            <span style={{ color: "var(--color-oim-teal)" }} className="italic">
              OIM Seguros
            </span>
            ?
          </h2>
          <p className="text-lg text-[var(--color-oim-ink)]/70 leading-relaxed">
            Porque combinamos la cercanía de un asesor familiar con el
            respaldo técnico de una correduría profesional. Estos números
            cuentan parte de la historia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="oim-card p-7"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: "var(--color-oim-green)" + "18" }}
              >
                <s.icon size={22} color="var(--color-oim-green-dark)" />
              </div>
              <div
                className="counter-num text-5xl lg:text-6xl mb-1"
                style={{ color: "var(--color-oim-teal)" }}
              >
                <Counter to={s.valor} suffix={s.sufijo} />
              </div>
              <div className="text-xs uppercase tracking-[2px] font-bold text-[var(--color-oim-ink)] mb-3">
                {s.label}
              </div>
              <p className="text-sm text-[var(--color-oim-ink)]/65 leading-relaxed">
                {s.descripcion}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cash Back banner */}
        <motion.div
          id="cash-back"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 lg:mt-24 rounded-[32px] p-10 lg:p-14 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #007991 0%, #005C70 100%)",
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, #FFAB5E 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-[4px] mb-4" style={{ color: "#FFAB5E" }}>
                Programa exclusivo
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Cash Back OIM:
                <br />
                <span style={{ color: "#FFAB5E" }} className="italic">
                  recibes parte de tu prima
                </span>{" "}
                al renovar
              </h3>
              <p className="text-white/85 leading-relaxed max-w-xl">
                Por cada año sin siniestros, te devolvemos un porcentaje de tu
                prima en efectivo. Es nuestra forma de premiar a los clientes
                cuidadosos. Pregunta por las condiciones de tu póliza.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <a href="#contacto" className="btn-primary">
                Conocer Cash Back
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
