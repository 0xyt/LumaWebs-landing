import { NextResponse } from "next/server";

const FORMSPREE_URL = process.env.FORMSPREE_URL || "https://formspree.io/f/xjgzlapk";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Formspree error");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
