'use client'

import { motion } from 'framer-motion'
import GlobalNetwork from '@/components/ui/GlobalNetwork'

const markets = [
  { name: 'Korea', code: 'KR', status: 'active' },
  { name: 'United States', code: 'US', status: 'expanding' },
  { name: 'Australia', code: 'AU', status: 'expanding' },
  { name: 'Japan', code: 'JP', status: 'planned' },
]

export default function GlobalFocusSection() {
  return (
    <section className="section-container relative overflow-hidden" id="global-focus">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="heading-lg mb-8">GLOBAL FOCUS</h2>
          <div className="w-32 h-1 bg-neon-green mx-auto mb-12" />
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed max-w-4xl mx-auto font-light">
            We build toward{' '}
            <span className="text-neon-green font-bold">
              full-funnel global expansion.
            </span>
          </p>
        </motion.div>

        {/* Global Network Visualization */}
        <div className="mb-20">
          <GlobalNetwork />
        </div>

        {/* Market Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <motion.div
              key={market.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="border border-gray-800 p-8 h-full hover:border-neon-green transition-all duration-500 card-hover">
                {/* Country Code */}
                <div className="text-5xl font-bold text-neon-green/20 group-hover:text-neon-green/40 transition-colors mb-4">
                  {market.code}
                </div>

                {/* Country Name */}
                <h3 className="text-xl font-bold mb-3">{market.name}</h3>

                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      market.status === 'active'
                        ? 'bg-neon-green animate-pulse'
                        : market.status === 'expanding'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    }`}
                  />
                  <span className="text-sm text-gray-400 capitalize">
                    {market.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Influencer-driven global market entry
            <br />
            <span className="text-neon-green">
              검증된 전략으로 글로벌 시장을 확장합니다
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
