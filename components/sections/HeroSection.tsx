'use client'

import { useEffect, useState } from 'react'
import WaveformBackground from '@/components/ui/WaveformBackground'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [step, setStep] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)

    // 순차 애니메이션 타이밍
    // step 1: 영상 로드 후 태그 등장 (800ms)
    // step 2: RESONANCE 로고 (1600ms)
    // step 3: 서브타이틀 (2400ms)
    // step 4: 브랜드 버튼 (3000ms)
    // step 5: 인플루언서 버튼 (3500ms)
    // step 6: 스크롤 인디케이터 (4200ms)
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1600),
      setTimeout(() => setStep(3), 2400),
      setTimeout(() => setStep(4), 3000),
      setTimeout(() => setStep(5), 3500),
      setTimeout(() => setStep(6), 4200),
    ]
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const show = (minStep: number, extraDelay = 0) => ({
    opacity: step >= minStep ? 1 : 0,
    transform: step >= minStep ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 1.1s cubic-bezier(0.16,1,0.3,1) ${extraDelay}ms, transform 1.1s cubic-bezier(0.16,1,0.3,1) ${extraDelay}ms`,
  })

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <WaveformBackground mousePosition={mousePosition} />

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto w-full">

        {/* Step 1: 섹션 태그 */}
        <div style={show(1)} className="mb-6 flex justify-center">
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase"
            style={{ color: '#7CFF00' }}
          >
            Influencer Seeding Agency
          </span>
        </div>

        {/* Step 2: RESONANCE 로고 */}
        <h1
          className="font-display font-black tracking-tight leading-none mb-8"
          style={{
            fontSize: 'clamp(4.5rem, 13vw, 15rem)',
            color: '#ffffff',
            textShadow: '0 0 80px rgba(124,255,0,0.3), 0 2px 40px rgba(0,0,0,0.8)',
            ...show(2),
          }}
        >
          RESONANCE
        </h1>

        {/* Step 3: 서브타이틀 */}
        <div style={show(3)}>
          <p className="font-bold text-base md:text-lg mb-2 tracking-tight" style={{ color: '#ffffff' }}>
            틱톡 시딩 & 숏폼 마케팅 솔루션
          </p>
          <p className="font-light tracking-widest text-xs md:text-sm uppercase mb-14" style={{ color: 'rgba(255,255,255,0.45)' }}>
            We find the right voice for your brand.
          </p>
        </div>

        {/* Step 4 + 5: 버튼 두 개 순서대로 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* 브랜드용 — Step 4 */}
          <div style={show(4)}>
            <a
              href="#contact"
              className="group inline-flex flex-col items-center gap-1 px-10 py-5 font-bold transition-all duration-300 text-sm tracking-wide hover:opacity-85"
              style={{ background: '#7CFF00', color: '#000' }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium">브랜드 · 마케터</span>
              <span className="flex items-center gap-2 text-base">
                인플루언서 이신가요?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* 인플루언서용 — Step 5 */}
          <div style={show(5)}>
            <a
              href="mailto:contact@rsnc.co.kr?subject=크리에이터 협업 문의"
              className="group inline-flex flex-col items-center gap-1 px-10 py-5 font-bold transition-all duration-300 text-sm tracking-wide hover:opacity-85"
              style={{ background: '#7CFF00', color: '#000' }}
            >
              <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-medium">크리에이터 · 인플루언서</span>
              <span className="flex items-center gap-2 text-base">
                브랜드 이신가요?
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>

      {/* Step 6: 스크롤 인디케이터 */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={show(6)}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
