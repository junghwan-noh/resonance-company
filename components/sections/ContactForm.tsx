'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ brand: '', product: '', market: '', category: '', email: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('무료 상담 신청 — 레조넌스')
    const body = encodeURIComponent(
      `브랜드명: ${form.brand}\n제품: ${form.product}\n타겟 시장: ${form.market}\n카테고리: ${form.category}\n회신 이메일: ${form.email}`
    )
    window.location.href = `mailto:contact@rsnc.co.kr?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const fields = [
    { key: 'brand', label: '브랜드명', placeholder: '레조넌스 코리아' },
    { key: 'product', label: '제품', placeholder: '비건 세럼' },
    { key: 'market', label: '타겟 시장', placeholder: 'US, AU' },
    { key: 'category', label: '카테고리', placeholder: 'Beauty, F&B, Fitness' },
  ] as const

  return (
    <section id="contact" className="py-32 px-6 md:px-12 w-full bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-brand-yellow font-bold text-sm tracking-widest uppercase">FREE CONSULTATION</span>
          <div className="w-8 h-[1px] bg-brand-yellow" />
        </div>

        <h2 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight text-center">
          무료 상담 <span className="text-brand-yellow">신청</span>
        </h2>
        <p className="text-gray-400 text-base text-center mb-14">
          브랜드명, 제품, 타겟 시장만 알려주시면 <span className="text-white font-bold">72시간 안에</span> 맞춤 인플루언서 풀 샘플을 무료로 드립니다.
        </p>

        {submitted ? (
          <div className="bg-zinc-900 rounded-3xl p-12 text-center border border-brand-yellow/30">
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth={2.5}>
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-2xl font-black text-white mb-3 tracking-tighter">신청 완료!</p>
            <p className="text-gray-400 text-sm">72시간 내에 회신 드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-[2rem] p-8 md:p-12 border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mb-8">
              {fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">
                    {field.label} <span className="text-brand-yellow">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent text-white text-base font-medium placeholder-gray-600 outline-none pb-3 border-b border-zinc-700 focus:border-brand-yellow transition-colors"
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-gray-400 text-xs font-bold tracking-widest uppercase mb-3">
                  회신 이메일 <span className="text-brand-yellow">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent text-white text-base font-medium placeholder-gray-600 outline-none pb-3 border-b border-zinc-700 focus:border-brand-yellow transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-zinc-800">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['72시간 내 회신', '맞춤 샘플 리스트', '결제 없음'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <span className="w-3.5 h-3.5 rounded-full bg-brand-yellow flex items-center justify-center shrink-0" style={{ boxShadow: '0 0 12px rgba(204,255,0,0.4)' }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="#0a0a0a" strokeWidth={2.4} strokeLinecap="round"><path d="M2 5l2 2 4-4" /></svg>
                    </span>
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="submit"
                className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group shrink-0"
              >
                무료 샘플 받기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
