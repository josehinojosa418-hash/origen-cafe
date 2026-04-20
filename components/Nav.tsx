'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const links = [
  { label: 'Menú', href: '#menu' },
  { label: 'Historia', href: '#historia' },
  { label: 'Origen', href: '#origen' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-negro/95 backdrop-blur-md border-b border-surface-2'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/origen_logo.png"
            alt="Origen Café"
            width={140}
            height={60}
            style={{ maxWidth: '140px', width: 'auto', height: 'auto' }}
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-xs text-crema/60 hover:text-crema tracking-[0.2em] uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-crema transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className="flex flex-col gap-6 px-6 pb-8 pt-4 bg-negro/98 border-b border-surface-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-crema/70 hover:text-crema tracking-[0.2em] uppercase transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}
