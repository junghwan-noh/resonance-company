'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/lib/i18n'

const STATS_BY_LANG = {
  ko: [
    { value: 120, suffix: '+', label: '누적 시딩 캠페인', sub: '카테고리별 성과 데이터 보유' },
    { value: 34, suffix: '%', label: '평균 인플루언서 응답률', sub: '업계 평균(~8%)의 4배' },
    { value: 380, suffix: '%', label: '평균 조회수 상승률', sub: '시딩 전 대비 실측 기준' },
    { value: 30, suffix: '만+@', label: '검증된 인플루언서 DB', sub: '자체 수집·분류 엔진 보유' },
  ],
  en: [
    { value: 120, suffix: '+', label: 'Seeding Campaigns Run', sub: 'Performance data per category' },
    { value: 34, suffix: '%', label: 'Avg. Influencer Response', sub: '4× industry avg. (~8%)' },
    { value: 380, suffix: '%', label: 'Avg. View Lift', sub: 'Measured vs pre-seeding' },
    { value: 300000, suffix: '+@', label: 'Verified Influencers in DB', sub: 'Built with our own engine' },
  ],
  ja: [
    { value: 120, suffix: '+', label: '累計シーディング', sub: 'カテゴリ別の成果データ' },
    { value: 34, suffix: '%', label: '平均応答率', sub: '業界平均(〜8%)の4倍' },
    { value: 380, suffix: '%', label: '平均再生数の伸び', sub: 'シーディング前比' },
    { value: 30, suffix: '万+@', label: '検証済みインフルエンサーDB', sub: '自社収集エンジン保有' },
  ],
} as const

const BRANDS_BY_LANG = {
  ko: ['뷰티 브랜드 A', 'F&B 브랜드 B', '피트니스 브랜드 C', '라이프스타일 브랜드 D', '테크 브랜드 E', '패션 브랜드 F'],
  en: ['Beauty Brand A', 'F&B Brand B', 'Fitness Brand C', 'Lifestyle Brand D', 'Tech Brand E', 'Fashion Brand F'],
  ja: ['ビューティーA', 'F&B B', 'フィットネスC', 'ライフスタイルD', 'テックE', 'ファッションF'],
} as const

function useCounter(value: number, triggered: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const duration = 2000
    const startTime = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(value * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, value])
  return count
}

function HeroStat({ value, suffix, label, sub, triggered }: {
  value: number; suffix: string; label: string; sub: string; triggered: boolean
}) {
  const count = useCounter(value, triggered)
  return (
    <div className="glass-card-dark rounded-3xl p-10 md:p-12 reveal stagger-1 relative overflow-hidden" data-reveal>
      {/* 그린 광원 코어 */}
      <div className="absolute -top-20 -right-20 w-72 h-72 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(209,255,0,0.35) 0%, transparent 65%)',
        filter: 'blur(8px)',
      }} />
      <div className="relative z-10 flex flex-col h-full">
        <span className="text-[10px] tracking-[0.4em] uppercase text-rsncGreen font-bold mb-6">Headline KPI</span>
        <p className="font-display font-black leading-none mb-6 tracking-tighter text-white" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}>
          {count.toLocaleString()}<span className="text-rsncGreen">{suffix}</span>
        </p>
        <div className="mt-auto">
          <p className="text-white font-bold text-base md:text-lg mb-2 tracking-tight">{label}</p>
          <p className="text-white/55 text-sm">{sub}</p>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ value, suffix, label, sub, triggered, stagger }: {
  value: number; suffix: string; label: string; sub: string; triggered: boolean; stagger: number
}) {
  const count = useCounter(value, triggered)
  return (
    <div className={`glass-card rounded-2xl p-7 reveal stagger-${stagger} flex flex-col`} data-reveal>
      <div className="flex items-baseline gap-1 mb-4">
        <p className="font-display font-black leading-none tracking-tighter text-rsncNavy" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
          {count.toLocaleString()}
        </p>
        <span className="font-display font-black text-rsncGreen text-3xl md:text-4xl leading-none" style={{ WebkitTextStroke: '0.5px rgba(13,27,42,0.25)' }}>{suffix}</span>
      </div>
      <div className="h-px w-10 bg-rsncGreen mb-4" />
      <p className="text-rsncNavy font-semibold text-sm mb-1 tracking-tight">{label}</p>
      <p className="text-rsncNavy/55 text-xs leading-relaxed">{sub}</p>
    </div>
  )
}

export default function StatsSection() {
  const { t, lang } = useLang()
  const stats = STATS_BY_LANG[lang]
  const brands = BRANDS_BY_LANG[lang]
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setTriggered(true)
          e.target.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('visible'))
        }
      }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} data-section className="bg-transparent" id="stats">

      {/* 그린 광원 레이어 */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(209,255,0,0.09) 0%, transparent 70%)',
      }} />

      {/* 상단: 좌우 분할 */}
      <div className="relative z-10 flex flex-col lg:flex-row" style={{ minHeight: '60vh' }}>
        <div className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-32 border-b lg:border-b-0 lg:border-r border-rsncNavy/8">
          <div className="reveal" data-reveal>
            <span className="section-tag mb-8">{t('stats_tag')}</span>
          </div>
          <span className="headline-wrap mb-6">
            <h2 data-reveal className="headline-reveal font-display font-black leading-none tracking-tighter text-rsncNavy"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 3.5rem)' }}>
              {t('stats_headline_1')}<br />
              <span className="text-rsncGreen">{t('stats_headline_2')}</span>{t('stats_headline_3')}
            </h2>
          </span>
          <p className="text-rsncNavy/55 text-base font-light max-w-sm reveal" data-reveal style={{ transitionDelay: '120ms' }}>
            {t('stats_sub_1')}<br /><br />
            <strong className="text-rsncNavy font-semibold">{t('stats_sub_2')}</strong>
          </p>
        </div>

        {/* 우: 떠다니는 SNS 앱 아이콘 */}
        <div className="lg:w-[45%] relative overflow-hidden rounded-none" style={{ minHeight: '400px' }}>
          {/* 그린 광원 코어 */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(209,255,0,0.16) 0%, transparent 65%)',
          }} />

          <style>{`
            @keyframes sns-float-a {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33%      { transform: translate(28px, -42px) rotate(8deg); }
              66%      { transform: translate(-20px, -22px) rotate(-6deg); }
            }
            @keyframes sns-float-b {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              33%      { transform: translate(-32px, 30px) rotate(-10deg); }
              66%      { transform: translate(24px, -18px) rotate(6deg); }
            }
            @keyframes sns-float-c {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              50%      { transform: translate(18px, 38px) rotate(-12deg); }
            }
            @keyframes sns-float-d {
              0%, 100% { transform: translate(0, 0) rotate(0deg); }
              25%      { transform: translate(-28px, -28px) rotate(10deg); }
              75%      { transform: translate(36px, 14px) rotate(-8deg); }
            }
            @keyframes sns-pulse {
              0%, 100% { opacity: 0.85; }
              50%      { opacity: 1; }
            }
            .sns-icon {
              position: absolute;
              border-radius: 22%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 12px 32px -8px rgba(13,27,42,0.25), 0 1px 0 rgba(255,255,255,0.4) inset;
              animation: sns-pulse 5s ease-in-out infinite;
              will-change: transform;
            }
          `}</style>

          {/* TikTok */}
          <div className="sns-icon" style={{
            top: '14%', left: '18%', width: '64px', height: '64px',
            background: '#000000',
            animation: 'sns-float-a 11s ease-in-out infinite, sns-pulse 5s ease-in-out infinite',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.34 6.34 0 0 0-.85-.06A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.31a8.16 8.16 0 0 0 4.77 1.52V6.41a4.85 4.85 0 0 1-1.84-.62z" fill="#25F4EE"/>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .58.05.85.13V9.4a6.34 6.34 0 0 0-.85-.06A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.31a8.16 8.16 0 0 0 4.77 1.52V6.41a4.85 4.85 0 0 1-1.84-.62z" fill="#FE2C55" transform="translate(2 2)"/>
              <path d="M16.66 8.31V6.41a4.83 4.83 0 0 1-2.84-3.97V2h-1.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.3 0 .58.05.85.13V9.4a6.34 6.34 0 0 0-.85-.06A6.33 6.33 0 1 0 15.81 15.67V8.31a8.16 8.16 0 0 0 .85.07z" fill="#fff"/>
            </svg>
          </div>

          {/* Instagram */}
          <div className="sns-icon" style={{
            top: '8%', right: '14%', width: '72px', height: '72px',
            background: 'linear-gradient(135deg, #FED576 0%, #F47133 25%, #BC3081 50%, #4C63D2 100%)',
            animation: 'sns-float-b 13s ease-in-out infinite, sns-pulse 4.5s ease-in-out infinite',
            animationDelay: '0.6s',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
            </svg>
          </div>

          {/* 샤오홍슈 (RED) */}
          <div className="sns-icon" style={{
            bottom: '18%', left: '22%', width: '58px', height: '58px',
            background: '#FF2442',
            animation: 'sns-float-c 12s ease-in-out infinite, sns-pulse 5.2s ease-in-out infinite',
            animationDelay: '1.1s',
          }}>
            <span style={{ color: '#fff', fontWeight: 900, fontFamily: 'Pretendard, sans-serif', fontSize: '20px', letterSpacing: '-0.04em', lineHeight: 1 }}>
              红
            </span>
          </div>

          {/* TikTok (작은 사이즈) */}
          <div className="sns-icon" style={{
            bottom: '12%', right: '24%', width: '48px', height: '48px',
            background: '#000000',
            animation: 'sns-float-d 10s ease-in-out infinite, sns-pulse 4s ease-in-out infinite',
            animationDelay: '1.8s',
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
              <path d="M16.66 8.31V6.41a4.83 4.83 0 0 1-2.84-3.97V2h-1.45v13.67a2.89 2.89 0 1 1-2.89-2.89c.3 0 .58.05.85.13V9.4a6.34 6.34 0 0 0-.85-.06A6.33 6.33 0 1 0 15.81 15.67V8.31a8.16 8.16 0 0 0 .85.07z"/>
            </svg>
          </div>

          {/* Instagram (작은 사이즈) */}
          <div className="sns-icon" style={{
            top: '46%', right: '8%', width: '52px', height: '52px',
            background: 'linear-gradient(135deg, #FED576 0%, #F47133 30%, #BC3081 60%, #4C63D2 100%)',
            animation: 'sns-float-a 14s ease-in-out infinite, sns-pulse 4.6s ease-in-out infinite',
            animationDelay: '2.4s',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>

          {/* 샤오홍슈 작은 */}
          <div className="sns-icon" style={{
            top: '56%', left: '12%', width: '44px', height: '44px',
            background: '#FF2442',
            animation: 'sns-float-b 9.5s ease-in-out infinite, sns-pulse 5s ease-in-out infinite',
            animationDelay: '0.3s',
          }}>
            <span style={{ color: '#fff', fontWeight: 900, fontFamily: 'Pretendard, sans-serif', fontSize: '16px', letterSpacing: '-0.04em', lineHeight: 1 }}>
              红
            </span>
          </div>

          {/* 가장자리 페이드 (배경과 자연스럽게 섞이게) */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #F4F9EE 0%, transparent 18%, transparent 82%, #F4F9EE 100%)' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #F4F9EE 0%, transparent 14%, transparent 86%, #F4F9EE 100%)' }} />
        </div>
      </div>

      {/* 수치 — 매거진 비대칭 레이아웃 */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-24 border-t border-rsncNavy/8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 좌: Hero stat (5칸) */}
          <div className="lg:col-span-5">
            <HeroStat {...stats[0]} triggered={triggered} />
          </div>
          {/* 우: 3개 mini stat (7칸 안에서 2x2 - 마지막은 wide) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <MiniStat {...stats[1]} triggered={triggered} stagger={2} />
            <MiniStat {...stats[2]} triggered={triggered} stagger={3} />
            <div className="sm:col-span-2">
              <MiniStat {...stats[3]} triggered={triggered} stagger={4} />
            </div>
          </div>
        </div>
      </div>

      {/* 협업 브랜드 */}
      <div className="relative z-10 border-t border-rsncNavy/8 py-14 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24 mb-8">
          <p className="text-rsncNavy/55 text-xs tracking-[0.35em] uppercase reveal" data-reveal>{t('stats_brands_label')}</p>
        </div>
        <style>{`
          @keyframes brand-scroll {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(-50%, 0, 0); }
          }
          .brand-track {
            animation: brand-scroll 18s linear infinite;
            will-change: transform;
          }
          .brand-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="brand-track flex gap-3 w-max">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-rsncNavy/60 text-sm border border-rsncNavy/10 bg-white/60 backdrop-blur-sm px-6 py-3 whitespace-nowrap hover:border-rsncGreen hover:text-rsncNavy transition-all duration-300 shrink-0 rounded-full">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
