'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    }}>
      {/* 카카오톡 채팅하기 */}
      <a
        href="http://pf.kakao.com/_VJJxbX/chat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡 채팅하기"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#FEE500',
          border: 'none',
          boxShadow: '0 4px 20px rgba(254,229,0,0.35)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.15)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(254,229,0,0.55)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(254,229,0,0.35)'
        }}
      >
        {/* 카카오 말풍선 아이콘 */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#3C1E1E">
          <path d="M12 3C6.477 3 2 6.701 2 11.25c0 2.848 1.67 5.365 4.217 6.896L5.2 21.1c-.08.28.18.54.45.4l4.35-2.65c.65.09 1.32.14 2 .14 5.523 0 10-3.701 10-8.25S17.523 3 12 3z"/>
        </svg>
      </a>

      {/* 맨 위로 */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#0D1B2A',
          border: 'none',
          boxShadow: '0 4px 20px rgba(13,27,42,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.background = '#D1FF00' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#0D1B2A' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F8F9FA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
