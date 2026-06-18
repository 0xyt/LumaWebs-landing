import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/config";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-forge-bg px-6 py-24">
      <div className="mx-auto max-w-[640px]">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-forge-muted transition-colors hover:text-copper"
        >
          <ArrowLeft className="w-3 h-3" /> Volver
        </Link>

        <h1 className="mb-3 text-xl font-semibold tracking-tight text-forge-text md:text-2xl">
          Política de Privacidad
        </h1>
        <p className="mb-8 text-xs text-forge-muted">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-forge-muted">
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">1. Información que recopilamos</h2>
            <p>Al completar formularios de {site.name}, recopilamos: nombre, correo, número de WhatsApp y detalles del proyecto. Esta información es utilizada únicamente para responder a tu consulta.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">2. Uso de la información</h2>
            <p>Los datos recopilados se usan exclusivamente para contactar al solicitante en relación a su proyecto. No vendemos, alquilamos ni compartimos información personal con terceros.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">3. Almacenamiento</h2>
            <p>Los datos del formulario son procesados a través de servicios seguros. No almacenamos información de pago.</p>
          </section>
          <section>
            <h2 className="mb-2 text-sm font-semibold text-forge-text">4. Contacto</h2>
            <p>Para consultas sobre privacidad, escríbenos a través de WhatsApp, Instagram o al correo de contacto disponible en el sitio.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
