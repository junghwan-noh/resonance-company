'use client'

const insights = [
  { tag: 'TREND', date: '2025.11', title: 'TikTok Shop 시대, 시딩의 룰이 바뀌었다', read: '3 min read' },
  { tag: 'INSIGHT', date: '2025.10', title: '뷰티 브랜드가 US 시장에서 실패하는 3가지 이유', read: '5 min read' },
  { tag: 'CASE', date: '2025.09', title: '인플루언서 1명 vs 100명, 어느 쪽이 팔릴까?', read: '4 min read' },
  { tag: 'DATA', date: '2025.08', title: 'ER 6% 인플루언서를 찾는 방법', read: '4 min read' },
]

export default function InsightsSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">인사이트</span>
        </div>

        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-16 tracking-tight">
          마케팅 <span className="text-brand-yellow">트렌드</span>와 인사이트
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((it) => (
            <div
              key={it.title}
              className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 transition-all hover:border-brand-yellow/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)] group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-yellow/20 text-brand-yellow px-3 py-1 rounded-full text-xs font-bold">{it.tag}</span>
                <span className="text-gray-500 text-sm">{it.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">{it.title}</h3>
              <p className="text-gray-500 text-sm">{it.read}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
