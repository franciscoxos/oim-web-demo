import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true" {...props}>
    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16} aria-hidden="true" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  return (
    <footer
      className="mt-24"
      style={{ background: "#1A2733", color: "#E5EDF3" }}
    >
      <div className="oim-container py-16 grid gap-12 md:grid-cols-3">
        {/* Marca */}
        <div>
          <Logo size={40} dark />
          <p className="mt-5 text-sm leading-relaxed text-[#9EB1C2] max-w-xs">
            Agencia Asesora Productora de Seguros. Orientamos la protección
            del patrimonio Familiar y Empresarial en Ecuador desde hace más de
            20 años.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/oimseguros"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-[#3A4A5A] flex items-center justify-center hover:bg-[var(--color-oim-orange)] hover:border-[var(--color-oim-orange)] transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/oimseguros"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-[#3A4A5A] flex items-center justify-center hover:bg-[var(--color-oim-orange)] hover:border-[var(--color-oim-orange)] transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-xs font-bold tracking-[3px] uppercase text-[var(--color-oim-orange)] mb-5">
            Servicios
          </h4>
          <ul className="space-y-3 text-sm text-[#C8D4E0]">
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro vehicular</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro de hogar</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro médico</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro de vida</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro de mascotas</a></li>
            <li><a href="#servicios" className="hover:text-white transition-colors">Seguro empresarial</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-xs font-bold tracking-[3px] uppercase text-[var(--color-oim-orange)] mb-5">
            Contacto
          </h4>
          <ul className="space-y-4 text-sm text-[#C8D4E0]">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-oim-orange)]" />
              <span>+593 99 000 0000</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-oim-orange)]" />
              <a href="mailto:info@oimseguros.com" className="hover:text-white transition-colors">
                info@oimseguros.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-oim-orange)]" />
              <span>Quito, Ecuador</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#2A3A4A]">
        <div className="oim-container py-5 flex flex-col md:flex-row justify-between gap-3 items-center text-xs text-[#7B8C9D]">
          <span>© {new Date().getFullYear()} OIM Seguros. Todos los derechos reservados.</span>
          <span>Aseguramos tu bienestar.</span>
        </div>
      </div>
    </footer>
  );
}
