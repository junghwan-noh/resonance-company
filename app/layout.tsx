import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import RevealObserver from '@/components/ui/RevealObserver'
import { LanguageProvider } from '@/lib/i18n'

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
