'use client'

import { useEffect, useState } from 'react'
import WaveformBackground from '@/components/ui/WaveformBackground'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => { clearTimeout(t); window.removeEventListener('mousemove', handleMouseMove) }
  }, [])

  const fade = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  })

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <WaveformBackground mousePosition={mousePosition} />

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto w-full">

        <div style={fade(0)} className="mb-6">
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#A855F7' }}>
            Influencer Seeding Agency
          </span>
        </div>

        <h1
          className="font-display font-black tracking-tight leading-none mb-8"
          style={{
            fontSize: 'clamp(4.5rem, 13vw, 15rem)',
            ...fade(150),
          }}
        >
          RESONANCE
        </h1>

        <p
          className="text-white/50 font-light tracking-widest text-sm md:text-base uppercase mb-14"
          style={fade(350)}
        >
          We find the right voice for your brand.
        </p>

        <div style={fade(500)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#why" className="btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.4 : 0, transition: 'opacity 1s 1.2s' }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
