const loopItems = [
  "Diseño claro",
  "Mobile primero",
  "Copy que vende",
  "WhatsApp visible",
  "Carga rápida",
  "Sin plantilla genérica",
];

const stats = [
  { value: "1", label: "persona detrás del proyecto" },
  { value: "3", label: "paquetes simples para empezar" },
  { value: "24h", label: "respuesta objetivo en días hábiles" },
];

export const StudioStrip = () => {
  return (
    <section className="relative border-y border-black/10 bg-white py-5">
      <div className="overflow-hidden border-y border-black/10 bg-forge-text py-3 text-white">
        <div className="forge-marquee">
          {[...loopItems, ...loopItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-copper-light" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:py-10">
        <div className="rounded-[28px] border border-black/10 bg-forge-bg p-6 handmade-shadow md:p-8">
          <p className="forge-kicker mb-3">Mi forma de trabajar</p>
          <h2 className="max-w-2xl text-[clamp(26px,4vw,48px)] font-semibold leading-[1.03] tracking-tight text-forge-text">
            No vendo “una web”.
            <span className="living-line ml-2">construyo una primera impresión.</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
            >
              <span className="text-3xl font-semibold tracking-tight text-copper">
                {stat.value}
              </span>
              <span className="max-w-[150px] text-right text-xs leading-relaxed text-forge-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
