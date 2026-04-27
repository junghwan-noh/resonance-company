'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    handle: '@beautybyella',
    category: 'Beauty',
    views: '1.8M',
    likes: '24.3K',
    result: '문의 230건',
    caption: '드디어 찾았다 내 스킨케어 루틴 🌿',
    color: '#FF6B9D',
    bg: 'from-pink-100 to-rose-50',
  },
  {
    handle: '@fitlife.james',
    category: 'Fitness',
    views: '3.1M',
    likes: '41.8K',
    result: '월매출 3배',
    caption: '운동 후 회복이 이렇게 달라질 줄 몰랐음 💪',
    color: '#00D4FF',
    bg: 'from-cyan-100 to-sky-50',
  },
  {
    handle: '@sydneyfoodie',
    category: 'F&B',
    views: '890K',
    likes: '18.6K',
    result: '마트 입점 계기',
    caption: '시드니에서 핫한 브랜드 써봤는데 이거 진짜임 🍽',
    color: '#FF9F43',
    bg: 'from-orange-100 to-amber-50',
  },
  {
    handle: '@glowwithsarah',
    category: 'Beauty',
    views: '2.4M',
    likes: '33.1K',
    result: '재구매율 68%',
    caption: '글로우 세럼 쓴지 2주 만에 피부 달라짐 ✨',
    color: '#7CFF00',
    bg: 'from-lime-100 to-green-50',
  },
  {
    handle: '@lifestylewithtom',
    category: 'Lifestyle',
    views: '5.2M',
    likes: '89.4K',
    result: '앱 다운로드 1만+',
    caption: '이 브랜드 진짜 내 일상 바꿔놨다 🔥',
    color: '#A78BFA',
    bg: 'from-violet-100 to-purple-50',
  },
  {
    handle: '@healthyeats.mel',
    category: 'F&B',
    views: '1.2M',
    likes: '27.9K',
    result: '팝업 완판',
    caption: '건강하게 먹는 거 이제 어렵지 않아요 🥗',
    color: '#34D399',
    bg: 'from-emerald-100 to-teal-50',
  },
]

function TikTokCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`relative shrink-0 bg-gradient-to-b ${card.bg} border border-gray-200 overflow-hidden cursor-pointer transition-all duration-500`}
      style={{
        width: '200px',
        height: '355px',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? `0 20px 60px ${card.color}30` : '0 2px 12px rgba(0,0,0,0.06)',
        borderColor: hovered ? card.color : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 세로형 숏폼 미리보기 */}
      <div className="absolute inset-0 flex flex-col justify-between p-4">

        {/* 상단: 카테고리 */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold px-2 py-1 rounded-sm" style={{ background: card.color, color: '#000' }}>
            {card.category}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={card.color}>
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
          </svg>
        </div>

        {/* 중앙: 재생 버튼 */}
        <div className="flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? card.color : 'rgba(255,255,255,0.8)',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={hovered ? '#000' : card.color}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>

        {/* 하단: 정보 */}
        <div>
          <p className="text-gray-700 text-xs font-medium leading-snug mb-3">{card.caption}</p>
          <p className="text-gray-900 font-bold text-sm mb-2">{card.handle}</p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              {card.views}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              {card.likes}
            </span>
          </div>
          <div
            className="text-xs font-bold px-2 py-1 text-center"
            style={{ background: `${card.color}20`, color: card.color, border: `1px solid ${card.color}40` }}
          >
            결과: {card.result}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TikTokShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // 무한 자동 스크롤
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf: number
    const speed = 0.5

    const animate = () => {
      if (!isPaused) {
        pos += speed
        const halfWidth = track.scrollWidth / 2
        if (pos >= halfWidth) pos = 0
        track.style.transform = `translateX(-${pos}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [isPaused])

  const doubled = [...cards, ...cards]

  return (
    <section ref={ref} className="bg-gray-50 border-t border-gray-200 py-24 overflow-hidden" id="showcase">

      <div className="px-6 md:px-16 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="reveal" data-reveal>
              <span className="section-tag mb-6">실제 시딩 결과</span>
            </div>
            <h2 className="font-display font-black leading-none tracking-tight text-gray-900 reveal" data-reveal
              style={{ fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
              이런 콘텐츠가<br />
              <span style={{ color: '#7CFF00' }}>바이럴</span>됩니다.
            </h2>
          </div>
          <p className="text-gray-500 text-sm font-light max-w-xs reveal" data-reveal>
            실제 시딩 캠페인에서 발생한 콘텐츠입니다.<br />브랜드 핏이 맞는 인플루언서가 만든 결과입니다.
          </p>
        </div>
      </div>

      {/* 무한 자동 슬라이드 */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={trackRef} className="flex gap-4 w-max" style={{ willChange: 'transform' }}>
          {doubled.map((card, i) => (
            <TikTokCard key={i} card={card} index={i} />
          ))}
        </div>
        {/* 좌우 페이드 */}
        <div className="absolute left-0 top-0 h-full w-16 pointer-events-none" style={{ background: 'linear-gradient(to right, #F9FAFB, transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-16 pointer-events-none" style={{ background: 'linear-gradient(to left, #F9FAFB, transparent)' }} />
      </div>

      <div className="px-6 md:px-16 lg:px-24 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-xs tracking-widest uppercase">hover to pause · 실제 캠페인 데이터 기반</p>
        </div>
      </div>
    </section>
  )
}
