'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 120, suffix: '+', label: '누적 시딩 캠페인', sub: '카테고리별 성과 데이터 보유' },
  { value: 34, suffix: '%', label: '평균 인플루언서 응답률', sub: '업계 평균(~8%)의 4배' },
  { value: 380, suffix: '%', label: '평균 조회수 상승률', sub: '시딩 전 대비 실측 기준' },
  { value: 49383, suffix: '+', label: '검증된 인플루언서 DB', sub: '자체 수집·분류 엔진 보유' },
]

const brands = ['뷰티 브랜드 A', 'F&B 브랜드 B', '피트니스 브랜드 C', '라이프스타일 브랜드 D', '테크 브랜드 E', '패션 브랜드 F']

function StatCard({ value, suffix, label, sub, triggered, stagger }: {
  value: number; suffix: string; label: string; sub: string; triggered: boolean; stagger: number
}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const duration = 2000
    const startTime = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(value * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, value])

  return (
    <div className={`glass-card rounded-2xl p-8 reveal stagger-${stagger}`} data-reveal>
      <p className="font-display font-black text-4xl md:text-5xl leading-none mb-3 tracking-tighter text-rsncNavy">
        {count.toLocaleString()}<span className="text-rsncGreen">{suffix}</span>
      </p>
      <p className="text-rsncNavy font-semibold text-sm mb-1 tracking-tight">{label}</p>
      <p className="text-rsncNavy/60 text-xs">{sub}</p>
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
    <section ref={ref} data-section className="bg-transparent" id="stats">

      {/* 그린 광원 레이어 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(209,255,0,0.09) 0%, transparent 70%)',
      }} />

      {/* 상단: 좌우 분할 */}
      <div className="relative z-10 flex flex-col lg:flex-row" style={{ minHeight: '60vh' }}>
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 border-b lg:border-b-0 lg:border-r border-rsncNavy/8">
          <div className="reveal" data-reveal>
            <span className="section-tag mb-8">Real Results</span>
          </div>
          <span className="headline-wrap mb-6">
            <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 3.5rem)' }}>
              뭐가 팔리는지,<br />
              <span className="text-rsncGreen">우리가 제일 잘 압니다.</span>
            </h2>
          </span>
          <p className="text-rsncNavy/55 text-base font-light max-w-sm reveal" data-reveal style={{ transitionDelay: '120ms' }}>
            120개 이상의 캠페인을 직접 운영하며 카테고리별로<br />
            <strong className="text-rsncNavy font-semibold">어떤 인플루언서가, 어떤 콘텐츠로, 어떻게 팔리는지</strong><br />
            구조적인 데이터와 경험을 쌓아왔습니다.
          </p>
        </div>

        {/* 우: 영상 */}
        <div className="lg:w-[45%] relative overflow-hidden rounded-none" style={{ minHeight: '400px' }}>
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="/wave1.mp4"
            autoPlay muted loop playsInline
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #F8F9FA 0%, transparent 30%, transparent 70%, #F8F9FA 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #F8F9FA 0%, transparent 20%, transparent 80%, #F8F9FA 100%)' }} />
        </div>
      </div>

      {/* 수치 그리드 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 border-t border-rsncNavy/8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} triggered={triggered} stagger={i + 1} />
          ))}
        </div>
      </div>

      {/* 협업 브랜드 */}
      <div className="relative z-10 border-t border-rsncNavy/8 py-14 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 mb-8">
          <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase reveal" data-reveal>협업 브랜드</p>
        </div>
        <style>{`
          @keyframes brand-scroll {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(-50%, 0, 0); }
          }
          .brand-track {
            animation: brand-scroll 18s linear infinite;
            will-change: transform;
          }
          .brand-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="brand-track flex gap-3 w-max">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-rsncNavy/60 text-sm border border-rsncNavy/10 bg-white/60 backdrop-blur-sm px-6 py-3 whitespace-nowrap hover:border-rsncGreen hover:text-rsncNavy transition-all duration-300 shrink-0 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
