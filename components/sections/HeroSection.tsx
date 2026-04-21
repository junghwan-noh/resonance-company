'use client'

import { useEffect, useRef, useState } from 'react'
import WaveformBackground from '@/components/ui/WaveformBackground'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <WaveformBackground mousePosition={mousePosition} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-7xl mx-auto w-full">

        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 border border-neon-green/40 px-4 py-2 mb-10 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '0ms' }}
        >
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          <span className="text-neon-green text-xs tracking-[0.3em] font-medium uppercase">Influencer Seeding Agency</span>
        </div>

        {/* Main headline */}
        <div className="mb-6 overflow-hidden">
          <h1
            className="font-display font-black leading-none tracking-tight"
            style={{
              fontSize: 'clamp(4rem, 12vw, 14rem)',
              transition: 'opacity 1s, transform 1s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '200ms',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(60px)',
            }}
          >
            RESONANCE
          </h1>
        </div>

        {/* Subline */}
        <div
          className="mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s, transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '600ms',
          }}
        >
          <p className="text-xl md:text-3xl font-light tracking-wide text-white/80">
            Selection over Noise.&nbsp;&nbsp;
            <span className="text-neon-green font-medium">Focus creates results.</span>
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.9s, transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '850ms',
          }}
        >
          <a href="#contact" className="btn-primary">
            무료 샘플 받기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#why" className="btn-secondary">
            자세히 보기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 0.5 : 0,
          transition: 'opacity 1s',
          transitionDelay: '1.4s',
        }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  )
}
