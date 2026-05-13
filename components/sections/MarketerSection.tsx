'use client'

import { useEffect, useRef, useState } from 'react'

export default function MarketerSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const reveal = (delay: number) =>
    `transition-all duration-700 ease-out ${
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`

  const style = (delay: number) => ({ transitionDelay: visible ? `${delay}ms` : '0ms' })

  return (
    <section data-skip-reveal className="py-24 px-6 md:px-12 w-full bg-black">
      <div ref={ref} className="max-w-7xl mx-auto">

        {/* 섹션 타이틀 */}
        <div className={`flex items-center gap-4 mb-8 ${reveal(0)}`} style={style(0)}>
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">마케터를 위한 서비스</span>
        </div>
        <h2 className={`text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-12 ${reveal(0)}`} style={style(80)}>
          이런 브랜드와<br />잘 맞습니다
        </h2>

        {/* 서브카피 */}
        <div className={`mb-12 ${reveal(0)}`} style={style(180)}>
          <p className="text-gray-500">브랜드 세일즈를 직접 책임지는 마케터라면<br />인플루언서 찾고, DM 보내고, 결과 취합하는 데</p>
          <p className="text-white font-bold mt-2">일주일이 사라진 경험 있으시죠?</p>
        </div>

        {/* 카드 컨테이너 */}
        <div className="bg-zinc-900 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden border border-zinc-800">
          {/* Card 1 — 0ms */}
          <div className={`p-8 md:p-12 border-b border-zinc-800 flex flex-col md:flex-row gap-8 ${reveal(0)}`} style={style(280)}>
            <div className="text-5xl md:text-6xl font-black text-gray-200 w-16">1</div>
            <div className="flex-1">
              <div className="inline-block bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold mb-4">북미 TikTok Shop 처음 시작</div>
              <h4 className="text-xl font-bold text-white mb-4">&quot;어떤 인플루언서에게 제품을 보내야 할지 감이 없어요&quot;</h4>
              <p className="text-gray-500 text-sm mb-6">북미 마이크로 인플루언서 DB에서 브랜드 카테고리·ER%·진성도 기준으로 딱 맞는 풀을 추려드려요. 누구한테 어떻게 접근할지 구조까지 함께 드립니다.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-4 py-1.5 border border-zinc-700 rounded-full text-xs text-gray-400">인플루언서 풀 제공</span>
                <span className="px-4 py-1.5 border border-zinc-700 rounded-full text-xs text-gray-400">컨텍 구조 설계</span>
              </div>
            </div>
          </div>

          {/* Card 2 — 150ms */}
          <div className={`p-8 md:p-12 border-b border-zinc-800 flex flex-col md:flex-row gap-8 opacity-70 hover:opacity-100 transition-opacity ${reveal(0)}`} style={style(430)}>
            <div className="text-5xl md:text-6xl font-black text-gray-200 w-16">2</div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs mb-4">시딩 해봤는데 결과가 없었음</p>
              <h4 className="text-xl font-bold text-white">&quot;전에도 인플루언서한테 제품 보냈는데 아무도 안 올렸어요&quot;</h4>
            </div>
          </div>

          {/* Card 3 — 300ms */}
          <div className={`p-8 md:p-12 flex flex-col md:flex-row gap-8 opacity-70 hover:opacity-100 transition-opacity ${reveal(0)}`} style={style(580)}>
            <div className="text-5xl md:text-6xl font-black text-gray-200 w-16">3</div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs mb-4">인플루언서는 찾았는데 막막함</p>
              <h4 className="text-xl font-bold text-white">&quot;인플루언서를 찾긴 했는데 뭘 어떻게 시켜야 할지 모르겠어요&quot;</h4>
            </div>
          </div>
        </div>

        {/* 하단 CTA */}
        <div className={`mt-8 bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 ${reveal(0)}`} style={style(750)}>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">3가지 모두 해당되시나요?</h4>
            <p className="text-gray-500 text-sm">브랜드명과 제품 카테고리만 알려주시면 72시간 안에 맞춤 인플루언서 풀 샘플을 드립니다.</p>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group"
          >
            무료로 받아보기
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
