import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/config";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)]">
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          maxWidth: "680px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors uppercase tracking-widest mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
        </Link>

        <h1 className="font-syne text-3xl font-black text-[var(--text-primary)] tracking-tight mb-4">
          Términos y Condiciones
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "2rem",
            fontSize: "14px",
          }}
        >
          Última actualización: Mayo 2026
        </p>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="font-syne text-lg font-semibold text-[var(--text-primary)] mb-2">
              1. Servicios
            </h2>
            <p>
              {site.name} ofrece servicios de diseño web, desarrollo, branding y
              automatización. Cada proyecto se rige por un acuerdo de trabajo
              específico acordado antes del inicio.
            </p>
          </section>

          <section>
            <h2 className="font-syne text-lg font-semibold text-[var(--text-primary)] mb-2">
              2. Pagos y entregables
            </h2>
            <p>
              Los proyectos requieren un adelanto acordado antes del inicio del
              trabajo. El saldo restante se abona al completar los entregables
              definidos. Los tiempos de entrega son estimados y pueden variar
              según la complejidad y la rapidez de respuesta del cliente.
            </p>
          </section>

          <section>
            <h2 className="font-syne text-lg font-semibold text-[var(--text-primary)] mb-2">
              3. Revisiones
            </h2>
            <p>
              Cada plan incluye un número específico de rondas de revisión.
              Cambios fuera del alcance original pueden tener costo adicional.
            </p>
          </section>

          <section>
            <h2 className="font-syne text-lg font-semibold text-[var(--text-primary)] mb-2">
              4. Propiedad intelectual
            </h2>
            <p>
              Al completar el pago total, el cliente recibe los derechos de uso
              del sitio entregado. {site.name} puede usar el proyecto como
              referencia en su portfolio salvo acuerdo en contrario.
            </p>
          </section>

          <section>
            <h2 className="font-syne text-lg font-semibold text-[var(--text-primary)] mb-2">
              5. Limitación de responsabilidad
            </h2>
            <p>
              {site.name} no se responsabiliza por pérdidas derivadas del uso
              del sitio web entregado, incluyendo interrupciones del servicio de
              hosting de terceros.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
