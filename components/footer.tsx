export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-slate-950/40 py-10 backdrop-blur">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <h3 className="text-lg font-black text-white">Galaxia Software SAC</h3>
          <p className="mt-1 text-sm text-slate-400">
            Tecnología para vender, administrar y crecer.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Galaxia Software SAC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}