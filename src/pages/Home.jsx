import { Button } from '@heroui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1a2a3a] text-white py-24 px-4 overflow-hidden">
        <img
          src="/banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="block">Sindicato de Trabajadores al Servicio</span>
            <span className="block mt-2 text-blue-300">de Ixmiquilpan, Hidalgo</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Comprometidos con la defensa y bienestar de nuestros trabajadores.
          </p>
          <div className="mt-8">
            <Button
              as={Link}
              to="/Articulo69"
              color="primary"
              size="lg"
              className="font-semibold"
            >
              Ver Transparencia
            </Button>
          </div>
        </div>
      </section>

      {/* Cards de artículos */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-6 md:grid-cols-3">
        <ArticuloCard
          title="Artículo 69"
          description="Consulta la información de obligaciones de transparencia conforme al Artículo 69 de la Ley de Transparencia."
          href="/Articulo69"
        />
        <ArticuloCard
          title="Artículo 77"
          description="Información sobre los sindicatos conforme al Artículo 77 de la Ley General de Transparencia y Acceso a la Información."
          href="/Articulo77"
        />
        <ArticuloCard
          title="Artículo 78"
          description="Conoce los requisitos y obligaciones de afiliación al sindicato conforme al Artículo 78."
          href="/Articulo78"
        />
      </section>
    </div>
  )
}

function ArticuloCard({ title, description, href }) {
  return (
    <Link
      to={href}
      className="block outline-none !no-underline focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
    >
      <div className="h-full border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
        <h2 className="text-xl font-bold text-[#1a2a3a] mb-3">{title}</h2>
        <p className="text-[#34495e] text-sm leading-relaxed">{description}</p>
        <span className="inline-block mt-4 text-blue-600 text-sm font-medium">Ver más →</span>
      </div>
    </Link>
  )
}
