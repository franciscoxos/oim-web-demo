"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué OIM", href: "#por-que-oim" },
  { label: "Cash Back", href: "#cash-back" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(46,74,102,0.06)]"
          : "bg-white/0"
      }`}
    >
      <div className="oim-container flex items-center justify-between py-4 md:py-5">
        <a href="#inicio" className="flex items-center" aria-label="OIM Seguros">
          <Logo size={36} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-oim-ink)] hover:text-[var(--color-oim-teal)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="btn-primary !py-2.5 !px-5 !text-xs">
            Cotizar ahora
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-[var(--color-oim-ink)]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-oim-line)]">
          <nav className="oim-container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-[var(--color-oim-ink)] hover:text-[var(--color-oim-teal)] border-b border-[var(--color-oim-line)] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Cotizar ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
