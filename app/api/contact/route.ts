import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, email, whatsapp, empresa, tipo, mensaje } = body;

    if (!nombre || !email || !tipo || !mensaje) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; background: #0a0a0a; color: #f0ede8; padding: 40px 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #141414; border: 1px solid #2a2a2a; padding: 40px;">
    <h1 style="color: #c9a84c; font-size: 24px; margin-bottom: 8px;">Nueva Solicitud de Contacto</h1>
    <p style="color: #6b6b6b; font-size: 12px; margin-bottom: 30px;">press.carmenvictoriapardo.com</p>

    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Nombre</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #f0ede8; font-size: 14px;">${nombre}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #f0ede8; font-size: 14px;">${email}</td>
      </tr>
      ${whatsapp ? `<tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">WhatsApp</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #f0ede8; font-size: 14px;">${whatsapp}</td>
      </tr>` : ""}
      ${empresa ? `<tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Empresa</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #f0ede8; font-size: 14px;">${empresa}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;">Tipo</td>
        <td style="padding: 8px 0; border-bottom: 1px solid #2a2a2a; color: #f0ede8; font-size: 14px;">${tipo}</td>
      </tr>
    </table>

    <div style="margin-top: 24px;">
      <p style="color: #c9a84c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Mensaje</p>
      <p style="color: #f0ede8; font-size: 14px; line-height: 1.7; background: #0a0a0a; padding: 16px; border-left: 2px solid #c9a84c;">${mensaje.replace(/\n/g, "<br>")}</p>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #2a2a2a;">
      <p style="color: #6b6b6b; font-size: 11px;">Carmen Victoria Pardo · press.carmenvictoriapardo.com</p>
    </div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "press@carmenvictoriapardo.com",
        to: ["cpardo@northfactoryllc.com"],
        reply_to: email,
        subject: `[CVP Press] ${tipo} — ${nombre}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
