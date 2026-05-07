import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import WhyResonanceSection from '@/components/sections/WhyResonanceSection'
import InfluencerPreviewSection from '@/components/sections/InfluencerPreviewSection'
import InsightsSection from '@/components/sections/InsightsSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main className="relative grain">
      <HeroSection />
      <WhyResonanceSection />
      <StatsSection />
      <InfluencerPreviewSection />
      <InsightsSection />
      <FooterSection />
    </main>
  )
}
