'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 49383, suffix: '+', label: '검증된 인플루언서 DB', sub: '자체 수집 엔진 보유' },
  { value: 34, suffix: '%', label: '평균 응답률', sub: '업계 평균의 3배 이상' },
  { value: 9.1, suffix: 'M', label: '단일 캠페인 최대 도달', sub: '실제 캠페인 기준' },
  { value: 24, suffix: 'h', label: '상담 회신 보장', sub: '전담 매니저 직접 배정' },
]

const brands = ['뷰티 브랜드 A', 'F&B 브랜드 B', '피트니스 브랜드 C', '라이프스타일 브랜드 D', '테크 브랜드 E', '패션 브랜드 F']

function StatCard({ value, suffix, label, sub, delay, triggered }: {
  value: number; suffix: string; label: string; sub: string; delay: number; triggered: boolean
}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const isFloat = value % 1 !== 0
    const duration = 2000
    const startTime = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(isFloat ? +(value * eased).toFixed(1) : Math.floor(value * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, value])

  return (
    <div className="border-t border-gray-800 pt-10 pr-8 pb-10 reveal" data-reveal style={{ transitionDelay: `${delay}ms` }}>
      <p className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-neon-green leading-none mb-4">
        {count}{suffix}
      </p>
      <p className="text-white font-semibold text-base mb-1">{label}</p>
      <p className="text-gray-600 text-xs">{sub}</p>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setTriggered(true)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black" id="stats">

      {/* 상단: 좌우 분할 — 텍스트 + 영상 */}
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* 좌: 텍스트 */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 border-b lg:border-b-0 lg:border-r border-gray-900">
          <div className="flex items-center gap-4 mb-8 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Real Results</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-6 reveal" data-reveal
            style={{ fontSize: 'clamp(1.4rem, 3vw, 3.5rem)' }}>
            말보다<br />
            <span className="text-neon-green">숫자</span>
            <span style={{ color: '#7C3AED' }}>입니다.</span>
          </h2>
          <p className="text-gray-500 text-base font-light max-w-sm reveal" data-reveal>
            감이 아닌 데이터로 증명합니다.<br />모든 수치는 실제 캠페인 기준입니다.
          </p>
        </div>

        {/* 우: 영상 */}
        <div className="lg:w-[45%] relative overflow-hidden" style={{ minHeight: '400px' }}>
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            src="/wave1.mp4"
            autoPlay muted loop playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* 수치 그리드 */}
      <div className="px-6 md:px-16 lg:px-24 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} triggered={triggered} />
          ))}
        </div>
      </div>

      {/* 가로 스크롤 — 협업 브랜드 */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-8 reveal" data-reveal>협업 브랜드</p>
          <div className="scroll-x">
            <div className="flex gap-4 pb-2" style={{ width: 'max-content' }}>
              {[...brands, ...brands].map((b, i) => (
                <span key={i} className="text-gray-500 text-sm border border-gray-800 px-6 py-3 whitespace-nowrap hover:border-neon-green hover:text-white transition-all duration-300 shrink-0">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
