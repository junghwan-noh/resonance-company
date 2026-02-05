'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessDiagramProps {
  steps: ProcessStep[]
}

export default function ProcessDiagram({ steps }: ProcessDiagramProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
    
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  const radius = 200
  const centerX = 300
  const centerY = 300

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20">
      <svg
        className="w-full h-auto"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Center Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r="80"
          fill="none"
          stroke="#7CFF00"
          strokeWidth="2"
          strokeOpacity="0.3"
        />

        {/* Center Text */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-neon-green text-sm font-bold"
        >
          OUR
        </text>
        <text
          x={centerX}
          y={centerY + 20}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-neon-green text-sm font-bold"
        >
          PROCESS
        </text>

        {/* Outer Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#333"
          strokeWidth="1"
          strokeDasharray="5,5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Process Steps in Circle */}
        {steps.map((step, index) => {
          const angle = (index / steps.length) * 2 * Math.PI - Math.PI / 2
          const x = centerX + radius * Math.cos(angle)
          const y = centerY + radius * Math.sin(angle)
          const isActive = index === activeStep

          return (
            <g key={step.number}>
              {/* Connection Line to Center */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#7CFF00"
                strokeWidth={isActive ? '2' : '1'}
                strokeOpacity={isActive ? '0.6' : '0.1'}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              />

              {/* Step Circle */}
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? '30' : '25'}
                fill={isActive ? '#7CFF00' : '#111'}
                stroke="#7CFF00"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
                onClick={() => setActiveStep(index)}
              />

              {/* Step Number */}
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-sm font-bold ${
                  isActive ? 'fill-black' : 'fill-neon-green'
                }`}
              >
                {step.number}
              </text>

              {/* Step Title (on hover or active) */}
              {isActive && (
                <motion.g
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Rectangle */}
                  <rect
                    x={x - 100}
                    y={y - 60}
                    width="200"
                    height="40"
                    fill="#000"
                    stroke="#7CFF00"
                    strokeWidth="1"
                    rx="4"
                  />
                  
                  {/* Title Text */}
                  <text
                    x={x}
                    y={y - 40}
                    textAnchor="middle"
                    className="fill-neon-green text-xs font-bold"
                  >
                    {step.title.split(' ').slice(0, 2).join(' ')}
                  </text>
                  <text
                    x={x}
                    y={y - 28}
                    textAnchor="middle"
                    className="fill-neon-green text-xs font-bold"
                  >
                    {step.title.split(' ').slice(2).join(' ')}
                  </text>
                </motion.g>
              )}
            </g>
          )
        })}

        {/* Animated Progress Arc */}
        {steps.map((_, index) => {
          if (index >= activeStep) return null
          
          const startAngle = (index / steps.length) * 2 * Math.PI - Math.PI / 2
          const endAngle = ((index + 1) / steps.length) * 2 * Math.PI - Math.PI / 2
          
          const startX = centerX + radius * Math.cos(startAngle)
          const startY = centerY + radius * Math.sin(startAngle)
          const endX = centerX + radius * Math.cos(endAngle)
          const endY = centerY + radius * Math.sin(endAngle)
          
          const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0
          
          return (
            <motion.path
              key={index}
              d={`M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
              fill="none"
              stroke="#7CFF00"
              strokeWidth="3"
              strokeOpacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          )
        })}
      </svg>

      {/* Active Step Info */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-12 text-center max-w-2xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-neon-green mb-4">
          {steps[activeStep].title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {steps[activeStep].description}
        </p>
      </motion.div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-12 h-1 transition-all duration-300 ${
              index === activeStep
                ? 'bg-neon-green'
                : index < activeStep
                ? 'bg-neon-green/50'
                : 'bg-gray-800'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
