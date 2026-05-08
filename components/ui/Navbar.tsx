'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

const LANGS = [
  { code: 'ko', label: '한국어', short: 'KO' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ja', label: '日本語', short: 'JA' },
] as const

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [])

  const current = LANGS.find(l => l.code === lang) ?? LANGS[0]

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
      background: scrolled
        ? 'linear-gradient(180deg, rgba(13,27,42,0.78) 0%, rgba(13,27,42,0.62) 100%)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      boxShadow: scrolled
        ? '0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 28px -8px rgba(0,0,0,0.35)'
        : 'none',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
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

      {/* 우측: 언어 셀렉터 + 카카오 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* 언어 셀렉터 */}
        <div ref={langRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setLangOpen(o => !o)}
            aria-label="언어 선택"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              borderRadius: '999px',
              background: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.18)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'Pretendard, sans-serif',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.10)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            {current.short}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ opacity: 0.7, transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }}>
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {langOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              minWidth: '140px',
              padding: '6px',
              borderRadius: '14px',
              background: 'rgba(13,27,42,0.92)',
              backdropFilter: 'blur(22px) saturate(160%)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
              zIndex: 999,
            }}>
              {LANGS.map(l => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setLangOpen(false) }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    width: '100%',
                    padding: '10px 12px',
                    border: 'none',
                    background: lang === l.code ? 'rgba(209,255,0,0.12)' : 'transparent',
                    color: lang === l.code ? '#D1FF00' : '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'Pretendard, sans-serif',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                    textAlign: 'left',
                  }}
                  onMouseEnter={e => { if (lang !== l.code) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
                  onMouseLeave={e => { if (lang !== l.code) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  <span>{l.label}</span>
                  <span style={{ fontSize: '10px', opacity: 0.55, letterSpacing: '0.08em' }}>{l.short}</span>
                </button>
              ))}
            </div>
          )}
        </div>

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
        {t('nav_kakao')}
      </a>
      </div>
    </nav>
  )
}
