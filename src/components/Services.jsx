import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const services = [
  {
    title: 'OFFICE',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    number: '01',
    description: 'High-performance workspace solutions for the modern enterprise.'
  },
  {
    title: 'RETAIL',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
    number: '02',
    description: 'Premier destinations for the most discerning brands.'
  },
  {
    title: 'INDUSTRIAL',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    number: '03',
    description: 'Strategic logistics and manufacturing hubs at the core of commerce.'
  },
  {
    title: 'MEDICAL',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    number: '04',
    description: 'Specialized healthcare environments for advanced patient care.'
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="section-padding bg-luxury-dark border-y border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 md:mb-32 gap-8 md:gap-12">
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-8xl lg:text-9xl 3xl:text-[12rem] font-serif text-white italic leading-[0.85] md:leading-[0.8]"
          >
            OUR <br />
            SPECIALTIES.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-luxury-silver text-[10px] md:text-xs 3xl:text-base uppercase tracking-[0.5em] max-w-xs md:max-w-sm mb-2 md:mb-4"
          >
            Elite consulting for the tri-state's most demanding environments.
          </motion.p>
        </div>

        <div className="space-y-0">
          {services.map((service, index) => {
            const isActive = activeIndex === index
            
            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative border-b border-white/10 cursor-pointer overflow-hidden"
              >
                <div className="py-10 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-500">
                  <div className="flex items-center gap-8 md:gap-12">
                    <span className={`text-[10px] font-light transition-colors duration-500 ${isActive ? 'text-luxury-gold scale-110' : 'text-luxury-gold/40'}`}>
                      {service.number}
                    </span>
                    <h3 className={`text-4xl md:text-7xl font-serif tracking-tighter transition-all duration-500 ${isActive ? 'text-luxury-gold italic translate-x-4 md:translate-x-8' : 'text-white'}`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Mobile Content Reveal */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="lg:hidden overflow-hidden mt-6"
                      >
                        <div className="aspect-[16/9] w-full mb-6">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover grayscale brightness-90"
                          />
                        </div>
                        <p className="text-luxury-silver text-sm font-light leading-relaxed tracking-wide pb-4">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Desktop Content Reveal */}
                  <div className={`hidden lg:block overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? 'w-96 h-56 opacity-100' : 'w-0 h-0 opacity-0'}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700 pointer-events-auto"
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
