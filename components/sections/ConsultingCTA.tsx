'use client'

import { useLang } from '@/lib/i18n'

export default function ConsultingCTA() {
  const { t } = useLang()
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-brand-yellow">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-gray-400 text-sm mb-6 whitespace-pre-line">{t('consult_top')}</p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {t('consult_main_1')}<br />
              <span className="text-brand-yellow">{t('consult_main_2')}</span><br />
              {t('consult_main_3')}
            </h3>
          </div>
          <a
            href="/레조넌스컴퍼니_회사소개서.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow text-black px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-yellow-400 transition-colors shrink-0 group"
          >
            {t('consult_btn')}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
