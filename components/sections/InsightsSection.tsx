'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/lib/i18n'

const articles = [
  {
    tag: 'TREND',
    tagColor: '#D1FF00',
    tagText: '#0D1B2A',
    date: '2025. 11',
    title: 'TikTok Shop 시대, 시딩의 룰이 바뀌었다',
    desc: '팔로워 수보다 전환율. 이제 인플루언서 마케팅의 기준은 도달이 아닌 구매까지 이어지는 구조입니다.',
    readTime: '3 min read',
    accent: '#D1FF00',
  },
  {
    tag: 'INSIGHT',
    tagColor: '#0D1B2A',
    tagText: '#D1FF00',
    date: '2025. 10',
    title: '뷰티 브랜드가 US 시장에서 실패하는 3가지 이유',
    desc: '한국 브랜드의 US 진출 실패 사례를 분석했습니다. 대부분은 인플루언서 선정 기준이 없었습니다.',
    readTime: '5 min read',
    accent: '#0D1B2A',
  },
  {
    tag: 'CASE',
    tagColor: '#f0f0f0',
    tagText: '#0D1B2A',
    date: '2025. 09',
    title: '인플루언서 1명 vs 100명, 어느 쪽이 팔릴까?',
    desc: '대규모 시딩보다 소수 정예 매칭이 3배 높은 전환율을 기록한 실제 캠페인 데이터를 공개합니다.',
    readTime: '4 min read',
    accent: '#0D1B2A',
  },
  {
    tag: 'DATA',
    tagColor: '#D1FF00',
    tagText: '#0D1B2A',
    date: '2025. 08',
    title: 'ER 6% 인플루언서를 찾는 방법',
    desc: '팔로워 10만보다 팔로워 1만의 ER 6% 계정이 왜 더 강력한지, 데이터로 설명합니다.',
    readTime: '4 min read',
    accent: '#D1FF00',
  },
]

export default function InsightsSection() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)

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
    <section ref={ref} data-section className="bg-transparent border-t border-rsncNavy/6" id="insights">

      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-32 pb-8 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="reveal" data-reveal>
              <span className="section-tag mb-6">{t('insights_tag')}</span>
            </div>
            <span className="headline-wrap">
              <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 3.4rem)' }}>
                {t('insights_headline_1')}<br />
                {t('insights_headline_2_a')} <span className="text-rsncGreen" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>{t('insights_headline_2_b')}</span>{t('insights_headline_2_c')}<br />
                {t('insights_headline_3')}
              </h2>
            </span>
          </div>
          <p className="hidden md:block text-rsncNavy/45 text-sm font-light text-right max-w-xs reveal" data-reveal>
            {t('insights_caption_1')}<br />{t('insights_caption_2')}
          </p>
        </div>
      </div>

      {/* 카드 그리드 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((a, i) => (
            <div
              key={a.title}
              className={`reveal stagger-${i + 1}`}
              data-reveal
            >
              <div
                className={`group h-full flex flex-col rounded-2xl overflow-hidden cursor-pointer ${i === 0 ? 'glass-card-dark' : 'glass-card'}`}
                style={{
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                {/* 상단 색 바 */}
                <div style={{ height: '4px', background: a.tagColor }} />

                <div className="flex flex-col flex-1 p-7">
                  {/* 태그 + 날짜 */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] font-black tracking-[0.15em] px-2.5 py-1 rounded-full"
                      style={{ background: a.tagColor, color: a.tagText }}
                    >
                      {a.tag}
                    </span>
                    <span style={{ color: i === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(13,27,42,0.3)', fontSize: '11px' }}>
                      {a.date}
                    </span>
                  </div>

                  {/* 제목 */}
                  <h3
                    className="font-display font-black tracking-tighter leading-snug mb-3 flex-1"
                    style={{
                      fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                      color: i === 0 ? '#ffffff' : '#0D1B2A',
                    }}
                  >
                    {a.title}
                  </h3>

                  {/* 설명 */}
                  <p
                    className="text-xs leading-relaxed mb-6"
                    style={{ color: i === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(13,27,42,0.5)' }}
                  >
                    {a.desc}
                  </p>

                  {/* 하단 */}
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: i === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(13,27,42,0.3)' }}
                    >
                      {a.readTime}
                    </span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                      style={{ background: a.tagColor }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={a.tagText} strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
