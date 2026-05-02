import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { PorQueOIM } from "@/components/sections/PorQueOIM";
import { Testimonios } from "@/components/sections/Testimonios";
import { Formulario } from "@/components/sections/Formulario";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Servicios />
        <PorQueOIM />
        <Testimonios />
        <Formulario />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
