'use client'

import { useEffect, useRef, useState } from 'react'

const othersSteps = [
  { label: '대형 DB 구입', desc: '수십만 건 엑셀' },
  { label: '무차별 DM 발송', desc: '복붙 템플릿' },
  { label: '응답 기다리기', desc: '평균 응답률 ~8%' },
  { label: '결과 불투명', desc: '리포트 없음' },
]

const ourSteps = [
  { label: '브리핑', desc: '브랜드·제품·타겟', color: '#7CFF00' },
  { label: 'AI 매칭', desc: 'ER% · 지역 · 콘텐츠 품질', color: '#00D4FF' },
  { label: '개인화 DM', desc: 'AI 기반 맞춤 작성', color: '#7CFF00' },
  { label: '리포트', desc: '응답률 · 도달 · 결과 공유', color: '#00D4FF' },
]

const slides = [
  {
    type: 'bad' as const,
    label: '타사가 보내는 인플루언서',
    handle: '@random_acc99',
    followers: '120K',
    er: '0.4%',
    erColor: '#EF4444',
    image: '/influencer-bad.jpg',
    likes: '480',
    comments: '12',
    grayscale: true,
    badgeColor: 'bg-red-900/80',
    badgeText: '⚠ 저품질',
    badgeTextColor: 'text-red-400',
    erBadgeBg: 'bg-red-500/20 border-red-500/40',
    erBadgeText: 'text-red-400',
    checks: [
      { ok: false, text: '팔로워 대량 구매 의심' },
      { ok: false, text: '댓글 대부분 봇' },
      { ok: false, text: '콘텐츠 일관성 없음' },
      { ok: false, text: '브랜드 핏 미검증' },
    ],
    resultBg: 'border-red-900/40 bg-red-950/20',
    resultTitle: '평균 결과',
    resultTitleColor: 'text-red-500',
    resultDesc: '응답률 ~8% · 브랜드 핏 불일치 · ROI 측정 불가',
  },
  {
    type: 'good' as const,
    label: 'Resonance DB 인플루언서',
    handle: '@beautybyella',
    followers: '892K',
    er: '6.2%',
    erColor: '#7CFF00',
    image: '/influencer-good.jpg',
    likes: '24.3K',
    comments: '1.2K',
    grayscale: false,
    badgeColor: 'bg-neon-green/20',
    badgeText: '✓ 검증됨',
    badgeTextColor: 'text-neon-green',
    erBadgeBg: 'bg-neon-green/20 border-neon-green/50',
    erBadgeText: 'text-neon-green',
    checks: [
      { ok: true, text: '실 팬덤 확인 완료' },
      { ok: true, text: '댓글 퀄리티 검증' },
      { ok: true, text: '뷰티 콘텐츠 일관성' },
      { ok: true, text: '브랜드 핏 AI 매칭' },
    ],
    resultBg: 'border-neon-green/30 bg-neon-green/5',
    resultTitle: '평균 결과',
    resultTitleColor: 'text-neon-green',
    resultDesc: '응답률 34% · 브랜드 핏 매칭 · 캠페인 리포트 제공',
  },
]

export default function WhyResonanceSection() {
  const ref = useRef<HTMLElement>(null)
  const [slide, setSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const go = (idx: number, dir: 'left' | 'right') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setSlide(idx)
      setAnimating(false)
    }, 400)
  }

  const next = () => go((slide + 1) % slides.length, 'right')
  const prev = () => go((slide - 1 + slides.length) % slides.length, 'left')

  // 자동 슬라이드 3초마다
  useEffect(() => {
    autoRef.current = setInterval(next, 3000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [slide, animating])

  const s = slides[slide]

  return (
    <section ref={ref} className="bg-black" id="why">

      {/* 슬로건 헤더 */}
      <div
        className="relative flex items-center"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(135deg, #000d14 0%, #001a26 40%, #000e1a 70%, #000000 100%)',
        }}
      >
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
            <span style={{ color: '#00D4FF' }}>닿는 겁니다.</span>
          </h2>
          <p className="text-gray-400 text-base font-light max-w-lg reveal" data-reveal>
            수천 명에게 보내는 DM은 스팸입니다.<br />
            당신의 브랜드에 진짜 반응할 사람에게만 — 그게 레조넌스입니다.
          </p>
        </div>
      </div>

      {/* 프로세스 비교 다이어그램 */}
      <div className="px-6 md:px-16 lg:px-24 py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-10 reveal" data-reveal>프로세스 비교</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* 타사 */}
            <div className="border border-gray-800 p-8 reveal" data-reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">타사 방식</span>
              </div>
              <div className="space-y-0">
                {othersSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 border border-gray-700 flex items-center justify-center">
                        <span className="text-gray-600 text-xs">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      {i < othersSteps.length - 1 && <div className="w-px h-10 bg-gray-800" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-gray-400 text-sm font-semibold mb-0.5">{step.label}</p>
                      <p className="text-gray-700 text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-red-900/40 bg-red-950/20 p-4 mt-2">
                <p className="text-red-500 text-xs font-bold mb-1">평균 결과</p>
                <p className="text-gray-500 text-sm">응답률 ~8% · 브랜드 핏 불일치 · ROI 측정 불가</p>
              </div>
            </div>

            {/* 레조넌스 */}
            <div className="border border-neon-green/30 p-8 reveal" data-reveal style={{ transitionDelay: '120ms' }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-neon-green" />
                <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Resonance 방식</span>
              </div>
              <div className="space-y-0">
                {ourSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 flex items-center justify-center"
                        style={{ border: `1px solid ${step.color}40`, boxShadow: `0 0 12px ${step.color}20` }}>
                        <span className="text-xs font-bold" style={{ color: step.color }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      {i < ourSteps.length - 1 && (
                        <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${step.color}40, ${ourSteps[i + 1].color}20)` }} />
                      )}
                    </div>
                    <div className="pb-8">
                      <p className="text-white text-sm font-semibold mb-0.5">{step.label}</p>
                      <p className="text-gray-500 text-xs">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border border-neon-green/30 bg-neon-green/5 p-4 mt-2">
                <p className="text-neon-green text-xs font-bold mb-1">평균 결과</p>
                <p className="text-gray-300 text-sm">응답률 34% · 브랜드 핏 매칭 · 캠페인 리포트 제공</p>
              </div>
            </div>
          </div>

          {/* 핵심 차이 요약 */}
          <div className="mt-6 grid grid-cols-3 gap-4 reveal" data-reveal style={{ transitionDelay: '200ms' }}>
            {[
              { label: '응답률 차이', others: '~8%', ours: '34%', color: '#7CFF00' },
              { label: '인플루언서 검증', others: '없음', ours: '49,383건', color: '#00D4FF' },
              { label: '브랜드 핏', others: '랜덤', ours: 'AI 매칭', color: '#7CFF00' },
            ].map((item) => (
              <div key={item.label} className="border border-gray-800 p-5 text-center">
                <p className="text-gray-600 text-xs mb-4 tracking-wide">{item.label}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-600 text-sm line-through">{item.others}</span>
                  <span className="text-gray-700">→</span>
                  <span className="font-bold text-sm" style={{ color: item.color }}>{item.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 인플루언서 퀄리티 비교 — 가로 슬라이더 */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 reveal" data-reveal>
            <p className="text-gray-600 text-xs tracking-[0.35em] uppercase">인플루언서 퀄리티 비교</p>
            {/* 화살표 */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > slide ? 'right' : 'left')}
                  className="w-6 h-px transition-all duration-300"
                  style={{ background: i === slide ? '#7CFF00' : '#374151' }}
                />
              ))}
              <button onClick={prev} className="ml-4 w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-neon-green transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="w-8 h-8 border border-gray-700 flex items-center justify-center hover:border-neon-green transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          {/* 슬라이드 영역 */}
          <div className="overflow-hidden reveal" data-reveal>
            <div
              style={{
                transform: animating
                  ? `translateX(${direction === 'right' ? '-60px' : '60px'})`
                  : 'translateX(0)',
                opacity: animating ? 0 : 1,
                transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
              }}
            >
              <div
                className="border p-0 overflow-hidden"
                style={{ borderColor: s.type === 'good' ? 'rgba(124,255,0,0.3)' : 'rgba(55,65,81,1)' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">

                  {/* 이미지 */}
                  <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
                    <img
                      src={s.image}
                      alt={s.handle}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                      style={{ filter: s.grayscale ? 'grayscale(100%)' : 'none', opacity: s.grayscale ? 0.55 : 0.85 }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, #000 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #000 0%, transparent 50%)' }} />

                    {/* 배지 */}
                    <div className={`absolute top-4 left-4 px-3 py-1.5 ${s.badgeColor}`}>
                      <span className={`text-xs font-bold uppercase tracking-wider ${s.badgeTextColor}`}>{s.badgeText}</span>
                    </div>

                    {/* 소셜 오버레이 */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-sm font-bold">{s.handle}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-gray-400 text-xs">♥ {s.likes}</span>
                        <span className="text-gray-400 text-xs">💬 {s.comments}</span>
                      </div>
                    </div>
                  </div>

                  {/* 정보 패널 */}
                  <div className="p-8 flex flex-col justify-between" style={{ background: '#080808' }}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs tracking-[0.3em] uppercase ${s.badgeTextColor}`}>{s.label}</span>
                      </div>
                      <p className="text-white font-bold text-lg mb-6">{s.handle}</p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="border border-gray-800 p-4">
                          <p className="text-gray-600 text-[10px] mb-1 uppercase tracking-wider">팔로워</p>
                          <p className="text-white text-xl font-black">{s.followers}</p>
                        </div>
                        <div className={`border p-4 ${s.erBadgeBg}`}>
                          <p className="text-gray-600 text-[10px] mb-1 uppercase tracking-wider">참여율 ER</p>
                          <p className={`text-xl font-black ${s.erBadgeText}`}>{s.er}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {s.checks.map((c) => (
                          <div key={c.text} className="flex items-center gap-2">
                            <span className={`text-xs font-bold ${c.ok ? 'text-neon-green' : 'text-red-500'}`}>{c.ok ? '✓' : '✗'}</span>
                            <span className={`text-xs ${c.ok ? 'text-gray-400' : 'text-gray-600'}`}>{c.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`border p-4 ${s.resultBg}`}>
                      <p className={`text-xs font-bold mb-1 ${s.resultTitleColor}`}>{s.resultTitle}</p>
                      <p className="text-gray-400 text-sm">{s.resultDesc}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 슬라이드 인디케이터 텍스트 */}
              <p className="text-gray-700 text-xs mt-4 text-right">
                {slide + 1} / {slides.length} — 자동 전환 중
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
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
