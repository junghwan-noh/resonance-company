'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import WaveformBackground from '@/components/ui/WaveformBackground'
import ScrollIndicator from '@/components/ui/ScrollIndicator'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <WaveformBackground mousePosition={mousePosition} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl">
        {/* Main Title with Neon Underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="heading-xl mb-6 relative inline-block">
            <span className="relative inline-block">
              RE
              {/* 가로 취소선 — 흰색 */}
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* 네온그린 취소선 — 고정 */}
                <line
                  x1="0" y1="50"
                  x2="100" y2="50"
                  stroke="#7CFF00"
                  strokeWidth="13"
                  strokeLinecap="round"
                />
                {/* 진한 빨간 선 — 애니메이션 */}
                <motion.line
                  x1="0" y1="50"
                  x2="100" y2="50"
                  stroke="#FF0033"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
              </motion.svg>
            </span>
            SONANCE
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="absolute bottom-0 left-0 h-2 md:h-3 bg-neon-green"
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide">
            Selection over Noise.
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide">
            Focus creates results.
          </p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="mt-20 mx-auto w-64 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
        />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}
