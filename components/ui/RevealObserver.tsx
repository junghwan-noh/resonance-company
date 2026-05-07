'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    // ── 요소 단위 reveal (data-reveal 속성 기준) ──
    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    // ── 섹션 단위 scale 등장 ──
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible')
        } else {
          const rect = entry.target.getBoundingClientRect()
          if (rect.top > 0) entry.target.classList.remove('section-visible')
        }
      })
    }, { threshold: 0.05 })

    const observe = () => {
      // data-reveal 속성 또는 .reveal/.headline-reveal 클래스를 가진 요소 감지
      document.querySelectorAll('[data-reveal], .reveal, .reveal-left, .headline-reveal').forEach((el) => {
        elementObserver.observe(el)
      })
      document.querySelectorAll('[data-section]').forEach((el) => {
        sectionObserver.observe(el)
      })
    }

    observe()
    const t = setTimeout(observe, 400)
    return () => {
      elementObserver.disconnect()
      sectionObserver.disconnect()
      clearTimeout(t)
    }
  }, [])

  return null
}
