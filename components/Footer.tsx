const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Historia', href: '#historia' },
  { label: 'Origen', href: '#origen' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface-2 bg-negro">
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="font-playfair text-xl text-crema tracking-[0.25em] uppercase mb-2">
            Origen
          </p>
          <p className="font-playfair italic text-crema/30 text-sm">
            Del campo a tu taza
          </p>
          <p className="font-sans text-crema/25 text-xs mt-4 leading-relaxed">
            Café de especialidad en el corazón<br />de Roma Norte, CDMX.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="font-sans text-crema/30 text-[10px] tracking-[0.4em] uppercase mb-6">
            Navegación
          </p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-crema/55 hover:text-crema transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-crema/30 text-[10px] tracking-[0.4em] uppercase mb-6">
            Contacto
          </p>
          <div className="space-y-3 font-sans text-sm text-crema/55">
            <p>Orizaba 101, Roma Norte</p>
            <p>Ciudad de México, 06700</p>
            <a
              href="mailto:hola@origencafe.mx"
              className="block hover:text-terracota transition-colors duration-200"
            >
              hola@origencafe.mx
            </a>
            <a
              href="tel:+525500000000"
              className="block hover:text-terracota transition-colors duration-200"
            >
              +52 55 0000 0000
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-surface-2">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-crema/20 text-xs tracking-wider">
            © {new Date().getFullYear()} Origen Café. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {['Instagram', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-crema/20 text-xs hover:text-terracota transition-colors duration-200 tracking-widest uppercase"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
