'use client'

import { useEffect, useRef } from 'react'

const diffs = [
  {
    num: '01',
    title: '49,383개 인플루언서, 직접 검증',
    desc: '자체 수집 엔진으로 쌓은 TikTok DB. 팔로워 수가 아닌 ER%, 지역, 성별, 콘텐츠 품질까지 필터링합니다.',
    tag: 'Database',
  },
  {
    num: '02',
    title: 'AI가 쓰는 DM, 사람이 읽는 메시지',
    desc: 'Claude AI 기반 개인화 시딩 메시지. 브랜드·인플루언서별 맞춤 작성. 평균 응답률 34% — 업계 평균의 3배.',
    tag: 'AI Outreach',
  },
  {
    num: '03',
    title: '버티컬 특화, 시장 집중',
    desc: 'Beauty, F&B, Fitness, Lifestyle. US · AU 시장만 파고듭니다. 넓게 펼치지 않고, 깊게 파고드는 방식.',
    tag: 'Vertical',
  },
]

const steps = [
  { n: '01', t: '브리핑', d: '브랜드 · 제품 · 타겟' },
  { n: '02', t: '매칭', d: 'AI 필터 + 매니저 검토' },
  { n: '03', t: '시딩', d: '개인화 DM 발송' },
  { n: '04', t: '리포트', d: '응답 · 결과 공유' },
]

export default function WhyResonanceSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
          e.target.querySelectorAll('.reveal-line').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black px-6 md:px-16 lg:px-24 py-32 border-t border-gray-900" id="why">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
          <span className="w-6 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Why Resonance</span>
        </div>

        {/* 슬로건 */}
        <div className="mb-8 reveal" data-reveal>
          <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2.8rem, 7vw, 8.5rem)' }}>
            많이 뿌리는 게 아니라<br />
            <span className="text-neon-green">정확하게 닿는 겁니다.</span>
          </h2>
        </div>

        <p className="text-gray-500 text-lg md:text-xl font-light mb-8 max-w-xl leading-relaxed reveal" data-reveal>
          수천 명에게 보내는 DM은 스팸입니다.<br />
          당신의 브랜드에 진짜 반응할 사람에게만 — 그게 레조넌스입니다.
        </p>

        <div className="mb-24">
          <div className="h-px bg-neon-green reveal-line" />
        </div>

        {/* 차별화 3가지 */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800 mb-32">
          {diffs.map((d, i) => (
            <div
              key={d.num}
              className="md:border-r border-gray-800 last:border-r-0 border-b md:border-b-0 pt-10 pb-10 md:pr-10 md:pl-10 first:pl-0 last:pr-0 reveal"
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-neon-green font-display font-black text-3xl">{d.num}</span>
                <span className="text-gray-700 text-xs border border-gray-800 px-3 py-1">{d.tag}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-4 leading-snug">{d.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* 과정 시각화 */}
        <div className="mb-32">
          <p className="text-gray-700 text-xs tracking-[0.35em] uppercase mb-16 reveal" data-reveal>진행 과정</p>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="hidden md:block absolute top-[5px] left-0 right-0 h-px bg-gray-800" />
            <div className="hidden md:block absolute top-[5px] left-0 h-px bg-neon-green reveal-line" />
            {steps.map((s, i) => (
              <div key={s.n} className="relative reveal" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-2.5 h-2.5 bg-neon-green mb-8 relative z-10" />
                <span className="text-gray-700 text-xs font-display font-black block mb-2">{s.n}</span>
                <h4 className="font-bold text-white text-xl mb-1">{s.t}</h4>
                <p className="text-gray-600 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 써야하는 이유 CTA */}
        <div className="bg-gray-950 border border-gray-800 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 reveal" data-reveal>
          <div>
            <p className="text-gray-600 text-xs tracking-widest uppercase mb-4">그래서, 우릴 써야하는 이유</p>
            <h3 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              결과 없으면 재계약 없습니다.<br />
              <span className="text-neon-green">그래서 우리는 결과에 집착합니다.</span>
            </h3>
          </div>
          <a href="#contact" className="btn-primary shrink-0 text-base px-10 py-5">
            무료로 시작하기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
