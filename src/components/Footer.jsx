import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

const offices = [
  {
    city: 'Philadelphia',
    address: '100 North 18th Street, Suite 300, Philadelphia, PA 19103',
    phone: '(215) 799-6900'
  },
  {
    city: 'South Jersey',
    address: 'One Holtec Drive, G100, Marlton, NJ 08053',
    phone: '(856) 857-6300'
  },
  {
    city: 'New York',
    address: '745 5th Avenue, Suite 500, New York, NY 10151',
    phone: '(212) 784-6711'
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-luxury-charcoal pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="text-3xl font-bold tracking-tighter mb-8 block">
              <span className="font-serif italic text-luxury-gold">WCRE</span>
              <span className="ml-2 font-light text-luxury-silver">LUXURY</span>
            </Link>
            <p className="text-luxury-silver font-light leading-relaxed mb-8">
              Redefining the standard of commercial excellence across the tri-state area and beyond.
            </p>
            <div className="flex gap-6 text-luxury-silver">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {offices.map((office) => (
            <div key={office.city}>
              <h4 className="text-lg font-serif mb-6 text-luxury-gold">{office.city}</h4>
              <p className="text-luxury-silver font-light text-sm leading-relaxed mb-4">
                {office.address}
              </p>
              <p className="text-white font-medium text-sm">{office.phone}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs uppercase tracking-widest text-luxury-silver font-light">
            © 2026 Wolf Commercial Real Estate | CORFAC International
          </p>
          <div className="flex gap-12 text-xs uppercase tracking-[0.2em] text-luxury-silver">
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
