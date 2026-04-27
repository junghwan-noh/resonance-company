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
    <section ref={ref} className="bg-white border-t border-gray-200" id="contact">

      {/* 상단 헤드라인 */}
      <div className="px-6 md:px-16 lg:px-24 pt-28 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="reveal" data-reveal>
            <span className="section-tag mb-8">무료 상담 신청</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-6 reveal text-gray-900" data-reveal
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)' }}>
            브랜드에 맞는<br />
            인플루언서,<br />
            <span style={{ color: '#7CFF00' }}>지금 바로</span>{' '}
            <span style={{ color: '#0A0A0A' }}>확인하세요.</span>
          </h2>
          <p className="text-gray-500 text-lg font-light max-w-lg reveal mb-8" data-reveal>
            브랜드명, 제품, 타겟 시장만 알려주시면<br />
            <strong className="text-gray-900 font-semibold">48시간 안에 맞춤 인플루언서 리스트</strong>를 무료로 드립니다.<br />
            <span className="text-gray-400 text-base">계약 없음 · 비용 없음 · 부담 없음.</span>
          </p>

          {/* 빠른 문의 채널 */}
          <div className="flex flex-col sm:flex-row gap-3 reveal" data-reveal>
            <a
              href="http://pf.kakao.com/_rsnc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-wide transition-all duration-300"
              style={{ background: '#FEE500', color: '#000' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.61 1.52 4.9 3.84 6.3L4.9 20.1c-.1.3.2.6.5.4l4.2-2.8c.8.1 1.6.2 2.4.2 5.523 0 10-3.477 10-7.4S17.523 3 12 3z"/>
              </svg>
              카카오톡 채널 문의
            </a>
            <a
              href="mailto:contact@rsnc.co.kr"
              className="inline-flex items-center gap-3 px-8 py-4 font-bold text-sm tracking-wide border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
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
              <div className="border p-12 text-center" style={{ borderColor: '#7CFF00' }}>
                <p className="font-display font-black text-2xl mb-3" style={{ color: '#7CFF00' }}>전송 완료!</p>
                <p className="text-gray-500 text-sm">24시간 내에 회신 드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-200 p-8 md:p-12 space-y-0 bg-gray-50">
                <p className="text-gray-400 text-xs tracking-[0.35em] uppercase mb-10">정보 입력</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-0">
                  {[
                    { key: 'brand', label: '브랜드명', placeholder: 'ex) 레조넌스 코리아', required: true },
                    { key: 'product', label: '제품', placeholder: 'ex) 비건 세럼', required: true },
                    { key: 'market', label: '타겟 시장', placeholder: 'ex) US, AU', required: true },
                    { key: 'category', label: '카테고리', placeholder: 'ex) Beauty, F&B, Fitness', required: true },
                  ].map((field) => (
                    <div
                      key={field.key}
                      className="border border-gray-200 bg-white p-6 focus-within:border-gray-400 transition-all duration-300"
                    >
                      <label className="block text-gray-400 text-xs tracking-widest uppercase mb-3">
                        {field.label} {field.required && <span style={{ color: '#7CFF00' }}>*</span>}
                      </label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-transparent text-gray-900 text-sm placeholder-gray-300 outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="border border-gray-200 border-t-0 bg-white p-6 focus-within:border-gray-400 transition-all duration-300">
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-3">
                    회신 이메일 <span style={{ color: '#7CFF00' }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent text-gray-900 text-sm placeholder-gray-300 outline-none"
                  />
                </div>

                <div className="border border-gray-200 border-t-0 bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-gray-400 text-xs">결제 없음 · 계약 강요 없음 · 24시간 내 회신</p>
                  <button type="submit" className="btn-primary text-base px-10 py-4 shrink-0">
                    무료 샘플 받기
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-wrap gap-6 mt-6">
                  {['24시간 내 회신 보장', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span style={{ color: '#7CFF00' }}>✓</span> {item}
                    </span>
                  ))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-6 md:px-16 lg:px-24 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <span className="font-display font-black text-xl tracking-tight text-gray-900">team resonance</span>
            <div className="w-8 h-px mt-1" style={{ background: '#7CFF00' }} />
          </div>
          <a href="mailto:contact@rsnc.co.kr" className="text-gray-500 text-sm hover:text-gray-900 transition-colors">
            contact@rsnc.co.kr
          </a>
          <p className="text-gray-400 text-xs">© 2026 team resonance. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
