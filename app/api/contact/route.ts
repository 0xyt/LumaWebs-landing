import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, project } = await request.json();

    if (!name || !email || !phone || !service || !project) {
      return NextResponse.json(
        { success: false, error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const formspreeUrl = process.env.FORMSPREE_URL;

    if (!formspreeUrl) {
      return NextResponse.json(
        { success: false, error: "Servicio de contacto no configurado" },
        { status: 500 }
      );
    }

    const resp = await fetch(formspreeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, service, project }),
    });

    if (!resp.ok) {
      return NextResponse.json(
        { success: false, error: "Error al enviar el mensaje" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
