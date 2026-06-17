import { site } from "@/lib/config";

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "#servicios" },
      { label: "Ejemplos", href: "#portafolio" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Página simple", href: "#servicios" },
      { label: "Página completa", href: "#servicios" },
      { label: "Mejorar una página", href: "#servicios" },
      { label: "Ayuda mensual", href: "#servicios" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos de Uso", href: "/terminos" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/20 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-sm font-semibold text-zinc-50 tracking-tight">
              {site.name}
            </span>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-[200px]">
              Páginas web claras para emprendedores y negocios locales.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase mb-3">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-800/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-zinc-500">
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};
