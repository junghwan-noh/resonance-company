'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 998,
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(13,27,42,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(18px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
    }}>

      {/* RE 로고 */}
      <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 0 }}>
        {/* RE 취소선 SVG 로고 */}
        <span style={{ position: 'relative', display: 'inline-block', lineHeight: 1 }}>
          <span style={{
            fontFamily: 'Pretendard, sans-serif',
            fontWeight: 900,
            fontSize: '28px',
            letterSpacing: '-0.04em',
            color: '#ffffff',
            lineHeight: 1,
            marginRight: '-0.02em',
          }}>RE</span>
          {/* 형광 초록 선 */}
          <span style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '52%',
            transform: 'translateY(-50%)',
            height: '7px',
            background: '#7CFF00',
            borderRadius: '1px',
            pointerEvents: 'none',
          }} />
          {/* 형광 빨간 선 (중앙) */}
          <span style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '52%',
            transform: 'translateY(-50%)',
            height: '1.5px',
            background: '#FF003C',
            borderRadius: '1px',
            pointerEvents: 'none',
          }} />
        </span>
        <span style={{
          fontFamily: 'Pretendard, sans-serif',
          fontWeight: 900,
          fontSize: '28px',
          letterSpacing: '-0.04em',
          color: '#ffffff',
          lineHeight: 1,
        }}>SONANCE</span>
      </a>

      {/* 우측 버튼 */}
      <a
        href="http://pf.kakao.com/_VJJxbX/chat"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          padding: '8px 18px',
          borderRadius: '999px',
          background: '#FEE500',
          color: '#3C1E1E',
          fontSize: '13px',
          fontWeight: 800,
          fontFamily: 'Pretendard, sans-serif',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          boxShadow: '0 2px 12px rgba(254,229,0,0.3)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(254,229,0,0.5)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(254,229,0,0.3)'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#3C1E1E">
          <path d="M12 3C6.477 3 2 6.701 2 11.25c0 2.848 1.67 5.365 4.217 6.896L5.2 21.1c-.08.28.18.54.45.4l4.35-2.65c.65.09 1.32.14 2 .14 5.523 0 10-3.701 10-8.25S17.523 3 12 3z"/>
        </svg>
        카카오톡 채팅하기
      </a>
    </nav>
  )
}
