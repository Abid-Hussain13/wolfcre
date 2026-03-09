import { motion } from 'framer-motion'
import { Heart, Trophy, Users } from 'lucide-react'

const foundationEvents = [
  {
    title: '8th Annual Charity Golf Tournament',
    stat: '$90,000 Raised',
    description: 'A record-breaking year at Ramblewood Country Club supporting six local charities.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: '12th Annual Thanksgiving Food Drive',
    stat: 'Feeding 1000+ Families',
    description: 'Our mission to support local families and strengthen community care during the holidays.',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2064&auto=format&fit=crop'
  }
]

export default function Community() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="flex justify-center mb-8">
            <Heart size={48} className="text-luxury-gold" />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-tight">
            The WCRE <span className="italic font-light">Foundation</span>
          </h1>
          <p className="text-luxury-silver text-xl font-light leading-relaxed max-w-3xl mx-auto italic">
            "We are committed to the health and well-being of the communities where we live and work."
          </p>
          <div className="w-40 h-[1px] bg-luxury-gold mx-auto mt-12" />
        </motion.div>

        <div className="grid grid-cols-1 gap-24 mb-32">
          {foundationEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 relative overflow-hidden group">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full md:w-1/2 space-y-8">
                <div className="inline-block px-4 py-2 border border-luxury-gold text-luxury-gold text-xs uppercase tracking-widest font-bold">
                  {event.stat}
                </div>
                <h3 className="text-4xl font-serif">{event.title}</h3>
                <p className="text-luxury-silver text-lg font-light leading-relaxed">
                  {event.description}
                </p>
                <div className="pt-6">
                  <button className="text-sm uppercase tracking-[0.3em] font-medium border-b border-luxury-gold pb-2 hover:text-luxury-gold transition-all duration-300">
                    Read Impact Report
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-luxury-charcoal p-16 md:p-24 border border-white/5 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-12 italic">Make a Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center gap-4">
              <Trophy size={32} className="text-luxury-gold" />
              <h4 className="text-xl font-serif">Sponsor</h4>
              <p className="text-luxury-silver text-sm font-light">Partner with us on our next major charity event.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Users size={32} className="text-luxury-gold" />
              <h4 className="text-xl font-serif">Volunteer</h4>
              <p className="text-luxury-silver text-sm font-light">Join our dedicated team of community advocates.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Heart size={32} className="text-luxury-gold" />
              <h4 className="text-xl font-serif">Donate</h4>
              <p className="text-luxury-silver text-sm font-light">Support local families in need directly through the foundation.</p>
            </div>
          </div>
          <button className="px-16 py-5 bg-luxury-gold text-luxury-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300">
            Contact Foundation
          </button>
        </motion.div>
      </div>
    </div>
  )
}
