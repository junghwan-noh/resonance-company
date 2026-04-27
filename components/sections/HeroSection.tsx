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
          <span className="section-tag" style={{ justifyContent: 'center', color: '#7CFF00' }}>
            Influencer Seeding Agency
          </span>
        </div>

        <h1
          className="font-display font-black tracking-tight leading-none mb-8"
          style={{
            fontSize: 'clamp(4.5rem, 13vw, 15rem)',
            color: '#ffffff',
            textShadow: '0 0 80px rgba(124,255,0,0.3), 0 2px 40px rgba(0,0,0,0.8)',
            ...fade(150),
          }}
        >
          RESONANCE
        </h1>

        <p
          className="font-bold text-base md:text-lg mb-3 tracking-tight"
          style={{ color: '#ffffff', ...fade(300) }}
        >
          AI 데이터 기반 틱톡 시딩 & 숏폼 마케팅 솔루션
        </p>

        <p
          className="font-light tracking-widest text-xs md:text-sm uppercase mb-14"
          style={{ color: 'rgba(255,255,255,0.5)', ...fade(400) }}
        >
          We find the right voice for your brand.
        </p>

        <div style={fade(500)} className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* 브랜드용 */}
          <a href="#contact" className="group inline-flex flex-col items-center gap-1 px-10 py-5 font-bold transition-all duration-300 text-sm tracking-wide"
            style={{ background: '#7CFF00', color: '#000' }}>
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium">브랜드 · 마케터</span>
            <span className="flex items-center gap-2 text-base">
              무료 인플루언서 리스트 받기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          {/* 인플루언서용 */}
          <a href="mailto:contact@rsnc.co.kr?subject=크리에이터 협업 문의" className="group inline-flex flex-col items-center gap-1 px-10 py-5 font-bold border-2 border-white/40 bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300 text-sm tracking-wide text-white">
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-50 font-medium">크리에이터 · 인플루언서</span>
            <span className="flex items-center gap-2 text-base">
              시딩 캠페인 참여하기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
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
