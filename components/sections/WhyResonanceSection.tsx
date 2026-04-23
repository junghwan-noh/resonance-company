'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const othersSteps = [
  { label: '대형 DB 구입', desc: '수십만 건 엑셀' },
  { label: '무차별 DM 발송', desc: '복붙 템플릿' },
  { label: '응답 기다리기', desc: '평균 응답률 ~8%' },
  { label: '결과 불투명', desc: '리포트 없음' },
]

const ourSteps = [
  { label: '브리핑', desc: '브랜드·제품·타겟', color: '#7CFF00' },
  { label: 'AI 매칭', desc: 'ER% · 지역 · 콘텐츠 품질', color: '#00D4FF' },
  { label: '개인화 DM', desc: 'Claude AI 맞춤 작성', color: '#7CFF00' },
  { label: '리포트', desc: '응답률 · 도달 · 결과 공유', color: '#00D4FF' },
]

const influencers = [
  {
    type: 'bad',
    handle: '@random_account99',
    followers: '120K',
    er: '0.4%',
    note: '팔로워 매입, 댓글 봇',
    image: null,
    tags: ['저품질', '허위 팔로워', '봇 댓글'],
  },
  {
    type: 'good',
    handle: '@beautybyella',
    followers: '892K',
    er: '6.2%',
    note: '실 팬덤, 고참여 Beauty 크리에이터',
    image: null,
    tags: ['검증됨', '실팔로워', '높은 ER'],
  },
]

export default function WhyResonanceSection() {
  const ref = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<'process' | 'quality'>('process')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-black" id="why">

      {/* 슬로건 헤더 */}
      <div
        className="relative flex items-center"
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(135deg, #000d14 0%, #001a26 40%, #000e1a 70%, #000000 100%)',
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, #00D4FF 0%, transparent 70%)' }} />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #7CFF00 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8 reveal" data-reveal>
            <span className="w-6 h-px bg-neon-green" />
            <span className="text-neon-green text-xs tracking-[0.35em] uppercase font-medium">Why Resonance</span>
          </div>
          <h2 className="font-display font-black leading-none tracking-tight mb-6 reveal" data-reveal
            style={{ fontSize: 'clamp(1.4rem, 3vw, 3.5rem)' }}>
            많이 뿌리는 게 아니라<br />
            <span className="text-neon-green">정확하게</span>{' '}
            <span style={{ color: '#00D4FF' }}>닿는 겁니다.</span>
          </h2>
          <p className="text-gray-400 text-base font-light max-w-lg reveal" data-reveal>
            수천 명에게 보내는 DM은 스팸입니다.<br />
            당신의 브랜드에 진짜 반응할 사람에게만 — 그게 레조넌스입니다.
          </p>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex gap-0 reveal" data-reveal>
          {[
            { id: 'process', label: '프로세스 비교' },
            { id: 'quality', label: '인플루언서 퀄리티 비교' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'process' | 'quality')}
              className="px-8 py-5 text-sm font-medium tracking-wide transition-all duration-300 border-b-2"
              style={{
                color: activeTab === tab.id ? '#7CFF00' : '#4B5563',
                borderBottomColor: activeTab === tab.id ? '#7CFF00' : 'transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 프로세스 비교 다이어그램 */}
      {activeTab === 'process' && (
        <div className="px-6 md:px-16 lg:px-24 py-16 border-t border-gray-900">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* 타사 프로세스 */}
              <div className="border border-gray-800 p-8 reveal" data-reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">타사 방식</span>
                </div>

                <div className="space-y-0">
                  {othersSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-4">
                      {/* 라인 */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-8 h-8 border border-gray-700 flex items-center justify-center">
                          <span className="text-gray-600 text-xs">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        {i < othersSteps.length - 1 && (
                          <div className="w-px h-10 bg-gray-800" />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="text-gray-400 text-sm font-semibold mb-0.5">{step.label}</p>
                        <p className="text-gray-700 text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 결과 */}
                <div className="border border-red-900/40 bg-red-950/20 p-4 mt-2">
                  <p className="text-red-500 text-xs font-bold mb-1">평균 결과</p>
                  <p className="text-gray-500 text-sm">응답률 ~8% · 브랜드 핏 불일치 · ROI 측정 불가</p>
                </div>
              </div>

              {/* 레조넌스 프로세스 */}
              <div className="border border-neon-green/30 p-8 reveal" data-reveal style={{ transitionDelay: '120ms' }}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-neon-green" />
                  <span className="text-neon-green text-xs tracking-[0.3em] uppercase font-medium">Resonance 방식</span>
                </div>

                <div className="space-y-0">
                  {ourSteps.map((step, i) => (
                    <div key={step.label} className="flex items-start gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-8 h-8 flex items-center justify-center"
                          style={{ border: `1px solid ${step.color}40`, boxShadow: `0 0 12px ${step.color}20` }}
                        >
                          <span className="text-xs font-bold" style={{ color: step.color }}>{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        {i < ourSteps.length - 1 && (
                          <div className="w-px h-10" style={{ background: `linear-gradient(to bottom, ${step.color}40, ${ourSteps[i + 1].color}20)` }} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className="text-white text-sm font-semibold mb-0.5">{step.label}</p>
                        <p className="text-gray-500 text-xs">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 결과 */}
                <div className="border border-neon-green/30 bg-neon-green/5 p-4 mt-2">
                  <p className="text-neon-green text-xs font-bold mb-1">평균 결과</p>
                  <p className="text-gray-300 text-sm">응답률 34% · 브랜드 핏 매칭 · 캠페인 리포트 제공</p>
                </div>
              </div>
            </div>

            {/* 핵심 차이 요약 */}
            <div className="mt-6 grid grid-cols-3 gap-4 reveal" data-reveal style={{ transitionDelay: '200ms' }}>
              {[
                { label: '응답률 차이', others: '~8%', ours: '34%', color: '#7CFF00' },
                { label: '인플루언서 검증', others: '없음', ours: '49,383건', color: '#00D4FF' },
                { label: '브랜드 핏', others: '랜덤', ours: 'AI 매칭', color: '#7CFF00' },
              ].map((item) => (
                <div key={item.label} className="border border-gray-800 p-5 text-center">
                  <p className="text-gray-600 text-xs mb-4 tracking-wide">{item.label}</p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-600 text-sm line-through">{item.others}</span>
                    <span className="text-gray-700">→</span>
                    <span className="font-bold text-sm" style={{ color: item.color }}>{item.ours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 인플루언서 퀄리티 비교 */}
      {activeTab === 'quality' && (
        <div className="px-6 md:px-16 lg:px-24 py-16 border-t border-gray-900">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

              {/* 저품질 */}
              <div className="border border-gray-800 reveal" data-reveal>
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-800">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">타사가 보내는 인플루언서</span>
                </div>

                {/* 이미지 영역 */}
                <div className="relative bg-gray-950 border-b border-gray-800" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="border border-dashed border-gray-700 px-6 py-4 text-center">
                      <p className="text-gray-600 text-xs mb-1">스크린샷 첨부 예정</p>
                      <p className="text-gray-800 text-[10px]">저품질 인플루언서 프로필 예시</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-red-900/80 px-2 py-1">
                    <span className="text-red-400 text-[10px] font-bold uppercase tracking-wider">⚠ 저품질</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700" />
                    <div>
                      <p className="text-gray-400 text-sm font-semibold">@random_account99</p>
                      <p className="text-gray-700 text-xs">🇺🇸 US · Beauty</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="border border-gray-800 p-3">
                      <p className="text-gray-600 text-[10px] mb-1">팔로워</p>
                      <p className="text-gray-400 text-sm font-bold">120K</p>
                    </div>
                    <div className="border border-red-900/40 p-3">
                      <p className="text-gray-600 text-[10px] mb-1">참여율 (ER)</p>
                      <p className="text-red-500 text-sm font-bold">0.4%</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {['팔로워 대량 구매 의심', '댓글 대부분 봇', '콘텐츠 일관성 없음', '브랜드 핏 미검증'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-red-500 text-xs">✗</span>
                        <span className="text-gray-600 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 고품질 */}
              <div className="border border-neon-green/30 reveal" data-reveal style={{ transitionDelay: '120ms' }}>
                <div className="flex items-center gap-3 px-6 py-4 border-b border-neon-green/20">
                  <span className="w-2 h-2 rounded-full bg-neon-green" />
                  <span className="text-neon-green text-xs tracking-[0.3em] uppercase">Resonance DB 인플루언서</span>
                </div>

                {/* 이미지 영역 */}
                <div className="relative bg-gray-950 border-b border-gray-800" style={{ aspectRatio: '16/9' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="border border-dashed border-gray-700 px-6 py-4 text-center">
                      <p className="text-gray-600 text-xs mb-1">스크린샷 첨부 예정</p>
                      <p className="text-gray-800 text-[10px]">고퀄리티 인플루언서 프로필 예시</p>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-neon-green/20 px-2 py-1">
                    <span className="text-neon-green text-[10px] font-bold uppercase tracking-wider">✓ 검증됨</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-900 border border-neon-green/30 flex items-center justify-center">
                      <span className="text-neon-green text-[10px] font-bold">BE</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">@beautybyella</p>
                      <p className="text-gray-500 text-xs">🇺🇸 US · Beauty</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="border border-gray-800 p-3">
                      <p className="text-gray-600 text-[10px] mb-1">팔로워</p>
                      <p className="text-white text-sm font-bold">892K</p>
                    </div>
                    <div className="border border-neon-green/30 p-3">
                      <p className="text-gray-600 text-[10px] mb-1">참여율 (ER)</p>
                      <p className="text-neon-green text-sm font-bold">6.2%</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {['실 팬덤 확인 완료', '댓글 퀄리티 검증', '뷰티 콘텐츠 일관성', '브랜드 핏 AI 매칭'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-neon-green text-xs">✓</span>
                        <span className="text-gray-400 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 이미지 업로드 안내 */}
            <div className="border border-dashed border-gray-800 p-6 text-center reveal" data-reveal>
              <p className="text-gray-600 text-xs mb-1">실제 비교 스크린샷을 <span className="text-neon-green">public/</span> 폴더에 넣으면 자동 반영됩니다</p>
              <p className="text-gray-800 text-[10px]">권장: influencer-bad.jpg · influencer-good.jpg (16:9 비율)</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="border-t border-gray-900 px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto bg-gray-950 border border-gray-800 p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 reveal" data-reveal>
          <div>
            <p className="text-gray-600 text-xs tracking-widest uppercase mb-4">그래서, 우릴 써야하는 이유</p>
            <h3 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
              결과 없으면 재계약 없습니다.<br />
              <span className="text-neon-green">그래서 우리는</span>{' '}
              <span style={{ color: '#00D4FF' }}>결과에 집착합니다.</span>
            </h3>
          </div>
          <a href="#contact" className="btn-primary shrink-0 text-base px-10 py-5">
            무료로 시작하기
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
