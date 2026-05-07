'use client'

import { useEffect, useRef } from 'react'

const influencers = [
  { handle: '@beautybyella', followers: '892K', er: '6.2%', cat: 'Beauty', market: '🇺🇸 US' },
  { handle: '@fitlife.james', followers: '1.2M', er: '4.8%', cat: 'Fitness', market: '🇺🇸 US' },
  { handle: '@sydneyfoodie', followers: '340K', er: '8.1%', cat: 'F&B', market: '🇦🇺 AU' },
  { handle: '@glowwithsarah', followers: '560K', er: '5.9%', cat: 'Beauty', market: '🇦🇺 AU' },
  { handle: '@lifestylewithtom', followers: '2.1M', er: '3.7%', cat: 'Lifestyle', market: '🇺🇸 US' },
  { handle: '@healthyeats.mel', followers: '430K', er: '7.4%', cat: 'F&B', market: '🇦🇺 AU' },
]

const posts = [
  {
    handle: '@beautybyella', cat: 'Beauty', likes: '24.3K', comments: '1.2K',
    caption: "드디어 찾았다 내 스킨케어 루틴 🌿 이 브랜드 세럼 진짜 레전드… 3주 만에 피부 달라짐",
    result: '조회수 180만 · 문의 230건',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=900&fit=crop',
    color: '#FF6B9D',
  },
  {
    handle: '@fitlife.james', cat: 'Fitness', likes: '41.8K', comments: '2.7K',
    caption: "운동 후 회복이 이렇게 달라질 줄 몰랐음. 이 브랜드 프로틴 진짜 게임체인저 ㄹㅇ",
    result: '조회수 310만 · 월매출 3배',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=900&fit=crop',
    color: '#0284C7',
  },
  {
    handle: '@sydneyfoodie', cat: 'F&B', likes: '18.6K', comments: '890',
    caption: "시드니에서 핫한 브랜드 DM 왔길래 써봤는데 이거 진짜임. 노코멘트 그냥 먹어봐",
    result: '현지 마트 입점 계기',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=900&fit=crop',
    color: '#EA580C',
  },
]

export default function InfluencerPreviewSection() {
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section ref={ref} data-section className="bg-transparent" id="preview">

      {/* 그린 광원 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 20% 60%, rgba(209,255,0,0.07) 0%, transparent 70%)',
      }} />

      {/* 헤더 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-36 pb-20 border-t border-rsncNavy/6">
        <div className="max-w-7xl mx-auto">
          <div className="reveal" data-reveal>
            <span className="section-tag mb-6">콘텐츠 맛보기</span>
          </div>
          <span className="headline-wrap mb-4">
            <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
              이런 인플루언서들과<br />
              <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>함께</span>
              <span className="text-rsncNavy">하고 있습니다.</span>
            </h2>
          </span>
          <p className="text-rsncNavy/60 text-sm font-light reveal" data-reveal>
            실제 DB에서 발췌한 샘플입니다. 브랜드에 맞는 리스트는 따로 드립니다.
          </p>
        </div>
      </div>

      {/* 인플루언서 가로 스크롤 */}
      <div className="relative z-10 border-t border-rsncNavy/6 py-14">
        <div className="px-6 md:px-16 lg:px-24 scroll-x mb-2">
          <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
            {influencers.map((inf, i) => (
              <div
                key={inf.handle}
                className={`glass-card rounded-2xl p-6 hover:shadow-glass-hover transition-all duration-300 group reveal stagger-${i + 1} cursor-default`}
                data-reveal
                style={{ width: '215px' }}
              >
                <div className="w-10 h-10 bg-rsncGreen/10 border border-rsncGreen/30 group-hover:border-rsncGreen group-hover:bg-rsncGreen mb-5 flex items-center justify-center transition-all rounded-xl">
                  <span className="font-bold text-xs text-rsncNavy">{inf.handle.slice(1, 3).toUpperCase()}</span>
                </div>
                <p className="text-rsncNavy font-bold text-sm mb-0.5 tracking-tight">{inf.handle}</p>
                <p className="text-rsncNavy/60 text-xs mb-5">{inf.market} · {inf.cat}</p>
                <div className="space-y-2.5 border-t border-rsncNavy/8 pt-4">
                  <div className="flex justify-between">
                    <span className="text-rsncNavy/60 text-xs">팔로워</span>
                    <span className="text-rsncNavy text-xs font-semibold">{inf.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-rsncNavy/60 text-xs">참여율</span>
                    <span className="text-xs font-bold text-rsncNavy">{inf.er}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 md:px-16 lg:px-24">
          <p className="text-rsncNavy/65 text-xs">→ 스크롤하면 더 보입니다</p>
        </div>
      </div>

      {/* 시딩 게시물 */}
      <div className="relative z-10 border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase mb-12 reveal" data-reveal>실제 시딩 게시물 샘플</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, i) => (
              <div
                key={post.handle}
                className={`glass-card rounded-2xl p-6 hover:shadow-glass-hover transition-all duration-300 group reveal stagger-${i + 1}`}
                data-reveal
              >
                <div className="relative w-full mb-5 overflow-hidden rounded-xl"
                  style={{ aspectRatio: '4/5', maxHeight: '240px' }}>
                  <img
                    src={post.img}
                    alt={post.cat}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* 오버레이 */}
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.55) 100%)',
                  }} />
                  {/* 카테고리 뱃지 */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2 py-1 rounded-full text-white"
                      style={{ background: `${post.color}CC` }}>
                      {post.cat}
                    </span>
                  </div>
                  {/* 좋아요 */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 text-white/90">
                    <span className="text-xs">♥</span>
                    <span className="text-xs font-semibold">{post.likes}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-rsncGreen/15 border border-rsncGreen/30 flex items-center justify-center shrink-0">
                    <span className="text-[9px] font-bold text-rsncNavy">{post.handle.slice(1, 3).toUpperCase()}</span>
                  </div>
                  <span className="text-rsncNavy/65 text-xs">{post.handle}</span>
                </div>
                <p className="text-rsncNavy/70 text-sm leading-relaxed mb-4 line-clamp-2">{post.caption}</p>
                <div className="flex gap-4 text-xs text-rsncNavy/65 mb-4">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
                <div className="border-t border-rsncNavy/8 pt-4">
                  <span className="text-xs font-semibold text-rsncNavy flex items-center gap-1">
                    <span className="inline-block w-3 h-3 rounded-full bg-rsncGreen" />
                    {post.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto reveal" data-reveal>
          <a href="#contact" className="btn-primary inline-flex">
            내 브랜드 맞춤 샘플 받기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
