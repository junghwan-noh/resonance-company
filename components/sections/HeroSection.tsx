'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'

export default function HeroSection() {
  const { t } = useLang()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let animationId = 0
    let time = 0

    const resize = () => {
      // CSS 픽셀 기준 논리 크기
      width = window.innerWidth
      height = window.innerHeight
      // Retina/모바일 고DPI 대응 (성능 위해 2배까지만)
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    window.addEventListener('resize', resize)
    resize()

    class Particle {
      x: number; y: number; z: number
      vx: number; vy: number; baseSize: number
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.z = Math.random() * 2000
        this.vx = (Math.random() - 0.5) * 1.5
        this.vy = (Math.random() - 0.5) * 1.5
        this.baseSize = Math.random() * 2 + 0.5
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        this.z -= 4
        if (this.z < 1) {
          this.z = 2000
          this.x = Math.random() * width
          this.y = Math.random() * height
        }
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }
      draw() {
        const scale = 800 / this.z
        const px = (this.x - width / 2) * scale + width / 2
        const py = (this.y - height / 2) * scale + height / 2
        const s = Math.max(0.1, this.baseSize * scale)
        let alpha = 1 - this.z / 2000
        if (this.z < 200) alpha *= this.z / 200
        ctx!.fillStyle = `rgba(204, 255, 0, ${alpha * 0.7})`
        ctx!.beginPath()
        ctx!.arc(px, py, s, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    const particleCount = window.innerWidth < 768 ? 120 : 360
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) particles.push(new Particle())

    // 파도 경로를 한 번만 계산해 재사용 (glow 스트로크용)
    const tracePath = (withWave3: boolean, baseAmp: number) => {
      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      for (let i = 0; i < width; i += 12) {
        const amplitude = baseAmp * Math.sin(time * 0.2)
        const wave1 = Math.sin(i * 0.005 + time) * amplitude
        const wave2 = Math.cos(i * 0.01 - time * 1.5) * (amplitude * 0.5)
        const wave3 = withWave3 ? Math.sin(i * 0.02) * 20 : 0
        const edgeTaper = Math.sin((i / width) * Math.PI)
        const y = height / 2 + (wave1 + wave2 + wave3) * edgeTaper
        ctx.lineTo(i, y)
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, width, height)

      // 노란 파도 — shadowBlur 대신 넓은 반투명 스트로크로 글로우 표현
      tracePath(true, 150)
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.08)'
      ctx.lineWidth = 14
      ctx.stroke()
      tracePath(true, 150)
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.4)'
      ctx.lineWidth = 3
      ctx.stroke()

      // 흰 파도
      tracePath(false, 100)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)'
      ctx.lineWidth = 5
      ctx.stroke()
      tracePath(false, 100)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)'
      ctx.lineWidth = 1
      ctx.stroke()

      particles.forEach(p => { p.update(); p.draw() })

      time += 0.02
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none z-0" />

      <div className="relative z-10 text-center flex flex-col items-center px-4 w-full max-w-7xl mx-auto">
        <h1 className="text-white text-[3.5rem] sm:text-7xl md:text-[140px] font-medium tracking-tight relative leading-none mb-12 whitespace-nowrap">
          <span className="relative inline-block">
            RE
            {/* 형광 노란 굵은 선 (RE 전체) */}
            <div className="absolute top-[50%] left-[-6%] w-[112%] h-3 md:h-5 bg-brand-yellow -translate-y-1/2 shadow-[0_0_20px_rgba(204,255,0,0.8)]" />
            {/* 가운데 얇은 빨간 선 */}
            <div className="absolute top-[50%] left-[-6%] w-[112%] h-[2px] md:h-[3px] bg-[#FF003C] -translate-y-1/2 shadow-[0_0_10px_rgba(255,0,60,0.7)]" />
          </span>SONANCE
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl font-medium tracking-wide mb-12 mix-blend-screen">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => scrollToId('campaigns')}
              className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.3)] inline-flex items-center gap-2"
            >
              {t('hero_cta_influencer')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <span className="text-xs text-gray-400 font-medium tracking-wide">Are you an influencer?</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={() => scrollToId('marketer')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              {t('hero_cta_brand')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <span className="text-xs text-gray-400 font-medium tracking-wide">Are you a brand?</span>
          </div>
        </div>
      </div>

      {/* 스크롤 유도 화살표 */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 md:gap-3 animate-bounce">
        <span className="text-[10px] md:text-sm tracking-[0.25em] text-gray-400 uppercase font-bold">Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="rgba(204,255,0,0.6)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-7 md:h-7">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
