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
      <p className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-neon-green leading-none mb-4">
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
    <section ref={ref} className="bg-black px-6 md:px-16 lg:px-24 py-32 border-t border-gray-900" id="stats">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
          <span className="w-6 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Real Results</span>
        </div>

        <div className="mb-20 reveal" data-reveal>
          <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2.8rem, 7vw, 8rem)' }}>
            말보다<br />
            <span className="text-neon-green">숫자입니다.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 mb-24">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 100} triggered={triggered} />
          ))}
        </div>

        {/* 협업 브랜드 */}
        <div className="border-t border-gray-900 pt-16 reveal" data-reveal>
          <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-10">협업 브랜드</p>
          <div className="flex flex-wrap gap-3">
            {brands.map((b, i) => (
              <span
                key={b}
                className="text-gray-500 text-sm border border-gray-800 px-5 py-2.5 hover:border-neon-green hover:text-white transition-all duration-300 reveal"
                data-reveal
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {b}
              </span>
            ))}
            <span className="text-gray-700 text-sm border border-gray-900 px-5 py-2.5 italic">
              + 다수
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
