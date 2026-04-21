'use client'

import { useEffect, useRef } from 'react'

const influencers = [
  { handle: '@beautybyella', followers: '892K', er: '6.2%', category: 'Beauty', market: 'US', tier: 'Macro' },
  { handle: '@fitlife.james', followers: '1.2M', er: '4.8%', category: 'Fitness', market: 'US', tier: 'Mega' },
  { handle: '@sydneyfoodie', followers: '340K', er: '8.1%', category: 'F&B', market: 'AU', tier: 'Mid' },
  { handle: '@glowwithsarah', followers: '560K', er: '5.9%', category: 'Beauty', market: 'AU', tier: 'Macro' },
  { handle: '@lifestylewithtom', followers: '2.1M', er: '3.7%', category: 'Lifestyle', market: 'US', tier: 'Mega' },
  { handle: '@healthyeats.mel', followers: '430K', er: '7.4%', category: 'F&B', market: 'AU', tier: 'Mid' },
]

const posts = [
  {
    account: '@beautybyella',
    caption: 'Finally found my holy grail skincare routine 🌿 This brand sent me their new serum and I\'m obsessed…',
    likes: '24.3K',
    comments: '1.2K',
    category: 'Beauty',
  },
  {
    account: '@fitlife.james',
    caption: 'Post-workout recovery is everything. This brand\'s protein blend has been a game-changer for my training…',
    likes: '41.8K',
    comments: '2.7K',
    category: 'Fitness',
  },
  {
    account: '@sydneyfoodie',
    caption: 'Sydney\'s best-kept secret just dropped in my DMs 🔥 Had to try it and honestly, no notes…',
    likes: '18.6K',
    comments: '890',
    category: 'F&B',
  },
]

export default function InfluencerPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el) => {
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
    <section ref={sectionRef} className="bg-black px-6 md:px-16 lg:px-24 py-32" id="preview">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-20 reveal" data-reveal>
          <span className="w-8 h-px bg-neon-green" />
          <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Content Preview</span>
        </div>

        {/* Headline */}
        <div className="mb-4">
          <h2
            className="font-display font-black leading-none tracking-tight reveal"
            data-reveal
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)' }}
          >
            이런 인플루언서들과<br />
            <span className="text-neon-green">함께합니다.</span>
          </h2>
        </div>
        <p className="text-gray-500 text-lg font-light mb-20 reveal" data-reveal>
          실제 DB에서 발췌한 인플루언서 샘플입니다.
        </p>

        {/* Influencer cards — horizontal scroll */}
        <div className="scroll-x mb-8">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {influencers.map((inf, i) => (
              <div
                key={inf.handle}
                className="border border-gray-800 p-6 hover:border-neon-green transition-all duration-300 group reveal"
                data-reveal
                style={{ width: '220px', transitionDelay: `${i * 80}ms` }}
              >
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 group-hover:border-neon-green/40 mb-4 flex items-center justify-center transition-all duration-300">
                  <span className="text-neon-green font-bold text-xs">{inf.handle.slice(1, 3).toUpperCase()}</span>
                </div>

                <p className="text-white font-bold text-sm mb-1">{inf.handle}</p>
                <p className="text-gray-600 text-xs mb-4">{inf.market} · {inf.category}</p>

                <div className="space-y-2 border-t border-gray-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">팔로워</span>
                    <span className="text-white text-xs font-bold">{inf.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">ER%</span>
                    <span className="text-neon-green text-xs font-bold">{inf.er}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-xs">티어</span>
                    <span className="text-gray-400 text-xs">{inf.tier}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-700 text-xs mb-24 reveal" data-reveal>← 가로로 스크롤하세요</p>

        {/* Seeded posts */}
        <div className="border-t border-gray-800 pt-20">
          <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mb-12 reveal" data-reveal>
            시딩된 게시물 샘플
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div
                key={post.account}
                className="border border-gray-800 p-6 hover:border-neon-green/50 transition-all duration-300 group reveal"
                data-reveal
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Mock post visual */}
                <div className="w-full aspect-square bg-gray-950 border border-gray-800 mb-5 flex items-center justify-center relative overflow-hidden group-hover:border-neon-green/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
                  <span className="text-gray-700 text-xs">{post.category}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gray-900 border border-gray-800 flex items-center justify-center">
                    <span className="text-neon-green text-[10px] font-bold">{post.account.slice(1, 3).toUpperCase()}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{post.account}</span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.caption}</p>

                <div className="flex gap-4 text-xs text-gray-600">
                  <span>♥ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal" data-reveal>
          <a href="#contact" className="btn-secondary">
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
