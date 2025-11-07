export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/70">
      <div className="container-xl flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 md:flex-row">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="MediPro" className="h-6 w-6" />
          <span>MediPro Supply</span>
        </div>
        <div className="opacity-70">? {new Date().getFullYear()} ? Calidad que inspira confianza</div>
      </div>
    </footer>
  );
}
