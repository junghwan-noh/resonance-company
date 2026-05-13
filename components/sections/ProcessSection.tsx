const legacySteps = [
  { num: '01', title: '시딩', sub: 'AI 혹은 현지 하청업체 활용', desc: '검증되지 않은 무작위 DB를 그대로 제공합니다.' },
  { num: '02', title: '무차별 발송', sub: '팔로워 수만 보고 선별', desc: '복붙 템플릿으로 수백 명에게 동일한 DM을 보냅니다.' },
  { num: '03', title: '응답 대기', sub: '평균 응답률 ~8%', desc: '대부분 무시당하거나 스팸으로 처리됩니다.' },
  { num: '04', title: '결과 없음', sub: '리포트 없음·ROI 불투명', desc: '캠페인이 끝나도 무엇이 효과 있었는지 알 수 없습니다.' },
]

const rsncSteps = [
  { num: '01', title: '대면 브리핑', sub: '브랜드·제품·타겟 시장 파악', desc: '미팅을 통해 브랜드 페르소나를 완전히 이해합니다.' },
  { num: '02', title: '정밀 시딩', sub: 'ER%·팔로워 진성도·콘텐츠 품질 교차 분석', desc: '49,383개 DB에서 브랜드에 딱 맞는 인플루언서만 추출합니다.' },
  { num: '03', title: '개인화 DM 및 메일링', sub: '브랜드 맞춤 접근 메시지', desc: '복붙 없이 각 인플루언서에 맞게 개별 작성합니다.' },
  { num: '04', title: '리포트', sub: '응답률·도달·전환 전수 공유', desc: '캠페인 종료 후 모든 수치를 투명하게 공개합니다.' },
]

const ArrowDown = ({ tone }: { tone: 'legacy' | 'rsnc' }) => (
  <div className={`h-8 flex justify-center mt-4 ${tone === 'legacy' ? 'text-gray-300' : 'text-[#d4ff00]'}`}>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
)

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 md:px-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-500 font-bold tracking-widest text-sm mb-16 text-center md:text-left">프로세스 비교</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="flex flex-col relative">
            <h3 className="text-4xl font-black text-gray-400 mb-10 text-center md:text-left">기존 방식</h3>
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
            <h3 className="text-4xl font-black text-white mb-10 text-center md:text-left">팀 레조넌스 방식</h3>
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
