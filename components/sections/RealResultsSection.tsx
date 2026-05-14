'use client'

import { useLang } from '@/lib/i18n'

export default function RealResultsSection() {
  const { t } = useLang()
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 opacity-50 z-0" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl md:text-[64px] font-black text-white leading-[1.1] mb-10 tracking-tight">
            {t('real_headline_1')}<br />
            <span className="relative inline-block">
              <span className="text-brand-yellow relative z-10">{t('real_headline_2')}</span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-brand-yellow/20 z-0" />
            </span>{t('real_headline_3')}
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-lg">
            <p>{t('real_sub_1')}</p>
            <p className="text-white font-bold">{t('real_sub_2')}</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[500px] relative rounded-[3rem] bg-gradient-to-tr from-brand-yellow/10 to-transparent overflow-hidden border border-white/50">
          <div className="absolute top-[15%] left-[20%] w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-2xl animate-float-slow rotate-[-10deg]">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </div>
          <div className="absolute top-[10%] right-[15%] w-20 h-20 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-3xl flex items-center justify-center shadow-2xl animate-float-medium rotate-[15deg]">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="4" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5v.01" /></svg>
          </div>
          <div className="absolute bottom-[40%] left-[10%] w-14 h-14 bg-[#ff2442] rounded-xl flex items-center justify-center shadow-xl animate-float-fast rotate-[5deg]">
            <span className="text-white font-bold text-xl font-serif">红</span>
          </div>
          <div className="absolute bottom-[15%] left-[30%] w-16 h-16 bg-[#ff2442] rounded-2xl flex items-center justify-center shadow-2xl animate-float-medium rotate-[-15deg]">
            <span className="text-white font-bold text-2xl font-serif">红</span>
          </div>
          <div className="absolute bottom-[20%] right-[25%] w-14 h-14 bg-black rounded-xl flex items-center justify-center shadow-xl animate-float-slow rotate-[20deg]">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
          </div>
          <div className="absolute top-[45%] right-[5%] w-12 h-12 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-xl flex items-center justify-center shadow-lg animate-float-fast rotate-[-5deg] opacity-80">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="16" height="16" x="4" y="4" rx="4" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5v.01" /></svg>
          </div>
        </div>
      </div>
    </section>
  )
}
