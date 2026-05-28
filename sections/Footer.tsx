import { site } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm font-semibold text-zinc-50 tracking-tight">
              {site.name}
            </span>
            <p className="text-xs text-zinc-500 mt-1">
              &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="/privacidad" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Términos de Servicio
            </a>
            <a href={`mailto:${site.email}`} className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
