import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/config";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-forge-bg px-6 py-24">
      <div className="mx-auto max-w-[640px]">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-forge-muted transition-colors hover:text-cyan"
        >
          <ArrowLeft className="w-3 h-3" /> Volver
        </Link>

        <h1 className="mb-3 text-xl font-semibold tracking-tight text-forge-text md:text-2xl">
          Términos de Servicio
        </h1>
        <p className="mb-8 text-xs text-forge-muted">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-forge-muted">
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">1. Servicios</h2>
            <p>{site.name} ofrece servicios de diseño web, desarrollo, rediseño, gestión de dominios y mantenimiento técnico. Cada proyecto se rige por un acuerdo de trabajo específico acordado antes del inicio.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">2. Pagos y entregables</h2>
            <p>Los proyectos requieren un adelanto acordado antes del inicio del trabajo. El saldo restante se abona al completar los entregables definidos. Los tiempos de entrega son estimados y pueden variar según la complejidad y la rapidez de respuesta del cliente.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">3. Revisiones</h2>
            <p>Cada proyecto incluye rondas de revisión definidas en el alcance. Cambios fuera del alcance original pueden tener costo adicional.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">4. Propiedad intelectual</h2>
            <p>Al completar el pago total, el cliente recibe los derechos de uso del sitio entregado. {site.name} puede usar el proyecto como referencia en su portfolio salvo acuerdo en contrario.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">5. Limitación de responsabilidad</h2>
            <p>{site.name} no se responsabiliza por pérdidas derivadas del uso del sitio web entregado, incluyendo interrupciones del servicio de hosting de terceros.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
