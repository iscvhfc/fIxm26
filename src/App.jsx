import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Articulo69 from './pages/Articulo69'
import Articulo77 from './pages/Articulo77'
import Articulo78 from './pages/Articulo78'
import NotFound from './pages/NotFound'

const pageTitles = {
  '/': 'Inicio | Sindicato de Ixmiquilpan',
  '/Articulo69': 'Artículo 69 | Sindicato de Ixmiquilpan',
  '/Articulo77': 'Artículo 77 | Sindicato de Ixmiquilpan',
  '/Articulo78': 'Artículo 78 | Sindicato de Ixmiquilpan',
}

function TitleUpdater() {
  const location = useLocation()
  useEffect(() => {
    document.title = pageTitles[location.pathname] || 'Sindicato de Ixmiquilpan'
  }, [location])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <TitleUpdater />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Articulo69" element={<Articulo69 />} />
            <Route path="/Articulo77" element={<Articulo77 />} />
            <Route path="/Articulo78" element={<Articulo78 />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
