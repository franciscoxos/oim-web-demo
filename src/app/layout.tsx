import type { Metadata } from "next";
import { Fraunces, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display — Fraunces variable serif con axes SOFT/WONK para personalidad editorial cálida
// En Next.js 16: si declaramos `axes`, NO se puede especificar `weight` (queda como variable)
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body — Figtree humanista cálida, alternativa real a Inter
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

// Mono — JetBrains Mono para metainfo / eyebrows / footer line
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OIM Seguros — El broker que sí contesta a las 3 a.m.",
  description:
    "Broker de seguros en Quito, Ecuador. Atención humana 24/7 ante siniestros: contestamos al primer tono. Pólizas de auto, moto, salud, vida y mascotas, diseñadas a tu medida.",
  keywords: [
    "broker seguros Ecuador",
    "OIM Seguros",
    "seguro vehicular Quito",
    "seguro auto Ecuador",
    "seguro salud Quito",
    "seguro vida Ecuador",
    "atención siniestros 24/7",
    "asesor de seguros Quito",
  ],
  authors: [{ name: "OIM Seguros" }],
  openGraph: {
    title: "OIM Seguros — El broker que sí contesta a las 3 a.m.",
    description:
      "Cuando algo pasa en la noche, OIM responde. Atención humana 24/7, asesor designado, pólizas a tu medida con las mejores aseguradoras del Ecuador.",
    type: "website",
    locale: "es_EC",
    siteName: "OIM Seguros",
  },
  twitter: {
    card: "summary_large_image",
    title: "OIM Seguros — El broker que sí contesta a las 3 a.m.",
    description:
      "Broker de seguros en Quito con atención humana 24/7. Pólizas a tu medida.",
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
      className={`${fraunces.variable} ${figtree.variable} ${jetbrainsMono.variable} h-full antialiased`}
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
