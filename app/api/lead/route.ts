import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limit per IP (non-persistent, per instance)
const lastHitByIp = new Map<string, number>();
const COOLDOWN_MS = 15_000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const last = lastHitByIp.get(ip) || 0;
    const now = Date.now();
    if (now - last < COOLDOWN_MS) {
      return NextResponse.json({ ok: false, error: 'Rate limited' }, { status: 429 });
    }

    const body = await req.json();
    const name: string = (body.name || '').toString().trim();
    const email: string = (body.email || '').toString().trim();
    const company: string = (body.company || '').toString().trim();
    const phone: string = (body.phone || '').toString().trim();
    const interest: string = (body.interest || '').toString().trim();
    const message: string = (body.message || '').toString().trim();

    if (!name || !email || !company) {
      return NextResponse.json({ ok: false, error: 'Faltan campos obligatorios' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Email inv?lido' }, { status: 400 });
    }

    // Simulate storing the lead (replace with CRM or email provider)
    console.log('[Lead] Nuevo lead recibido', { name, email, company, phone, interest, message, ip });

    lastHitByIp.set(ip, now);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Error del servidor' }, { status: 500 });
  }
}
