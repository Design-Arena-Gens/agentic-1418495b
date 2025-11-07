import Image from 'next/image';

const logos = [
  { src: '/logos/clinicare.svg', alt: 'Clinicare' },
  { src: '/logos/hospi-plus.svg', alt: 'Hospi+' },
  { src: '/logos/medsys.svg', alt: 'MedSys' },
  { src: '/logos/biocare.svg', alt: 'BioCare' },
  { src: '/logos/cardia.svg', alt: 'Cardia' },
];

export default function TrustBar() {
  return (
    <div className="border-y border-slate-200/60 bg-white/70">
      <div className="container-xl py-8">
        <div className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
          Elegidos por hospitales, cl?nicas y distribuidores l?deres
        </div>
        <div className="mt-6 grid grid-cols-2 items-center gap-8 md:grid-cols-5">
          {logos.map((l) => (
            <div key={l.alt} className="flex items-center justify-center opacity-70 grayscale transition hover:opacity-100">
              <Image src={l.src} alt={l.alt} width={140} height={36} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
