'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center bg-negro overflow-hidden grain">
      {/* Warm radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,rgba(196,98,45,0.07)_0%,transparent_70%)] pointer-events-none" />

      {/* Top thin terracota line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-terracota/40"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
        {/* Eyebrow */}
        <motion.p
          className="font-sans text-terracota text-xs tracking-[0.5em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Café de Especialidad · Roma Norte, CDMX
        </motion.p>

        {/* Main logotype */}
        <motion.h1
          className="font-playfair font-bold text-crema leading-none tracking-[-0.02em]"
          style={{ fontSize: 'clamp(5.5rem, 18vw, 16rem)' }}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          ORIGEN
        </motion.h1>

        {/* Divider line */}
        <motion.div
          className="w-20 h-px bg-terracota my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Slogan */}
        <motion.p
          className="font-playfair italic text-crema/65 text-xl md:text-2xl lg:text-3xl mb-14 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Del campo a tu taza
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          className="group relative inline-flex items-center gap-3 border border-terracota text-crema font-sans text-xs tracking-[0.35em] uppercase px-10 py-4 hover:bg-terracota transition-colors duration-400 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver Menú
          <svg
            className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-sans text-crema/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-crema/30 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
