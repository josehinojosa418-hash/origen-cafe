'use client'

import { motion } from 'framer-motion'

const regiones = [
  {
    nombre: 'Oaxaca',
    region: 'Sierra Norte',
    altitud: '1,800 msnm',
    perfil: 'Chocolate · Frambuesa · Caramelo',
    descripcion:
      'Entre nubes y pinos centenarios, los cafetales de la Sierra Norte maduran a casi dos mil metros. Sus granos, procesados por vía húmeda, revelan chocolate amargo, frambuesa y un final que perdura con elegancia.',
    numero: '01',
  },
  {
    nombre: 'Chiapas',
    region: 'Los Altos',
    altitud: '1,500 msnm',
    perfil: 'Floral · Cítrico · Vainilla',
    descripcion:
      'En las montañas de Los Altos de Chiapas, el café florece bajo la sombra de árboles centenarios. El microclima genera un perfil delicado: notas florales, cítricos brillantes y una vainilla que seduce sin esfuerzo.',
    numero: '02',
  },
  {
    nombre: 'Veracruz',
    region: 'Coatepec',
    altitud: '1,200 msnm',
    perfil: 'Caramelo · Nuez · Especias',
    descripcion:
      'La cuna del café mexicano. Tres siglos cultivando granos con historia propia: caramelo suave, frutos secos y una elegancia que no necesita esfuerzo. Coatepec es el origen de todo lo que nos inspira.',
    numero: '03',
  },
]

export default function OrigenSection() {
  return (
    <section id="origen" className="py-36 px-6 bg-negro overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            Trazabilidad Total
          </motion.p>
          <motion.h2
            className="section-title mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nuestro Origen
          </motion.h2>
          <motion.p
            className="font-sans text-crema/45 max-w-md mx-auto text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conocemos cada metro de la tierra donde crece nuestro café.
            Directo del productor, con respeto por el proceso.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {regiones.map((reg, i) => (
            <motion.article
              key={reg.nombre}
              className="group relative border border-surface-2 p-10 hover:border-terracota/25 transition-all duration-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-10 w-12 h-px bg-terracota group-hover:w-20 transition-all duration-500" />

              {/* Region info */}
              <div className="mb-8">
                <p className="font-sans text-terracota text-[10px] tracking-[0.4em] uppercase mb-2">
                  {reg.region} · {reg.altitud}
                </p>
                <h3 className="font-playfair text-4xl text-crema group-hover:text-white transition-colors duration-300">
                  {reg.nombre}
                </h3>
              </div>

              {/* Flavor profile */}
              <p className="font-sans text-crema/30 text-[11px] tracking-[0.25em] uppercase mb-6">
                {reg.perfil}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-surface-2 mb-6 group-hover:bg-terracota/40 transition-colors duration-300" />

              {/* Description */}
              <p className="font-sans text-crema/60 text-sm leading-relaxed">
                {reg.descripcion}
              </p>

              {/* Large number watermark */}
              <div
                className="absolute bottom-8 right-8 font-playfair font-bold text-crema/[0.04] select-none pointer-events-none leading-none"
                style={{ fontSize: '5rem' }}
                aria-hidden="true"
              >
                {reg.numero}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="mt-20 pt-10 border-t border-surface-2 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-sans text-crema/25 text-xs tracking-widest uppercase">
            100% granos mexicanos · Origen único · Beneficio húmedo y natural
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-terracota" />
            <p className="font-sans text-crema/25 text-xs tracking-widest uppercase">
              Cosecha directa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
