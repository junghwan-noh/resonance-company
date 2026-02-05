'use client'

import { motion } from 'framer-motion'

const philosophyLines = [
  '우리는 단순한 마케팅을 넘어',
  '하나의 메시지를',
  '정확한 소비자의 언어로',
  '정교하게 전달합니다.',
]

export default function WhyResonanceSection() {
  return (
    <section className="section-container relative overflow-hidden" id="why-resonance">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="heading-lg mb-4">WHY RESONANCE</h2>
          <div className="w-32 h-1 bg-neon-green" />
        </motion.div>

        {/* Philosophy Text - Staggered Animation */}
        <div className="space-y-8 md:space-y-12">
          {philosophyLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              className={`
                text-3xl md:text-5xl lg:text-6xl leading-relaxed
                ${index === 1 ? 'text-neon-green font-bold' : 'font-light'}
              `}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Decorative Signal Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-20 space-y-4"
        >
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2, 
                delay: 1.2 + index * 0.1,
                ease: 'easeInOut'
              }}
              className="h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"
              style={{ width: `${80 - index * 15}%` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
