"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mejora la imagen digital de tu empresa",
  "Automatiza procesos y reduce errores manuales",
  "Aumenta tus oportunidades de venta",
  "Centraliza información y operaciones",
  "Ofrece una mejor experiencia a tus clientes",
  "Desarrollos adaptados a la necesidad del negocio",
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24">
      <div className="section-container grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Beneficios
          </p>
          <h2 className="text-3xl font-black text-slate-900 md:text-5xl">
            Tecnología pensada para crecer contigo
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            No solo desarrollamos software. Creamos herramientas visuales,
            funcionales y estratégicas para que tu empresa venda mejor, administre
            mejor y avance con una base tecnológica sólida.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-8"
        >
          <div className="grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/60 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-600" size={22} />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}