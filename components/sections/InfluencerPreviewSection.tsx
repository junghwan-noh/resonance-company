'use client'

import { motion } from 'framer-motion'

const influencers = [
  { handle: '@beautywithjess', category: 'Beauty', followers: '284K', er: '4.2%', region: '🇺🇸 US', tier: 'A' },
  { handle: '@fitlifemike', category: 'Fitness', followers: '512K', er: '3.8%', region: '🇺🇸 US', tier: 'A' },
  { handle: '@foodie.au', category: 'F&B', followers: '98K', er: '6.1%', region: '🇦🇺 AU', tier: 'B' },
  { handle: '@stylequeen_la', category: 'Fashion', followers: '1.2M', er: '2.9%', region: '🇺🇸 US', tier: 'S' },
  { handle: '@wellnessvibes', category: 'Lifestyle', followers: '176K', er: '5.3%', region: '🇦🇺 AU', tier: 'A' },
  { handle: '@skincareglow', category: 'Beauty', followers: '340K', er: '4.7%', region: '🇺🇸 US', tier: 'A' },
]

const tierColor: Record<string, string> = {
  S: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  A: 'text-neon-green border-neon-green/30 bg-neon-green/5',
  B: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
}

export default function InfluencerPreviewSection() {
  return (
    <section className="section-container bg-black" id="influencers">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-center"
        >
          <p className="text-sm tracking-widest text-neon-green uppercase mb-4">Influencer Preview</p>
          <h2 className="heading-lg mb-4">49,000+개 중 일부입니다.</h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            US·AU 타겟, ER% 1% 이상, 허수 팔로워 필터링 완료된 DB에서 추출했습니다.
          </p>
        </motion.div>

        {/* 필터 태그 */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {['전체', 'Beauty', 'Fitness', 'F&B', 'Fashion', 'Lifestyle'].map((tag) => (
            <span
              key={tag}
              className={`px-4 py-1.5 text-xs border tracking-wide ${
                tag === '전체'
                  ? 'border-neon-green text-neon-green bg-neon-green/10'
                  : 'border-gray-800 text-gray-500'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {influencers.map((inf, i) => (
            <motion.div
              key={inf.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-gray-800 p-6 hover:border-neon-green transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                {/* 아바타 */}
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-lg">
                  {inf.category === 'Beauty' ? '💄' :
                   inf.category === 'Fitness' ? '💪' :
                   inf.category === 'F&B' ? '🍽️' :
                   inf.category === 'Fashion' ? '👗' : '✨'}
                </div>
                <span className={`text-xs font-bold px-2 py-1 border ${tierColor[inf.tier]}`}>
                  {inf.tier} TIER
                </span>
              </div>

              <h3 className="font-bold text-sm mb-1 group-hover:text-neon-green transition-colors">
                {inf.handle}
              </h3>
              <p className="text-xs text-gray-500 mb-4">{inf.category} · {inf.region}</p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">팔로워</p>
                  <p className="text-sm font-bold">{inf.followers}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">ER%</p>
                  <p className="text-sm font-bold text-neon-green">{inf.er}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-sm">
            실제 DB는 49,383개 · 요청 시 카테고리별 샘플 리스트 제공
          </p>
        </motion.div>
      </div>
    </section>
  )
}
