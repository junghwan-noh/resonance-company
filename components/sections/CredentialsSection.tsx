'use client'

import { motion } from 'framer-motion'

const stats = [
  { num: '49,383+', label: 'TikTok 인플루언서 DB' },
  { num: 'US · AU', label: '타겟 시장 특화' },
  { num: 'AI', label: '개인화 시딩 메시지' },
  { num: '24hr', label: '상담 회신 보장' },
]

const credentials = [
  '자체 개발 TikTok 수집 엔진 보유',
  'ER% · 팔로워 품질 · 지역 · 성별 데이터 필터링',
  'Claude AI 기반 개인화 시딩 메시지 자동 생성',
  'Beauty · F&B · Fitness · Lifestyle 버티컬 특화',
  'US / AU 시장 인플루언서 시딩 전문',
  'B2B 클라이언트 전담 매니저 배정',
]

export default function CredentialsSection() {
  return (
    <section className="section-container relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-4">Why Us</p>
          <h2 className="heading-lg mb-4">우리가 다른 이유</h2>
        </motion.div>

        {/* 수치 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-gray-800 p-6 text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-neon-green mb-2">{s.num}</p>
              <p className="text-xs text-gray-500 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 약력 리스트 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 border border-gray-800 px-5 py-4"
            >
              <span className="text-neon-green shrink-0 mt-0.5">✓</span>
              <span className="text-sm text-gray-300">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
