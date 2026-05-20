'use client'

import { useLang } from '@/lib/i18n'

export default function MarketerSection() {
  const { t } = useLang()

  return (
    <section id="marketer" className="py-40 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-12 whitespace-pre-line">
          {t('marketer_headline')}
        </h2>
        <div>
          <p className="text-gray-500 whitespace-pre-line">{t('marketer_sub_1')}</p>
          <p className="text-white font-bold mt-2">{t('marketer_sub_2')}</p>
        </div>
      </div>
    </section>
  )
}
