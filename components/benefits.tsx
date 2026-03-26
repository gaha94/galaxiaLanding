"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mejora la presencia digital de tu empresa",
  "Automatiza procesos y reduce tareas repetitivas",
  "Centraliza ventas, gestión y operaciones",
  "Brinda una experiencia más moderna a tus clientes",
  "Escala con herramientas adaptadas a tu negocio",
  "Combina diseño visual con funcionalidad real",
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="section-container grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">Beneficios</p>
          <h2 className="section-title">
            Más que software: una base digital para crecer
          </h2>
          <p className="mt-6 section-text">
            Creamos experiencias digitales que ayudan a tu empresa a verse mejor,
            vender mejor y administrar mejor. Todo con una imagen moderna y una
            estructura tecnológica sólida.
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
                className="flex items-start gap-3 rounded-3xl border border-white/8 bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-sky-300" size={22} />
                <p className="text-slate-200">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}