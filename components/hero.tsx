"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, ShoppingCart, ReceiptText, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute left-[10%] top-[18%] h-44 w-44 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute right-[10%] top-[12%] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-[12%] left-[40%] h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="section-container relative grid min-h-[90vh] items-center gap-14 py-16 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-white/8 px-4 py-2 text-sm text-sky-200 shadow-sm"
          >
            <Sparkles size={16} />
            Soluciones digitales para empresas modernas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl text-4xl font-black leading-tight text-white md:text-6xl"
          >
            Transforma tu negocio con{" "}
            <span className="gradient-text">software, ecommerce y automatización</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            En Galaxia Software SAC desarrollamos plataformas visuales, potentes y
            escalables para que tu empresa venda más, se organice mejor y crezca
            con tecnología profesional.
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
              className="rounded-full border border-white/10 bg-white/6 px-6 py-3 font-semibold text-white shadow-sm"
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
            <div className="glass-card rounded-3xl p-4">
              <ReceiptText className="mb-3 text-sky-300" />
              <p className="font-semibold text-white">Software contable</p>
            </div>
            <div className="glass-card rounded-3xl p-4">
              <MonitorSmartphone className="mb-3 text-sky-300" />
              <p className="font-semibold text-white">Pedidos web</p>
            </div>
            <div className="glass-card rounded-3xl p-4">
              <ShoppingCart className="mb-3 text-sky-300" />
              <p className="font-semibold text-white">Tiendas virtuales</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="glass-card-strong relative rounded-[2rem] p-6">
            <div className="rounded-[1.7rem] border border-white/8 bg-slate-950/35 p-8">
              <div className="mb-8 flex items-center gap-4">
                <Image
                  src="/logo-galaxia.png"
                  alt="Galaxia Software"
                  width={90}
                  height={90}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <p className="text-2xl font-extrabold text-white">Galaxia Software</p>
                  <p className="text-slate-300">Tecnología que impulsa empresas</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/8 bg-white/5 p-5">
                  <p className="text-sm text-slate-300">Control total del negocio</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Procesos más rápidos, ordenados y conectados
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-gradient-to-br from-sky-400 to-blue-700 p-5 text-white shadow-lg">
                    <p className="text-sm text-white/80">Ventas online</p>
                    <p className="mt-1 text-2xl font-black">24/7</p>
                  </div>

                  <div className="rounded-3xl border border-white/8 bg-white/5 p-5">
                    <p className="text-sm text-slate-300">Ecosistema digital</p>
                    <p className="mt-1 text-lg font-bold text-white">
                      Desktop + Web + Ecommerce
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-300/15 bg-sky-400/8 p-5">
                  <p className="text-sm text-sky-200">Enfoque</p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Soluciones pensadas para vender, administrar y escalar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}