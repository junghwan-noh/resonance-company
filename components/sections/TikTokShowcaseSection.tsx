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
    // picsum seed: 여성 뷰티/스킨케어 느낌
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=700&fit=crop',
  },
  {
    handle: '@fitlife.james',
    category: 'Fitness',
    views: '3.1M',
    likes: '41.8K',
    result: '월매출 3배',
    caption: '운동 후 회복이 이렇게 달라질 줄 몰랐음 💪',
    color: '#0284C7',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=700&fit=crop',
  },
  {
    handle: '@sydneyfoodie',
    category: 'F&B',
    views: '890K',
    likes: '18.6K',
    result: '마트 입점 계기',
    caption: '시드니에서 핫한 브랜드 써봤는데 이거 진짜임 🍽',
    color: '#EA580C',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=700&fit=crop',
  },
  {
    handle: '@glowwithsarah',
    category: 'Beauty',
    views: '2.4M',
    likes: '33.1K',
    result: '재구매율 68%',
    caption: '글로우 세럼 쓴지 2주 만에 피부 달라짐 ✨',
    color: '#16A34A',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=700&fit=crop',
  },
  {
    handle: '@lifestylewithtom',
    category: 'Lifestyle',
    views: '5.2M',
    likes: '89.4K',
    result: '앱 다운로드 1만+',
    caption: '이 브랜드 진짜 내 일상 바꿔놨다 🔥',
    color: '#7C3AED',
    img: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=400&h=700&fit=crop',
  },
]

const CARD_W = 240
const CARD_H = 420

function TikTokCard({ card }: { card: typeof cards[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative shrink-0 overflow-hidden cursor-pointer rounded-2xl"
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        border: hovered ? `1.5px solid ${card.color}` : '1.5px solid rgba(13,27,42,0.08)',
        transform: hovered ? 'translate3d(0, -10px, 0) scale(1.02)' : 'translate3d(0, 0, 0) scale(1)',
        boxShadow: hovered ? `0 24px 60px ${card.color}30` : '0 4px 24px rgba(13,27,42,0.08)',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease, border-color 0.3s ease',
        willChange: 'transform',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 배경 이미지 */}
      <img
        src={card.img}
        alt={card.handle}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        loading="lazy"
      />

      {/* 그라디언트 오버레이 — 위 살짝 + 아래 강하게 */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 35%, transparent 45%, rgba(0,0,0,0.78) 100%)',
      }} />

      {/* 호버 시 그린 틴트 */}
      {hovered && (
        <div className="absolute inset-0" style={{ background: `${card.color}12` }} />
      )}

      {/* 상단: 카테고리 + TikTok 아이콘 */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
          style={{ background: `${card.color}CC`, color: '#fff', letterSpacing: '0.06em' }}>
          {card.category}
        </span>
        <div className="w-7 h-7 rounded-full backdrop-blur-sm flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.35)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
          </svg>
        </div>
      </div>

      {/* 중앙: 재생 버튼 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
          style={{
            background: hovered ? card.color : 'rgba(255,255,255,0.25)',
            border: `1.5px solid ${hovered ? card.color : 'rgba(255,255,255,0.6)'}`,
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
            transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
            boxShadow: hovered ? `0 0 24px ${card.color}60` : 'none',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ marginLeft: '2px' }}>
            <polygon points="5,3 19,12 5,21" />
          </svg>
        </div>
      </div>

      {/* 하단: 텍스트 정보 */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white/90 text-xs font-medium leading-snug mb-2.5 line-clamp-2">{card.caption}</p>
        <p className="text-white font-bold text-sm mb-2">{card.handle}</p>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/70 text-xs flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            {card.views}
          </span>
          <span className="text-white/70 text-xs flex items-center gap-1">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            {card.likes}
          </span>
        </div>
        {/* 결과 배지 */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm"
          style={{ background: `${card.color}DD`, color: '#fff' }}>
          <span>✦</span> {card.result}
        </div>
      </div>
    </div>
  )
}

export default function TikTokShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const [paused, setPaused] = useState(false)
  const doubled = [...cards, ...cards]

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

  const totalWidth = (CARD_W + 16) * cards.length

  return (
    <section ref={ref} data-section className="bg-transparent border-t border-rsncNavy/6 py-32 overflow-hidden" id="showcase">

      {/* 그린 광원 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 50% 60% at 70% 50%, rgba(209,255,0,0.07) 0%, transparent 70%)',
      }} />

      <style>{`
        @keyframes marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-${totalWidth}px, 0, 0); }
        }
        .marquee-track {
          animation: marquee 32s linear infinite;
          will-change: transform;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* 헤더 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 mb-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="reveal" data-reveal>
              <span className="section-tag mb-6">실제 시딩 결과</span>
            </div>
            <span className="headline-wrap">
              <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
                이런 콘텐츠가<br />
                <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>바이럴</span>됩니다.
              </h2>
            </span>
          </div>
          <p className="text-rsncNavy/60 text-sm font-light max-w-xs reveal" data-reveal>
            실제 시딩 캠페인에서 발생한 콘텐츠입니다.<br />브랜드 핏이 맞는 인플루언서가 만든 결과입니다.
          </p>
        </div>
      </div>

      {/* 마키 트랙 */}
      <div
        className="relative z-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`flex gap-4 w-max marquee-track ${paused ? 'paused' : ''}`}>
          {doubled.map((card, i) => (
            <TikTokCard key={i} card={card} />
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-24 pointer-events-none" style={{ background: 'linear-gradient(to right, #F8F9FA, transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-24 pointer-events-none" style={{ background: 'linear-gradient(to left, #F8F9FA, transparent)' }} />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-rsncNavy/40 text-xs tracking-widest uppercase">hover to pause · 실제 캠페인 데이터 기반</p>
        </div>
      </div>
    </section>
  )
}
