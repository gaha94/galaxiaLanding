import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Stats from "@/components/stats";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Benefits />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}