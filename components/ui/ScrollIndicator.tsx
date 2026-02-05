'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <motion.button
      onClick={scrollToNext}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Text */}
      <span className="text-sm text-gray-500 group-hover:text-neon-green transition-colors mb-4 tracking-widest">
        SCROLL
      </span>

      {/* Animated Line */}
      <div className="relative w-px h-16 bg-gray-800 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-neon-green to-transparent"
          animate={{
            y: [-32, 64],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Arrow */}
      <motion.svg
        className="w-6 h-6 text-gray-500 group-hover:text-neon-green transition-colors mt-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </motion.svg>
    </motion.button>
  )
}
