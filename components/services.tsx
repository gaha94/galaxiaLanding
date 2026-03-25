"use client";

import { motion } from "framer-motion";
import { MonitorCog, Globe, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "Software contable y administrativo",
    description:
      "Optimiza la gestión de tu empresa con herramientas de escritorio robustas, confiables y orientadas al control total de tus operaciones.",
  },
  {
    icon: Globe,
    title: "Toma de pedidos web",
    description:
      "Permite que tus clientes o vendedores registren pedidos desde cualquier lugar con una plataforma web rápida, intuitiva y disponible todo el tiempo.",
  },
  {
    icon: ShoppingBag,
    title: "Tiendas virtuales",
    description:
      "Lleva tu negocio a internet con una tienda moderna, profesional y diseñada para vender más, mostrar mejor tus productos y fortalecer tu marca.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="section-container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Nuestros servicios
          </p>
          <h2 className="text-3xl font-black text-slate-900 md:text-5xl">
            Soluciones que conectan tu negocio con el futuro
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-[2rem] p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-lg">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
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