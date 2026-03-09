import { motion } from 'framer-motion'

const team = [
  {
    name: 'Jason Wolf',
    role: 'Founder & Managing Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Mike Scanzano',
    role: 'Senior Advisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Leor Hemo',
    role: 'Executive Vice President',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Tammi Coppinger',
    role: 'Executive Vice President',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  }
]

export default function Team() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-10 leading-tight">
            The <span className="italic font-light text-luxury-gold">Architects</span> <br />
            of Success
          </h1>
          <p className="text-luxury-silver text-xl font-light leading-relaxed max-w-2xl">
            Our team of specialists brings a combined century of expertise in the tri-state commercial real estate landscape. We are more than advisors; we are your strategic partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-charcoal">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-white/0 group-hover:border-luxury-gold/50 transition-all duration-500 m-4" />
              </div>
              <h3 className="text-xl font-serif mb-1 group-hover:text-luxury-gold transition-colors">{member.name}</h3>
              <p className="text-luxury-silver text-xs uppercase tracking-widest font-light">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 border border-white/5 bg-luxury-charcoal text-center"
        >
          <h2 className="text-3xl font-serif mb-6 italic">Join the Vanguard</h2>
          <p className="text-luxury-silver mb-8 max-w-xl mx-auto font-light">
            We are always looking for exceptional talent to join our growing firm in Philadelphia, New York, and South Jersey.
          </p>
          <button className="px-12 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-[0.2em] text-xs hover:bg-luxury-gold hover:text-luxury-black transition-all duration-500">
            View Careers
          </button>
        </motion.div>
      </div>
    </div>
  )
}
