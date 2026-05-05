'use client'

import { useEffect, useRef, useState } from 'react'

export default function FooterSection() {
  const ref = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [formVisible, setFormVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ brand: '', product: '', market: '', category: '', email: '' })

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    const formObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setFormVisible(true)
      }),
      { threshold: 0.3 }
    )
    if (ref.current) sectionObserver.observe(ref.current)
    if (formRef.current) formObserver.observe(formRef.current)
    return () => { sectionObserver.disconnect(); formObserver.disconnect() }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('무료 샘플 리스트 요청')
    const body = encodeURIComponent(
      `브랜드명: ${form.brand}\n제품: ${form.product}\n타겟 시장: ${form.market}\n카테고리: ${form.category}\n회신 이메일: ${form.email}`
    )
    window.location.href = `mailto:contact@rsnc.co.kr?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section ref={ref} data-section className="bg-transparent border-t border-rsncNavy/6" id="contact">

      {/* 그린 광원 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(209,255,0,0.09) 0%, transparent 70%)',
      }} />

      {/* 상단 헤드라인 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-36 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="reveal" data-reveal>
            <span className="section-tag mb-8">무료 상담 신청</span>
          </div>
          <span className="headline-wrap mb-6">
            <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)' }}>
              브랜드에 맞는<br />
              인플루언서,<br />
              <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>지금 바로</span>{' '}
              <span className="text-rsncNavy">확인하세요.</span>
            </h2>
          </span>
          <p className="text-rsncNavy/65 text-lg font-light max-w-lg reveal mb-10" data-reveal>
            브랜드명, 제품, 타겟 시장만 알려주시면<br />
            <strong className="text-rsncNavy font-semibold">48시간 안에 맞춤 인플루언서 리스트</strong>를 무료로 드립니다.
          </p>

          {/* 빠른 문의 채널 */}
          <div className="flex flex-col sm:flex-row gap-3 reveal" data-reveal>
            <a
              href="http://pf.kakao.com/_VJJxbX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-tight transition-all duration-300 rounded-full hover:scale-105 hover:shadow-neon-green"
              style={{ background: '#FEE500', color: '#0D1B2A' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.61 1.52 4.9 3.84 6.3L4.9 20.1c-.1.3.2.6.5.4l4.2-2.8c.8.1 1.6.2 2.4.2 5.523 0 10-3.477 10-7.4S17.523 3 12 3z"/>
              </svg>
              카카오톡 채널 문의
            </a>
            <a
              href="mailto:contact@rsnc.co.kr"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-tight border border-rsncNavy/15 text-rsncNavy/60 hover:border-rsncNavy hover:text-rsncNavy transition-all duration-300 rounded-full glass-card"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              contact@rsnc.co.kr
            </a>
          </div>
        </div>
      </div>

      {/* 폼 */}
      <div ref={formRef} className="relative z-10 px-6 md:px-16 lg:px-24 pb-36">
        <div className="max-w-3xl mx-auto">
          <div
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {submitted ? (
              <div className="glass-card rounded-3xl p-12 text-center" style={{ border: '1px solid rgba(209,255,0,0.4)' }}>
                <div className="w-16 h-16 bg-rsncGreen rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <p className="font-display font-black text-2xl mb-3 text-rsncNavy tracking-tighter">전송 완료!</p>
                <p className="text-rsncNavy/65 text-sm">24시간 내에 회신 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl overflow-hidden" style={{ border: '1px solid rgba(13,27,42,0.08)' }}>
                <div className="px-8 md:px-12 pt-10 pb-6">
                  <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase mb-8">정보 입력</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {[
                      { key: 'brand', label: '브랜드명', placeholder: 'ex) 레조넌스 코리아', required: true },
                      { key: 'product', label: '제품', placeholder: 'ex) 비건 세럼', required: true },
                      { key: 'market', label: '타겟 시장', placeholder: 'ex) US, AU', required: true },
                      { key: 'category', label: '카테고리', placeholder: 'ex) Beauty, F&B, Fitness', required: true },
                    ].map((field) => (
                      <div
                        key={field.key}
                        className="border border-rsncNavy/8 bg-white/60 rounded-xl p-5 focus-within:border-rsncGreen focus-within:bg-white transition-all duration-300"
                        style={{ boxShadow: 'inset 0 1px 3px rgba(13,27,42,0.04)' }}
                      >
                        <label className="block text-rsncNavy/55 text-xs tracking-widest uppercase mb-2">
                          {field.label} {field.required && <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.3px rgba(13,27,42,0.3)' }}>*</span>}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full bg-transparent text-rsncNavy text-sm placeholder-rsncNavy/20 outline-none"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="border border-rsncNavy/8 bg-white/60 rounded-xl p-5 focus-within:border-rsncGreen focus-within:bg-white transition-all duration-300 mb-6">
                    <label className="block text-rsncNavy/55 text-xs tracking-widest uppercase mb-2">
                      회신 이메일 <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.3px rgba(13,27,42,0.3)' }}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent text-rsncNavy text-sm placeholder-rsncNavy/20 outline-none"
                    />
                  </div>
                </div>

                <div className="border-t border-rsncNavy/6 bg-rsncNavy/2 px-8 md:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-rsncNavy/65 text-xs">결제 없음 · 계약 강요 없음 · 24시간 내 회신</p>
                  <button type="submit" className="btn-primary shrink-0">
                    무료 샘플 받기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="px-8 md:px-12 py-5 border-t border-rsncNavy/5 flex flex-wrap gap-6">
                  {['24시간 내 회신 보장', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs text-rsncNavy/60">
                      <span className="w-3 h-3 rounded-full bg-rsncGreen flex items-center justify-center">
                        <svg width="7" height="7" viewBox="0 0 10 10" fill="none" stroke="#0D1B2A" strokeWidth="2"><path d="M2 5l2 2 4-4"/></svg>
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-rsncNavy/8 px-6 md:px-16 lg:px-24 py-8 bg-rsncNavy/3">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span className="font-display font-black text-xl tracking-tighter text-rsncNavy">team resonance</span>
            <div className="w-8 h-0.5 mt-1 bg-rsncGreen rounded-full" />
          </div>
          <a href="mailto:contact@rsnc.co.kr" className="text-rsncNavy/60 text-sm hover:text-rsncNavy transition-colors">
            contact@rsnc.co.kr
          </a>
          <p className="text-rsncNavy/65 text-xs">© 2026 team resonance. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
