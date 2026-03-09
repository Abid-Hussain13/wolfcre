import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-luxury-black overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="md:col-span-7 relative z-10"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-[2s]"
              />
            </div>
          </motion.div>

          <div className="md:col-span-5 md:-ml-24 relative z-20 space-y-12">
            <div className="overflow-hidden">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="text-5xl md:text-8xl font-serif text-white leading-[0.9]"
              >
                UNCOMPROMISED <br />
                <span className="italic text-luxury-gold">VISION.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              <p className="text-luxury-silver text-sm md:text-lg font-light leading-relaxed max-w-lg tracking-wide">
                At Wolf Commercial Real Estate, we define the next era of commercial architecture. Our legacy is built on fourteen years of relentless growth and uncompromising integrity in the tri-state's most competitive markets.
              </p>
              
              <div className="pt-8 grid grid-cols-2 gap-x-12 gap-y-12 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-serif text-white mb-2 italic">14+</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">Years Legacy</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-white mb-2 italic">3</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">Major Hubs</p>
                </div>
              </div>

              <div className="pt-12">
                <button className="btn-luxury">Discover Our History</button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
