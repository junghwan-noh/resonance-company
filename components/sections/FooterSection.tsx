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

    // 폼은 더 아래 스크롤해야 나타남
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
    <section ref={ref} className="bg-black border-t border-gray-900" id="contact">

      {/* 상단 헤드라인 */}
      <div className="px-6 md:px-16 lg:px-24 pt-28 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Contact Us</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-6 reveal" data-reveal
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)' }}>
            한 번만<br />
            <span className="text-neon-green">써</span><span style={{ color: '#00D4FF' }}>보세요.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-lg reveal" data-reveal>
            브랜드, 제품, 타겟 시장만 알려주시면<br />
            <strong className="text-white font-semibold">맞춤 인플루언서 샘플 리스트를 무료로</strong> 드립니다.
          </p>
        </div>
      </div>

      {/* 폼 — 스크롤 reveal */}
      <div ref={formRef} className="px-6 md:px-16 lg:px-24 pb-28">
        <div className="max-w-3xl mx-auto">
          <div
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {submitted ? (
              <div className="border border-neon-green p-12 text-center">
                <p className="text-neon-green font-display font-black text-2xl mb-3">전송 완료!</p>
                <p className="text-gray-400 text-sm">24시간 내에 회신 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-800 p-8 md:p-12 space-y-0">
                <p className="text-gray-600 text-xs tracking-[0.35em] uppercase mb-10">정보 입력</p>

                {/* 2컬럼 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-0">
                  {[
                    { key: 'brand', label: '브랜드명', placeholder: 'ex) 레조넌스 코리아', required: true },
                    { key: 'product', label: '제품', placeholder: 'ex) 비건 세럼', required: true },
                    { key: 'market', label: '타겟 시장', placeholder: 'ex) US, AU', required: true },
                    { key: 'category', label: '카테고리', placeholder: 'ex) Beauty, F&B, Fitness', required: true },
                  ].map((field, i) => (
                    <div
                      key={field.key}
                      className="border border-gray-900 p-6 focus-within:border-neon-green transition-all duration-300"
                    >
                      <label className="block text-gray-600 text-xs tracking-widest uppercase mb-3">
                        {field.label} {field.required && <span className="text-neon-green">*</span>}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-transparent text-white text-sm placeholder-gray-700 outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* 이메일 full width */}
                <div className="border border-gray-900 border-t-0 p-6 focus-within:border-neon-green transition-all duration-300">
                  <label className="block text-gray-600 text-xs tracking-widest uppercase mb-3">
                    회신 이메일 <span className="text-neon-green">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-white text-sm placeholder-gray-700 outline-none"
                  />
                </div>

                {/* 제출 */}
                <div className="border border-gray-900 border-t-0 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-gray-700 text-xs">결제 없음 · 계약 강요 없음 · 24시간 내 회신</p>
                  <button type="submit" className="btn-primary text-base px-10 py-4 shrink-0">
                    무료 샘플 받기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-wrap gap-6 mt-6">
                  {['24시간 내 회신 보장', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="text-neon-green">✓</span> {item}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
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
