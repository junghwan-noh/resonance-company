'use client'

import { useEffect, useRef } from 'react'

const diffs = [
  { num: '01', title: '49,383개 인플루언서, 직접 검증', desc: '자체 수집 엔진으로 쌓은 TikTok DB. 팔로워 수가 아닌 ER%, 지역, 성별, 콘텐츠 품질까지 필터링합니다.', tag: 'Database' },
  { num: '02', title: 'AI가 쓰는 DM, 사람이 읽는 메시지', desc: 'Claude AI 기반 개인화 시딩 메시지. 브랜드·인플루언서별 맞춤 작성. 평균 응답률 34% — 업계 평균의 3배.', tag: 'AI Outreach' },
  { num: '03', title: '버티컬 특화, 시장 집중', desc: 'Beauty, F&B, Fitness, Lifestyle. US · AU 시장만 파고듭니다. 넓게 펼치지 않고, 깊게 파고드는 방식.', tag: 'Vertical' },
]

const steps = [
  { n: '01', t: '브리핑', d: '브랜드 · 제품 · 타겟', color: '#7CFF00' },
  { n: '02', t: '매칭', d: 'AI 필터 + 매니저 검토', color: '#00D4FF' },
  { n: '03', t: '시딩', d: '개인화 DM 발송', color: '#7CFF00' },
  { n: '04', t: '리포트', d: '응답 · 결과 공유', color: '#00D4FF' },
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
    <section ref={ref} className="bg-black" id="why">

      {/* 슬로건 — 딥 바이올렛 그라디언트 배경 */}
      <div
        className="relative flex items-center"
        style={{
          minHeight: '60vh',
          background: 'linear-gradient(135deg, #000d14 0%, #001a26 40%, #000e1a 70%, #000000 100%)',
        }}
      >
        {/* 배경 글로우 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)' }} />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #7CFF00 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Why Resonance</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-6 reveal" data-reveal
            style={{ fontSize: 'clamp(1.4rem, 3vw, 3.5rem)' }}>
            많이 뿌리는 게 아니라<br />
            <span className="text-neon-green">정확하게</span>{' '}
            <span style={{ color: '#C084FC' }}>닿는 겁니다.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-lg reveal" data-reveal>
            수천 명에게 보내는 DM은 스팸입니다.<br />
            당신의 브랜드에 진짜 반응할 사람에게만 — 그게 레조넌스입니다.
          </p>
        </div>
      </div>

      {/* 차별화 3가지 */}
      <div className="px-6 md:px-16 lg:px-24 py-20 border-t border-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
          {diffs.map((d, i) => (
            <div
              key={d.num}
              className="md:border-r border-gray-800 last:border-r-0 border-b md:border-b-0 pt-10 pb-10 md:pr-10 md:pl-10 first:pl-0 last:pr-0 reveal"
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-black text-3xl"
                  style={{ color: i === 0 ? '#7CFF00' : i === 1 ? '#00D4FF' : '#00D4FF' }}>
                  {d.num}
                </span>
                <span className="text-gray-700 text-xs border border-gray-800 px-3 py-1">{d.tag}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-4 leading-snug">{d.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 프로세스 — CSS 다이어그램 애니메이션 */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-16 reveal" data-reveal>진행 과정</p>

          {/* 다이어그램 */}
          <div className="relative reveal" data-reveal>
            {/* 연결선 */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(90deg, #7CFF00, #00D4FF, #7CFF00, #00D4FF)' }}>
              <div className="absolute inset-0 animate-pulse opacity-60" style={{ background: 'inherit' }} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.n} className="flex flex-col items-center text-center reveal" data-reveal
                  style={{ transitionDelay: `${i * 120}ms` }}>
                  {/* 노드 */}
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-6 relative"
                    style={{
                      border: `2px solid ${s.color}`,
                      boxShadow: `0 0 20px ${s.color}30`,
                    }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{ background: s.color }} />
                    <span className="font-display font-black text-sm" style={{ color: s.color }}>{s.n}</span>

                    {/* 펄스 링 */}
                    <div className="absolute inset-0 border"
                      style={{
                        borderColor: s.color,
                        animation: `ping 2s cubic-bezier(0,0,0.2,1) infinite`,
                        animationDelay: `${i * 0.5}s`,
                        opacity: 0.3,
                      }}
                    />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">{s.t}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA 블록 */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto bg-gray-950 border border-gray-800 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 reveal" data-reveal>
          <div>
            <p className="text-gray-600 text-xs tracking-widest uppercase mb-4">그래서, 우릴 써야하는 이유</p>
            <h3 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
              결과 없으면 재계약 없습니다.<br />
              <span className="text-neon-green">그래서 우리는</span>{' '}
              <span style={{ color: '#00D4FF' }}>결과에 집착합니다.</span>
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
