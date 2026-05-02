import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Artículo 69', href: '/Articulo69' },
  { label: 'Artículo 77', href: '/Articulo77' },
  { label: 'Artículo 78', href: '/Articulo78' },
  {
    label: 'Plataforma Nacional de Transparencia',
    href: 'https://www.plataformadetransparencia.org.mx',
    external: true,
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#1a2a3a] text-white"
      maxWidth="xl"
    >
      {/* Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img src="/icon-logo.svg" alt="Sindicato Ixmiquilpan Logo" className="h-8 w-8" />
            <span className="font-bold text-white text-lg">STM Ixmiquilpan</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navLinks.map((link) =>
          link.external ? (
            <NavbarItem key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm"
              >
                {link.label}
              </a>
            </NavbarItem>
          ) : (
            <NavbarItem key={link.href} isActive={location.pathname === link.href}>
              <Link
                to={link.href}
                className={`text-sm ${location.pathname === link.href ? 'text-white font-semibold' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu className="bg-[#1a2a3a] pt-4">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-base py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                to={link.href}
                className={`text-base py-2 block ${location.pathname === link.href ? 'text-white font-semibold' : 'text-white/80'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  )
}
