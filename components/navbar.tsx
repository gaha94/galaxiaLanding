"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/45 backdrop-blur-xl"
    >
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo-galaxia.png"
            alt="Galaxia Software"
            width={52}
            height={52}
            className="h-12 w-12 object-contain"
          />
          <div>
            <p className="text-lg font-extrabold tracking-wide text-white">
              GALAXIA
            </p>
            <p className="text-xs tracking-[0.25em] text-slate-300">
              SOFTWARE SAC
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicios" className="text-sm font-medium text-slate-200 hover:text-sky-300">
            Servicios
          </a>
          <a href="#estadisticas" className="text-sm font-medium text-slate-200 hover:text-sky-300">
            Resultados
          </a>
          <a href="#contacto" className="text-sm font-medium text-slate-200 hover:text-sky-300">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg gradient-button"
        >
          Solicitar demo
        </a>
      </div>
    </motion.header>
  );
}