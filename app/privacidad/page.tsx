import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#09090b] py-24 px-6">
      <div className="max-w-[640px] mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[10px] font-mono text-[#52525b] hover:text-[#a1a1aa] transition-colors uppercase tracking-widest mb-8"
        >
          <ArrowLeft className="w-3 h-3" /> Volver
        </Link>

        <h1 className="text-xl md:text-2xl font-semibold text-[#f5f5f5] tracking-tight mb-3">
          Política de Privacidad
        </h1>
        <p className="text-xs text-[#52525b] mb-8">Última actualización: Mayo 2026</p>

        <div className="space-y-8 text-sm text-[#a1a1aa] leading-relaxed">
          <section>
            <h2 className="text-sm font-semibold text-[#f5f5f5] mb-2">1. Información que recopilamos</h2>
            <p>Al completar nuestros formularios, recopilamos: nombre, número de WhatsApp, nombre del negocio y detalles del proyecto. Esta información es utilizada únicamente para responder a tu consulta.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-[#f5f5f5] mb-2">2. Uso de la información</h2>
            <p>Los datos recopilados se usan exclusivamente para contactar al solicitante en relación a su proyecto. No vendemos, alquilamos ni compartimos información personal con terceros.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-[#f5f5f5] mb-2">3. Almacenamiento</h2>
            <p>Los datos del formulario son procesados a través de servicios seguros (Tally / Formspree). No almacenamos información de pago.</p>
          </section>
          <section>
            <h2 className="text-sm font-semibold text-[#f5f5f5] mb-2">4. Contacto</h2>
            <p>Para consultas sobre privacidad, escribinos a través de WhatsApp o al correo de contacto disponible en el sitio.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
