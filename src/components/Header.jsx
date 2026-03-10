import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PROPERTIES', href: '/properties' },
  { name: 'TEAM', href: '/team' },
  { name: 'COMMUNITY', href: '/community' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const [openScrollY, setOpenScrollY] = useState(0)
  const [scrollDiff, setScrollDiff] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setOpenScrollY(window.scrollY)
      setScrollDiff(0)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleMenuScroll = () => {
      const diff = window.scrollY - openScrollY
      setScrollDiff(diff)
      if (Math.abs(diff) > window.innerHeight * 0.8) {
        setIsOpen(false)
      }
    }
    window.addEventListener('scroll', handleMenuScroll)
    return () => window.removeEventListener('scroll', handleMenuScroll)
  }, [isOpen, openScrollY])

  useEffect(() => setIsOpen(false), [location])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'bg-black/90 py-4 backdrop-blur-md' : 'bg-transparent py-10'
      }`}>
        <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
          <Link to="/" className="group relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-serif font-light tracking-tighter text-white group-hover:text-luxury-gold transition-colors duration-500">
                WOLF <span className="italic">COMMERCIAL</span>
              </span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.6em] text-luxury-gold -mt-1 pl-1">
                ESTABLISHED 2012
              </span>
            </motion.div>
          </Link>

          {/* Minimalist Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 text-white focus:outline-none"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-medium hidden md:block group-hover:text-luxury-gold transition-colors">Menu</span>
            <div className="flex flex-col gap-1.5 w-10">
              <div className="w-full h-[1px] bg-white group-hover:bg-luxury-gold transition-all duration-500" />
              <div className="w-2/3 h-[1px] bg-white group-hover:w-full group-hover:bg-luxury-gold transition-all duration-500" />
            </div>
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -scrollDiff }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 0.5 },
              y: { type: 'spring', damping: 30, stiffness: 200 } 
            }}
            className="fixed inset-0 bg-luxury-black z-[100] flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-6 md:right-20 text-white hover:text-luxury-gold transition-colors p-4"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <nav className="flex flex-col items-center gap-y-4 md:gap-y-6">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <Link
                      to={link.href}
                      className="text-3xl md:text-6xl font-serif text-white hover:text-luxury-gold italic tracking-tighter transition-all duration-500 flex items-end gap-6"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-7 flex gap-12 text-[9px] uppercase tracking-[0.4em] text-white/40"
            >
              <a href="#" className="hover:text-luxury-gold">Instagram</a>
              <a href="#" className="hover:text-luxury-gold">LinkedIn</a>
              <a href="#" className="hover:text-luxury-gold">Press</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
