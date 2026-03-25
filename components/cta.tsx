"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-gradient-to-r from-sky-500 to-blue-700 px-8 py-14 text-center text-white shadow-2xl md:px-16"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
            Da el siguiente paso
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-black md:text-5xl">
            Lleva tu empresa a otro nivel con una solución digital profesional
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Conversemos sobre lo que necesita tu negocio y construyamos una solución
            tecnológica alineada con tus objetivos.
          </p>

          <a
            href="#contacto"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-sky-700 shadow-lg"
          >
            Quiero más información
          </a>
        </motion.div>
      </div>
    </section>
  );
}