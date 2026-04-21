'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 49383, suffix: '+', label: 'TikTok 인플루언서 DB', desc: '자체 수집 엔진 보유' },
  { value: 34, suffix: '%', label: '평균 응답률', desc: '업계 평균 대비 3배 이상' },
  { value: 9.1, suffix: 'M', label: '최대 캠페인 도달', desc: '단일 캠페인 기준' },
  { value: 24, suffix: 'hr', label: '상담 회신 보장', desc: '전담 매니저 배정' },
]

const brands = [
  'Beauty Brand A', 'F&B Brand B', 'Fitness Brand C',
  'Lifestyle Brand D', 'Tech Brand E', 'Fashion Brand F',
]

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const isFloat = target % 1 !== 0
    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = isFloat ? +(target * eased).toFixed(1) : Math.floor(target * eased)
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, index, triggered }: { stat: typeof stats[0]; index: number; triggered: boolean }) {
  const count = useCounter(stat.value, 2000, triggered)
  return (
    <div
      className="border-t border-gray-800 pt-8 reveal"
      style={{ transitionDelay: `${index * 120}ms` }}
      data-reveal
    >
      <p className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-neon-green leading-none mb-3">
        {count}{stat.suffix}
      </p>
      <p className="text-white font-bold text-lg mb-1">{stat.label}</p>
      <p className="text-gray-500 text-sm">{stat.desc}</p>
    </div>
  )
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            entry.target.querySelectorAll('[data-reveal]').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black px-6 md:px-16 lg:px-24 py-32" id="stats">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-20 reveal" data-reveal>
          <span className="w-8 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Real Numbers</span>
        </div>

        {/* Headline */}
        <div className="mb-20">
          <h2
            className="font-display font-black leading-none tracking-tight reveal"
            data-reveal
            style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
          >
            감이 아닌<br />
            <span className="text-neon-green">숫자</span>로 말합니다.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} triggered={visible} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-20">
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mb-10 reveal" data-reveal>
            협업 브랜드
          </p>
          <div className="flex flex-wrap gap-6">
            {brands.map((b, i) => (
              <div
                key={b}
                className="border border-gray-800 px-6 py-3 text-sm text-gray-400 hover:border-neon-green hover:text-white transition-all duration-300 reveal"
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
