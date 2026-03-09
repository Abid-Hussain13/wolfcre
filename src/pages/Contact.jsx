import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const offices = [
  {
    city: 'Philadelphia',
    address: '100 North 18th Street, Suite 300, Philadelphia, PA 19103',
    phone: '(215) 799-6900',
    email: 'philly@wcreluxury.com'
  },
  {
    city: 'South Jersey',
    address: 'One Holtec Drive, G100, Marlton, NJ 08053',
    phone: '(856) 857-6300',
    email: 'nj@wcreluxury.com'
  },
  {
    city: 'New York',
    address: '745 5th Avenue, Suite 500, New York, NY 10151',
    phone: '(212) 784-6711',
    email: 'nyc@wcreluxury.com'
  }
]

export default function Contact() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-12 italic leading-tight">
              Let's <br /> <span className="text-luxury-gold not-italic font-bold">Connect.</span>
            </h1>
            <p className="text-luxury-silver text-xl font-light mb-16 max-w-lg leading-relaxed">
              Whether you are looking to acquire, lease, or manage commercial assets, our team of experts is ready to assist you.
            </p>

            <div className="space-y-16">
              {offices.map((office) => (
                <div key={office.city} className="group">
                  <h3 className="text-2xl font-serif mb-6 text-luxury-gold flex items-center gap-4">
                    <MapPin size={20} />
                    {office.city}
                  </h3>
                  <div className="space-y-4 pl-9 border-l border-white/10 group-hover:border-luxury-gold transition-colors duration-500">
                    <p className="text-luxury-silver font-light leading-relaxed">{office.address}</p>
                    <div className="flex flex-col gap-2">
                      <a href={`tel:${office.phone}`} className="text-white hover:text-luxury-gold transition-colors flex items-center gap-3">
                        <Phone size={14} className="text-luxury-gold" /> {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="text-white hover:text-luxury-gold transition-colors flex items-center gap-3">
                        <Mail size={14} className="text-luxury-gold" /> {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-luxury-charcoal p-12 md:p-16 border border-white/5"
          >
            <h2 className="text-3xl font-serif mb-12">Submit an Inquiry</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Subject</label>
                <select className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-light text-luxury-silver">
                  <option className="bg-luxury-black">General Inquiry</option>
                  <option className="bg-luxury-black">Property Leasing</option>
                  <option className="bg-luxury-black">Asset Management</option>
                  <option className="bg-luxury-black">WCRE Foundation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-luxury-gold">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-luxury-gold transition-colors font-light resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-luxury-gold text-luxury-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-4">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
