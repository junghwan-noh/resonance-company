'use client'

export default function StatsSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-5/12 bg-zinc-900 rounded-[2rem] p-10 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px] relative overflow-hidden group">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-yellow rounded-full mix-blend-overlay filter blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative z-10">
            <p className="text-brand-yellow font-bold text-sm tracking-[0.2em] uppercase mb-12">HEADLINE KPI</p>
          </div>
          <div className="relative z-10 mt-auto">
            <h2 className="text-white text-8xl md:text-9xl font-black leading-none mb-6">120<span className="text-brand-yellow">+</span></h2>
            <p className="text-white text-2xl font-bold mb-2">누적 시딩 캠페인</p>
            <p className="text-gray-300">카테고리별 성과 데이터 보유</p>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-6 h-full">
            <div className="bg-zinc-900 rounded-[2rem] p-10 flex-1 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4">34<span className="text-brand-yellow">%</span></h3>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
              <p className="font-bold text-xl text-white mb-2">평균 인플루언서 응답률</p>
              <p className="text-gray-500 text-sm">업계 평균(~8%)의 4배</p>
            </div>
            <div className="bg-zinc-900 rounded-[2rem] p-10 flex-1 flex flex-col justify-center shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
              <h3 className="text-6xl md:text-7xl font-black text-white mb-4">380<span className="text-brand-yellow">%</span></h3>
              <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
              <p className="font-bold text-xl text-white mb-2">평균 조회수 상승률</p>
              <p className="text-gray-500 text-sm">시딩 전 대비 실측 기준</p>
            </div>
          </div>
          <div className="bg-zinc-900 rounded-[2rem] p-10 w-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1">
            <h3 className="text-6xl md:text-7xl font-black text-white mb-4">30<span className="text-3xl md:text-4xl font-bold">만</span><span className="text-brand-yellow">+@</span></h3>
            <div className="w-12 h-0.5 bg-brand-yellow mb-6" />
            <p className="font-bold text-xl text-white mb-2">검증된 인플루언서 DB</p>
            <p className="text-gray-500 text-sm">자체 수집·분류 엔진 보유</p>
          </div>
        </div>
      </div>
    </section>
  )
}
