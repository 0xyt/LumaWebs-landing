import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/config";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#09090b] py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-zinc-50 tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm text-zinc-500 mb-8">
          Última actualización: Mayo 2026
        </p>

        <div className="space-y-8 text-sm text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-zinc-50 mb-2">
              1. Información que recopilamos
            </h2>
            <p>
              Al completar nuestros formularios, recopilamos: nombre, número de WhatsApp, nombre del negocio y detalles del proyecto. Esta información es utilizada únicamente para responder a tu consulta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-50 mb-2">
              2. Uso de la información
            </h2>
            <p>
              Los datos recopilados se usan exclusivamente para contactar al solicitante en relación a su proyecto. No vendemos, alquilamos ni compartimos información personal con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-50 mb-2">
              3. Almacenamiento
            </h2>
            <p>
              Los datos del formulario son procesados a través de servicios seguros (Tally / Formspree). No almacenamos información de pago.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-50 mb-2">
              4. Contacto
            </h2>
            <p>
              Para consultas sobre privacidad, escribinos a través de WhatsApp o al correo de contacto disponible en el sitio.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
