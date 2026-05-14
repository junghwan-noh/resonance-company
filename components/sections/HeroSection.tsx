'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'

export default function HeroSection() {
  const { t } = useLang()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
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
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
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

    const particleCount = window.innerWidth < 768 ? 200 : 400
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) particles.push(new Particle())

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, width, height)

      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      for (let i = 0; i < width; i += 10) {
        const amplitude = 150 * Math.sin(time * 0.2)
        const wave1 = Math.sin(i * 0.005 + time) * amplitude
        const wave2 = Math.cos(i * 0.01 - time * 1.5) * (amplitude * 0.5)
        const wave3 = Math.sin(i * 0.02) * 20
        const edgeTaper = Math.sin((i / width) * Math.PI)
        const y = height / 2 + (wave1 + wave2 + wave3) * edgeTaper
        ctx.lineTo(i, y)
      }
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.3)'
      ctx.lineWidth = 3
      ctx.shadowBlur = 15
      ctx.shadowColor = '#ccff00'
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      for (let i = 0; i < width; i += 10) {
        const amplitude = 100 * Math.sin(time * 0.2)
        const wave1 = Math.sin(i * 0.005 + time) * amplitude
        const wave2 = Math.cos(i * 0.01 - time * 1.5) * (amplitude * 0.5)
        const edgeTaper = Math.sin((i / width) * Math.PI)
        const y = height / 2 + (wave1 + wave2) * edgeTaper
        ctx.lineTo(i, y)
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.lineWidth = 1
      ctx.shadowBlur = 5
      ctx.stroke()

      ctx.shadowBlur = 0
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
        <h1 className="text-white text-7xl sm:text-8xl md:text-[140px] font-medium tracking-tight relative leading-none mb-12">
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
        <button
          onClick={scrollToContact}
          className="bg-brand-yellow text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.3)]"
        >
          {t('hero_cta')}
        </button>
      </div>
    </section>
  )
}
