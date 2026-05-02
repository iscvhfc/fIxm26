const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function getDocumentos(articulo) {
  const res = await fetch(`${API_URL}/documentos?articulo=${articulo}`)
  if (!res.ok) throw new Error(`Error al cargar documentos: ${res.status}`)
  return res.json()
}
