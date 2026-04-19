'use client'

import { motion } from 'framer-motion'

const bebidas = [
  {
    nombre: 'Americano Oaxaqueño',
    descripcion:
      'Granos de la Sierra Norte a 1,800 msnm. Notas a chocolate oscuro, frambuesa silvestre y un final largo que no quieres que termine.',
    precio: '$65',
    tag: 'Filtrado',
    region: 'Oaxaca',
  },
  {
    nombre: 'Cappuccino de Chiapas',
    descripcion:
      'Espresso cremoso con leche texturizada. Notas florales, vainilla y una dulzura natural que se queda mucho después del último sorbo.',
    precio: '$85',
    tag: 'Espresso',
    region: 'Chiapas',
  },
  {
    nombre: 'Cold Brew Veracruz',
    descripcion:
      '18 horas de extracción en frío con granos de Coatepec. Suave, aterciopelado, con caramelo y frutos secos. Perfecto sin azúcar.',
    precio: '$90',
    tag: 'Frío',
    region: 'Veracruz',
  },
  {
    nombre: 'Flat White de Altura',
    descripcion:
      'Doble ristretto de Oaxaca con leche al vapor perfectamente texturizada. Intenso, balanceado, sin concesiones. La pureza del espresso.',
    precio: '$80',
    tag: 'Espresso',
    region: 'Oaxaca',
  },
  {
    nombre: 'Café de Olla Moderno',
    descripcion:
      'Canela de Ceilán, piloncillo artesanal, cardamomo y café de origen único. Tradición mexicana reinventada con rigor de especialidad.',
    precio: '$70',
    tag: 'Tradicional',
    region: 'Chiapas',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Menu() {
  return (
    <section id="menu" className="py-36 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="section-label mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            Nuestras Bebidas
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              El Menú
            </motion.h2>
            <motion.p
              className="font-sans text-crema/40 text-sm max-w-xs md:text-right"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Todos los precios en pesos mexicanos. Disponible para llevar.
            </motion.p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-surface-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {bebidas.map((bebida, i) => (
            <motion.article
              key={bebida.nombre}
              className="group relative p-8 md:p-10 border-b border-r-0 md:border-r border-surface-2 last:border-b-0 hover:bg-surface/60 transition-colors duration-400 cursor-default"
              variants={cardVariants}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 w-10 h-px bg-terracota/0 group-hover:bg-terracota group-hover:w-16 transition-all duration-500" />

              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-terracota text-[10px] tracking-[0.35em] uppercase">
                    {bebida.tag}
                  </span>
                  <span className="font-sans text-crema/25 text-[10px] tracking-widest uppercase">
                    {bebida.region}
                  </span>
                </div>
                <span className="font-playfair text-2xl text-terracota">
                  {bebida.precio}
                </span>
              </div>

              <h3 className="font-playfair text-xl text-crema mb-4 group-hover:text-white transition-colors duration-300">
                {bebida.nombre}
              </h3>

              <div className="w-8 h-px bg-terracota/30 mb-5 group-hover:bg-terracota/70 transition-colors duration-300" />

              <p className="font-sans text-crema/55 text-sm leading-relaxed">
                {bebida.descripcion}
              </p>

              {/* Number watermark */}
              <div
                className="absolute bottom-6 right-8 font-playfair font-bold text-crema/[0.04] select-none pointer-events-none leading-none"
                style={{ fontSize: '4rem' }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.article>
          ))}

          {/* Filler card for grid symmetry */}
          <motion.div
            className="hidden lg:flex items-center justify-center p-10 border-b border-surface-2"
            variants={cardVariants}
          >
            <div className="text-center">
              <div className="w-px h-16 bg-gradient-to-b from-terracota/40 to-transparent mx-auto mb-6" />
              <p className="font-playfair italic text-crema/15 text-lg leading-relaxed">
                La taza perfecta<br />te espera
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
