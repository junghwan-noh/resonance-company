'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 0.5
    video.play().catch(() => {})
  }, [])

  return (
    <section data-section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

      {/* 배경 영상 */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'contrast(1.5) brightness(1.1) saturate(1.2)' }}
        muted
        loop
        playsInline
        preload="none"
      >
        <source src="/oscillograph.webm" type="video/webm" />
        <source src="/oscillograph.mp4" type="video/mp4" />
      </video>

      {/* 어둡게 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      <style>{`
        .line-animate {
          width: 0;
          animation: draw 0.8s ease forwards;
        }
        @keyframes draw {
          to { width: 100%; }
        }
      `}</style>

      {/* 텍스트 */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-7xl md:text-9xl font-semibold">
          <span className="relative inline-block">
            <span className="text-white">RE</span>
            {/* 형광 초록 선 */}
            <span className="absolute left-0 h-[18px] line-animate" style={{ top: '53%', transform: 'translateY(-50%)', background: '#7CFF00', boxShadow: 'none' }} />
            {/* 형광 빨간 선 (초록 선 정중앙) */}
            <span className="absolute left-0 line-animate" style={{ height: '2.1%', top: '53%', transform: 'translateY(-50%)', background: '#FF003C', boxShadow: 'none' }} />
          </span>
          SONANCE
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto">
          Most Brands Spray. We Target.
        </p>

        {/* CTA 버튼 */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-tight"
            style={{
              background: '#D1FF00',
              color: '#0D1B2A',
              border: '2px solid #D1FF00',
              fontFamily: 'Pretendard, sans-serif',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#0D1B2A'
              ;(e.currentTarget as HTMLElement).style.color = '#D1FF00'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#D1FF00'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#D1FF00'
              ;(e.currentTarget as HTMLElement).style.color = '#0D1B2A'
              ;(e.currentTarget as HTMLElement).style.borderColor = '#D1FF00'
            }}
          >
            체험해보기
          </a>
          <a
            href="/레조넌스컴퍼니_회사소개서.html"
            download="레조넌스컴퍼니_회사소개서.html"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-tight"
            style={{
              background: 'rgba(255,255,255,0.12)',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.35)',
              fontFamily: 'Pretendard, sans-serif',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.22)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            소개서 다운로드
          </a>
        </div>
      </div>

    </section>
  )
}
