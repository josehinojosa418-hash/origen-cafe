'use client'

import { motion } from 'framer-motion'

export default function Historia() {
  return (
    <section id="historia" className="relative py-36 px-6 bg-negro overflow-hidden">
      {/* Decorative large background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-playfair font-bold text-crema/[0.015] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(8rem, 20vw, 20rem)' }}
        aria-hidden="true"
      >
        CAFÉ
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Label */}
        <motion.p
          className="section-label mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          Nuestra Historia
        </motion.p>

        {/* Title */}
        <motion.h2
          className="font-playfair italic text-crema mb-10 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Una pregunta,<br />un viaje.
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-14 h-px bg-terracota mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Body */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-sans text-crema/75 text-lg leading-relaxed">
            Origen nació de una pregunta sencilla: ¿a qué sabe México cuando lo cultivas con
            paciencia? Cada taza es el resultado de manos que conocen la tierra, de alturas donde
            el café madura despacio y perfecto.
          </p>
          <p className="font-sans text-crema/55 text-base leading-relaxed">
            Del campo a tu taza — sin intermediarios, sin prisa, sin concesiones. Solo el sabor
            honesto de lo que crece entre nubes, montañas y el silencio de las regiones más
            extraordinarias de México.
          </p>
        </motion.div>

        {/* Decorative quote */}
        <motion.blockquote
          className="mt-14 pl-6 border-l border-terracota/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="font-playfair italic text-crema/40 text-xl leading-relaxed">
            "El café no es solo una bebida.<br />Es la historia de la tierra que lo vio nacer."
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
