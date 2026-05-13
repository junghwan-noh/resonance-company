export default function InfluencerPreviewSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-brand-yellow" />
          <span className="text-gray-400 font-bold text-sm tracking-widest">콘텐츠 맛보기</span>
        </div>
        <h2 className="text-5xl md:text-[56px] font-black text-white leading-[1.1] mb-6 tracking-tight">
          이런 인플루언서들과<br />
          <span className="text-brand-yellow">함께</span>하고 있습니다.
        </h2>
        <p className="text-gray-400 text-sm">실제 DB에서 발췌한 샘플입니다. 브랜드에 맞는 리스트는 따로 드립니다.</p>
        <div className="mt-16 w-full h-64 bg-gradient-to-t from-black to-zinc-900 border-t border-zinc-800" />
      </div>
    </section>
  )
}
