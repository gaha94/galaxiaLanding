"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-xl"
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
            <p className="text-lg font-extrabold tracking-wide text-slate-800">
              GALAXIA
            </p>
            <p className="text-xs tracking-[0.25em] text-slate-500">
              SOFTWARE SAC
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#servicios" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Servicios
          </a>
          <a href="#beneficios" className="text-sm font-medium text-slate-700 hover:text-sky-600">
            Beneficios
          </a>
          <a href="#contacto" className="text-sm font-medium text-slate-700 hover:text-sky-600">
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