'use client'

import { motion } from 'framer-motion'

export default function FreeTrialSection() {
  return (
    <section className="section-container bg-black" id="free-trial">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-6">무료 체험</p>
          <h2 className="heading-lg mb-6">
            일단 한 번<br />
            <span className="text-neon-green">써보세요.</span>
          </h2>
          <p className="text-gray-400 text-xl font-light mb-4 max-w-2xl mx-auto leading-relaxed">
            브랜드·제품·타겟만 알려주시면<br />
            맞춤 인플루언서 샘플 리스트를 <strong className="text-white">무료</strong>로 드립니다.
          </p>
          <p className="text-gray-600 text-sm mb-12">
            결제 없음 · 계약 없음 · 24시간 내 회신
          </p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="mailto:contact@rsnc.co.kr?subject=무료 인플루언서 샘플 리스트 요청&body=브랜드명:%0D%0A제품:%0D%0A타겟 시장:%0D%0A카테고리:"
              className="btn-primary text-center text-lg px-12 py-4"
            >
              무료로 샘플 받기 →
            </a>
            <a
              href="mailto:contact@rsnc.co.kr?subject=상담 문의"
              className="btn-secondary text-center text-lg px-12 py-4"
            >
              상담 문의
            </a>
          </motion.div>

          {/* 보증 */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            {['24시간 내 회신', '맞춤 샘플 리스트 제공', '계약 강요 없음'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="text-neon-green">✓</span> {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 하단 네온 라인 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-20 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"
        />
      </div>
    </section>
  )
}
