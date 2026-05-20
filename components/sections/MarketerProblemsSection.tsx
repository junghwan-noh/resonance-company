'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

export default function MarketerProblemsSection() {
  const { t } = useLang()
  const cards = [
    { num: '1', pain: t('marketer_card1_pain'), title: t('marketer_card1_title'), desc: t('marketer_card1_desc'), tags: [t('marketer_card1_tag1'), t('marketer_card1_tag2')].filter(Boolean) },
    { num: '2', pain: t('marketer_card2_pain'), title: t('marketer_card2_title'), desc: t('marketer_card2_desc'), tags: [t('marketer_card2_tag1'), t('marketer_card2_tag2')].filter(Boolean) },
    { num: '3', pain: t('marketer_card3_pain'), title: t('marketer_card3_title'), desc: t('marketer_card3_desc'), tags: [t('marketer_card3_tag1'), t('marketer_card3_tag2')].filter(Boolean) },
  ]
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

  const reveal = visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  const baseTransition = 'transition-all duration-700 ease-out'
  const style = (delay: number) => ({ transitionDelay: visible ? `${delay}ms` : '0ms' })

  return (
    <section id="marketer" data-skip-reveal className="py-24 px-6 md:px-12 w-full bg-black">
      <div ref={ref} className="max-w-7xl mx-auto">

        <h2 className={`text-4xl md:text-5xl font-black text-white mb-10 text-center md:text-left tracking-tight ${baseTransition} ${reveal}`} style={style(0)}>
          실무에서 <span className="text-brand-yellow">반복</span>되는 문제들
        </h2>

        <div className="bg-zinc-900 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden border border-zinc-800">
          {cards.map((card, i) => {
            const isLast = i === cards.length - 1
            const delay = 150 + i * 150
            return (
              <div
                key={card.num}
                className={`group p-8 md:p-12 flex flex-col md:flex-row gap-8 hover:bg-zinc-900/60 ${baseTransition} ${reveal} ${
                  isLast ? '' : 'border-b border-zinc-800'
                }`}
                style={style(delay)}
              >
                <div className="text-5xl md:text-6xl font-black w-16 transition-colors duration-300 text-gray-600 group-hover:text-white">
                  {card.num}
                </div>

                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 transition-colors duration-300 bg-zinc-700 text-gray-400 group-hover:bg-brand-yellow group-hover:text-black">
                    {card.pain}
                  </div>

                  <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>

                  <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                    <p className="text-gray-500 text-sm mb-6">{card.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 border border-zinc-700 rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mt-8 bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 ${baseTransition} ${reveal}`} style={style(600)}>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">{t('marketer_cta_title')}</h4>
            <p className="text-gray-500 text-sm">{t('marketer_cta_desc')}</p>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group"
          >
            {t('marketer_cta_btn')}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
