import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Logo } from "./Logo";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true" {...props}>
    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.79 8.44-4.93 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={15} height={15} aria-hidden="true" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15} aria-hidden="true" {...props}>
    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14} aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const telefonos = [
  "099 786 6343",
  "099 063 1413",
  "099 804 5356",
  "099 250 5732",
];

const aseguradorasPartner = ["Sweaden", "Latina", "Equinoccial", "AIG", "Chubb", "Bolívar"];

export function Footer() {
  return (
    <footer className="bg-[var(--color-oim-ink)] text-[var(--color-oim-paper)] pt-20 pb-10">
      <div className="oim-container">
        {/* ────── Bloque principal: 4 columnas ────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Marca */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <div className="leading-none">
                <div className="font-display text-[20px] font-semibold tracking-tight">
                  OIM Seguros
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-faint)] mt-1">
                  Ocaña y Morales · Cía. Ltda.
                </div>
              </div>
            </div>

            <p className="mt-7 text-[14px] leading-[1.7] text-white/70 max-w-[35ch]">
              Agencia asesora productora de seguros en Quito, Ecuador. Desde 1995
              acompañamos a familias y empresarios con coberturas a medida.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck size={14} className="text-[var(--color-oim-green)]" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/80">
                Autorizada por Superintendencia de Cías y Seguros
              </span>
            </div>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-oim-orange)] mb-5">
              Contacto
            </h3>

            <div className="space-y-3.5 text-[14px]">
              <a
                href="https://maps.google.com/?q=Av+Rep%C3%BAblica+E2-62+y+Av+Atahualpa+Quito"
                target="_blank"
                rel="noopener"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <MapPin
                  size={15}
                  strokeWidth={2.2}
                  className="mt-1 text-[var(--color-oim-green)] flex-shrink-0"
                />
                <span>
                  Av. República E2-62 y Av. Atahualpa
                  <br />
                  Quito, Ecuador
                </span>
              </a>

              <a
                href="mailto:servicioalcliente@oimseguros.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <Mail size={15} strokeWidth={2.2} className="text-[var(--color-oim-green)] flex-shrink-0" />
                <span>servicioalcliente@oimseguros.com</span>
              </a>

              <div className="flex items-start gap-3 pt-2">
                <Phone size={15} strokeWidth={2.2} className="mt-1 text-[var(--color-oim-green)] flex-shrink-0" />
                <div className="grid grid-cols-2 gap-x-5 gap-y-1.5 font-mono tabular-nums text-[13px]">
                  {telefonos.map((t) => (
                    <a
                      key={t}
                      href={`tel:+593${t.replace(/\s/g, "").slice(1)}`}
                      className="text-white/70 hover:text-[var(--color-oim-orange)] transition-colors"
                    >
                      {t}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Aseguradoras aliadas + redes */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-oim-orange)] mb-5">
              Aseguradoras aliadas
            </h3>
            <p className="text-[13px] text-white/60 leading-[1.7] mb-5">
              Trabajamos con las principales aseguradoras del Ecuador:
            </p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {aseguradorasPartner.map((a) => (
                <span
                  key={a}
                  className="text-[11.5px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 font-medium"
                >
                  {a}
                </span>
              ))}
            </div>

            <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--color-oim-orange)] mb-4">
              Síguenos
            </h3>
            <div className="flex gap-2.5">
              <a
                href="https://facebook.com/oimseguros"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/oimseguros"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://youtube.com/@oimseguros"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://twitter.com/oimseguros"
                target="_blank"
                rel="noopener"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        {/* ────── Pie legal ────── */}
        <div className="mt-16 pt-7 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12.5px]">
          <p className="text-white/50">
            © {new Date().getFullYear()} OIM Seguros · Ocaña y Morales Cía. Ltda. · Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono uppercase tracking-[0.18em] text-[10.5px] text-white/50">
            <a href="/privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="/terminos" className="hover:text-white transition-colors">
              Términos
            </a>
            <a href="/lopdp" className="hover:text-white transition-colors">
              Cumplimiento LOPDP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
