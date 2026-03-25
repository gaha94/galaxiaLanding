export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-slate-200 bg-white/70 py-14 backdrop-blur">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black text-slate-900">Galaxia Software SAC</h3>
          <p className="mt-3 max-w-sm leading-7 text-slate-600">
            Soluciones tecnológicas para empresas que buscan orden, crecimiento
            y presencia digital.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-900">Servicios</h4>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>Software contable</li>
            <li>Toma de pedidos web</li>
            <li>Tiendas virtuales</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold text-slate-900">Contacto</h4>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>ventas@galaxiasoftware.com</li>
            <li>+51 999 999 999</li>
            <li>Lima, Perú</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}