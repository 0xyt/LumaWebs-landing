import { site } from "@/lib/config";

const legalLinks = [
  { label: "Términos y Condiciones", href: "/terminos" },
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Política de Cookies", href: "/privacidad" },
  { label: "Aviso Legal", href: "/terminos" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-zinc-50 text-lg font-semibold tracking-tight">
              {site.name}
            </span>
            <p className="text-xs text-zinc-500 mt-1">
              &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-200"
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
