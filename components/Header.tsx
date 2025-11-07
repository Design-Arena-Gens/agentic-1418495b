import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="container-xl flex h-16 items-center justify-between">
        <Link href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="MediPro" className="h-7 w-7" />
          <span className="font-semibold">MediPro Supply</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex text-sm text-slate-700">
          <a href="#diferenciales" className="hover:text-slate-900">Diferenciales</a>
          <a href="#contacto" className="hover:text-slate-900">Contacto</a>
          <a href="#contacto" className="btn-primary">Solicitar cotizaci?n</a>
        </nav>
        <a href="#contacto" className="md:hidden btn-primary text-sm">Cotizar</a>
      </div>
    </header>
  );
}
