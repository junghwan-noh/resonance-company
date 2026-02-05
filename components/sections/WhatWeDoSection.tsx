'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  {
    id: 1,
    title: 'Influencer Content Strategy',
    subtitle: '주객전도 없는 콘텐츠 설계',
    description: 'Strategy before execution',
    details: '브랜드와 제품을 정확히 이해하고, 소비자 언어로 번역하는 콘텐츠 전략을 수립합니다.',
  },
  {
    id: 2,
    title: 'Influencer Campaign Execution',
    subtitle: '실행 중심, 결과 중심',
    description: 'Outcome-driven campaigns',
    details: '정교한 인플루언서 선정과 시딩을 통해 실질적인 비즈니스 성과를 창출합니다.',
  },
  {
    id: 3,
    title: 'Performance Tracking',
    subtitle: '감이 아닌 데이터',
    description: 'Data over intuition',
    details: '모든 캠페인의 성과를 정량적으로 측정하고 최적화합니다.',
  },
  {
    id: 4,
    title: 'Platform Expansion',
    subtitle: 'Local → Global → Scalable',
    description: 'Local to Global scaling',
    details: '검증된 전략을 글로벌 시장으로 확장하여 지속 가능한 성장을 만듭니다.',
  },
]

export default function WhatWeDoSection() {
  return (
    <section className="section-container bg-black relative" id="what-we-do">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed max-w-4xl mx-auto font-light">
            We don&apos;t amplify everything.
            <br />
            <span className="text-neon-green font-normal">
              We align one message to the right frequency.
            </span>
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
