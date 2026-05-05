'use client'

import { useEffect, useRef, useState } from 'react'

const legacySteps = [
  { num: '01', keyword: 'DB 구입', desc: '수십만 건 엑셀 파일 구매', detail: '검증되지 않은 대형 DB를 그대로 사용합니다.' },
  { num: '02', keyword: '무차별 발송', desc: '팔로워 수만 보고 선별', detail: '복붙 템플릿으로 수백 명에게 동일한 DM을 보냅니다.' },
  { num: '03', keyword: '응답 대기', desc: '평균 응답률 ~8%', detail: '대부분 무시당하거나 스팸으로 처리됩니다.' },
  { num: '04', keyword: '결과 없음', desc: '리포트 없음 · ROI 불투명', detail: '캠페인이 끝나도 무엇이 효과 있었는지 알 수 없습니다.' },
]

const rsnSteps = [
  {
    num: '01',
    keyword: '브리핑',
    desc: '브랜드·제품·타겟 시장 파악',
    detail: '단 1회 미팅으로 브랜드 페르소나를 완전히 이해합니다.',
  },
  {
    num: '02',
    keyword: '정밀 매칭',
    desc: 'ER% · 팔로워 진성도 · 콘텐츠 품질 교차 분석',
    detail: '49,383개 DB에서 브랜드에 딱 맞는 인플루언서만 추출합니다.',
  },
  {
    num: '03',
    keyword: '개인화 DM',
    desc: '브랜드 맞춤 접근 메시지',
    detail: '복붙 없이 각 인플루언서에 맞게 개별 작성합니다.',
  },
  {
    num: '04',
    keyword: '리포트',
    desc: '응답률 · 도달 · 전환 전수 공유',
    detail: '캠페인 종료 후 모든 수치를 투명하게 공개합니다.',
  },
]

const slides = [
  {
    type: 'bad' as const,
    label: '타사가 보내는 인플루언서',
    handle: '@random_acc99',
    followers: '120K',
    er: '0.4%',
    image: '/influencer-bad.jpg',
    likes: '480',
    comments: '12',
    grayscale: true,
    badgeText: '⚠ 저품질',
    checks: [
      { ok: false, text: '팔로워 대량 구매 의심' },
      { ok: false, text: '댓글 대부분 봇' },
      { ok: false, text: '콘텐츠 일관성 없음' },
      { ok: false, text: '브랜드 핏 미검증' },
    ],
    resultTitle: '평균 결과',
    resultDesc: '응답률 ~8% · 브랜드 핏 불일치 · ROI 측정 불가',
  },
  {
    type: 'good' as const,
    label: 'Resonance DB 인플루언서',
    handle: '@beautybyella',
    followers: '892K',
    er: '6.2%',
    image: '/influencer-good.jpg',
    likes: '24.3K',
    comments: '1.2K',
    grayscale: false,
    badgeText: '✓ 검증됨',
    checks: [
      { ok: true, text: '실 팬덤 확인 완료' },
      { ok: true, text: '댓글 퀄리티 검증' },
      { ok: true, text: '뷰티 콘텐츠 일관성' },
      { ok: true, text: '브랜드 핏 정밀 매칭' },
    ],
    resultTitle: '평균 결과',
    resultDesc: '응답률 34% · 브랜드 핏 매칭 · 캠페인 리포트 제공',
  },
]

export default function WhyResonanceSection() {
  const ref = useRef<HTMLElement>(null)
  const [slide, setSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // 좌우 교차 강조
  const [focus, setFocus] = useState<'left' | 'right'>('left')
  const [hovering, setHovering] = useState<'left' | 'right' | null>(null)
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    cycleRef.current = setInterval(() => {
      if (!hovering) setFocus(f => f === 'left' ? 'right' : 'left')
    }, 2200)
    return () => { if (cycleRef.current) clearInterval(cycleRef.current) }
  }, [hovering])

  const active = hovering ?? focus

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
    setTimeout(() => { setSlide(idx); setAnimating(false) }, 400)
  }

  const next = () => go((slide + 1) % slides.length, 'right')
  const prev = () => go((slide - 1 + slides.length) % slides.length, 'left')

  useEffect(() => {
    autoRef.current = setInterval(next, 3000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [slide, animating])

  const s = slides[slide]

  return (
    <section ref={ref} data-section className="bg-transparent" id="why" style={{ position: 'relative' }}>

      {/* 슬로건 헤더 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-48 pb-32 max-w-7xl mx-auto w-full">
        <div className="reveal" data-reveal>
          <span className="section-tag mb-10">Why Resonance</span>
        </div>
        <span className="headline-wrap mb-10">
          <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 5.5rem)' }}>
            많이 뿌리는 게 아니라<br />
            <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>정확하게</span>{' '}
            <span className="text-rsncNavy">닿는 겁니다.</span>
          </h2>
        </span>
        <p className="text-rsncNavy/65 text-lg md:text-xl font-medium max-w-xl reveal" data-reveal style={{ transitionDelay: '120ms' }}>
          브랜드 페르소나에 맞춰 인플루언서를 선별하고,<br />
          무작위 시딩이 아닌 전략적으로 연결합니다.
        </p>
      </div>

      {/* ── 대조 프로세스 비교 ── */}
      <div className="border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">

          {/* 섹션 레이블 */}
          <p className="text-rsncNavy/65 text-xs tracking-[0.35em] uppercase mb-16 reveal" data-reveal>프로세스 비교</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── 왼쪽: Legacy ── */}
            <div
              className="reveal"
              data-reveal
              onMouseEnter={() => setHovering('left')}
              onMouseLeave={() => setHovering(null)}
              style={{
                opacity: active === 'left' ? 1 : 0.35,
                transform: active === 'left' ? 'scale(1.015)' : 'scale(0.98)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* 헤더 */}
              <div className="mb-8">
                <p className="text-rsncNavy/65 text-[10px] tracking-[0.4em] uppercase mb-2">기존 방식</p>
                <h3 className="font-display font-black tracking-tighter text-rsncNavy/60"
                  style={{ fontSize: 'clamp(3rem, 5.5vw, 7rem)', lineHeight: 1 }}>
                  LEGACY
                </h3>
              </div>

              {/* 스텝 카드들 */}
              <div className="flex flex-col gap-0">
                {legacySteps.map((step, i) => (
                  <div key={step.num}>
                    <div className="rounded-2xl p-5 bg-white"
                      style={{ border: '1.5px solid rgba(13,27,42,0.10)', boxShadow: '0 2px 12px rgba(13,27,42,0.05)' }}>
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-rsncNavy"
                          style={{ background: 'rgba(13,27,42,0.07)', letterSpacing: '-0.02em' }}>
                          {step.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-black tracking-tighter leading-none mb-1.5 text-rsncNavy"
                            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
                            {step.keyword}
                          </p>
                          <p className="text-rsncNavy/60 text-xs font-medium mb-1">{step.desc}</p>
                          <p className="text-rsncNavy/50 text-xs leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                    {i < legacySteps.length - 1 && (
                      <div className="flex flex-col items-center py-1" style={{ marginLeft: '28px' }}>
                        <div style={{ width: '1.5px', height: '20px', background: 'rgba(13,27,42,0.12)' }} />
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M6 8L0.803848 0.5H11.1962L6 8Z" fill="rgba(13,27,42,0.18)" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {/* 결과 뱃지 */}
                <div className="mt-3 rounded-2xl px-6 py-4 flex items-center gap-4"
                  style={{ background: 'rgba(239,68,68,0.04)', border: '1.5px solid rgba(239,68,68,0.15)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(239,68,68,0.1)' }}>
                    <span className="text-red-400 text-sm">⚠</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'rgba(13,27,42,0.35)' }}>응답률 ~8% · ROI 측정 불가</p>
                    <p className="text-xs" style={{ color: 'rgba(13,27,42,0.2)' }}>리포트 없음 · 결과 불투명</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 오른쪽: RSNC ── */}
            <div
              className="relative reveal"
              data-reveal
              onMouseEnter={() => setHovering('right')}
              onMouseLeave={() => setHovering(null)}
              style={{
                transitionDelay: '150ms',
                opacity: active === 'right' ? 1 : 0.35,
                transform: active === 'right' ? 'scale(1.015)' : 'scale(0.98)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >

              {/* 뒤쪽 그린 글로우 */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(209,255,0,0.13) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }} />

              {/* 헤더 */}
              <div className="relative z-10 mb-8">
                <p className="text-rsncNavy/60 text-[10px] tracking-[0.4em] uppercase mb-2">RSNC 방식</p>
                <h3 className="font-display font-black tracking-tighter text-rsncNavy"
                  style={{ fontSize: 'clamp(3rem, 5.5vw, 7rem)', lineHeight: 1 }}>
                  PRECISE
                </h3>
              </div>

              {/* 스텝 카드들 */}
              <div className="relative z-10 flex flex-col gap-0">
                {rsnSteps.map((step, i) => (
                  <div key={step.num}>
                    {/* 카드 */}
                    <div
                      className="rounded-2xl p-5 bg-white"
                      style={{
                        border: '1.5px solid rgba(209,255,0,0.55)',
                        boxShadow: '0 4px 32px rgba(209,255,0,0.12), 0 1px 8px rgba(13,27,42,0.06)',
                      }}
                    >
                      <div className="flex items-start gap-5">
                        {/* 번호 뱃지 */}
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-rsncNavy"
                          style={{ background: '#D1FF00', letterSpacing: '-0.02em' }}>
                          {step.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          {/* 핵심 키워드 */}
                          <p className="font-display font-black tracking-tighter text-rsncNavy leading-none mb-1.5"
                            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
                            {step.keyword}
                          </p>
                          <p className="text-rsncNavy/55 text-xs font-medium mb-1">{step.desc}</p>
                          <p className="text-rsncNavy/50 text-xs leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    </div>

                    {/* 연결 화살표 (마지막 제외) */}
                    {i < rsnSteps.length - 1 && (
                      <div className="flex flex-col items-center py-1" style={{ marginLeft: '28px' }}>
                        <div style={{
                          width: '1.5px',
                          height: '20px',
                          background: 'linear-gradient(to bottom, rgba(209,255,0,0.8), rgba(209,255,0,0.3))',
                        }} />
                        {/* 화살표 머리 */}
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M6 8L0.803848 0.5H11.1962L6 8Z" fill="#D1FF00" fillOpacity="0.7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {/* 결과 뱃지 */}
                <div className="mt-3 rounded-2xl px-6 py-4 flex items-center gap-4"
                  style={{ background: 'rgba(209,255,0,0.10)', border: '1.5px solid rgba(209,255,0,0.35)' }}>
                  <div className="w-8 h-8 rounded-full bg-rsncGreen flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="text-rsncNavy font-bold text-sm">응답률 34% · 브랜드 핏 매칭</p>
                    <p className="text-rsncNavy/65 text-xs">캠페인 리포트 전수 공개</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 지표 비교 바 */}
          <div className="mt-16 grid grid-cols-3 gap-4 reveal" data-reveal style={{ transitionDelay: '200ms' }}>
            {[
              { label: '응답률', legacy: 8, rsnc: 34, unit: '%' },
              { label: '인플루언서 DB', legacy: 0, rsnc: 49383, unit: '+' },
              { label: '캠페인 리포트', legacy: 0, rsnc: 100, unit: '%' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-6">
                <p className="text-rsncNavy/55 text-xs tracking-wide mb-5">{item.label}</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-rsncNavy/65 text-[10px]">기존</span>
                      <span className="text-rsncNavy/65 text-[10px]">{item.legacy === 0 ? '없음' : `${item.legacy}${item.unit}`}</span>
                    </div>
                    <div className="h-1 bg-rsncNavy/6 rounded-full overflow-hidden">
                      <div className="h-full bg-rsncNavy/15 rounded-full" style={{ width: `${(item.legacy / (item.rsnc || 100)) * 100}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-rsncNavy/60 text-[10px] font-semibold">RSNC</span>
                      <span className="text-rsncNavy font-bold text-[10px]">{item.rsnc === 49383 ? '49,383+' : `${item.rsnc}${item.unit}`}</span>
                    </div>
                    <div className="h-1.5 bg-rsncNavy/6 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '100%', background: '#D1FF00', boxShadow: '0 0 8px rgba(209,255,0,0.5)' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 인플루언서 퀄리티 비교 슬라이더 ── */}
      <div className="relative z-10 border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 reveal" data-reveal>
            <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase">인플루언서 퀄리티 비교</p>
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > slide ? 'right' : 'left')}
                  className="w-6 h-px transition-all duration-300"
                  style={{ background: i === slide ? '#D1FF00' : 'rgba(13,27,42,0.15)' }}
                />
              ))}
              <button onClick={prev} className="ml-4 w-8 h-8 border border-rsncNavy/10 bg-white/70 backdrop-blur-sm flex items-center justify-center hover:border-rsncGreen transition-colors rounded">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5" strokeOpacity="0.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} className="w-8 h-8 border border-rsncNavy/10 bg-white/70 backdrop-blur-sm flex items-center justify-center hover:border-rsncGreen transition-colors rounded">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5" strokeOpacity="0.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden reveal" data-reveal>
            <div style={{
              transform: animating ? `translateX(${direction === 'right' ? '-60px' : '60px'})` : 'translateX(0)',
              opacity: animating ? 0 : 1,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
            }}>
              <div className="glass-card overflow-hidden rounded-2xl"
                style={{ borderColor: s.type === 'good' ? 'rgba(209,255,0,0.35)' : 'rgba(13,27,42,0.08)' }}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
                    <img src={s.image} alt={s.handle}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                      style={{ filter: s.grayscale ? 'grayscale(100%)' : 'none', opacity: s.grayscale ? 0.5 : 0.85 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(255,255,255,0.95) 100%)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 50%)' }} />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${s.type === 'good' ? 'bg-rsncGreen' : 'bg-red-100'}`}>
                      <span className={`text-xs font-bold ${s.type === 'good' ? 'text-rsncNavy' : 'text-red-500'}`}>{s.badgeText}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-sm font-bold">{s.handle}</p>
                      <div className="flex gap-3 mt-1">
                        <span className="text-white/70 text-xs">♥ {s.likes}</span>
                        <span className="text-white/70 text-xs">💬 {s.comments}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between bg-white/60 backdrop-blur-md">
                    <div>
                      <p className="text-rsncNavy/60 text-xs tracking-[0.3em] uppercase mb-1">{s.label}</p>
                      <p className="text-rsncNavy font-bold text-lg mb-6">{s.handle}</p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="border border-rsncNavy/8 bg-white/70 rounded-xl p-4">
                          <p className="text-rsncNavy/55 text-[10px] mb-1 uppercase tracking-wider">팔로워</p>
                          <p className="text-rsncNavy text-xl font-black">{s.followers}</p>
                        </div>
                        <div className="rounded-xl p-4" style={{
                          borderWidth: '1px', borderStyle: 'solid',
                          borderColor: s.type === 'good' ? 'rgba(209,255,0,0.4)' : 'rgba(239,68,68,0.2)',
                          background: s.type === 'good' ? 'rgba(209,255,0,0.06)' : 'rgba(239,68,68,0.04)',
                        }}>
                          <p className="text-rsncNavy/55 text-[10px] mb-1 uppercase tracking-wider">참여율 ER</p>
                          <p className="text-xl font-black" style={{ color: s.type === 'good' ? '#0D1B2A' : '#EF4444' }}>{s.er}</p>
                        </div>
                      </div>
                      <div className="space-y-2 mb-6">
                        {s.checks.map((c) => (
                          <div key={c.text} className="flex items-center gap-2">
                            <span className="shrink-0 flex items-center justify-center rounded-full"
                              style={c.ok
                                ? { width: '16px', height: '16px', background: '#D1FF00' }
                                : { width: '16px', height: '16px', background: 'rgba(239,68,68,0.1)' }}>
                              <span className={`text-[9px] font-black ${c.ok ? 'text-rsncNavy' : 'text-red-400'}`}>{c.ok ? '✓' : '✗'}</span>
                            </span>
                            <span className={`text-xs ${c.ok ? 'text-rsncNavy/65' : 'text-rsncNavy/55'}`}>{c.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl p-4" style={{
                      borderWidth: '1px', borderStyle: 'solid',
                      borderColor: s.type === 'good' ? 'rgba(209,255,0,0.3)' : 'rgba(239,68,68,0.15)',
                      background: s.type === 'good' ? 'rgba(209,255,0,0.05)' : 'rgba(239,68,68,0.03)',
                    }}>
                      <p className="text-xs font-bold mb-1 text-rsncNavy">{s.resultTitle}</p>
                      <p className="text-rsncNavy/55 text-sm">{s.resultDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-rsncNavy/65 text-xs mt-4 text-right">{slide + 1} / {slides.length} — 자동 전환 중</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-28">
        <div className="max-w-7xl mx-auto glass-card rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 reveal" data-reveal>
          <div>
            <p className="text-rsncNavy/55 text-xs tracking-widest uppercase mb-6">그래서, 우릴 써야하는 이유</p>
            <p className="text-rsncNavy/55 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', maxWidth: '520px' }}>
              마케팅 시장은 국경과 차원을 넘어 급변하고 있습니다.<br />
              하지만 협력 대행사들의 결과는 미비하고, 일회성에 그치는 경우가 다반사입니다.
            </p>
            <p className="font-bold text-rsncNavy leading-snug" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', maxWidth: '520px' }}>
              팀레조넌스는 재계약에 집착하지 않습니다.<br />
              <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.3)' }}>대행사들이 놓치는 맹점을 정확히 타겟팅하여</span><br />
              리스크를 최소화합니다.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
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
