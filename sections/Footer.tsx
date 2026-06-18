const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "#servicios" },
      { label: "Precios", href: "#precios" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Landing pages", href: "#servicios" },
      { label: "Sitios web profesionales", href: "#servicios" },
      { label: "Rediseño web", href: "#servicios" },
      { label: "Presencia digital", href: "#servicios" },
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
    <footer className="border-t border-forge-border/55 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <span className="text-base font-semibold tracking-tight text-forge-text">
              Forge Webs
            </span>
            <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-forge-muted">
              Diseño web freelance para negocios que quieren verse más
              profesionales y recibir mejores consultas.
            </p>
            <a
              href="https://forgewebs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-copper transition-colors hover:text-forge-text"
            >
              forgewebs.vercel.app
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-forge-muted">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-forge-muted transition-colors duration-200 hover:text-copper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-forge-border/65 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11px] text-forge-muted">
            &copy; 2026 Forge Webs. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/59165947291"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-forge-muted transition-colors hover:text-copper"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/adanrios.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-forge-muted transition-colors hover:text-copper"
            >
              @adanrios.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
