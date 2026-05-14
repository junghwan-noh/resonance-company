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
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    window.addEventListener('mousedown', onClickOutside)
    return () => window.removeEventListener('mousedown', onClickOutside)
  }, [])

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0]

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-6 flex justify-between items-center text-white transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* RE 취소선 로고 (히어로와 동일) */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="flex items-center text-2xl md:text-3xl font-black tracking-tighter leading-none"
      >
        <span className="relative inline-block">
          RE
          <span className="absolute top-1/2 left-[-6%] w-[112%] h-[6px] md:h-[8px] bg-brand-yellow -translate-y-1/2 shadow-[0_0_12px_rgba(204,255,0,0.7)] pointer-events-none" />
          <span className="absolute top-1/2 left-[-6%] w-[112%] h-[1.5px] md:h-[2px] bg-[#FF003C] -translate-y-1/2 shadow-[0_0_6px_rgba(255,0,60,0.6)] pointer-events-none" />
        </span>
        <span>SONANCE</span>
      </a>

      <div className="flex items-center gap-2 md:gap-3">
        {/* 언어 셀렉터 */}
        <div ref={langRef} className="relative">
          <button
            onClick={() => setLangOpen((o) => !o)}
            aria-label="언어 선택"
            title={current.label}
            className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors border border-white/15"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          {langOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] min-w-[140px] p-1.5 rounded-xl bg-zinc-900/95 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code)
                    setLangOpen(false)
                  }}
                  className={`flex items-center justify-between gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                    lang === l.code
                      ? 'bg-brand-yellow/15 text-brand-yellow'
                      : 'text-white hover:bg-white/8'
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="text-[10px] opacity-60 tracking-wider">{l.short}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 카카오톡 채팅하기 */}
        <a
          href="http://pf.kakao.com/_VJJxbX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('nav_kakao')}
          title={t('nav_kakao')}
          className="bg-brand-yellow text-black flex items-center justify-center md:justify-start gap-2 w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
            <path d="M232,128c0,50.22-48.46,91.82-109.11,95.77a83.17,83.17,0,0,1-23.75-2.61,48.1,48.1,0,0,0-26.69,8A18.89,18.89,0,0,1,55,225.43c-6.84-5.26-14-12.79-11.66-26.79C22.68,181.71,8,156.45,8,128c0-53,53.73-96,120-96S232,75,232,128Z" />
          </svg>
          <span className="hidden md:inline">{t('nav_kakao')}</span>
        </a>
      </div>
    </nav>
  )
}
