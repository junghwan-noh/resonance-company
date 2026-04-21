'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    tag: '첫 캠페인',
    price: '150만원~',
    desc: '처음 시작하는 브랜드를 위한 시딩 패키지',
    features: [
      'B~A 티어 인플루언서 10명',
      'US or AU 단일 시장',
      '개인화 시딩 메시지',
      '응답률 리포트',
    ],
    cta: '무료 상담 신청',
    highlight: false,
  },
  {
    name: 'Growth',
    tag: '추천',
    price: '350만원~',
    desc: '성과를 검증하고 확장하려는 브랜드에 최적',
    features: [
      'A~S 티어 인플루언서 30명',
      'US + AU 멀티 시장',
      '카테고리 타겟팅 + 필터링',
      '개인화 시딩 메시지',
      '전환 추적 + 성과 리포트',
    ],
    cta: '무료로 시작하기',
    highlight: true,
  },
  {
    name: 'Scale',
    tag: '풀 서비스',
    price: '커스텀',
    desc: '대규모 글로벌 캠페인 전체 대행',
    features: [
      '인플루언서 100명+',
      'US·AU·JP 멀티 마켓',
      '전략 기획부터 실행까지',
      '전담 매니저 배정',
      '월별 성과 대시보드',
    ],
    cta: '별도 문의',
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="section-container bg-black" id="pricing">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-4">Pricing</p>
          <h2 className="heading-lg mb-4">투명한 가격</h2>
          <p className="text-gray-400 text-lg font-light">
            숨겨진 비용 없음. 첫 상담은 무료입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-neon-green bg-neon-green/5'
                  : 'border-gray-800 hover:border-gray-600'
              } transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-green text-black text-xs font-bold px-4 py-1 tracking-wider">
                  {plan.tag}
                </div>
              )}
              {!plan.highlight && (
                <p className="text-xs text-gray-600 tracking-wider uppercase mb-2">{plan.tag}</p>
              )}

              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-3xl font-bold text-neon-green mb-2">{plan.price}</p>
              <p className="text-sm text-gray-500 mb-6 pb-6 border-b border-gray-800">{plan.desc}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-neon-green mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm font-bold tracking-wider transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-neon-green text-black hover:bg-white'
                    : 'border border-gray-700 text-white hover:border-neon-green hover:text-neon-green'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          * 인플루언서 수·티어·시장에 따라 조정 가능 · VAT 별도
        </motion.p>
      </div>
    </section>
  )
}
