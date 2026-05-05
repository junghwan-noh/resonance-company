import type { Metadata } from 'next'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Navbar from '@/components/ui/Navbar'

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
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
      </head>
      <body className="antialiased">
        <RevealObserver />
        <Navbar />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
