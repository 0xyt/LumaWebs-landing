export const Contact = () => {
  return (
    <section id="contacto" className="border-t border-forge-border/55 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-5 md:grid-cols-[0.92fr_1.08fr] md:items-end">
          <div>
            <p className="forge-kicker mb-3">Contacto</p>
            <h2 className="text-[clamp(28px,4vw,46px)] font-semibold leading-[1.1] tracking-tight text-forge-text">
              Tu web puede trabajar por ti todos los días.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-forge-muted md:text-base">
            Cuéntanos qué necesitas y te ayudamos a convertirlo en una página
            moderna, rápida y orientada a conseguir más clientes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="https://wa.me/59165947291?text=Hola%2C%20vi%20Forge%20Webs%20y%20quiero%20cotizar%20mi%20pagina%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-copper/45 bg-copper/10 p-5 transition-all duration-200 hover:border-copper-light/70 hover:bg-copper/15"
          >
            <span className="block text-base font-semibold text-forge-text">
              Cotizar por WhatsApp
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-forge-muted">
              Respuesta directa para definir alcance, tiempos y precio.
            </span>
          </a>

          <a
            href="https://www.instagram.com/adanrios.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-forge-border bg-forge-surface p-5 transition-all duration-200 hover:border-cyan/50"
          >
            <span className="block text-base font-semibold text-forge-text">
              Instagram @adanrios.dev
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-forge-muted">
              Actualizaciones, trabajos y contacto rápido.
            </span>
          </a>

          <a
            href="/contacto"
            className="rounded-xl border border-forge-border bg-forge-surface p-5 transition-all duration-200 hover:border-cyan/50"
          >
            <span className="block text-base font-semibold text-forge-text">
              Formulario completo
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-forge-muted">
              Ideal si quieres explicar tu idea con más detalle.
            </span>
          </a>

          <a
            href="https://adanlabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-forge-border bg-forge-surface p-5 transition-all duration-200 hover:border-cyan/50"
          >
            <span className="block text-base font-semibold text-forge-text">
              adanlabs.vercel.app
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-forge-muted">
              Dominio temporal visible hasta conectar el nuevo dominio.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
