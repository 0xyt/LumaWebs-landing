import { site } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/20 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-sm font-semibold text-zinc-50 tracking-tight">
              {site.name}
            </span>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-[180px]">
              Desarrollo web a medida, diseño minimalista y optimización técnica.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "#servicios" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Proceso", href: "#proceso" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
              Servicios
            </h4>
            <ul className="space-y-2">
              {["Desarrollo Web", "Rediseño", "Dominios", "Mantenimiento"].map((s) => (
                <li key={s}>
                  <a href="#servicios" className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Política de Privacidad", href: "/privacidad" },
                { label: "Términos de Uso", href: "/terminos" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/20 text-center">
          <p className="text-[11px] text-zinc-500">
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
