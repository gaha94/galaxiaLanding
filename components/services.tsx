"use client";

import { motion } from "framer-motion";
import { MonitorCog, Globe, ShoppingBag, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "Software contable y administrativo",
    description:
      "Gestiona inventario, operaciones y procesos internos con herramientas robustas, confiables y orientadas al control empresarial.",
  },
  {
    icon: Globe,
    title: "Toma de pedidos web",
    description:
      "Recibe pedidos desde cualquier lugar con plataformas web ágiles, intuitivas y pensadas para mejorar la atención y la velocidad comercial.",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas virtuales",
    description:
      "Lleva tu negocio al entorno digital con una tienda moderna, profesional y preparada para convertir visitas en ventas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="section-container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="section-subtitle">Nuestros servicios</p>
          <h2 className="section-title">
            Soluciones elegantes, visuales y enfocadas en resultados
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group glass-card rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-300/25"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg">
                    <Icon size={30} />
                  </div>
                  <ArrowUpRight className="text-slate-400 transition group-hover:text-sky-300" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}