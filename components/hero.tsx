"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, ShoppingCart, ReceiptText } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="section-container relative grid min-h-[88vh] items-center gap-14 py-16 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm text-sky-700 shadow-sm"
          >
            Soluciones digitales para empresas modernas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-4xl font-black leading-tight text-slate-900 md:text-6xl"
          >
            Impulsa tu negocio con{" "}
            <span className="gradient-text">software, ventas web y automatización</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            En Galaxia Software SAC desarrollamos soluciones para que tu empresa
            controle mejor sus procesos, reciba pedidos online y venda por internet
            con una imagen profesional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-xl gradient-button"
            >
              Solicitar asesoría
              <ArrowRight size={18} />
            </a>

            <a
              href="#servicios"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm"
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            <div className="glass-card rounded-2xl p-4">
              <ReceiptText className="mb-3 text-sky-600" />
              <p className="font-semibold text-slate-800">Software contable</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <MonitorSmartphone className="mb-3 text-sky-600" />
              <p className="font-semibold text-slate-800">Pedidos web</p>
            </div>
            <div className="glass-card rounded-2xl p-4">
              <ShoppingCart className="mb-3 text-sky-600" />
              <p className="font-semibold text-slate-800">Tiendas virtuales</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="absolute -right-4 bottom-4 h-32 w-32 rounded-full bg-blue-400/30 blur-3xl" />

          <div className="glass-card relative rounded-[2rem] p-6">
            <div className="rounded-[1.6rem] bg-white p-8 shadow-inner">
              <div className="mb-8 flex items-center gap-4">
                <Image
                  src="/logo-galaxia.png"
                  alt="Galaxia Software"
                  width={90}
                  height={90}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <p className="text-2xl font-extrabold text-slate-800">Galaxia Software</p>
                  <p className="text-slate-500">Tecnología para hacer crecer tu empresa</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Control de operaciones</p>
                  <p className="mt-1 text-lg font-bold text-slate-800">
                    Procesos más ordenados y eficientes
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-5 text-white shadow-lg">
                    <p className="text-sm text-white/80">Ventas online</p>
                    <p className="mt-1 text-2xl font-black">24/7</p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">Soluciones</p>
                    <p className="mt-1 text-lg font-bold text-slate-800">
                      Desktop + Web + Ecommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}