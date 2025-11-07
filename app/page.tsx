"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import LeadForm from '../components/LeadForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-xl pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="badge mb-6">
                <span className="h-2 w-2 rounded-full bg-success" />
                Stock verificado y entrega ?gil
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Material m?dico y quir?rgico que impulsa el rendimiento de tu instituci?n
              </h1>
              <p className="mt-6 text-lg text-slate-600 md:text-xl">
                Reduce mermas, garantiza disponibilidad y eleva la seguridad del paciente con un proveedor B2B que combina calidad certificada, precios competitivos y asesor?a especializada.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contacto" className="btn-primary">Solicitar cotizaci?n</a>
                <a href="#diferenciales" className="btn-ghost">Ver diferenciales</a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-6 text-center text-sm text-slate-600">
                <div className="card p-4">
                  <div className="text-2xl font-semibold text-slate-900">+1.2M</div>
                  Unidades entregadas
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-semibold text-slate-900">98.7%</div>
                  ?rdenes a tiempo
                </div>
                <div className="card p-4">
                  <div className="text-2xl font-semibold text-slate-900">24-72h</div>
                  Entrega nacional
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card relative overflow-hidden p-4 md:p-6"
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-200 blur-3xl" />
                <Image
                  alt="Equipo m?dico premium"
                  src="/hero-devices.svg"
                  width={900}
                  height={700}
                  className="relative mx-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <TrustBar />
      </section>

      {/* Features */}
      <Features />

      {/* Diferenciales */}
      <section id="diferenciales" className="py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge mb-4">Por qu? los clientes nos eligen</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Dise?ado para operaciones cr?ticas, no para complicaciones</h2>
            <p className="mt-4 text-slate-600">Difer?nciate con un partner que entiende tus indicadores: disponibilidad, trazabilidad y eficiencia log?stica.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Calidad certificada',
                desc: 'Cumplimiento de normativas ISO y CE. Lotes trazables y fichas t?cnicas disponibles.'
              },
              {
                title: 'Pricing competitivo',
                desc: 'Acuerdos marco y volumen escalable sin sorpresas. Optimiza costo total de propiedad.'
              },
              {
                title: 'Soporte experto',
                desc: 'Ingenier?a cl?nica y consultor?a de sustituci?n. Respuesta en menos de 2 horas.'
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="contacto" className="bg-slate-50 py-24">
        <div className="container-xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge mb-4">Hablemos</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Obt?n una propuesta en 24 horas</h2>
            <p className="mt-4 text-slate-600">Cu?ntanos tus necesidades y un especialista te contactar? con precios, disponibilidad y opciones equivalentes.</p>
          </div>
          <div className="mt-10">
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
