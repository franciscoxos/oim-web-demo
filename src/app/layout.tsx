import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OIM Seguros — Aseguramos Tu Bienestar",
  description:
    "Agencia asesora productora de seguros en Ecuador. Vehicular, hogar, médico, vida, mascotas, empresarial. Más de 200 pólizas activas y atención 24/7 ante siniestros.",
  keywords: [
    "seguros Ecuador",
    "OIM Seguros",
    "seguro vehicular Ecuador",
    "seguro de hogar Quito",
    "seguro médico Ecuador",
    "broker de seguros Ecuador",
    "asesor de seguros",
  ],
  authors: [{ name: "OIM Seguros" }],
  openGraph: {
    title: "OIM Seguros — Aseguramos Tu Bienestar",
    description:
      "Más de 200 pólizas activas. Cotiza tu seguro vehicular, de hogar, médico o empresarial en menos de 24 horas. Atención 24/7 ante siniestros.",
    type: "website",
    locale: "es_EC",
    siteName: "OIM Seguros",
  },
  twitter: {
    card: "summary_large_image",
    title: "OIM Seguros — Aseguramos Tu Bienestar",
    description:
      "Agencia asesora productora de seguros en Ecuador. Cotización en 24h.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-EC"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "OIM Seguros",
              alternateName: "OIM",
              url: "https://oimseguros.com",
              description:
                "Agencia asesora productora de seguros en Ecuador. Más de 200 pólizas activas, atención 24/7 ante siniestros.",
              areaServed: { "@type": "Country", name: "Ecuador" },
              knowsAbout: [
                "Seguro vehicular",
                "Seguro de hogar",
                "Seguro médico",
                "Seguro de vida",
                "Seguro de mascotas",
                "Seguro empresarial",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "EC",
                addressLocality: "Quito",
              },
              sameAs: [
                "https://www.facebook.com/oimseguros",
                "https://www.instagram.com/oimseguros",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
