export default function Footer() {
  return (
    <footer className="bg-[#1a2a3a] text-white/70 text-sm py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Sindicato de Trabajadores al Servicio de Ixmiquilpan, Hidalgo.</p>
        <p className="mt-1">Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
