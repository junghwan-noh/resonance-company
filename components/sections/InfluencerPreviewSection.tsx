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
    handle: '@beautybyella',
    cat: 'Beauty',
    likes: '24.3K',
    comments: '1.2K',
    caption: "드디어 찾았다 내 스킨케어 루틴 🌿 이 브랜드 세럼 진짜 레전드… 3주 만에 피부 달라짐",
    result: '조회수 180만 · 문의 230건',
  },
  {
    handle: '@fitlife.james',
    cat: 'Fitness',
    likes: '41.8K',
    comments: '2.7K',
    caption: "운동 후 회복이 이렇게 달라질 줄 몰랐음. 이 브랜드 프로틴 진짜 게임체인저 ㄹㅇ",
    result: '조회수 310만 · 월매출 3배',
  },
  {
    handle: '@sydneyfoodie',
    cat: 'F&B',
    likes: '18.6K',
    comments: '890',
    caption: "시드니에서 핫한 브랜드 DM 왔길래 써봤는데 이거 진짜임. 노코멘트 그냥 먹어봐",
    result: '현지 마트 입점 계기',
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
    <section ref={ref} className="bg-black px-6 md:px-16 lg:px-24 py-32 border-t border-gray-900" id="preview">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
          <span className="w-6 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">콘텐츠 맛보기</span>
        </div>

        <div className="mb-4 reveal" data-reveal>
          <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 7.5rem)' }}>
            이런 인플루언서들과<br />
            <span className="text-neon-green">함께하고 있습니다.</span>
          </h2>
        </div>
        <p className="text-gray-500 text-base font-light mb-20 reveal" data-reveal>
          실제 DB에서 발췌한 샘플입니다. 브랜드에 맞는 리스트는 따로 드립니다.
        </p>

        {/* 인플루언서 카드 */}
        <div className="scroll-x mb-2">
          <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
            {influencers.map((inf, i) => (
              <div
                key={inf.handle}
                className="border border-gray-800 p-6 hover:border-neon-green transition-all duration-300 group reveal"
                data-reveal
                style={{ width: '215px', transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 group-hover:border-neon-green/50 mb-5 flex items-center justify-center transition-all duration-300">
                  <span className="text-neon-green font-bold text-xs">{inf.handle.slice(1, 3).toUpperCase()}</span>
                </div>
                <p className="text-white font-bold text-sm mb-0.5">{inf.handle}</p>
                <p className="text-gray-700 text-xs mb-5">{inf.market} · {inf.cat}</p>
                <div className="space-y-2.5 border-t border-gray-900 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">팔로워</span>
                    <span className="text-white text-xs font-semibold">{inf.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">참여율</span>
                    <span className="text-neon-green text-xs font-bold">{inf.er}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-800 text-xs mb-28 reveal" data-reveal>→ 스크롤하면 더 보입니다</p>

        {/* 시딩된 게시물 */}
        <div className="border-t border-gray-900 pt-20">
          <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-14 reveal" data-reveal>
            실제 시딩 게시물 샘플
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post, i) => (
              <div
                key={post.handle}
                className="border border-gray-800 p-6 hover:border-neon-green/40 transition-all duration-300 group reveal"
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-full aspect-square bg-gray-950 border border-gray-900 mb-5 flex items-center justify-center relative overflow-hidden group-hover:border-gray-800 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
                  <span className="text-gray-800 text-xs tracking-widest uppercase">{post.cat}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-5 bg-gray-900 flex items-center justify-center shrink-0">
                    <span className="text-neon-green text-[9px] font-bold">{post.handle.slice(1, 3).toUpperCase()}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{post.handle}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">{post.caption}</p>

                <div className="flex gap-4 text-xs text-gray-700 mb-4">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>

                <div className="border-t border-gray-900 pt-4">
                  <span className="text-neon-green text-xs font-medium">→ {post.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 reveal" data-reveal>
          <a href="#contact" className="btn-primary text-base px-10 py-5">
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
