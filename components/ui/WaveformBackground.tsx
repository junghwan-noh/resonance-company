'use client'

import { useEffect, useRef } from 'react'

export default function WaveformBackground({ mousePosition: _ }: { mousePosition: { x: number; y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      const { width: W, height: H } = canvas
      const cy = H / 2

      ctx.clearRect(0, 0, W, H)

      // ── 배경 ──
      ctx.fillStyle = '#020406'
      ctx.fillRect(0, 0, W, H)

      // ── 그리드 (static, 아주 연하게) ──
      ctx.strokeStyle = 'rgba(124,255,0,0.04)'
      ctx.lineWidth = 0.5
      const cols = 10, rows = 6
      for (let i = 1; i < cols; i++) {
        ctx.beginPath(); ctx.moveTo(W / cols * i, 0); ctx.lineTo(W / cols * i, H); ctx.stroke()
      }
      for (let i = 1; i < rows; i++) {
        ctx.beginPath(); ctx.moveTo(0, H / rows * i); ctx.lineTo(W, H / rows * i); ctx.stroke()
      }

      // ── 파형 그리기 헬퍼 ──
      const drawWave = (
        amp: number, freq: number, speed: number, phase: number,
        color: string, lineW: number, alpha: number, blur = 0
      ) => {
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.strokeStyle = color
        ctx.lineWidth = lineW
        if (blur > 0) ctx.filter = `blur(${blur}px)`
        ctx.beginPath()
        for (let x = 0; x <= W; x += 2) {
          const y = cy + amp * Math.sin(freq * x / W * Math.PI * 2 + t * speed + phase)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.restore()
      }

      // 글로우 레이어 (blur로 발광 효과)
      drawWave(90, 2.5, 0.6, 0,           '#7CFF00', 12, 0.04, 8)
      drawWave(60, 3,   0.9, Math.PI/3,   '#00D4FF', 8,  0.05, 6)

      // 중간 레이어
      drawWave(90, 2.5, 0.6, 0,           '#7CFF00', 3,  0.25, 2)
      drawWave(60, 3,   0.9, Math.PI/3,   '#00D4FF', 2,  0.18, 2)

      // 메인 선명 레이어
      drawWave(90, 2.5, 0.6, 0,           '#7CFF00', 1.5, 0.85)
      drawWave(60, 3,   0.9, Math.PI/3,   '#00D4FF', 1,   0.45)

      // 미세 진동 레이어
      drawWave(18, 8,   2.2, Math.PI/5,   '#7CFF00', 0.8, 0.2)

      // ── 수평 기준선 ──
      ctx.save()
      ctx.strokeStyle = 'rgba(124,255,0,0.07)'
      ctx.lineWidth = 0.5
      ctx.setLineDash([4, 14])
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke()
      ctx.restore()

      // ── 펄스 포인트 ──
      const points = [0.25, 0.5, 0.75]
      points.forEach((px, i) => {
        const x = W * px
        const y = cy + 90 * Math.sin(2.5 * px * Math.PI * 2 + t * 0.6)
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + i * 2.1)

        ctx.save()
        // 링
        ctx.globalAlpha = 0.4 * (1 - pulse)
        ctx.strokeStyle = '#7CFF00'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(x, y, 6 + pulse * 14, 0, Math.PI * 2)
        ctx.stroke()
        // 코어
        ctx.globalAlpha = 0.7 + 0.3 * pulse
        ctx.fillStyle = '#7CFF00'
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // ── 스캔 라인 ──
      const scanX = (t * 80) % (W + 120) - 60
      const grad = ctx.createLinearGradient(scanX - 60, 0, scanX + 60, 0)
      grad.addColorStop(0, 'rgba(124,255,0,0)')
      grad.addColorStop(0.5, 'rgba(124,255,0,0.06)')
      grad.addColorStop(1, 'rgba(124,255,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(scanX - 60, 0, 120, H)

      t += 0.012
      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#020406' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block' }}
      />
      {/* 비네팅 */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(2,4,6,0.05) 0%, rgba(2,4,6,0.75) 100%)'
      }} />
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(2,4,6,0.5) 0%, transparent 30%, transparent 70%, rgba(2,4,6,0.7) 100%)'
      }} />
    </div>
  )
}
