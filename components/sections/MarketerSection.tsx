'use client'

import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    num: '1',
    pain: '북미 TikTok Shop 처음 시작',
    title: '"어떤 인플루언서에게 제품을 보내야 할지 감이 없어요"',
    desc: '북미 마이크로 인플루언서 DB에서 브랜드 카테고리·ER%·진성도 기준으로 딱 맞는 풀을 추려드려요. 누구한테 어떻게 접근할지 구조까지 함께 드립니다.',
    tags: ['인플루언서 풀 제공', '컨텍 구조 설계'],
  },
  {
    num: '2',
    pain: '시딩 해봤는데 결과가 없었음',
    title: '"전에도 인플루언서한테 제품 보냈는데 아무도 안 올렸어요"',
    desc: '팔로워 수만 보고 뿌리는 게 문제예요. 기존 방식의 어디가 틀렸는지 진단하고, 실제로 포스팅까지 이어지는 인플루언서 풀로 교체해드립니다.',
    tags: ['기존 방식 진단', '전환율 높은 풀 교체'],
  },
  {
    num: '3',
    pain: '인플루언서는 찾았는데 막막함',
    title: '"인플루언서를 찾긴 했는데 뭘 어떻게 시켜야 할지 모르겠어요"',
    desc: '북미 소비자에게 팔리는 훅·스크립트 방향을 브랜드 맞춤으로 잡아드려요. 인플루언서에게 어떤 브리핑을 줘야 영상이 나오는지, 구조째로 드립니다.',
    tags: ['컨텐츠 방향성 제시', '브리핑 가이드 제공'],
  },
]

export default function MarketerSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} data-section className="bg-transparent" id="marketer">
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-20 max-w-7xl mx-auto w-full">

        {/* 섹션 헤더 */}
        <div className="reveal mb-3" data-reveal>
          <span className="section-tag">마케터를 위한 서비스</span>
        </div>
        <span className="headline-wrap mb-4">
          <h2 data-reveal className="headline-reveal font-display font-black leading-tight tracking-tighter text-rsncNavy"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 3rem)' }}>
            이런 마케터분들을<br />위한 서비스예요
          </h2>
        </span>
        <p className="text-rsncNavy/55 text-sm leading-relaxed mb-10 max-w-lg reveal" data-reveal style={{ transitionDelay: '120ms' }}>
          브랜드 세일즈를 직접 책임지는 마케터라면<br />
          인플루언서 찾고, DM 보내고, 결과 취합하는 데<br />
          <span className="text-rsncNavy font-semibold">일주일이 사라진 경험 있으시죠?</span>
        </p>

        {/* 카드 리스트 */}
        <div className="glass-card flex flex-col divide-y divide-rsncNavy/8 rounded-2xl overflow-hidden reveal" data-reveal style={{ transitionDelay: '200ms' }}>
          {cards.map((card, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`grid grid-cols-[48px_1fr] gap-x-5 px-7 py-6 cursor-pointer transition-colors duration-200 ${
                active === i ? 'bg-rsncGreen/8' : 'hover:bg-rsncNavy/3'
              }`}
            >
              <span
                className={`font-display font-black text-3xl leading-none pt-1 transition-colors duration-200 tracking-tighter ${
                  active === i ? 'text-rsncNavy' : 'text-rsncNavy/20'
                }`}
              >
                {card.num}
              </span>
              <div>
                <span
                  className={`inline-block text-[11px] font-semibold tracking-tight px-3 py-1 rounded-full mb-2 transition-colors duration-200 ${
                    active === i
                      ? 'bg-rsncGreen text-rsncNavy'
                      : 'bg-rsncNavy/8 text-rsncNavy/55'
                  }`}
                >
                  {card.pain}
                </span>
                <p className="text-sm font-semibold text-rsncNavy leading-snug">{card.title}</p>

                {active === i && (
                  <div className="mt-3">
                    <p className="text-sm text-rsncNavy/65 leading-relaxed">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {card.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs font-semibold bg-white/70 border border-rsncNavy/10 text-rsncNavy/75 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-5 flex items-center justify-between gap-4 flex-wrap glass-card rounded-2xl px-6 py-5 reveal" data-reveal style={{ transitionDelay: '300ms' }}>
          <div>
            <p className="text-sm font-semibold text-rsncNavy mb-1">3가지 모두 해당되시나요?</p>
            <p className="text-sm text-rsncNavy/60">
              브랜드명과 제품 카테고리만 알려주시면 72시간 안에 맞춤 인플루언서 풀 샘플을 드립니다.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            무료로 받아보기
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
