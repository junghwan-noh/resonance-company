'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'

function ResonanceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    const ctx: CanvasRenderingContext2D = context

    let raf: number
    let w = canvas.offsetWidth
    let h = canvas.offsetHeight
    canvas.width = w
    canvas.height = h

    type Ripple = { x: number; y: number; r: number; maxR: number; alpha: number; speed: number }
    const ripples: Ripple[] = []
    let rippleTimer = 0

    const cx = w * 0.5
    const cy = h * 0.5
    const nodeCount = 6
    type Node = {
      x: number; y: number; vx: number; vy: number
      baseX: number; baseY: number
      r: number; alpha: number; pulseT: number
    }
    const nodes: Node[] = Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2
      const dist = Math.min(w, h) * 0.3
      const bx = cx + Math.cos(angle) * dist
      const by = cy + Math.sin(angle) * dist
      return {
        x: bx, y: by,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        baseX: bx, baseY: by,
        r: 5 + Math.random() * 4,
        alpha: 0.6 + Math.random() * 0.4,
        pulseT: Math.random() * Math.PI * 2,
      }
    })

    const YELLOW_DIM = 'rgba(204,255,0,'

    function spawnRipple() {
      ripples.push({ x: cx, y: cy, r: 0, maxR: Math.min(w, h) * 0.46, alpha: 0.7, speed: 1.4 })
    }
    spawnRipple()

    function draw(t: number) {
      ctx.clearRect(0, 0, w, h)

      rippleTimer++
      if (rippleTimer % 80 === 0) spawnRipple()

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        rp.r += rp.speed
        rp.alpha = 0.7 * (1 - rp.r / rp.maxR)
        if (rp.alpha <= 0) { ripples.splice(i, 1); continue }
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = YELLOW_DIM + rp.alpha + ')'
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      nodes.forEach((nd) => {
        nd.pulseT += 0.018
        nd.x = nd.baseX + Math.sin(nd.pulseT) * 18
        nd.y = nd.baseY + Math.cos(nd.pulseT * 0.8) * 14

        const lineAlpha = 0.12 + 0.08 * Math.sin(nd.pulseT)
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(nd.x, nd.y)
        ctx.strokeStyle = YELLOW_DIM + lineAlpha + ')'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      nodes.forEach((nd) => {
        const pulse = 0.7 + 0.3 * Math.sin(nd.pulseT * 1.3)
        ctx.beginPath()
        ctx.arc(nd.x, nd.y, nd.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = YELLOW_DIM + nd.alpha * 0.35 + ')'
        ctx.fill()
        ctx.strokeStyle = YELLOW_DIM + nd.alpha + ')'
        ctx.lineWidth = 1.2
        ctx.stroke()
      })

      const centerPulse = 1 + 0.12 * Math.sin(t * 0.002)
      ctx.beginPath()
      ctx.arc(cx, cy, 10 * centerPulse, 0, Math.PI * 2)
      ctx.fillStyle = '#CCFF00'
      ctx.fill()

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40 * centerPulse)
      grd.addColorStop(0, 'rgba(204,255,0,0.25)')
      grd.addColorStop(1, 'rgba(204,255,0,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 40 * centerPulse, 0, Math.PI * 2)
      ctx.fillStyle = grd
      ctx.fill()

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)

    const ro = new ResizeObserver(() => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w
      canvas.height = h
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

export default function RealResultsSection() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-50 z-0" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl md:text-[64px] font-black text-white leading-[1.1] mb-10 tracking-tight">
            {t('real_headline_1')}<br />
            <span className="relative inline-block">
              <span className="text-brand-yellow relative z-10">{t('real_headline_2')}</span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/20 z-0" />
            </span>{t('real_headline_3')}
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-lg">
            <p>{t('real_sub_1')}</p>
            <p className="text-white font-bold">{t('real_sub_2')}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[500px] relative rounded-[3rem] bg-gradient-to-tr from-brand-yellow/10 to-transparent overflow-hidden border border-white/50">
          <ResonanceCanvas />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none">
            <span className="text-[10px] tracking-[0.25em] text-brand-yellow/50 uppercase font-bold">
              Resonance · Signal
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
