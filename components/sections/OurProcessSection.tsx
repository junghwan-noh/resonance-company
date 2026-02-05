'use client'

import { motion } from 'framer-motion'
import ProcessDiagram from '@/components/ui/ProcessDiagram'

const processSteps = [
  {
    number: '01',
    title: 'Brand & Product Alignment',
    description: '브랜드와 제품의 본질을 파악합니다',
  },
  {
    number: '02',
    title: 'Content Strategy Design',
    description: '소비자 언어로 번역된 콘텐츠 전략을 설계합니다',
  },
  {
    number: '03',
    title: 'Influencer Selection & Seeding',
    description: '최적의 인플루언서를 선정하고 시딩을 진행합니다',
  },
  {
    number: '04',
    title: 'Content Release & Monitoring',
    description: '콘텐츠를 출시하고 실시간으로 모니터링합니다',
  },
  {
    number: '05',
    title: 'Performance Analysis',
    description: '데이터 기반으로 성과를 분석합니다',
  },
  {
    number: '06',
    title: 'Optimization & Scaling',
    description: '최적화하고 확장 가능한 구조를 만듭니다',
  },
]

export default function OurProcessSection() {
  return (
    <section className="section-container bg-black" id="our-process">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="heading-lg mb-6">OUR PROCESS</h2>
          <div className="w-32 h-1 bg-neon-green mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            우리는 이 구조를 반복합니다
          </p>
        </motion.div>

        {/* Process Diagram */}
        <ProcessDiagram steps={processSteps} />

        {/* Process Steps List */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative border border-gray-800 p-8 hover:border-neon-green transition-all duration-500"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-neon-green/20 group-hover:text-neon-green/40 transition-colors mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-neon-green origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
