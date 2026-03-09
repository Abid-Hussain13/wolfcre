import { motion } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    title: 'OFFICE',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    number: '01'
  },
  {
    title: 'RETAIL',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
    number: '02'
  },
  {
    title: 'INDUSTRIAL',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    number: '03'
  },
  {
    title: 'MEDICAL',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    number: '04'
  }
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="section-padding bg-luxury-dark border-y border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-6xl md:text-9xl font-serif text-white italic leading-[0.8]"
          >
            OUR <br />
            SPECIALTIES.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-luxury-silver text-xs uppercase tracking-[0.5em] max-w-sm mb-4"
          >
            Elite consulting for the tri-state's most demanding environments.
          </motion.p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex items-center py-12 border-b border-white/10 cursor-pointer overflow-hidden"
            >
              {/* Animated Background Reveal */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-white origin-left z-0"
              />

              <div className="relative z-10 container mx-auto flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-12">
                  <span className="text-[10px] font-light text-luxury-gold group-hover:text-luxury-black transition-colors duration-500">
                    {service.number}
                  </span>
                  <h3 className="text-4xl md:text-7xl font-serif text-white group-hover:text-luxury-black transition-colors duration-500 tracking-tighter">
                    {service.title}
                  </h3>
                </div>
                
                <div className="hidden lg:block w-96 h-0 group-hover:h-56 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
