'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function GlobalNetwork() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({ width: 800, height: 500 })
  }, [])

  // Define market nodes (simplified world map positions)
  const nodes = [
    { id: 'KR', x: 650, y: 200, label: 'Korea', status: 'active' },
    { id: 'US', x: 150, y: 220, label: 'United States', status: 'expanding' },
    { id: 'AU', x: 700, y: 400, label: 'Australia', status: 'expanding' },
    { id: 'JP', x: 720, y: 180, label: 'Japan', status: 'planned' },
  ]

  // Define connections between markets
  const connections = [
    { from: 'KR', to: 'US' },
    { from: 'KR', to: 'AU' },
    { from: 'KR', to: 'JP' },
    { from: 'US', to: 'AU' },
  ]

  const getNodePosition = (id: string) => {
    return nodes.find(n => n.id === id)!
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <svg
        className="w-full h-auto"
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Grid */}
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#111"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#grid)" />

        {/* World Map Silhouette (Simplified) */}
        <g opacity="0.1">
          {/* Simplified continent shapes */}
          <motion.circle
            cx="150"
            cy="200"
            r="80"
            fill="none"
            stroke="#7CFF00"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.circle
            cx="650"
            cy="250"
            r="100"
            fill="none"
            stroke="#7CFF00"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
        </g>

        {/* Connection Lines */}
        {connections.map((conn, index) => {
          const from = getNodePosition(conn.from)
          const to = getNodePosition(conn.to)

          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Base Line */}
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#7CFF00"
                strokeWidth="1"
                strokeOpacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />

              {/* Animated Signal Pulse */}
              <motion.circle
                r="4"
                fill="#7CFF00"
                initial={{
                  cx: from.x,
                  cy: from.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </g>
          )
        })}

        {/* Market Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Outer Pulse Ring */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="30"
              fill="none"
              stroke="#7CFF00"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />

            {/* Main Node Circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={node.status === 'active' ? '#7CFF00' : '#000'}
              stroke="#7CFF00"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            />

            {/* Status Indicator */}
            <motion.circle
              cx={node.x + 12}
              cy={node.y - 12}
              r="5"
              fill={
                node.status === 'active'
                  ? '#7CFF00'
                  : node.status === 'expanding'
                  ? '#FFD700'
                  : '#666'
              }
              initial={{ scale: 0 }}
              animate={{
                scale: node.status === 'active' ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: node.status === 'active' ? Infinity : 0,
              }}
            />

            {/* Node Label */}
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`text-xs font-bold ${
                node.status === 'active' ? 'fill-black' : 'fill-neon-green'
              }`}
            >
              {node.id}
            </text>

            {/* Market Name */}
            <text
              x={node.x}
              y={node.y + 35}
              textAnchor="middle"
              className="fill-gray-400 text-xs"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Signal Wave Effect */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`wave-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="20"
            fill="none"
            stroke="#7CFF00"
            strokeWidth="2"
            strokeOpacity="0.5"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{
              scale: [1, 2.5],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: index * 0.4,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        ))}
      </svg>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
          <span className="text-gray-400">Active</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="text-gray-400">Expanding</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-500 rounded-full" />
          <span className="text-gray-400">Planned</span>
        </div>
      </div>
    </div>
  )
}
