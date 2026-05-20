'use client'

import { useLang } from '@/lib/i18n'

export default function InsightsSection() {
  const { t } = useLang()

  const insights = [
    { tag: 'TREND',   date: '2025.11', title: t('insights_1_title'), read: t('insights_read_3'), active: true  },
    { tag: 'INSIGHT', date: '2025.10', title: t('insights_2_title'), read: t('insights_read_5'), active: false },
    { tag: 'CASE',    date: '2025.09', title: t('insights_3_title'), read: t('insights_read_4'), active: false },
    { tag: 'DATA',    date: '2025.08', title: t('insights_4_title'), read: t('insights_read_4'), active: false },
  ]

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">{t('insights_tag')}</span>
        </div>

        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-16 tracking-tight">
          {t('insights_headline_a')}{' '}
          <span className="text-brand-yellow">{t('insights_headline_b')}</span>
          {t('insights_headline_c')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((it) =>
            it.active ? (
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
            ) : (
              <div
                key={it.title}
                className="relative bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800/50 overflow-hidden select-none"
              >
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40 z-10 rounded-3xl" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                  <span className="bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full uppercase">
                    Coming Soon
                  </span>
                </div>

                <div className="opacity-30 pointer-events-none">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-yellow/20 text-brand-yellow px-3 py-1 rounded-full text-xs font-bold">{it.tag}</span>
                    <span className="text-gray-500 text-sm">{it.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{it.title}</h3>
                  <p className="text-gray-500 text-sm">{it.read}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
