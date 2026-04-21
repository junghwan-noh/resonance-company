'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const observe = () => {
      document.querySelectorAll('.reveal, .reveal-left').forEach((el) => {
        observer.observe(el)
      })
    }

    observe()
    // Re-observe after short delay to catch dynamically rendered elements
    const t = setTimeout(observe, 500)

    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [])

  return null
}
