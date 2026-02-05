import HeroSection from '@/components/sections/HeroSection'
import WhatWeDoSection from '@/components/sections/WhatWeDoSection'
import WhyResonanceSection from '@/components/sections/WhyResonanceSection'
import OurProcessSection from '@/components/sections/OurProcessSection'
import GlobalFocusSection from '@/components/sections/GlobalFocusSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <WhatWeDoSection />
      <WhyResonanceSection />
      <OurProcessSection />
      <GlobalFocusSection />
      <FooterSection />
    </main>
  )
}
