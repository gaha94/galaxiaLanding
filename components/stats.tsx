"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "líneas principales de solución" },
  { value: "24/7", label: "presencia digital disponible" },
  { value: "100%", label: "enfoque personalizado al negocio" },
  { value: "1", label: "ecosistema para administrar y vender" },
];

export default function Stats() {
  return (
    <section id="estadisticas" className="py-24">
      <div className="section-container">
        <div className="glass-card-strong rounded-[2rem] p-8 md:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="section-subtitle">Resultados</p>
            <h2 className="section-title">
              Una propuesta tecnológica pensada para impactar
            </h2>
            <p className="mt-5 section-text">
              Combinamos diseño visual, funcionalidad y estrategia digital para
              construir soluciones que realmente ayuden a vender más y operar mejor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-4xl font-black text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-sky-200">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}