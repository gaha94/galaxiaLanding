"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[2rem] p-8"
          >
            <p className="section-subtitle">Contacto</p>
            <h2 className="section-title">
              Hablemos sobre la solución que necesita tu empresa
            </h2>
            <p className="mt-5 section-text">
              Cuéntanos qué deseas implementar y te ayudaremos a definir una propuesta
              tecnológica alineada con tu negocio.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">Correo</p>
                  <p className="text-slate-300">ventas@galaxiasoftware.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-slate-300">+51 922 330 782</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-400/10 p-3 text-sky-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-white">Ubicación</p>
                  <p className="text-slate-300">Huancayo, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-card-strong rounded-[2rem] p-8"
          >
            <form action="#" className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className="input-dark"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nombre de tu empresa"
                    className="input-dark"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="correo@empresa.com"
                    className="input-dark"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+51 ..."
                    className="input-dark"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Servicio de interés
                </label>
                <select name="service" className="input-dark">
                  <option value="">Selecciona una opción</option>
                  <option value="software-contable">Software contable</option>
                  <option value="pedidos-web">Toma de pedidos web</option>
                  <option value="tienda-virtual">Tienda virtual</option>
                  <option value="solucion-integral">Solución integral</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  placeholder="Cuéntanos qué necesitas para tu negocio..."
                  className="textarea-dark"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl px-6 py-3 font-semibold text-white shadow-xl gradient-button"
              >
                Enviar solicitud
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}