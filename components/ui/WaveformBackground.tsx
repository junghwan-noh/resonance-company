'use client'

import { useEffect, useRef } from 'react'

interface WaveformBackgroundProps {
  mousePosition: { x: number; y: number }
}

export default function WaveformBackground({ mousePosition: _ }: WaveformBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.75,
          filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
        }}
        src="/oscillograph.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* 중앙 어둡게, 가장자리 더 어둠 — 텍스트 가독성 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)' }}
      />
      {/* 상하 페이드 */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/70" />
    </div>
  )
}
