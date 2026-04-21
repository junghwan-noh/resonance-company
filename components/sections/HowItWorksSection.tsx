'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: '브랜드 브리핑',
    desc: '제품·타겟·예산을 알려주세요. 15분이면 충분합니다.',
    detail: '무료 상담 → 맞춤 전략 제안까지 24시간 내 회신',
  },
  {
    number: '02',
    title: '인플루언서 선정',
    desc: '49,000+ DB에서 ER%, 팔로워 품질, 지역·성별 기준으로 추려드립니다.',
    detail: '데이터 기반 선정 리스트 → 클라이언트 최종 승인',
  },
  {
    number: '03',
    title: '시딩 & 결과 리포트',
    desc: 'AI 개인화 메시지로 시딩 진행. 응답률·노출·전환까지 리포트로 드립니다.',
    detail: '캠페인 종료 후 성과 데이터 전달',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-container bg-black" id="how-it-works">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-4">How it works</p>
          <h2 className="heading-lg">딱 3단계입니다.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative border border-gray-800 p-10 group hover:border-neon-green transition-all duration-500"
            >
              {/* 연결선 */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-px w-px h-8 bg-neon-green/30 z-10" />
              )}

              <div className="text-5xl font-bold text-neon-green/15 group-hover:text-neon-green/30 transition-colors mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">{step.desc}</p>
              <p className="text-xs text-gray-600 border-t border-gray-800 pt-4">{step.detail}</p>

              <div className="absolute bottom-0 left-0 h-0.5 bg-neon-green w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
