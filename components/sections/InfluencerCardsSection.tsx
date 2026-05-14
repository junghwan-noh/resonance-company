'use client'

import { useLang } from '@/lib/i18n'

export default function InfluencerCardsSection() {
  const { t } = useLang()

  const cards = [
    {
      handle: '@beautybyella', flag: '🇺🇸', cat: 'Beauty',
      followers: '892K', er: '6.2%', extraLabel: t('inf_extra1'), extraValue: '180만',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=900&fit=crop',
    },
    {
      handle: '@fitlife.james', flag: '🇺🇸', cat: 'Fitness',
      followers: '1.2M', er: '4.8%', extraLabel: t('inf_extra1'), extraValue: '310만',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=900&fit=crop',
    },
    {
      handle: '@sydneyfoodie', flag: '🇦🇺', cat: 'F&B',
      followers: '340K', er: '8.1%', extraLabel: t('inf_extra3'), extraValue: t('inf_extra3_value'),
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=900&fit=crop',
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">{t('inf_tag')}</span>
        </div>

        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-6 tracking-tight">
          {t('inf_headline_1')}<br />
          <span className="text-brand-yellow">{t('inf_headline_2')}</span>{t('inf_headline_3')}
        </h2>
        <p className="text-gray-400 text-sm mb-16">{t('inf_sub')}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.handle}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-zinc-800 transition-transform hover:-translate-y-2 duration-300 group"
            >
              <div className="aspect-[9/16] bg-zinc-900 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={`${c.cat} sample`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-brand-yellow text-black px-3 py-1 rounded-full text-xs font-bold">{c.cat}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white font-bold text-lg">{c.handle}</span>
                  <span className="text-gray-500 text-sm">{c.flag}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">{t('inf_followers')}</p>
                    <p className="text-white font-bold">{c.followers}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">ER</p>
                    <p className="text-brand-yellow font-bold">{c.er}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 text-xs mb-1">{c.extraLabel}</p>
                    <p className="text-white font-bold">{c.extraValue}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="bg-brand-yellow text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center gap-3 group"
          >
            {t('inf_cta')}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
