'use client'

import { useEffect, useRef } from 'react'

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
          e.target.querySelectorAll('.reveal-line').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black border-t border-gray-900" id="contact">

      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-28">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Contact Us</span>
          </div>

          <div className="mb-8 reveal" data-reveal>
            <h2 className="font-display font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 9vw, 11rem)' }}>
              한 번만<br />
              <span className="text-neon-green">써보세요.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-light mb-3 max-w-lg leading-relaxed reveal" data-reveal>
            브랜드, 제품, 타겟 시장만 알려주시면<br />
            <strong className="text-white font-semibold">맞춤 인플루언서 샘플 리스트를 무료로</strong> 드립니다.
          </p>
          <p className="text-gray-700 text-sm mb-16 reveal" data-reveal>
            결제 없음 · 계약 강요 없음 · 24시간 내 회신
          </p>

          <div className="mb-16">
            <div className="h-px bg-neon-green reveal-line" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-20 reveal" data-reveal>
            <a
              href="mailto:contact@rsnc.co.kr?subject=무료 샘플 리스트 요청&body=브랜드명:%0D%0A제품:%0D%0A타겟 시장:%0D%0A카테고리:"
              className="btn-primary text-base px-12 py-5"
            >
              무료 샘플 리스트 받기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="mailto:contact@rsnc.co.kr?subject=상담 문의" className="btn-secondary text-base px-12 py-5">
              상담 문의
            </a>
          </div>

          <div className="flex flex-wrap gap-8 reveal" data-reveal>
            {['24시간 내 회신 보장', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-neon-green">✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span className="font-display font-black text-xl tracking-tight">team resonance</span>
            <div className="w-8 h-px bg-neon-green mt-1" />
          </div>
          <a href="mailto:contact@rsnc.co.kr" className="text-gray-600 text-sm hover:text-neon-green transition-colors">
            contact@rsnc.co.kr
          </a>
          <p className="text-gray-800 text-xs">© 2026 team resonance. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
