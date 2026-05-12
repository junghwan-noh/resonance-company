'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

const STEPS_BY_LANG = {
  ko: {
    legacy: [
      { num: '01', keyword: '시딩', desc: 'AI 혹은 현지 하청업체 활용', detail: '검증되지 않은 무작위 DB를 그대로 제공합니다.' },
      { num: '02', keyword: '무차별 발송', desc: '팔로워 수만 보고 선별', detail: '복붙 템플릿으로 수백 명에게 동일한 DM을 보냅니다.' },
      { num: '03', keyword: '응답 대기', desc: '평균 응답률 ~8%', detail: '대부분 무시당하거나 스팸으로 처리됩니다.' },
      { num: '04', keyword: '결과 없음', desc: '리포트 없음 · ROI 불투명', detail: '캠페인이 끝나도 무엇이 효과 있었는지 알 수 없습니다.' },
    ],
    rsnc: [
      { num: '01', keyword: '대면 브리핑', desc: '브랜드·제품·타겟 시장 파악', detail: '미팅을 통해 브랜드 페르소나를 완전히 이해합니다.' },
      { num: '02', keyword: '정밀 시딩', desc: 'ER% · 팔로워 진성도 · 콘텐츠 품질 교차 분석', detail: '49,383개 DB에서 브랜드에 딱 맞는 인플루언서만 추출합니다.' },
      { num: '03', keyword: '개인화 DM 및 메일링', desc: '브랜드 맞춤 접근 메시지', detail: '복붙 없이 각 인플루언서에 맞게 개별 작성합니다.' },
      { num: '04', keyword: '리포트', desc: '응답률 · 도달 · 전환 전수 공유', detail: '캠페인 종료 후 모든 수치를 투명하게 공개합니다.' },
    ],
  },
  en: {
    legacy: [
      { num: '01', keyword: 'Seeding', desc: 'AI or local subcontractors', detail: 'Hand over an unverified random database as-is.' },
      { num: '02', keyword: 'Mass Outreach', desc: 'Pick by follower count alone', detail: 'Send the same templated DM to hundreds of accounts.' },
      { num: '03', keyword: 'Wait for Reply', desc: 'Avg. ~8% response', detail: 'Most are ignored or marked as spam.' },
      { num: '04', keyword: 'No Result', desc: 'No report · Opaque ROI', detail: "When the campaign ends, you don't know what worked." },
    ],
    rsnc: [
      { num: '01', keyword: 'In-person Briefing', desc: 'Brand · product · target market', detail: 'A meeting to fully understand the brand persona.' },
      { num: '02', keyword: 'Precision Seeding', desc: 'ER% · authenticity · content quality', detail: 'Extract the perfect-fit creators from a 49,383+ DB.' },
      { num: '03', keyword: 'Personalized DM & Email', desc: 'Tailored outreach per creator', detail: 'No copy-paste — each message is written individually.' },
      { num: '04', keyword: 'Reporting', desc: 'Response · reach · conversion shared', detail: 'Every number is transparently shared after the campaign.' },
    ],
  },
  ja: {
    legacy: [
      { num: '01', keyword: 'シーディング', desc: 'AIまたは現地下請け業者を活用', detail: '検証されていない無作為DBをそのまま提供。' },
      { num: '02', keyword: '無差別送信', desc: 'フォロワー数だけで選定', detail: 'コピペテンプレで数百人に同じDM。' },
      { num: '03', keyword: '応答待ち', desc: '平均応答率〜8%', detail: 'ほとんどが無視またはスパム扱い。' },
      { num: '04', keyword: '結果なし', desc: 'レポートなし · ROI不透明', detail: 'キャンペーン後に何が効いたか分からない。' },
    ],
    rsnc: [
      { num: '01', keyword: '対面ブリーフィング', desc: 'ブランド・商品・ターゲット市場の把握', detail: 'ミーティングを通じてブランドペルソナを完全に理解。' },
      { num: '02', keyword: '精密シーディング', desc: 'ER% · 真正性 · コンテンツ品質を横断分析', detail: '49,383件のDBからブランドに最適な人だけ抽出。' },
      { num: '03', keyword: '個別DM・メール', desc: 'ブランド別アプローチ', detail: 'コピペなし、一人ずつ個別に作成。' },
      { num: '04', keyword: 'レポート', desc: '応答 · リーチ · CV を共有', detail: 'キャンペーン終了後、全数値を透明に公開。' },
    ],
  },
} as const

export default function WhyResonanceSection() {
  const { t, lang } = useLang()
  const legacySteps = STEPS_BY_LANG[lang].legacy
  const rsnSteps = STEPS_BY_LANG[lang].rsnc
  const ref = useRef<HTMLElement>(null)

  // 좌우 교차 강조
  const [focus, setFocus] = useState<'left' | 'right'>('left')
  const [hovering, setHovering] = useState<'left' | 'right' | null>(null)
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    cycleRef.current = setInterval(() => {
      if (!hovering) setFocus(f => f === 'left' ? 'right' : 'left')
    }, 2200)
    return () => { if (cycleRef.current) clearInterval(cycleRef.current) }
  }, [hovering])

  const active = hovering ?? focus

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
    <section ref={ref} data-section className="bg-transparent" id="why" style={{ position: 'relative' }}>

      {/* 슬로건 헤더 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-48 pb-32 max-w-7xl mx-auto w-full">
        <div className="reveal" data-reveal>
          <span className="section-tag mb-10">{t('why_tag')}</span>
        </div>
        <span className="headline-wrap mb-10">
          <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 5.5rem)' }}>
            {t('why_headline_1')}<br />
            <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>{t('why_headline_2')}</span>{' '}
            <span className="text-rsncNavy">{t('why_headline_3')}</span>
          </h2>
        </span>
        <p className="text-rsncNavy/65 text-lg md:text-xl font-medium max-w-xl reveal" data-reveal style={{ transitionDelay: '120ms' }}>
          {t('why_sub_1')}<br />
          {t('why_sub_2')}
        </p>
      </div>

      {/* ── 대조 프로세스 비교 ── */}
      <div className="border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">

          {/* 섹션 레이블 */}
          <p className="text-rsncNavy/65 text-xs tracking-[0.35em] uppercase mb-16 reveal" data-reveal>{t('why_compare_label')}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── 왼쪽: Legacy ── */}
            <div
              className="reveal"
              data-reveal
              onMouseEnter={() => setHovering('left')}
              onMouseLeave={() => setHovering(null)}
              style={{
                opacity: active === 'left' ? 1 : 0.35,
                transform: active === 'left' ? 'scale(1.015)' : 'scale(0.98)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* 헤더 */}
              <div className="mb-8">
                <h3 className="font-display font-black tracking-tighter text-rsncNavy/60"
                  style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.6rem)', lineHeight: 1 }}>
                  {t('why_legacy_tag')}
                </h3>
              </div>

              {/* 스텝 카드들 */}
              <div className="flex flex-col gap-0">
                {legacySteps.map((step, i) => (
                  <div key={step.num}>
                    <div className="rounded-2xl p-5 bg-white"
                      style={{ border: '1.5px solid rgba(13,27,42,0.10)', boxShadow: '0 2px 12px rgba(13,27,42,0.05)' }}>
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-rsncNavy"
                          style={{ background: 'rgba(13,27,42,0.07)', letterSpacing: '-0.02em' }}>
                          {step.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-black tracking-tighter leading-none mb-1.5 text-rsncNavy"
                            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
                            {step.keyword}
                          </p>
                          <p className="text-rsncNavy/60 text-xs font-medium mb-1">{step.desc}</p>
                          <p className="text-rsncNavy/50 text-xs leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                    {i < legacySteps.length - 1 && (
                      <div className="flex flex-col items-center py-1" style={{ marginLeft: '28px' }}>
                        <div style={{ width: '1.5px', height: '20px', background: 'rgba(13,27,42,0.12)' }} />
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M6 8L0.803848 0.5H11.1962L6 8Z" fill="rgba(13,27,42,0.18)" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {/* 결과 뱃지 */}
                <div className="mt-3 rounded-2xl px-6 py-4 flex items-center gap-4"
                  style={{ background: 'rgba(239,68,68,0.04)', border: '1.5px solid rgba(239,68,68,0.15)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(239,68,68,0.1)' }}>
                    <span className="text-red-400 text-sm">⚠</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'rgba(13,27,42,0.35)' }}>{t('why_legacy_result_main')}</p>
                    <p className="text-xs" style={{ color: 'rgba(13,27,42,0.2)' }}>{t('why_legacy_result_sub')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 오른쪽: RSNC ── */}
            <div
              className="relative reveal"
              data-reveal
              onMouseEnter={() => setHovering('right')}
              onMouseLeave={() => setHovering(null)}
              style={{
                transitionDelay: '150ms',
                opacity: active === 'right' ? 1 : 0.35,
                transform: active === 'right' ? 'scale(1.015)' : 'scale(0.98)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >

              {/* 뒤쪽 그린 글로우 */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(209,255,0,0.13) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.1)',
              }} />

              {/* 헤더 */}
              <div className="relative z-10 mb-8">
                <h3 className="font-display font-black tracking-tighter text-rsncNavy"
                  style={{ fontSize: 'clamp(1.8rem, 3.2vw, 3.6rem)', lineHeight: 1 }}>
                  {t('why_rsnc_tag')}
                </h3>
              </div>

              {/* 스텝 카드들 */}
              <div className="relative z-10 flex flex-col gap-0">
                {rsnSteps.map((step, i) => (
                  <div key={step.num}>
                    {/* 카드 */}
                    <div
                      className="rounded-2xl p-5 bg-white"
                      style={{
                        border: '1.5px solid rgba(209,255,0,0.55)',
                        boxShadow: '0 4px 32px rgba(209,255,0,0.12), 0 1px 8px rgba(13,27,42,0.06)',
                      }}
                    >
                      <div className="flex items-start gap-5">
                        {/* 번호 뱃지 */}
                        <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-rsncNavy"
                          style={{ background: '#D1FF00', letterSpacing: '-0.02em' }}>
                          {step.num}
                        </div>
                        <div className="flex-1 min-w-0">
                          {/* 핵심 키워드 */}
                          <p className="font-display font-black tracking-tighter text-rsncNavy leading-none mb-1.5"
                            style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)' }}>
                            {step.keyword}
                          </p>
                          <p className="text-rsncNavy/55 text-xs font-medium mb-1">{step.desc}</p>
                          <p className="text-rsncNavy/50 text-xs leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    </div>

                    {/* 연결 화살표 (마지막 제외) */}
                    {i < rsnSteps.length - 1 && (
                      <div className="flex flex-col items-center py-1" style={{ marginLeft: '28px' }}>
                        <div style={{
                          width: '1.5px',
                          height: '20px',
                          background: 'linear-gradient(to bottom, rgba(209,255,0,0.8), rgba(209,255,0,0.3))',
                        }} />
                        {/* 화살표 머리 */}
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M6 8L0.803848 0.5H11.1962L6 8Z" fill="#D1FF00" fillOpacity="0.7" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {/* 결과 뱃지 */}
                <div className="mt-3 rounded-2xl px-6 py-4 flex items-center gap-4"
                  style={{ background: 'rgba(209,255,0,0.10)', border: '1.5px solid rgba(209,255,0,0.35)' }}>
                  <div className="w-8 h-8 rounded-full bg-rsncGreen flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <p className="text-rsncNavy font-bold text-sm">{t('why_rsnc_result_main')}</p>
                    <p className="text-rsncNavy/65 text-xs">{t('why_rsnc_result_sub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 지표 비교 바 */}
          <div className="mt-16 grid grid-cols-3 gap-4 reveal" data-reveal style={{ transitionDelay: '200ms' }}>
            {[
              { label: t('why_kpi_response'), legacy: 8, rsnc: 34, unit: '%' },
              { label: t('why_kpi_db'), legacy: 0, rsnc: 49383, unit: '+' },
              { label: t('why_kpi_report'), legacy: 0, rsnc: 100, unit: '%' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-2xl p-6">
                <p className="text-rsncNavy/55 text-xs tracking-wide mb-5">{item.label}</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-rsncNavy/65 text-[10px]">{t('why_kpi_legacy')}</span>
                      <span className="text-rsncNavy/65 text-[10px]">{item.legacy === 0 ? t('why_kpi_none') : `${item.legacy}${item.unit}`}</span>
                    </div>
                    <div className="h-1 bg-rsncNavy/6 rounded-full overflow-hidden">
                      <div className="h-full bg-rsncNavy/15 rounded-full" style={{ width: `${(item.legacy / (item.rsnc || 100)) * 100}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-rsncNavy/60 text-[10px] font-semibold">RSNC</span>
                      <span className="text-rsncNavy font-bold text-[10px]">{item.rsnc === 49383 ? '49,383+' : `${item.rsnc}${item.unit}`}</span>
                    </div>
                    <div className="h-1.5 bg-rsncNavy/6 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: '100%', background: '#D1FF00', boxShadow: '0 0 8px rgba(209,255,0,0.5)' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 팀 레조넌스 메시지 */}
      <div className="border-t border-rsncNavy/6 px-6 md:px-16 lg:px-24 py-28">
        <div className="max-w-7xl mx-auto glass-card rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 reveal" data-reveal>
          <div>
            <p className="text-rsncNavy/55 font-light leading-relaxed mb-4" style={{ fontSize: 'clamp(0.85rem, 1.2vw, 1rem)', maxWidth: '520px' }}>
              {t('why_outro_1')}<br />
              {t('why_outro_2')}
            </p>
            <p className="font-bold text-rsncNavy leading-snug" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)', maxWidth: '520px' }}>
              {t('why_outro_3a')}<br />
              <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.3)' }}>{t('why_outro_3b')}</span><br />
              {t('why_outro_3c')}
            </p>
          </div>
          <a href="/레조넌스컴퍼니_회사소개서.html" target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            {t('why_cta_story')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
