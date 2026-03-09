import { motion } from 'framer-motion'
import { Briefcase, Building2, BarChart3, MapPin, Search, ShieldCheck } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Brokerage & Advisory',
    icon: <Briefcase size={40} className="text-luxury-gold" />,
    description: 'Expert guidance for buying, selling, and leasing across all commercial sectors.',
    features: [
      'Tenant & Owner Representation',
      'Strategic Acquisitions',
      'Dispositions & Portfolio Management',
      'Market Analysis & Valuation'
    ]
  },
  {
    title: 'Property Management',
    icon: <Building2 size={40} className="text-luxury-gold" />,
    description: 'Comprehensive management services designed to maximize asset value.',
    features: [
      'Operations & Maintenance',
      'Financial Reporting',
      'Tenant Relations',
      'Capital Planning'
    ]
  },
  {
    title: 'Relocation Concierge',
    icon: <MapPin size={40} className="text-luxury-gold" />,
    description: 'End-to-end relocation support for businesses expanding or moving.',
    features: [
      'Space Utilization Planning',
      'Logistics Management',
      'Budget Optimization',
      'Vendor Coordination'
    ]
  }
]

export default function Services() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <p className="text-luxury-gold uppercase tracking-[0.5em] text-xs mb-6 font-medium">Expertise Across All Frontiers</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
            Comprehensive <br />
            <span className="italic font-light">Commercial Solutions</span>
          </h1>
          <div className="w-24 h-[1px] bg-luxury-gold mb-12" />
          <p className="text-luxury-silver text-xl font-light leading-relaxed">
            At WCRE, we don't just facilitate transactions; we build enduring partnerships by providing a full suite of advisory and management services tailored to the unique needs of property owners and tenants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {serviceCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-12 border border-white/10 bg-luxury-charcoal flex flex-col hover:border-luxury-gold/50 transition-all duration-500"
            >
              <div className="mb-8">{cat.icon}</div>
              <h3 className="text-3xl font-serif mb-6">{cat.title}</h3>
              <p className="text-luxury-silver font-light mb-8 leading-relaxed">
                {cat.description}
              </p>
              <ul className="mt-auto space-y-4">
                {cat.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-luxury-silver/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sectors Section */}
        <div className="py-24 border-t border-white/10">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">Sectors We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['Office', 'Retail', 'Industrial', 'Medical', 'Investment', 'Land'].map((sector) => (
              <div key={sector} className="group cursor-pointer">
                <div className="aspect-square border border-white/5 flex items-center justify-center text-luxury-silver group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-500">
                  <span className="uppercase tracking-widest text-xs font-bold">{sector}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
