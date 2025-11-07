"use client";

import { useState } from 'react';

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // basic validation
    if (!data.name || !data.email || !data.company) {
      setLoading(false);
      setError('Por favor completa nombre, email y empresa.');
      return;
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || 'Error al enviar');
      setSuccess('?Gracias! Te contactaremos en breve.');
      form.reset();
    } catch (err: any) {
      setError(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card mx-auto max-w-3xl p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">Nombre completo *</label>
          <input name="name" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300" placeholder="Ej. Dra. Ana L?pez" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Email corporativo *</label>
          <input name="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300" placeholder="nombre@empresa.com" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Empresa / Centro *</label>
          <input name="company" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300" placeholder="Hospital Central" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">Tel?fono</label>
          <input name="phone" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300" placeholder="+34 600 000 000" />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Inter?s principal</label>
          <select name="interest" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300">
            <option value="">Selecciona una opci?n</option>
            <option>Material quir?rgico</option>
            <option>Descartables y esterilizaci?n</option>
            <option>Diagn?stico y monitoreo</option>
            <option>UCI y hospitalizaci?n</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Mensaje</label>
          <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300" placeholder="Cu?ntanos cantidades, marcas preferidas y plazos deseados." />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500">Al enviar aceptas ser contactado para fines comerciales.</p>
        <button disabled={loading} className="btn-primary min-w-44">
          {loading ? 'Enviando?' : 'Solicitar cotizaci?n'}
        </button>
      </div>
      {success && <div className="mt-4 rounded-lg bg-green-50 p-3 text-green-700">{success}</div>}
      {error && <div className="mt-4 rounded-lg bg-red-50 p-3 text-red-700">{error}</div>}
    </form>
  );
}
