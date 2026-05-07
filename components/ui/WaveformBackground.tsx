'use client'

import { useEffect, useRef } from 'react'

export default function WaveformBackground({ mousePosition: _ }: { mousePosition: { x: number; y: number } }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 0.5

    // 재생 실패 시 조용히 무시 (모바일 정책 대응)
    video.play().catch(() => {})
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#020406' }}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.svg"
        preload="auto"
        muted
        autoPlay
        loop
        playsInline
        style={{
          opacity: 0.82,
          filter: 'brightness(0.85) contrast(1.15) saturate(1.1)',
          willChange: 'transform',
        }}
      >
        {/* WebM 우선 — 있으면 브라우저가 자동 선택 */}
        <source src="/oscillograph.webm" type="video/webm" />
        <source src="/oscillograph.mp4" type="video/mp4" />
      </video>

      {/* 비네팅 */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(2,4,6,0.05) 0%, rgba(2,4,6,0.72) 100%)'
      }} />
      {/* 상하 페이드 */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(2,4,6,0.52) 0%, transparent 28%, transparent 68%, rgba(2,4,6,0.72) 100%)'
      }} />
    </div>
  )
}
