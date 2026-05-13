import type { Metadata } from 'next'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'

export const metadata: Metadata = {
  title: 'Team Resonance',
  description: 'Most Brands Spray. We Target.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="bg-black font-sans antialiased">
        <RevealObserver />
        {children}
      </body>
    </html>
  )
}
