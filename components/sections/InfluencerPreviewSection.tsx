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
  { handle: '@beautybyella', cat: 'Beauty', likes: '24.3K', comments: '1.2K', caption: "드디어 찾았다 내 스킨케어 루틴 🌿 이 브랜드 세럼 진짜 레전드… 3주 만에 피부 달라짐", result: '조회수 180만 · 문의 230건' },
  { handle: '@fitlife.james', cat: 'Fitness', likes: '41.8K', comments: '2.7K', caption: "운동 후 회복이 이렇게 달라질 줄 몰랐음. 이 브랜드 프로틴 진짜 게임체인저 ㄹㅇ", result: '조회수 310만 · 월매출 3배' },
  { handle: '@sydneyfoodie', cat: 'F&B', likes: '18.6K', comments: '890', caption: "시드니에서 핫한 브랜드 DM 왔길래 써봤는데 이거 진짜임. 노코멘트 그냥 먹어봐", result: '현지 마트 입점 계기' },
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
    <section ref={ref} className="bg-gray-50" id="preview">

      {/* 헤더 */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
            <span className="w-6 h-px" style={{ background: '#16A34A' }} />
            <span className="text-xs tracking-[0.35em] uppercase font-medium" style={{ color: '#16A34A' }}>콘텐츠 맛보기</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-4 reveal" data-reveal
            style={{ fontSize: 'clamp(1.4rem, 3vw, 3.2rem)' }}>
            이런 인플루언서들과<br />
            <span style={{ color: '#16A34A' }}>함께</span>
            <span style={{ color: '#00D4FF' }}>하고 있습니다.</span>
          </h2>
          <p className="text-gray-500 text-sm font-light reveal" data-reveal>
            실제 DB에서 발췌한 샘플입니다. 브랜드에 맞는 리스트는 따로 드립니다.
          </p>
        </div>
      </div>

      {/* 인플루언서 가로 스크롤 */}
      <div className="border-t border-gray-200 py-12">
        <div className="px-6 md:px-16 lg:px-24 scroll-x mb-2">
          <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
            {influencers.map((inf, i) => (
              <div
                key={inf.handle}
                className="border border-gray-200 bg-white p-6 hover:border-gray-400 transition-all duration-300 group reveal"
                data-reveal
                style={{ width: '215px', transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 bg-gray-100 border border-gray-200 group-hover:border-gray-400 mb-5 flex items-center justify-center transition-all">
                  <span className="font-bold text-xs" style={{ color: '#16A34A' }}>{inf.handle.slice(1, 3).toUpperCase()}</span>
                </div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">{inf.handle}</p>
                <p className="text-gray-400 text-xs mb-5">{inf.market} · {inf.cat}</p>
                <div className="space-y-2.5 border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">팔로워</span>
                    <span className="text-gray-900 text-xs font-semibold">{inf.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs">참여율</span>
                    <span className="text-xs font-bold" style={{ color: '#16A34A' }}>{inf.er}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 md:px-16 lg:px-24">
          <p className="text-gray-400 text-xs">→ 스크롤하면 더 보입니다</p>
        </div>
      </div>

      {/* 시딩 게시물 */}
      <div className="border-t border-gray-200">
        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/social-bg.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.06,
            }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, rgba(249,250,251,0.9) 50%, #f9fafb 100%)' }} />

          <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20">
            <div className="max-w-7xl mx-auto">
              <p className="text-gray-400 text-xs tracking-[0.35em] uppercase mb-12 reveal" data-reveal>실제 시딩 게시물 샘플</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posts.map((post, i) => (
                  <div
                    key={post.handle}
                    className="border border-gray-200 bg-white p-6 hover:border-gray-400 transition-all duration-300 group reveal"
                    data-reveal
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* TikTok 스타일 썸네일 */}
                    <div className="relative w-full mb-5 overflow-hidden bg-gray-100"
                      style={{ aspectRatio: '9/16', maxHeight: '200px' }}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">{post.cat[0]}</span>
                        </div>
                        <span className="text-gray-400 text-[10px] uppercase tracking-widest">{post.cat}</span>
                      </div>
                      <div className="absolute bottom-2 right-2 flex flex-col items-center gap-1">
                        <span className="text-gray-400 text-[10px]">♥</span>
                        <span className="text-gray-400 text-[9px]">{post.likes}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                        <span className="text-[9px] font-bold" style={{ color: '#16A34A' }}>{post.handle.slice(1, 3).toUpperCase()}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{post.handle}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.caption}</p>
                    <div className="flex gap-4 text-xs text-gray-400 mb-4">
                      <span>♥ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <span className="text-xs font-medium" style={{ color: '#00D4FF' }}>→ {post.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-200 px-6 md:px-16 lg:px-24 py-14">
        <div className="max-w-7xl mx-auto reveal" data-reveal>
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
