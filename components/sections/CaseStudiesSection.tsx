'use client'

import { motion } from 'framer-motion'

const cases = [
  {
    brand: '뷰티 브랜드 A',
    market: '🇺🇸 US',
    category: 'Beauty',
    influencers: 28,
    reach: '4.2M',
    responseRate: '34%',
    result: '제품 출시 2주 만에 아마존 카테고리 Best Seller 진입',
    tier: 'A',
  },
  {
    brand: '식품 브랜드 B',
    market: '🇦🇺 AU',
    category: 'F&B',
    influencers: 15,
    reach: '1.8M',
    responseRate: '41%',
    result: '인스타그램 바이럴로 현지 마트 입점 계기 마련',
    tier: 'B',
  },
  {
    brand: '피트니스 브랜드 C',
    market: '🇺🇸 US',
    category: 'Fitness',
    influencers: 42,
    reach: '9.1M',
    responseRate: '29%',
    result: '시딩 캠페인 후 월 매출 3배 성장, 재계약 진행 중',
    tier: 'S',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="section-container bg-black" id="cases">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-4">Case Studies</p>
          <h2 className="heading-lg mb-4">실제 결과입니다.</h2>
          <p className="text-gray-400 text-lg font-light">
            감이 아닌 숫자로 말합니다.
          </p>
        </motion.div>

        <div className="space-y-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.brand}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="border border-gray-800 p-8 hover:border-neon-green transition-all duration-400 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* 브랜드 정보 */}
                <div className="md:w-48 shrink-0">
                  <p className="text-xs text-gray-600 mb-1">{c.market} · {c.category}</p>
                  <h3 className="font-bold text-lg group-hover:text-neon-green transition-colors">
                    {c.brand}
                  </h3>
                </div>

                {/* 수치 */}
                <div className="flex gap-8 flex-1">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">인플루언서</p>
                    <p className="text-xl font-bold">{c.influencers}명</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">총 도달</p>
                    <p className="text-xl font-bold text-neon-green">{c.reach}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">응답률</p>
                    <p className="text-xl font-bold">{c.responseRate}</p>
                  </div>
                </div>

                {/* 결과 */}
                <div className="flex-1 md:border-l border-gray-800 md:pl-8">
                  <p className="text-xs text-gray-600 mb-2">결과</p>
                  <p className="text-sm text-gray-300 leading-relaxed">"{c.result}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
