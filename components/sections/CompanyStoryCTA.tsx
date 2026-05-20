'use client'

import { useLang } from '@/lib/i18n'

export default function CompanyStoryCTA() {
  const { t } = useLang()
  return (
    <section className="py-16 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-zinc-900 rounded-[2rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">팀레조넌스가 어떻게 다른지 궁금하다면?</h4>
            <p className="text-gray-500 text-sm">회사소개서에서 확인해보세요.</p>
          </div>
          <a
            href="/company-profile.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-yellow-400 transition-colors w-full md:w-auto justify-center group shrink-0"
          >
            {t('consult_btn')}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
