"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué OIM", href: "#por-que-oim" },
  { label: "Casos reales", href: "#testimonios" },
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
          ? "bg-[var(--color-oim-paper)]/95 backdrop-blur-md border-b border-[var(--color-oim-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="oim-container flex items-center justify-between py-4 md:py-5">
        {/* Logo OIM */}
        <a href="#inicio" className="flex items-center gap-2.5 group" aria-label="OIM Seguros — Inicio">
          <Logo size={38} />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[17px] font-semibold tracking-tight text-[var(--color-oim-ink)]">
              OIM Seguros
            </span>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-oim-ink-faint)] mt-0.5">
              Quito · Ecuador
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-[14px] font-medium text-[var(--color-oim-ink-soft)] hover:text-[var(--color-oim-ink)] transition-colors rounded-full hover:bg-[var(--color-oim-paper-warm)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+593997866343"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-[14px] font-medium text-[var(--color-oim-ink-soft)] hover:text-[var(--color-oim-ink)] transition-colors"
          >
            <Phone size={14} className="text-[var(--color-oim-orange-deep)]" strokeWidth={2.4} />
            <span className="font-mono tabular-nums text-[13px]">099 786 6343</span>
          </a>
          <a href="#contacto" className="btn-primary !py-2.5 !px-5 !text-[13px]">
            Cotizar ahora
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 text-[var(--color-oim-ink)] rounded-full hover:bg-[var(--color-oim-paper-warm)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[var(--color-oim-paper)] border-t border-[var(--color-oim-line)]">
          <nav className="oim-container py-5 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3.5 text-[15px] font-medium text-[var(--color-oim-ink)] hover:text-[var(--color-oim-orange-deep)] border-b border-[var(--color-oim-line)] last:border-0 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+593997866343"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center gap-2 py-3 text-[14px] font-medium text-[var(--color-oim-ink-soft)]"
            >
              <Phone size={15} className="text-[var(--color-oim-orange-deep)]" strokeWidth={2.4} />
              <span className="font-mono tabular-nums">099 786 6343 · 24/7</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Cotizar ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
