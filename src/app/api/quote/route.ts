import { NextResponse } from "next/server";

// Stub endpoint for the quote/contact form.
// TODO: wire this to a real destination — email (e.g. Resend/SMTP),
// a CRM (e.g. HubSpot), or a database. Add spam protection (honeypot,
// rate limiting or a CAPTCHA) before going live.
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data?.name || !data?.email || !data?.message || (data?.message as string).trim().length < 5) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Replace this with your real delivery logic:
    console.log("New quote request:", data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
