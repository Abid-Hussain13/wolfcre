import { motion } from 'framer-motion'

const properties = [
  {
    title: 'THE EXCHANGE',
    location: 'PHILLY, PA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    price: '$2.5M',
    size: 'lg'
  },
  {
    title: 'GLARE MEDICAL',
    location: 'MARLTON, NJ',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
    price: '$8.7M',
    size: 'sm'
  },
  {
    title: 'VANTAGE POINT',
    location: 'NEW YORK, NY',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    price: '$12.0M',
    size: 'sm'
  }
]

export default function Properties() {
  return (
    <section id="properties" className="section-padding bg-luxury-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-8xl 3xl:text-[10rem] font-serif text-white mb-8 tracking-tighter leading-[0.9]">
              CURATED <br />
              <span className="italic text-luxury-gold">COLLECTION.</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-luxury-silver text-[10px] md:text-xs 3xl:text-base uppercase tracking-[0.4em] md:mt-4 leading-relaxed max-w-xs 3xl:max-w-md"
          >
            Exclusively managed assets for the most discerning portfolios.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {properties.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.76, 0, 0.24, 1] }}
              className={`group flex flex-col ${prop.size === 'lg' ? 'md:col-span-8' : 'md:col-span-4'}`}
            >
              <div className="relative aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px] 3xl:h-[800px] overflow-hidden mb-6 md:mb-8">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2.5s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-700" />
                
                <div className="absolute bottom-8 left-8 flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-bold">
                    {prop.location}
                  </span>
                  <h3 className="text-4xl font-serif text-white italic tracking-tighter">
                    {prop.title}
                  </h3>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="text-xl font-serif text-white">{prop.price}</span>
                <button className="text-[10px] uppercase tracking-[0.4em] font-medium hover:text-luxury-gold transition-all duration-300">
                  Inquire
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button className="btn-luxury">View Entire Portfolio</button>
        </motion.div>
      </div>
    </section>
  )
}
