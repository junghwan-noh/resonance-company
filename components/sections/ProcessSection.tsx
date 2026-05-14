'use client'

import { useLang } from '@/lib/i18n'

const ArrowDown = ({ tone }: { tone: 'legacy' | 'rsnc' }) => (
  <div className={`h-8 flex justify-center mt-4 ${tone === 'legacy' ? 'text-gray-300' : 'text-[#d4ff00]'}`}>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
)

export default function ProcessSection() {
  const { t } = useLang()

  const legacySteps = [
    { num: '01', title: t('process_legacy_1_title'), sub: t('process_legacy_1_sub'), desc: t('process_legacy_1_desc') },
    { num: '02', title: t('process_legacy_2_title'), sub: t('process_legacy_2_sub'), desc: t('process_legacy_2_desc') },
    { num: '03', title: t('process_legacy_3_title'), sub: t('process_legacy_3_sub'), desc: t('process_legacy_3_desc') },
    { num: '04', title: t('process_legacy_4_title'), sub: t('process_legacy_4_sub'), desc: t('process_legacy_4_desc') },
  ]

  const rsncSteps = [
    { num: '01', title: t('process_rsnc_1_title'), sub: t('process_rsnc_1_sub'), desc: t('process_rsnc_1_desc') },
    { num: '02', title: t('process_rsnc_2_title'), sub: t('process_rsnc_2_sub'), desc: t('process_rsnc_2_desc') },
    { num: '03', title: t('process_rsnc_3_title'), sub: t('process_rsnc_3_sub'), desc: t('process_rsnc_3_desc') },
    { num: '04', title: t('process_rsnc_4_title'), sub: t('process_rsnc_4_sub'), desc: t('process_rsnc_4_desc') },
  ]

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 font-bold tracking-widest text-sm mb-16 text-center md:text-left">{t('process_label')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col relative">
            <h3 className="text-4xl font-black text-gray-400 mb-10 text-center md:text-left">{t('process_legacy_title')}</h3>
            <div className="flex flex-col space-y-4 relative">
              {legacySteps.map((s, i, arr) => (
                <div key={s.num}>
                  <div className="bg-zinc-900 rounded-2xl p-8 flex items-start gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-zinc-800 z-10 relative">
                    <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center shrink-0 text-lg">{s.num}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{s.title}</h4>
                      <p className="text-gray-500 text-sm font-medium mb-1">{s.sub}</p>
                      <p className="text-gray-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <ArrowDown tone="legacy" />}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-16 md:mt-0 relative">
            <h3 className="text-4xl font-black text-white mb-10 text-center md:text-left">{t('process_rsnc_title')}</h3>
            <div className="flex flex-col space-y-4 relative">
              {rsncSteps.map((s, i, arr) => (
                <div key={s.num}>
                  <div className="bg-zinc-900 rounded-2xl p-8 flex items-start gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-zinc-800 z-10 relative">
                    <div className="w-12 h-12 rounded-full bg-[#f4ffcc] text-[#99cc00] font-bold flex items-center justify-center shrink-0 text-lg">{s.num}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{s.title}</h4>
                      <p className="text-gray-500 text-sm font-medium mb-1">{s.sub}</p>
                      <p className="text-gray-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && <ArrowDown tone="rsnc" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
