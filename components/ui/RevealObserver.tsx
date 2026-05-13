'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section'))

    // 첫 번째 섹션(Hero) + data-skip-reveal 섹션은 즉시 보임
    const targets = sections.slice(1).filter((s) => !s.hasAttribute('data-skip-reveal'))
    targets.forEach((s) => s.classList.add('reveal-init'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )

    targets.forEach((s) => observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return null
}
