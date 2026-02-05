'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface WaveformBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function WaveformBackground({ mousePosition }: WaveformBackgroundProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Generate wave paths
  const generateWavePath = (amplitude: number, frequency: number, phase: number) => {
    const points = 100
    let path = `M 0 ${dimensions.height / 2}`

    for (let i = 0; i <= points; i++) {
      const x = (dimensions.width / points) * i
      const y = dimensions.height / 2 + Math.sin((i / points) * frequency + phase) * amplitude
      path += ` L ${x} ${y}`
    }

    return path
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-green/30 rounded-full"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* SVG Waveforms */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Green Waveforms */}
        <motion.path
          d={generateWavePath(80, 4, 0)}
          fill="none"
          stroke="#7CFF00"
          strokeWidth="2"
          strokeOpacity="0.3"
          animate={{
            d: [
              generateWavePath(80, 4, 0),
              generateWavePath(80, 4, Math.PI),
              generateWavePath(80, 4, Math.PI * 2),
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.path
          d={generateWavePath(60, 6, Math.PI / 2)}
          fill="none"
          stroke="#7CFF00"
          strokeWidth="1.5"
          strokeOpacity="0.2"
          animate={{
            d: [
              generateWavePath(60, 6, Math.PI / 2),
              generateWavePath(60, 6, Math.PI * 1.5),
              generateWavePath(60, 6, Math.PI * 2.5),
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Blue/Cyan Waveforms */}
        <motion.path
          d={generateWavePath(100, 3, Math.PI)}
          fill="none"
          stroke="#00D9FF"
          strokeWidth="2"
          strokeOpacity="0.2"
          animate={{
            d: [
              generateWavePath(100, 3, Math.PI),
              generateWavePath(100, 3, Math.PI * 2),
              generateWavePath(100, 3, Math.PI * 3),
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Central Aligned Green Line */}
        <motion.line
          x1="0"
          y1={dimensions.height / 2}
          x2={dimensions.width}
          y2={dimensions.height / 2}
          stroke="#7CFF00"
          strokeWidth="3"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      {/* Central Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-[600px] h-[600px] bg-neon-green/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Network Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(15)].map((_, i) => {
          const startX = Math.random() * dimensions.width
          const startY = Math.random() * dimensions.height
          const endX = Math.random() * dimensions.width
          const endY = Math.random() * dimensions.height

          return (
            <motion.line
              key={i}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="#7CFF00"
              strokeWidth="1"
              strokeOpacity="0.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          )
        })}
      </svg>

      {/* Mouse Interaction Glow */}
      <motion.div
        className="absolute w-64 h-64 bg-neon-green/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 100,
        }}
      />
    </div>
  )
}
