import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'team resonance - Influencer Seeding Agency',
  description: 'Selection over Noise. Focus creates results.',
  keywords: ['influencer marketing', 'seeding', 'resonance', 'RSNC', 'TikTok'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-black text-white`}
        style={{ fontFamily: "'Pretendard', 'Space Grotesk', system-ui, sans-serif" }}
      >
        <RevealObserver />
        {children}
      </body>
    </html>
  )
}
