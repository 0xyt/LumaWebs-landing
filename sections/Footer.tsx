import { site } from "@/lib/config";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { label: "Landing Systems", href: "#servicios" },
  { label: "Automation Systems", href: "#servicios" },
  { label: "CRM Integration", href: "#servicios" },
  { label: "Business Dashboards", href: "#servicios" },
  { label: "AI Integrations", href: "#servicios" },
];

const stack = [
  { label: "Next.js", href: "#stack" },
  { label: "Tailwind", href: "#stack" },
  { label: "Docker", href: "#stack" },
  { label: "APIs", href: "#stack" },
  { label: "PostgreSQL", href: "#stack" },
  { label: "Vercel", href: "#stack" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos y Condiciones", href: "/terminos" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[#1f1f23] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-sm font-semibold text-[#f5f5f5] tracking-tight">
              {site.name}
            </span>
            <p className="text-xs text-[#52525b] mt-2 leading-relaxed max-w-[160px]">
              Sistemas web y automatizaci&oacute;n para negocios.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase mb-3">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase mb-3">
              Servicios
            </h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase mb-3">
              Stack
            </h4>
            <ul className="space-y-2">
              {stack.map((link) => (
                <li key={link.label}>
                  <span className="text-xs text-[#a1a1aa]">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-[#52525b] tracking-widest uppercase mb-3">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#a1a1aa] hover:text-[#f5f5f5] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1f1f23]">
          <p className="text-[11px] text-[#52525b]">
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-[#52525b] hover:text-[#a1a1aa] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
