import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'
import { LanguageProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'team resonance - Influencer Seeding Agency',
  description: '북미 TikTok Shop 크리에이터 시딩 전문. 크리에이터 선별부터 팔리는 구조까지 원스톱으로.',
  keywords: 'influencer marketing, seeding, TikTok Shop, 북미, 시딩, resonance',
  metadataBase: new URL('https://rsnc.co.kr'),
  openGraph: {
    title: 'team resonance - Influencer Seeding Agency',
    description: '북미 TikTok Shop 크리에이터 시딩 전문',
    url: 'https://rsnc.co.kr',
    siteName: 'team resonance',
    images: [
      {
        url: 'https://rsnc.co.kr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'team resonance',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'team resonance',
    description: '북미 TikTok Shop 크리에이터 시딩 전문',
    images: ['https://rsnc.co.kr/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* OG image — explicit meta for crawlers */}
        <meta property="og:image" content="https://rsnc.co.kr/opengraph-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="bg-black font-sans antialiased">
        <LanguageProvider>
          <RevealObserver />
          {children}
        </LanguageProvider>
        <Script
          id="channeltalk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;if(w.ChannelIO){return;}
              var ch=function(){ch.c(arguments)};
              ch.q=[];ch.c=function(args){ch.q.push(args)};
              w.ChannelIO=ch;
              var s=document.createElement('script');
              s.type='text/javascript';
              s.async=true;
              s.src='https://cdn.channel.io/plugin/ch-plugin-web.js';
              var x=document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s,x);
              ChannelIO('boot',{
                pluginKey: '7d515177-7bb1-4cb3-ac12-04d6243f53f2'
              });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
