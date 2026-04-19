'use client'

import { motion } from 'framer-motion'

const horarios = [
  { dia: 'Lunes – Viernes', hora: '7:00 – 21:00' },
  { dia: 'Sábado', hora: '8:00 – 22:00' },
  { dia: 'Domingo', hora: '9:00 – 20:00' },
]

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-36 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
          {/* Left: Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-6">Encuéntranos</p>
            <h2 className="font-playfair text-crema leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Dónde<br />estamos
            </h2>
            <div className="w-12 h-px bg-terracota mb-10" />

            <address className="font-sans not-italic space-y-2 mb-10">
              <p className="text-xl text-crema font-medium">Orizaba 101</p>
              <p className="text-crema/60">Colonia Roma Norte</p>
              <p className="text-crema/60">Ciudad de México, 06700</p>
              <p className="text-crema/60 pt-2">
                <a
                  href="tel:+525500000000"
                  className="hover:text-terracota transition-colors duration-200"
                >
                  +52 55 0000 0000
                </a>
              </p>
              <p className="text-crema/60">
                <a
                  href="mailto:hola@origencafe.mx"
                  className="hover:text-terracota transition-colors duration-200"
                >
                  hola@origencafe.mx
                </a>
              </p>
            </address>

            {/* Map placeholder */}
            <motion.div
              className="relative w-full h-52 border border-surface-2 group hover:border-terracota/30 transition-colors duration-500 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Grid pattern for map feel */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(#f5f0e8 1px, transparent 1px), linear-gradient(90deg, #f5f0e8 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-2 h-2 rounded-full bg-terracota mx-auto mb-3" />
                  <p className="font-sans text-crema/20 text-xs tracking-[0.3em] uppercase">
                    Roma Norte · CDMX
                  </p>
                  <p className="font-sans text-crema/10 text-[10px] tracking-widest mt-1">
                    19.4194° N, 99.1654° O
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Hours */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-6">Horarios</p>
            <h2 className="font-playfair text-crema leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Cuando<br />nos visites
            </h2>
            <div className="w-12 h-px bg-terracota mb-10" />

            <div className="space-y-0">
              {horarios.map((h, i) => (
                <motion.div
                  key={h.dia}
                  className="flex items-center justify-between py-6 border-b border-surface-2 group hover:border-terracota/20 transition-colors duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                >
                  <span className="font-sans text-crema/60 text-sm group-hover:text-crema/80 transition-colors duration-300">
                    {h.dia}
                  </span>
                  <span className="font-playfair text-crema text-xl group-hover:text-terracota transition-colors duration-300">
                    {h.hora}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Extra note */}
            <motion.div
              className="mt-10 p-6 border border-surface-2 bg-surface/30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <p className="font-sans text-crema/40 text-xs leading-relaxed">
                Aceptamos pedidos para llevar. Ofrecemos también granos en bolsa para brew en casa.
                Pregunta por nuestras suscripciones mensuales de café de temporada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
