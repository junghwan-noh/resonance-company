'use client'

import { useEffect, useRef } from 'react'

const diffs = [
  {
    num: '01',
    title: '49,383+개 검증된 DB',
    desc: '자체 수집 엔진으로 구축한 TikTok 인플루언서 풀. ER%, 팔로워 품질, 지역, 성별 필터링까지.',
  },
  {
    num: '02',
    title: 'AI 개인화 시딩 메시지',
    desc: 'Claude AI 기반으로 각 인플루언서에게 맞춤화된 DM을 자동 생성. 응답률 평균 34%.',
  },
  {
    num: '03',
    title: 'US · AU 버티컬 특화',
    desc: 'Beauty, F&B, Fitness, Lifestyle — 타겟 시장별 카테고리 인플루언서 네트워크 보유.',
  },
]

const process = [
  { step: '01', title: '브리핑', desc: '브랜드·제품·타겟 공유' },
  { step: '02', title: '매칭', desc: 'AI 필터링 + 매니저 검토' },
  { step: '03', title: '시딩', desc: '개인화 DM 발송' },
  { step: '04', title: '리포트', desc: '응답·결과 데이터 공유' },
]

export default function WhyResonanceSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el) => {
              el.classList.add('visible')
            })
            entry.target.querySelectorAll('.reveal-line').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black px-6 md:px-16 lg:px-24 py-32" id="why">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-20 reveal" data-reveal>
          <span className="w-8 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Why Resonance</span>
        </div>

        {/* Slogan */}
        <div className="mb-8">
          <h2
            className="font-display font-black leading-none tracking-tight reveal"
            data-reveal
            style={{ fontSize: 'clamp(2.8rem, 8vw, 9rem)' }}
          >
            노이즈를 걷어내고<br />
            <span className="text-neon-green">공명</span>만 남긴다.
          </h2>
        </div>

        <p className="text-gray-400 text-xl font-light mb-24 max-w-2xl reveal" data-reveal>
          수천 명에게 뿌리는 게 아닙니다.<br />
          당신의 브랜드에 진짜 반응할 인플루언서만 골라, 정확하게 닿습니다.
        </p>

        {/* Neon divider line */}
        <div className="mb-24">
          <div className="h-px bg-neon-green reveal-line" />
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-32">
          {diffs.map((d, i) => (
            <div
              key={d.num}
              className="border-t border-gray-800 md:border-l first:border-l-0 pt-8 md:pl-8 md:pr-8 pb-8 reveal"
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="text-neon-green font-display font-black text-4xl block mb-6">{d.num}</span>
              <h3 className="font-bold text-xl text-white mb-3">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-32">
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mb-12 reveal" data-reveal>
            간략한 과정
          </p>
          <div className="relative">
            <div className="hidden md:block absolute top-[5px] left-0 right-0 h-px bg-gray-800" />
            <div className="hidden md:block absolute top-[5px] left-0 h-px bg-neon-green reveal-line" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <div
                  key={p.step}
                  className="relative reveal"
                  data-reveal
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-3 h-3 bg-neon-green mb-8" />
                  <span className="text-gray-700 font-display font-black text-sm block mb-2">{p.step}</span>
                  <h4 className="font-bold text-white text-lg mb-1">{p.title}</h4>
                  <p className="text-gray-500 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="border border-gray-800 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 reveal" data-reveal>
          <div>
            <p className="text-gray-500 text-sm mb-3 uppercase tracking-widest">그래서, 왜 레조넌스인가</p>
            <h3 className="font-display font-black text-3xl md:text-4xl leading-tight">
              결과가 없으면<br />
              <span className="text-neon-green">재계약도 없습니다.</span>
            </h3>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            지금 시작하기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
