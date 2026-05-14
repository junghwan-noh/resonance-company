'use client'

import { useLang } from '@/lib/i18n'

export default function InsightsSection() {
  const { t } = useLang()

  const insights = [
    { tag: 'TREND', date: '2025.11', title: t('insights_1_title'), read: t('insights_read_3') },
    { tag: 'INSIGHT', date: '2025.10', title: t('insights_2_title'), read: t('insights_read_5') },
    { tag: 'CASE', date: '2025.09', title: t('insights_3_title'), read: t('insights_read_4') },
    { tag: 'DATA', date: '2025.08', title: t('insights_4_title'), read: t('insights_read_4') },
  ]

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">{t('insights_tag')}</span>
        </div>

        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-16 tracking-tight">
          {t('insights_headline_a')} <span className="text-brand-yellow">{t('insights_headline_b')}</span>{t('insights_headline_c')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((it) => (
            <div
              key={it.title}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 transition-all hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-yellow/20 text-brand-yellow px-3 py-1 rounded-full text-xs font-bold">{it.tag}</span>
                <span className="text-gray-500 text-sm">{it.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{it.title}</h3>
              <p className="text-gray-500 text-sm">{it.read}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
