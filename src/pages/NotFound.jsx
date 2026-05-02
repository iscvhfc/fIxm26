import { Button } from '@heroui/react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="text-6xl font-bold text-[#1a2a3a]">404</h1>
      <p className="mt-4 text-xl text-[#34495e]">Página no encontrada</p>
      <Button as={Link} to="/" color="primary" className="mt-8">
        Regresar al inicio
      </Button>
    </div>
  )
}
