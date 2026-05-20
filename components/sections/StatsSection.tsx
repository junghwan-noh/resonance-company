'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start = Math.min(start + step, target)
      setValue(Math.round(start))
      if (start >= target) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [triggered, target, duration])
  return value
}

export default function StatsSection() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const count120 = useCountUp(120, 1200, triggered)
  const count34  = useCountUp(34,  1000, triggered)
  const count380 = useCountUp(380, 1400, triggered)
  const count30  = useCountUp(30,  1100, triggered)

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* 좌측 큰 카드 */}
        <div className="w-full lg:w-5/12 bg-zinc-900 rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px] relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-yellow rounded-full mix-blend-overlay filter blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative z-10">
            <p className="text-brand-yellow font-bold text-sm tracking-[0.2em] uppercase mb-12">{t('stats_kpi_label')}</p>
          </div>
          <div className="relative z-10 mt-auto">
            <h2 className="text-white text-8xl md:text-9xl font-black leading-none mb-6">
              {count120}<span className="text-brand-yellow">+</span>
            </h2>
            <p className="text-white text-2xl font-bold mb-2">{t('stats_card1_title')}</p>
            <p className="text-gray-300">{t('stats_card1_sub')}</p>
          </div>
        </div>

        {/* 우측 카드들 */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6 h-full">
            <div className="bg-zinc-900 rounded-[2rem] p-10 flex-1 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4">
                {count34}<span className="text-brand-yellow">%</span>
              </h3>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
              <p className="font-bold text-xl text-white mb-2">{t('stats_card2_title')}</p>
              <p className="text-gray-500 text-sm">{t('stats_card2_sub')}</p>
            </div>
            <div className="bg-zinc-900 rounded-[2rem] p-10 flex-1 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4">
                {count380}<span className="text-brand-yellow">%</span>
              </h3>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
              <p className="font-bold text-xl text-white mb-2">{t('stats_card3_title')}</p>
              <p className="text-gray-500 text-sm">{t('stats_card3_sub')}</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] p-10 w-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
            <h3 className="text-6xl md:text-7xl font-black text-white mb-4">
              {count30}<span className="text-3xl md:text-4xl font-bold">만</span><span className="text-brand-yellow">+@</span>
            </h3>
            <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
            <p className="font-bold text-xl text-white mb-2">{t('stats_card4_title')}</p>
            <p className="text-gray-500 text-sm">{t('stats_card4_sub')}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
