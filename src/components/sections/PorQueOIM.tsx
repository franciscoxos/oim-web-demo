"use client";

import { motion } from "framer-motion";
import { Moon, UserRound, Sparkles, Quote } from "lucide-react";

export function PorQueOIM() {
  return (
    <section
      id="por-que-oim"
      className="relative py-24 lg:py-32 bg-[var(--color-oim-paper-warm)] atmosphere-grain overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full opacity-[0.10] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-oim-green) 0%, transparent 70%)",
        }}
      />

      <div className="oim-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="section-eyebrow">02 · Por qué OIM</p>
          <h2 className="section-headline mt-3 text-balance">
            Tres cosas que <em className="hero-headline-accent">no compras</em>{" "}
            en una aseguradora grande.
          </h2>
        </motion.div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <Diferenciador
            icon={Moon}
            ordinal="01"
            titulo="24/7 de verdad"
            descripcion="Margarita atiende el siniestro a las 3 a.m. Tu asesor humano te llama a las 8 a.m. Otros cierran a las 6."
            delay={0}
          />
          <Diferenciador
            icon={UserRound}
            ordinal="02"
            titulo="Tu asesor, tu nombre"
            descripcion="No rotamos asesores. La misma persona te conoce, conoce tu carro, conoce a tu familia. Por años."
            delay={0.1}
          />
          <Diferenciador
            icon={Sparkles}
            ordinal="03"
            titulo="A tu medida, como tu sastre"
            descripcion="No te metemos en el mismo molde que a todos. Diseñamos tu cobertura con las mejores aseguradoras del país."
            delay={0.2}
          />
        </div>

        {/* ────── Killer use case "Una noche cualquiera" ────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="section-eyebrow text-[var(--color-oim-green-deep)]">
                Una noche cualquiera
              </p>
              <h3 className="mt-3 font-display text-[2rem] lg:text-[2.5rem] font-medium leading-[1.1] tracking-tight text-balance">
                Esto es lo que te llevas con OIM, y{" "}
                <em className="hero-headline-green">en ningún otro lado</em>.
              </h3>
            </div>

            <div className="lg:col-span-7 space-y-5 text-[17px] lg:text-[18px] leading-[1.7] text-[var(--color-oim-ink-soft)] text-pretty">
              <p>
                Son las{" "}
                <span className="font-mono text-[var(--color-oim-ink)] font-medium">23:47</span>.
                Vas por la Av. Naciones Unidas. Un descuidado se pasa el alto y te
                pega de costado.
              </p>
              <p className="italic text-[var(--color-oim-ink-faint)]">
                ¿A quién llamas? ¿El seguro contesta? ¿Vas tú solo a la patrullera?
              </p>
              <p>
                Llamas a OIM.{" "}
                <span className="font-semibold text-[var(--color-oim-ink)]">
                  Margarita contesta al primer tono.
                </span>{" "}
                Te pide tu placa. Te confirma con qué aseguradora estás. Te pasa
                al instante el teléfono del peritaje 24h.
              </p>
              <p>
                A las{" "}
                <span className="font-mono text-[var(--color-oim-ink)] font-medium">
                  8:00 a.m.
                </span>
                , Mauricio te llama personalmente.{" "}
                <em className="text-[var(--color-oim-ink)]">
                  &ldquo;¿Cómo estás? Ya hablé con el peritaje. Tu carro va a Tecno
                  Auto, los repuestos llegan el martes.&rdquo;
                </em>
              </p>
              <p className="pt-3 font-medium text-[var(--color-oim-ink)] text-[19px]">
                Eso no se compra con la cotización más barata.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ────── Cita oro de Mauricio ────── */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 lg:mt-28 max-w-4xl mx-auto"
        >
          <div className="relative px-8 py-12 lg:px-12 lg:py-14 bg-white rounded-2xl border border-[var(--color-oim-line)] shadow-[0_8px_40px_-12px_rgba(15,30,46,0.08)]">
            <Quote
              className="absolute -top-5 left-8 lg:left-12 text-[var(--color-oim-orange-deep)] bg-[var(--color-oim-paper-warm)] rounded-full p-2"
              size={42}
              strokeWidth={1.8}
            />
            <blockquote
              className="font-display text-[20px] lg:text-[26px] font-medium italic leading-[1.5] text-[var(--color-oim-ink)] text-balance"
              style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}
            >
              &ldquo;Agradezco a todos mis clientes que ahora son mis amigos, y a
              todos mis amigos que ahora también son clientes. Por todo este tiempo
              de confianza.{" "}
              <span className="text-[var(--color-oim-orange-deep)] not-italic">
                Me encanta lo que hago.
              </span>
              &rdquo;
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-oim-green)] to-[var(--color-oim-orange)] flex items-center justify-center font-display text-[15px] font-semibold text-white">
                MM
              </div>
              <div>
                <div className="font-display text-[16px] font-semibold text-[var(--color-oim-ink)]">
                  Mauricio Morales
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-soft)] mt-0.5">
                  Gerente Comercial · OIM Seguros
                </div>
              </div>
            </figcaption>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

function Diferenciador({
  icon: Icon,
  ordinal,
  titulo,
  descripcion,
  delay,
}: {
  icon: typeof Moon;
  ordinal: string;
  titulo: string;
  descripcion: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-[var(--color-oim-line)] shadow-sm">
            <Icon
              size={24}
              strokeWidth={2}
              className="text-[var(--color-oim-orange-deep)]"
            />
          </div>
        </div>
        <div className="flex-1 pt-1">
          <p className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--color-oim-ink-faint)] mb-2">
            {ordinal}
          </p>
          <h3 className="font-display text-[22px] lg:text-[24px] font-medium tracking-tight leading-tight text-[var(--color-oim-ink)]">
            {titulo}
          </h3>
          <p className="mt-3 text-[15px] leading-[1.65] text-[var(--color-oim-ink-soft)] text-pretty">
            {descripcion}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
