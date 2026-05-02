import { useEffect, useMemo, useState } from 'react'
import ExcelIcon from '../components/ExcelIcon'
import { getDocumentos } from '../lib/api'

const años = [2026, 2025, 2024, 2023, 2022]
const nombreTrimestre = { 1: 'Trimestre 1', 2: 'Trimestre 2', 3: 'Trimestre 3', 4: 'Trimestre 4' }

function AñoPanel({ año, porTrimestre }) {
  const [open, setOpen] = useState(año === new Date().getFullYear())

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-[#1a2a3a] text-white font-semibold text-left hover:bg-[#243748] transition-colors"
      >
        <span>Año {año}</span>
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col gap-4 p-4 bg-white">
          {[1, 2, 3, 4].map((t) => {
            const archivos = porTrimestre[t] ?? []
            if (archivos.length === 0) return null
            return (
              <div key={t}>
                <p className="text-xs font-semibold text-[#34495e] uppercase tracking-wide mb-2">
                  {nombreTrimestre[t]}
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {archivos.map((doc) => (
                    <a
                      key={doc.id}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:shadow-md hover:border-[#1a2a3a] transition-all no-underline group"
                    >
                      <ExcelIcon className="h-8 w-8 flex-shrink-0" />
                      <span className="text-[#1a2a3a] font-medium group-hover:text-[#243748] text-sm">
                        {doc.titulo}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
          {Object.values(porTrimestre).every((a) => a.length === 0) && (
            <p className="text-sm text-gray-400 italic">Sin documentos disponibles para este año.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default function Articulo77() {
  const [docs, setDocs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setIsLoading(true)
    setError(null)
    getDocumentos('77')
      .then((data) => { if (active) { setDocs(data); setIsLoading(false) } })
      .catch((err) => { if (active) { setError(err.message); setIsLoading(false) } })
    return () => { active = false }
  }, [])

  const docsPorAno = useMemo(() => {
    const grouped = {}
    for (const año of años) grouped[año] = { 1: [], 2: [], 3: [], 4: [] }
    for (const d of docs) {
      const año = Number(d.anio)
      const t = Number(d.trimestre)
      if (grouped[año] && t >= 1 && t <= 4) grouped[año][t].push(d)
    }
    return grouped
  }, [docs])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1a2a3a] mb-2">Artículo 77</h1>
      <p className="text-[#34495e] mb-8">
        Información sobre los Sindicatos conforme al Artículo 77 de la Ley General de
        Transparencia y Acceso a la Información Pública.
      </p>
      {isLoading && <p className="text-sm text-[#34495e] mb-4">Cargando documentos...</p>}
      {error && <p className="text-sm text-red-500 mb-4">Error al cargar: {error}</p>}
      <div className="flex flex-col gap-3">
        {años.map((año) => (
          <AñoPanel key={año} año={año} porTrimestre={docsPorAno[año] ?? { 1: [], 2: [], 3: [], 4: [] }} />
        ))}
      </div>
    </div>
  )
}
