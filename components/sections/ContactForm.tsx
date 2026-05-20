'use client'

import { useState, useRef, useEffect } from 'react'

const PRODUCTS = [
  '비건 세럼',
  '선케어 / 자외선 차단',
  '기초 스킨케어 라인',
  '색조 메이크업',
  '바디케어',
  '헤어케어',
]

const MARKETS = [
  { label: '북미', enabled: true },
  { label: '한국', enabled: false },
  { label: '호주', enabled: false },
  { label: '일본', enabled: false },
  { label: '중국', enabled: false },
  { label: '유럽', enabled: false },
  { label: '동남아', enabled: false },
]

const CATEGORIES = ['스킨케어(기초)', '색조', '클렌징', '선케어', '바디케어', '헤어케어']

const AGES = ['10대', '20대 초반 (20~24세)', '20대 후반 (25~29세)', '30대', '40대', '50대 이상']

export default function ContactForm() {
  const [brand, setBrand] = useState('')
  const [email, setEmail] = useState('')
  const [product, setProduct] = useState<string | null>(null)
  const [market, setMarket] = useState<string | null>(null)
  const [category, setCategory] = useState<string[]>([])
  const [age, setAge] = useState<string[]>([])
  const [openDD, setOpenDD] = useState<null | 'product' | 'market' | 'category' | 'age'>(null)
  const [submitted, setSubmitted] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpenDD(null)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const toggleCategory = (c: string) => {
    setCategory((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
  }

  const toggleAge = (a: string) => {
    setAge((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]))
  }

  const handleSubmit = () => {
    const parts: string[] = []
    if (brand) parts.push(`브랜드: ${brand}`)
    if (product) parts.push(`제품: ${product}`)
    if (market) parts.push(`타겟 시장: ${market}`)
    if (category.length) parts.push(`카테고리: ${category.join(', ')}`)
    if (age.length) parts.push(`타겟 연령대: ${age.join(', ')}`)
    if (email) parts.push(`회신 이메일: ${email}`)
    const subject = encodeURIComponent('콘텐츠 구조 진단 신청 — 레조넌스')
    const body = encodeURIComponent(parts.join('\n'))
    window.location.href = `mailto:contact@rsnc.co.kr?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const triggerCls = (open: boolean) =>
    `w-full bg-transparent text-white text-sm pb-2 pr-6 text-left flex items-center justify-between border-b transition-colors ${
      open ? 'border-brand-yellow' : 'border-zinc-700 hover:border-brand-yellow'
    }`

  return (
    <section id="contact" className="py-32 px-6 md:px-12 w-full bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={rootRef} className="max-w-3xl mx-auto relative z-10">
        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-6 justify-center">
          <div className="w-9 h-[1px] bg-brand-yellow" />
          <span className="text-brand-yellow font-bold text-[11px] tracking-[0.2em] uppercase">Content Diagnosis</span>
          <div className="w-9 h-[1px] bg-brand-yellow" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.2] mb-3 tracking-tight text-center">
          콘텐츠 구조 <span className="text-brand-yellow">진단 신청</span>
        </h2>
        <p className="text-gray-500 text-sm text-center mb-10">
          브랜드명, 제품, 타겟 시장만 알려주시면 <span className="text-white font-bold">72시간 안에</span> 맞춤 진단으로 회신드리겠습니다.
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
          <div className="bg-zinc-900 rounded-[1.25rem] p-7 md:p-8 border border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6 mb-6">

              {/* 브랜드명 */}
              <div className="md:col-span-2">
                <label className="block text-gray-400 text-xs mb-1.5">브랜드명 <span className="text-brand-yellow">*</span></label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="브랜드명을 입력해주세요"
                  className="w-full bg-transparent text-white text-sm pb-2 outline-none border-b border-zinc-700 focus:border-brand-yellow placeholder-zinc-600 transition-colors"
                />
              </div>

              {/* 제품 */}
              <div className="relative">
                <label className="block text-gray-400 text-xs mb-1.5">제품 <span className="text-brand-yellow">*</span></label>
                <button type="button" className={triggerCls(openDD === 'product')}
                  onClick={(e) => { e.stopPropagation(); setOpenDD(openDD === 'product' ? null : 'product') }}>
                  <span className={product ? 'text-white' : 'text-zinc-600'}>{product || '제품 유형 선택'}</span>
                  <svg className={`w-4 h-4 absolute right-0 transition-transform ${openDD === 'product' ? 'rotate-180 text-brand-yellow' : 'text-zinc-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {openDD === 'product' && (
                  <div className="absolute top-full mt-1.5 left-0 right-0 bg-zinc-800 border border-zinc-700 rounded-xl z-50 max-h-52 overflow-y-auto py-1">
                    {PRODUCTS.map((p) => (
                      <div key={p} onClick={() => { setProduct(p); setOpenDD(null) }}
                        className={`px-4 py-2.5 text-[13px] cursor-pointer flex items-center justify-between hover:bg-zinc-700 ${product === p ? 'text-brand-yellow' : 'text-gray-300'}`}>
                        {p}
                        {product === p && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 타겟 시장 */}
              <div className="relative">
                <label className="block text-gray-400 text-xs mb-1.5">타겟 시장 <span className="text-brand-yellow">*</span></label>
                <button type="button" className={triggerCls(openDD === 'market')}
                  onClick={(e) => { e.stopPropagation(); setOpenDD(openDD === 'market' ? null : 'market') }}>
                  <span className={market ? 'text-white' : 'text-zinc-600'}>{market || '국가/지역 선택'}</span>
                  <svg className={`w-4 h-4 absolute right-0 transition-transform ${openDD === 'market' ? 'rotate-180 text-brand-yellow' : 'text-zinc-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {openDD === 'market' && (
                  <div className="absolute top-full mt-1.5 left-0 right-0 bg-zinc-800 border border-zinc-700 rounded-xl z-50 max-h-52 overflow-y-auto py-1">
                    {MARKETS.map((m) => (
                      <div key={m.label}
                        onClick={() => { if (m.enabled) { setMarket(m.label); setOpenDD(null) } }}
                        className={`px-4 py-2.5 text-[13px] flex items-center justify-between ${
                          m.enabled ? `cursor-pointer hover:bg-zinc-700 ${market === m.label ? 'text-brand-yellow' : 'text-gray-300'}` : 'text-zinc-600 cursor-default'
                        }`}>
                        <span>{m.label}{!m.enabled && <span className="text-[10px] text-zinc-600 ml-1.5">준비중</span>}</span>
                        {m.enabled && market === m.label && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 카테고리 (복수) */}
              <div className="relative md:col-span-2">
                <label className="block text-gray-400 text-xs mb-1.5">카테고리 <span className="text-brand-yellow">*</span></label>
                <button type="button" className={triggerCls(openDD === 'category')}
                  onClick={(e) => { e.stopPropagation(); setOpenDD(openDD === 'category' ? null : 'category') }}>
                  {category.length === 0 ? (
                    <span className="text-zinc-600">카테고리 선택 (복수 가능)</span>
                  ) : (
                    <span className="flex flex-wrap gap-1">
                      {category.map((c) => (
                        <span key={c} className="bg-brand-yellow text-black text-[11px] font-bold pl-2 pr-1 py-0.5 rounded-full inline-flex items-center gap-1">
                          {c}
                          <span
                            role="button"
                            onClick={(e) => { e.stopPropagation(); toggleCategory(c) }}
                            className="w-3.5 h-3.5 rounded-full bg-black/15 hover:bg-black/35 flex items-center justify-center leading-none cursor-pointer"
                          >×</span>
                        </span>
                      ))}
                    </span>
                  )}
                  <svg className={`w-4 h-4 absolute right-0 transition-transform ${openDD === 'category' ? 'rotate-180 text-brand-yellow' : 'text-zinc-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {openDD === 'category' && (
                  <div className="absolute top-full mt-1.5 left-0 right-0 bg-zinc-800 border border-zinc-700 rounded-xl z-50 max-h-52 overflow-y-auto py-1">
                    {CATEGORIES.map((c) => (
                      <div key={c} onClick={(e) => { e.stopPropagation(); toggleCategory(c) }}
                        className={`px-4 py-2.5 text-[13px] cursor-pointer flex items-center justify-between hover:bg-zinc-700 ${category.includes(c) ? 'text-brand-yellow' : 'text-gray-300'}`}>
                        {c}
                        {category.includes(c) && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 타겟 연령대 (복수) */}
              <div className="relative md:col-span-2">
                <label className="block text-gray-400 text-xs mb-1.5">타겟 연령대 <span className="text-brand-yellow">*</span></label>
                <button type="button" className={triggerCls(openDD === 'age')}
                  onClick={(e) => { e.stopPropagation(); setOpenDD(openDD === 'age' ? null : 'age') }}>
                  {age.length === 0 ? (
                    <span className="text-zinc-600">연령대 선택 (복수 가능)</span>
                  ) : (
                    <span className="flex flex-wrap gap-1">
                      {age.map((a) => (
                        <span key={a} className="bg-brand-yellow text-black text-[11px] font-bold pl-2 pr-1 py-0.5 rounded-full inline-flex items-center gap-1">
                          {a}
                          <span
                            role="button"
                            onClick={(e) => { e.stopPropagation(); toggleAge(a) }}
                            className="w-3.5 h-3.5 rounded-full bg-black/15 hover:bg-black/35 flex items-center justify-center leading-none cursor-pointer"
                          >×</span>
                        </span>
                      ))}
                    </span>
                  )}
                  <svg className={`w-4 h-4 absolute right-0 transition-transform ${openDD === 'age' ? 'rotate-180 text-brand-yellow' : 'text-zinc-500'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {openDD === 'age' && (
                  <div className="absolute top-full mt-1.5 left-0 right-0 bg-zinc-800 border border-zinc-700 rounded-xl z-50 max-h-52 overflow-y-auto py-1">
                    {AGES.map((a) => (
                      <div key={a} onClick={(e) => { e.stopPropagation(); toggleAge(a) }}
                        className={`px-4 py-2.5 text-[13px] cursor-pointer flex items-center justify-between hover:bg-zinc-700 ${age.includes(a) ? 'text-brand-yellow' : 'text-gray-300'}`}>
                        {a}
                        {age.includes(a) && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 회신 이메일 */}
              <div className="md:col-span-2">
                <label className="block text-gray-400 text-xs mb-1.5">회신 이메일 <span className="text-brand-yellow">*</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-white text-sm pb-2 outline-none border-b border-zinc-700 focus:border-brand-yellow placeholder-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* 푸터 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-5 border-t border-zinc-800">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {['72시간 내 회신', '맞춤 샘플 리스트'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                    {item}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-brand-yellow text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group shrink-0"
              >
                진단 신청하기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
