const BASE = 'https://sindicatoixmiquilpan.com'

const trimestres = [
  {
    label: 'Trimestre 1 - 2024',
    file: `${BASE}/resources/documents/articulo78/2024/trimestre_1/articulo78_t1.xlsx`,
  },
  {
    label: 'Trimestre 2 - 2024',
    file: `${BASE}/resources/documents/articulo78/2024/trimestre_2/articulo78_t2.xlsx`,
  },
  {
    label: 'Trimestre 3 - 2024',
    file: `${BASE}/resources/documents/articulo78/2024/trimestre_3/articulo78_t3.xlsx`,
  },
  {
    label: 'Trimestre 4 - 2024',
    file: `${BASE}/resources/documents/articulo78/2024/trimestre_4/articulo78_t4.xlsx`,
  },
]

export default function Articulo78() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#1a2a3a] mb-2">Artículo 78</h1>
      <p className="text-[#34495e] mb-8">
        Conoce los requisitos y obligaciones de afiliación al sindicato conforme al
        Artículo 78 de la Ley de Transparencia.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {trimestres.map((t) => (
          <a
            key={t.label}
            href={t.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow no-underline"
          >
            <img
              src={`${BASE}/resources/images/icons/excel.svg`}
              alt="Excel"
              className="h-8 w-8"
            />
            <span className="text-[#1a2a3a] font-medium">{t.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
