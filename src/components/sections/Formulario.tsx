"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Send, Loader2, CheckCircle2, MessageCircle, Phone } from "lucide-react";

type Producto = "auto" | "moto" | "salud" | "vida" | "mascotas";

type FormState = {
  nombre: string;
  whatsapp: string;
  email: string;
  producto: Producto | "";
  // Expansion fields · solo se rellenan si producto coincide
  anio_vehiculo: string;
  placa: string;
  edad: string;
  cobertura_familiar: "" | "yo" | "yo_pareja" | "familia";
  // Consentimiento LOPDP
  consent: boolean;
};

const initialState: FormState = {
  nombre: "",
  whatsapp: "",
  email: "",
  producto: "",
  anio_vehiculo: "",
  placa: "",
  edad: "",
  cobertura_familiar: "",
  consent: false,
};

const productos: { value: Producto; label: string }[] = [
  { value: "auto", label: "Auto" },
  { value: "moto", label: "Moto" },
  { value: "salud", label: "Salud" },
  { value: "vida", label: "Vida" },
  { value: "mascotas", label: "Mascotas" },
];

export function Formulario() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // ────── Validación + reglas de expansión ──────
  const expansionAuto = form.producto === "auto";
  const expansionSalud = form.producto === "salud";

  const valid = useMemo(() => {
    if (!form.nombre.trim()) return false;
    if (!/^[0-9+\-\s()]{7,}$/.test(form.whatsapp.trim())) return false;
    if (!form.producto) return false;
    if (!form.consent) return false;
    if (expansionAuto && !form.anio_vehiculo.trim()) return false;
    if (expansionSalud && !form.edad.trim()) return false;
    return true;
  }, [form, expansionAuto, expansionSalud]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      // TODO endpoint real cuando esté listo (Supabase function de OIM)
      // Por ahora simulamos para demo en preview
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");

      // Abrir WhatsApp en pestaña nueva con mensaje pre-cargado
      const mensaje = `Hola, soy ${form.nombre}. Quiero cotizar un seguro de ${form.producto}.`;
      const waUrl = `https://wa.me/593997866343?text=${encodeURIComponent(mensaje)}`;
      window.open(waUrl, "_blank", "noopener");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Algo no salió bien. Llámanos directamente al 099 786 6343.");
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-24 lg:py-32 bg-[var(--color-oim-paper-warm)] atmosphere-grain overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full opacity-[0.10] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--color-oim-orange) 0%, transparent 70%)",
        }}
      />

      <div className="oim-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ────── Header lateral ────── */}
          <div className="lg:col-span-5">
            <p className="section-eyebrow">04 · Cuéntame de ti</p>
            <h2 className="section-headline mt-3 text-balance">
              En <em className="hero-headline-green">1 minuto</em> empezamos.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-oim-ink-soft)] text-pretty">
              Margarita te contacta por WhatsApp en cuanto envíes el formulario.
              Conversamos lo justo y te paso con tu asesor humano.
            </p>

            {/* Contactos directos */}
            <div className="mt-10 space-y-4">
              <a
                href="https://wa.me/593997866343?text=Hola%20OIM%2C%20quiero%20conversar"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 p-4 -mx-4 rounded-xl hover:bg-white/60 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-oim-green-soft)] flex items-center justify-center">
                  <MessageCircle size={20} strokeWidth={2.2} className="text-[var(--color-oim-green-deep)]" />
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-faint)]">
                    WhatsApp · 24/7
                  </div>
                  <div className="font-display text-[17px] font-semibold text-[var(--color-oim-ink)] group-hover:text-[var(--color-oim-orange-deep)] transition-colors">
                    Conversa con Margarita
                  </div>
                </div>
              </a>

              <a
                href="tel:+593997866343"
                className="group flex items-center gap-4 p-4 -mx-4 rounded-xl hover:bg-white/60 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-oim-orange-soft)] flex items-center justify-center">
                  <Phone size={20} strokeWidth={2.2} className="text-[var(--color-oim-orange-deep)]" />
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-faint)]">
                    Llámanos directo
                  </div>
                  <div className="font-mono text-[17px] tabular-nums font-medium text-[var(--color-oim-ink)] group-hover:text-[var(--color-oim-orange-deep)] transition-colors">
                    099 786 6343
                  </div>
                </div>
              </a>

              <div className="pt-2 text-[13px] text-[var(--color-oim-ink-soft)] leading-relaxed">
                ¿Prefieres email?{" "}
                <a
                  href="mailto:servicioalcliente@oimseguros.com"
                  className="text-[var(--color-oim-orange-deep)] hover:underline font-medium"
                >
                  servicioalcliente@oimseguros.com
                </a>
              </div>
            </div>
          </div>

          {/* ────── Formulario ────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-[var(--color-oim-line)] p-7 lg:p-10 shadow-[0_8px_40px_-12px_rgba(15,30,46,0.06)]"
            >
              {/* ────── Estado: success ────── */}
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-oim-green-soft)] mb-5">
                    <CheckCircle2 size={32} strokeWidth={2} className="text-[var(--color-oim-green-deep)]" />
                  </div>
                  <h3 className="font-display text-[26px] font-medium mb-3 text-[var(--color-oim-ink)]">
                    Listo, {form.nombre.split(" ")[0]}.
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[var(--color-oim-ink-soft)] max-w-md mx-auto">
                    Margarita te está enviando WhatsApp ahora mismo. Revisa tu celular
                    en los próximos 30 segundos. Si no lo ves, escríbenos directo.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(initialState);
                      setStatus("idle");
                    }}
                    className="mt-7 text-[13px] font-mono uppercase tracking-[0.22em] text-[var(--color-oim-ink-soft)] hover:text-[var(--color-oim-orange-deep)] transition-colors"
                  >
                    ← Cotizar otro seguro
                  </button>
                </div>
              ) : (
                <>
                  {/* ────── Campos base ────── */}
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="nombre">Nombre completo *</label>
                      <input
                        id="nombre"
                        type="text"
                        value={form.nombre}
                        onChange={(e) => update("nombre", e.target.value)}
                        placeholder="María Andrade"
                        required
                        autoComplete="name"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="whatsapp">WhatsApp *</label>
                        <input
                          id="whatsapp"
                          type="tel"
                          value={form.whatsapp}
                          onChange={(e) => update("whatsapp", e.target.value)}
                          placeholder="0998 765 432"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email (opcional)</label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="maria@ejemplo.com"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    {/* Selector producto · radio buttons grandes */}
                    <div>
                      <label>¿Qué seguro te interesa? *</label>
                      <div role="radiogroup" className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-2">
                        {productos.map((p) => (
                          <button
                            key={p.value}
                            type="button"
                            role="radio"
                            aria-checked={form.producto === p.value}
                            onClick={() => update("producto", p.value)}
                            className={`px-3 py-3 rounded-lg border text-[14px] font-medium transition-all ${
                              form.producto === p.value
                                ? "bg-[var(--color-oim-orange-deep)] text-white border-[var(--color-oim-orange-deep)] shadow-md"
                                : "bg-white text-[var(--color-oim-ink-soft)] border-[var(--color-oim-line-strong)] hover:border-[var(--color-oim-orange-deep)] hover:text-[var(--color-oim-ink)]"
                            }`}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ────── Expansión condicional Auto ────── */}
                    <AnimatePresence>
                      {expansionAuto && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div>
                              <label htmlFor="anio">Año del vehículo *</label>
                              <input
                                id="anio"
                                type="number"
                                min="1990"
                                max="2027"
                                value={form.anio_vehiculo}
                                onChange={(e) => update("anio_vehiculo", e.target.value)}
                                placeholder="2018"
                                required={expansionAuto}
                              />
                            </div>
                            <div>
                              <label htmlFor="placa">Placa (opcional)</label>
                              <input
                                id="placa"
                                type="text"
                                value={form.placa}
                                onChange={(e) => update("placa", e.target.value.toUpperCase())}
                                placeholder="PCQ-1234"
                                maxLength={10}
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ────── Expansión condicional Salud ────── */}
                    <AnimatePresence>
                      {expansionSalud && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div>
                              <label htmlFor="edad">Tu edad *</label>
                              <input
                                id="edad"
                                type="number"
                                min="0"
                                max="100"
                                value={form.edad}
                                onChange={(e) => update("edad", e.target.value)}
                                placeholder="38"
                                required={expansionSalud}
                              />
                            </div>
                            <div>
                              <label htmlFor="cobertura">Cobertura para</label>
                              <select
                                id="cobertura"
                                value={form.cobertura_familiar}
                                onChange={(e) =>
                                  update("cobertura_familiar", e.target.value as FormState["cobertura_familiar"])
                                }
                              >
                                <option value="">— Elige —</option>
                                <option value="yo">Solo yo</option>
                                <option value="yo_pareja">Yo + pareja</option>
                                <option value="familia">Familia completa</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* ────── Consent LOPDP ────── */}
                    <label
                      htmlFor="consent"
                      className="flex items-start gap-3 cursor-pointer normal-case font-normal tracking-normal mt-2"
                    >
                      <input
                        id="consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="!w-5 !h-5 !p-0 mt-0.5 accent-[var(--color-oim-orange-deep)] cursor-pointer flex-shrink-0"
                        required
                      />
                      <span className="text-[12.5px] leading-[1.55] text-[var(--color-oim-ink-soft)]">
                        Acepto que OIM Seguros procese mis datos personales conforme a la{" "}
                        <a
                          href="#"
                          target="_blank"
                          className="text-[var(--color-oim-orange-deep)] hover:underline"
                        >
                          Ley Orgánica de Protección de Datos Personales del Ecuador
                        </a>{" "}
                        para que me contacten por WhatsApp, llamada o correo.
                      </span>
                    </label>
                  </div>

                  {/* ────── Botón submit ────── */}
                  <button
                    type="submit"
                    disabled={!valid || status === "submitting"}
                    className="btn-primary w-full mt-7 !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Pídeme mi cotización
                        <Send size={16} strokeWidth={2.4} />
                      </>
                    )}
                  </button>

                  <p className="mt-4 text-center text-[12px] text-[var(--color-oim-ink-faint)] leading-relaxed">
                    En menos de 1 minuto recibes WhatsApp con tu asesor. Sin compromiso.
                  </p>

                  {status === "error" && errorMsg && (
                    <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-800 text-[13px] border border-red-200">
                      {errorMsg}
                    </div>
                  )}
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
