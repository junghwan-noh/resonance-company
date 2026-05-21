'use client'

import { useLang } from '@/lib/i18n'

export default function ConsultingCTA() {
  const { t } = useLang()
  return (
    <section className="py-40 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-[80px] font-black text-white leading-[1.05] mb-10 tracking-tight text-center">
          {t('consult_cta_title_1')}<br />
          {t('consult_cta_title_2')} <span className="text-brand-yellow">{t('consult_cta_title_3')}</span>
        </h2>
        <div className="text-center">
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            {t('consult_cta_sub')}
          </p>
        </div>
      </div>
    </section>
  )
}
