'use client'

import { useLang } from '@/lib/i18n'

export default function WhyResonanceSection() {
  const { t } = useLang()
  return (
    <section className="py-32 px-6 md:px-12 w-full bg-zinc-950 grid-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 z-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-brand-yellow font-bold text-sm tracking-widest uppercase">{t('why_tag')}</span>
          <div className="w-8 h-[1px] bg-brand-yellow" />
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white leading-tight mb-12 tracking-tight">
          {t('why_headline_1')}<br />
          <span className="text-brand-yellow">{t('why_headline_2')}</span>{t('why_headline_3')}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          {t('why_sub_1')}<br />
          {t('why_sub_2')}
        </p>
      </div>
    </section>
  )
}
