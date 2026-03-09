import { motion } from 'framer-motion'
import { Search, Filter, MapPin } from 'lucide-react'

const allProperties = [
  {
    title: 'Executive Plaza',
    location: 'Philadelphia, PA',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    price: '$2,500,000',
    type: 'Office'
  },
  {
    title: 'The Industrial Hub',
    location: 'South Jersey, NJ',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    price: '$12,000,000',
    type: 'Industrial'
  },
  {
    title: 'Skyline Medical',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop',
    price: '$8,750,000',
    type: 'Medical'
  },
  {
    title: 'Metro Center',
    location: 'Newark, NJ',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    price: '$5,200,000',
    type: 'Office'
  },
  {
    title: 'Luxe Retail Strip',
    location: 'Marlton, NJ',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop',
    price: '$3,800,000',
    type: 'Retail'
  },
  {
    title: 'Tech Logistics Park',
    location: 'King of Prussia, PA',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    price: '$15,000,000',
    type: 'Industrial'
  }
]

export default function Properties() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic font-light">The Portfolio</h1>
          <p className="text-luxury-silver text-xl font-light uppercase tracking-widest">A Curated Collection of Excellence</p>
        </motion.div>

        {/* Search & Filter Bar */}
        <div className="max-w-6xl mx-auto mb-20 p-4 border border-white/10 bg-luxury-charcoal flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-silver" size={20} />
            <input
              type="text"
              placeholder="Search by location or name..."
              className="w-full bg-luxury-black/50 border border-white/5 py-4 pl-12 pr-4 text-white focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>
          <select className="bg-luxury-black/50 border border-white/5 px-8 py-4 text-luxury-silver focus:outline-none focus:border-luxury-gold transition-colors">
            <option>All Sectors</option>
            <option>Office</option>
            <option>Industrial</option>
            <option>Retail</option>
            <option>Medical</option>
          </select>
          <button className="bg-luxury-gold text-luxury-black px-12 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allProperties.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-luxury-gold text-luxury-black px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                    {prop.type}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-2 group-hover:text-luxury-gold transition-colors">{prop.title}</h3>
              <div className="flex items-center gap-2 text-luxury-silver mb-6">
                <MapPin size={16} className="text-luxury-gold" />
                <span className="text-sm font-light uppercase tracking-widest">{prop.location}</span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-white/5">
                <span className="text-xl font-serif text-luxury-gold">{prop.price}</span>
                <button className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white/20 pb-1 group-hover:border-luxury-gold transition-all duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
