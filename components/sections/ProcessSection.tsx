'use client'

import { useLang } from '@/lib/i18n'

export default function ProcessSection() {
  const { t } = useLang()

  const legacySteps = [
    { num: '01', title: t('process_legacy_1_title'), sub: t('process_legacy_1_sub'), desc: t('process_legacy_1_desc') },
    { num: '02', title: t('process_legacy_2_title'), sub: t('process_legacy_2_sub'), desc: t('process_legacy_2_desc') },
    { num: '03', title: t('process_legacy_3_title'), sub: t('process_legacy_3_sub'), desc: t('process_legacy_3_desc') },
    { num: '04', title: t('process_legacy_4_title'), sub: t('process_legacy_4_sub'), desc: t('process_legacy_4_desc') },
  ]

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-center md:text-left tracking-tight">
          성과가 <span className="text-brand-yellow">반복</span>되지 않는 이유
        </h2>
        <h3 className="text-2xl font-bold text-gray-400 mb-10 text-center md:text-left">{t('process_legacy_title')}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {legacySteps.map((s) => (
            <div
              key={s.num}
              className="bg-zinc-900 rounded-2xl p-8 flex items-start gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-zinc-800"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center shrink-0 text-lg">{s.num}</div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm font-medium mb-1">{s.sub}</p>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
