'use client'

import { useEffect, useRef } from 'react'

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el) => {
              el.classList.add('visible')
            })
            entry.target.querySelectorAll('.reveal-line').forEach((el) => {
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
    <section ref={sectionRef} className="bg-black" id="contact">
      {/* Contact CTA */}
      <div className="px-6 md:px-16 lg:px-24 pt-32 pb-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">

          {/* Label */}
          <div className="flex items-center gap-4 mb-20 reveal" data-reveal>
            <span className="w-8 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Contact Us</span>
          </div>

          {/* Big headline */}
          <div className="mb-16">
            <h2
              className="font-display font-black leading-none tracking-tight reveal"
              data-reveal
              style={{ fontSize: 'clamp(3rem, 9vw, 10rem)' }}
            >
              일단 한 번<br />
              <span className="text-neon-green">써보세요.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-xl font-light mb-6 max-w-xl reveal" data-reveal>
            브랜드·제품·타겟만 알려주시면<br />
            맞춤 인플루언서 샘플 리스트를 <strong className="text-white">무료</strong>로 드립니다.
          </p>
          <p className="text-gray-600 text-sm mb-16 reveal" data-reveal>
            결제 없음 · 계약 없음 · 24시간 내 회신
          </p>

          {/* Neon line */}
          <div className="mb-16">
            <div className="h-px bg-neon-green reveal-line" />
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-24 reveal" data-reveal>
            <a
              href="mailto:contact@rsnc.co.kr?subject=무료 인플루언서 샘플 리스트 요청&body=브랜드명:%0D%0A제품:%0D%0A타겟 시장:%0D%0A카테고리:"
              className="btn-primary text-lg px-12 py-5"
            >
              무료로 샘플 받기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:contact@rsnc.co.kr?subject=상담 문의"
              className="btn-secondary text-lg px-12 py-5"
            >
              상담 문의
            </a>
          </div>

          {/* Guarantee badges */}
          <div className="flex flex-wrap gap-8 reveal" data-reveal>
            {['24시간 내 회신', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-neon-green text-base">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="font-display font-black text-2xl tracking-tight">team resonance</span>
            <div className="w-1/3 h-px bg-neon-green mt-1" />
          </div>
          <div className="text-gray-600 text-sm space-y-1 md:space-y-0 md:flex md:gap-8">
            <a href="mailto:contact@rsnc.co.kr" className="block md:inline hover:text-neon-green transition-colors">
              contact@rsnc.co.kr
            </a>
            <a href="https://rsnc.co.kr" className="block md:inline hover:text-neon-green transition-colors">
              rsnc.co.kr
            </a>
          </div>
          <p className="text-gray-700 text-xs">© 2026 team resonance. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
