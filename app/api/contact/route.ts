import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const required = ["name", "company", "email", "message"];
    for (const key of required) {
      if (!body?.[key] || typeof body[key] !== "string") {
        return NextResponse.json(
          { ok: false, error: `Missing ${key}` },
          { status: 400 },
        );
      }
    }

    // Plug in your delivery provider here (Resend, Postmark, webhook, etc.).
    // For now we log to the server console so the form is wired end-to-end.
    console.log("[contact]", {
      at: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 },
    );
  }
}
