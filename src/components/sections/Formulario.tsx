"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";

const tiposSeguro = [
  "Seguro vehicular",
  "Seguro de hogar",
  "Seguro médico",
  "Seguro de vida",
  "Seguro de mascotas",
  "Seguro empresarial",
  "Otro / consulta general",
];

export function Formulario() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Mock UI — el wiring a backend (Meta Pixel + lead push a Maya/CdM) se hace en fase final.
    setTimeout(() => setStatus("ok"), 1100);
  }

  return (
    <section
      id="contacto"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--color-oim-paper-warm) 0%, var(--color-oim-paper) 100%)",
      }}
    >
      <div className="oim-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Texto izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="section-ordinal mb-3">04 / Contacto</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-oim-ink)] leading-[1.05] mb-5">
              Recibe tu cotización en{" "}
              <span style={{ color: "var(--color-oim-teal)" }} className="italic">
                menos de 24 horas
              </span>
            </h2>
            <p className="text-lg text-[var(--color-oim-ink)]/70 leading-relaxed mb-10">
              Cuéntanos qué necesitas asegurar. Un asesor real revisa tu caso y
              te llama o escribe en menos de un día hábil con opciones
              concretas. Sin formularios largos, sin chatbots.
            </p>

            <a
              href="https://wa.me/593990000000?text=Hola%2C%20quiero%20cotizar%20un%20seguro"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 text-[var(--color-oim-teal)] font-semibold hover:text-[var(--color-oim-teal-dark)] transition-colors"
            >
              <MessageCircle size={20} />
              <span className="border-b border-current pb-0.5">
                ¿Prefieres chatear por WhatsApp? Click aquí
              </span>
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="oim-card p-7 lg:p-10 space-y-5"
            >
              {status === "ok" ? (
                <div className="text-center py-8">
                  <CheckCircle2
                    size={56}
                    className="mx-auto mb-4"
                    color="var(--color-oim-green)"
                  />
                  <h3 className="text-2xl font-bold text-[var(--color-oim-ink)] mb-2">
                    ¡Recibimos tu solicitud!
                  </h3>
                  <p className="text-[var(--color-oim-ink)]/70">
                    Un asesor de OIM te contactará en menos de 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Nombre completo" name="nombre" required />
                    <Field
                      label="WhatsApp / Teléfono"
                      name="telefono"
                      type="tel"
                      placeholder="+593 ..."
                      required
                    />
                  </div>
                  <Field
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    required
                  />
                  <Select
                    label="Tipo de seguro de interés"
                    name="tipo"
                    options={tiposSeguro}
                    required
                  />
                  <Field
                    label="Cuéntanos brevemente lo que necesitas"
                    name="mensaje"
                    multiline
                  />

                  <p className="text-xs text-[var(--color-oim-ink)]/55 leading-relaxed">
                    Al enviar este formulario aceptas que un asesor de OIM
                    Seguros te contacte por los medios proporcionados con fines
                    comerciales y de asesoramiento.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full !py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Recibir cotización en 24h
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  multiline,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const baseCls =
    "w-full px-4 py-3 rounded-xl border-2 border-[var(--color-oim-line)] bg-white text-[var(--color-oim-ink)] text-sm focus:outline-none focus:border-[var(--color-oim-orange)] transition-colors";
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-[1.5px] text-[var(--color-oim-ink)]/65 mb-2">
        {label} {required && <span className="text-[var(--color-oim-orange)]">*</span>}
      </span>
      {multiline ? (
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={baseCls + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={baseCls}
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-[1.5px] text-[var(--color-oim-ink)]/65 mb-2">
        {label} {required && <span className="text-[var(--color-oim-orange)]">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-oim-line)] bg-white text-[var(--color-oim-ink)] text-sm focus:outline-none focus:border-[var(--color-oim-orange)] transition-colors appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Selecciona una opción
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
