'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

export default function FooterSection() {
  const { t } = useLang()
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
            <span className="section-tag mb-8">{t('footer_tag')}</span>
          </div>
          <span className="headline-wrap mb-6">
            <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)' }}>
              {t('footer_headline_1')}<br />
              {t('footer_headline_2')}<br />
              <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>{t('footer_headline_3a')}</span>{' '}
              <span className="text-rsncNavy">{t('footer_headline_3b')}</span>
            </h2>
          </span>
          <p className="text-rsncNavy/65 text-lg font-light max-w-lg reveal mb-10" data-reveal>
            {t('footer_sub_1')}<br />
            <strong className="text-rsncNavy font-semibold">{t('footer_sub_2_strong')}</strong>{t('footer_sub_2_rest')}
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
              {t('footer_kakao')}
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
                <p className="font-display font-black text-2xl mb-3 text-rsncNavy tracking-tighter">{t('footer_done_title')}</p>
                <p className="text-rsncNavy/65 text-sm">{t('footer_done_sub')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl overflow-hidden relative">
                {/* 카드 상단 그린 라인 */}
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                  background: 'linear-gradient(90deg, transparent 0%, #D1FF00 50%, transparent 100%)',
                }} />

                <div className="px-8 md:px-14 pt-12 pb-8">
                  <div className="flex items-center justify-between mb-10">
                    <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase">{t('footer_form_title')}</p>
                    <span className="text-rsncNavy/35 text-[10px] tracking-widest uppercase">5 fields</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                    {[
                      { key: 'brand', label: t('footer_field_brand'), placeholder: t('footer_ph_brand'), required: true },
                      { key: 'product', label: t('footer_field_product'), placeholder: t('footer_ph_product'), required: true },
                      { key: 'market', label: t('footer_field_market'), placeholder: t('footer_ph_market'), required: true },
                      { key: 'category', label: t('footer_field_category'), placeholder: t('footer_ph_category'), required: true },
                    ].map((field) => (
                      <div key={field.key} className="group relative">
                        <label className="flex items-baseline gap-1.5 text-rsncNavy/65 text-[11px] tracking-[0.18em] uppercase mb-3 font-semibold">
                          {field.label}
                          {field.required && <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.3px rgba(13,27,42,0.4)' }}>*</span>}
                        </label>
                        <input
                          type="text"
                          placeholder={field.placeholder}
                          required={field.required}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="w-full bg-transparent text-rsncNavy text-base font-medium placeholder-rsncNavy/25 outline-none pb-3 border-b border-rsncNavy/15 focus:border-rsncGreen transition-colors duration-300"
                        />
                      </div>
                    ))}

                    {/* 이메일 — 전체 너비 */}
                    <div className="md:col-span-2 group relative">
                      <label className="flex items-baseline gap-1.5 text-rsncNavy/65 text-[11px] tracking-[0.18em] uppercase mb-3 font-semibold">
                        {t('footer_field_email')}
                        <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.3px rgba(13,27,42,0.4)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        placeholder={t('footer_ph_email')}
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent text-rsncNavy text-base font-medium placeholder-rsncNavy/25 outline-none pb-3 border-b border-rsncNavy/15 focus:border-rsncGreen transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* 하단: 보증 아이템 + CTA */}
                <div className="border-t border-rsncNavy/8 px-8 md:px-14 py-7" style={{
                  background: 'linear-gradient(180deg, rgba(13,27,42,0.02) 0%, rgba(209,255,0,0.04) 100%)',
                }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                      {[t('footer_assure_1'), t('footer_assure_2')].map((item) => (
                        <span key={item} className="flex items-center gap-2 text-xs text-rsncNavy/70 font-medium">
                          <span className="w-3.5 h-3.5 rounded-full bg-rsncGreen flex items-center justify-center shrink-0" style={{ boxShadow: '0 0 12px rgba(209,255,0,0.4)' }}>
                            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#0D1B2A" strokeWidth="2.2" strokeLinecap="round"><path d="M2 5l2 2 4-4"/></svg>
                          </span>
                          {item}
                        </span>
                      ))}
                    </div>
                    <button type="submit" className="btn-primary shrink-0">
                      {t('footer_submit')}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
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
          <p className="text-rsncNavy/65 text-xs">{t('footer_copy')}</p>
        </div>
      </div>
    </section>
  )
}
