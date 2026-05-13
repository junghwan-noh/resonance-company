'use client'

export default function ConsultingCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-24 px-6 md:px-12 w-full bg-brand-yellow">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-gray-400 text-sm mb-6">
              마케팅 시장은 국경과 차원을 넘어 급변하고 있습니다.<br />
              하지만 대행사들의 결과는 미약하고, 일회성에 그치는 경우가 다반사입니다.
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              팀레조넌스는 재계약에 집착하지 않습니다.<br />
              <span className="text-brand-yellow">대행사들이 놓치는 맹점을 정확히 타겟팅하여</span><br />
              리스크를 최소화합니다.
            </h3>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-brand-yellow text-black px-8 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-yellow-400 transition-colors shrink-0 group"
          >
            팀 레조넌스 컨설팅 스케줄
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
