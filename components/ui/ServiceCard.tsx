'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  id: number
  title: string
  subtitle: string
  description: string
  details: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="border border-gray-800 p-8 md:p-10 h-full hover:border-neon-green transition-all duration-500 card-hover">
        {/* Card Number */}
        <div className="text-6xl md:text-7xl font-bold text-neon-green/20 group-hover:text-neon-green/40 transition-colors mb-6">
          {String(service.id).padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-neon-green transition-colors">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-400 mb-4">
          {service.subtitle}
        </p>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          className="w-full h-px bg-gradient-to-r from-neon-green/50 via-neon-green to-transparent mb-6 origin-left"
        />

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 italic mb-6">
          {service.description}
        </p>

        {/* Expandable Details */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-300 leading-relaxed">{service.details}</p>
          </div>
        </motion.div>

        {/* Expand Button */}
        <motion.div
          className="flex items-center space-x-2 mt-6 text-neon-green"
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-medium">
            {isExpanded ? 'Read Less' : 'Read More'}
          </span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>

        {/* Corner Accent */}
        <motion.div
          className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-neon-green opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        />
      </div>
    </motion.div>
  )
}
