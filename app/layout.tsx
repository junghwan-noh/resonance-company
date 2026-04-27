import type { Metadata } from 'next'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'

export const metadata: Metadata = {
  title: 'team resonance - Influencer Seeding Agency',
  description: 'Selection over Noise. Focus creates results.',
  keywords: ['influencer marketing', 'seeding', 'resonance', 'RSNC', 'TikTok'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">
        <RevealObserver />
        {children}
      </body>
    </html>
  )
}
