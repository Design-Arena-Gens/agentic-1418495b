"use client";
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Disponibilidad garantizada',
    desc: 'Forecast colaborativo y stock de seguridad por familia de producto para evitar quiebres.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Trazabilidad completa',
    desc: 'Lotes, caducidades y n?mero de serie con documentaci?n y fichas t?cnicas disponibles.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="#2563eb" strokeWidth="2"/><path d="M9 12h6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/></svg>
    )
  },
  {
    title: 'Log?stica ?gil',
    desc: 'Cobertura nacional con entregas 24-72h, pedidos urgentes y ventana de entregas dedicada.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 13h13l3-5h2" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="17" r="2" fill="#2563eb"/><circle cx="17" cy="17" r="2" fill="#2563eb"/></svg>
    )
  }
];

export default function Features() {
  return (
    <section className="py-24">
      <div className="container-xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge mb-4">Resultados que importan</span>
          <h2 className="text-3xl font-semibold md:text-4xl">Eficiencia, seguridad y control en cada pedido</h2>
          <p className="mt-4 text-slate-600">Dise?ado para las exigencias de quir?fano y la presi?n del d?a a d?a.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                {it.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
