import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-luxury-black overflow-hidden relative border-b border-white/5">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-luxury-charcoal/10 -z-0" />
      
      <div className="container mx-auto px-6 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="mb-24 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-8"
            >
              <span className="text-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium">
                Established 2012
              </span>
              <div className="h-[1px] w-20 bg-luxury-gold/30" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] uppercase tracking-tighter"
            >
              Uncompromised <br />
              <span className="italic text-luxury-gold">Vision.</span>
            </motion.h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Descriptive Text & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 space-y-16"
            >
              <div className="space-y-8">
                <p className="text-luxury-silver text-lg md:text-xl font-light leading-relaxed tracking-wide">
                  At Wolf Commercial Real Estate, we define the next era of commercial architecture. Our legacy is built on fourteen years of relentless growth and uncompromising integrity.
                </p>
                <p className="text-luxury-silver/60 text-sm md:text-base font-light leading-relaxed max-w-md">
                  We specialize in high-stakes environments where precision meets performance. Every project is an opportunity to redefine the tri-state's skyline.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-serif text-white italic">14+</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">Years Legacy</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-serif text-white italic">3</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-gold">Key Markets</p>
                </div>
              </div>

              <div className="pt-4">
                <button className="btn-luxury group flex items-center gap-6 !px-0 border-none hover:bg-transparent text-white hover:text-luxury-gold transition-colors duration-500">
                  <span className="text-[10px] uppercase tracking-[0.5em]">Explore Our History</span>
                  <div className="w-12 h-[1px] bg-white group-hover:bg-luxury-gold group-hover:w-20 transition-all duration-500" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Architectural Image (Smaller, more framed) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="lg:col-span-7"
            >
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute inset-0 border border-luxury-gold/20 translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6" />
                
                <div className="aspect-[16/11] overflow-hidden rounded-sm bg-luxury-charcoal">
                  <img
                    src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
                    alt="Architecture"
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                </div>

                {/* Vertical Text Accent */}
                <div className="absolute top-0 -right-8 h-full hidden xl:flex items-center">
                  <span className="rotate-90 text-[10px] uppercase tracking-[1em] text-white/20 whitespace-nowrap origin-center">
                    Architectural Excellence
                  </span>
                </div>
              </div>

              {/* Caption/Secondary Info */}
              <div className="mt-12 flex justify-end">
                <div className="max-w-[200px] text-right">
                  <span className="block text-luxury-gold text-[10px] uppercase tracking-widest mb-2 font-medium">Headquarters</span>
                  <p className="text-[10px] text-luxury-silver/40 uppercase leading-loose tracking-[0.2em]">
                    Philadelphia, PA <br />
                    New York City, NY <br />
                    Marlton, NJ
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
