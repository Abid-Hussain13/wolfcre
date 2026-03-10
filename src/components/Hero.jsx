import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={container} className="relative h-screen min-h-[600px] md:h-[110vh] w-full flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Cinematic Background Layer */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-luxury-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Architecture"
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000"
        />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container relative z-20 text-center px-6"
      >
        <div className="overflow-hidden mb-6 md:mb-8">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-luxury-gold uppercase tracking-[0.6em] md:tracking-[1em] text-[10px] md:text-xs font-light"
          >
            Since 2012 | Redefining Excellence
          </motion.p>
        </div>

        <div className="overflow-hidden mb-8 md:mb-12">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] 3xl:text-[14rem] font-serif font-light text-white leading-[0.9] md:leading-[0.85] tracking-tighter"
          >
            THE <span className="italic">WOLF</span> <br />
            <span className="text-luxury-gold italic">STANDARD.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center mt-12 md:mt-20"
        >
          <Link to="/properties" className="btn-luxury border-luxury-gold text-luxury-gold hover:bg-luxury-gold w-full sm:w-auto text-center">
            The Portfolio
          </Link>
          <Link to="/services" className="btn-luxury w-full sm:w-auto text-center">
            Our Approach
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer hidden md:block"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-[1px] h-12 md:h-20 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
