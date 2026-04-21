import HeroSection from '@/components/sections/HeroSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import InfluencerPreviewSection from '@/components/sections/InfluencerPreviewSection'
import CaseStudiesSection from '@/components/sections/CaseStudiesSection'
import CredentialsSection from '@/components/sections/CredentialsSection'
import FreeTrialSection from '@/components/sections/FreeTrialSection'
import FooterSection from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <HowItWorksSection />
      <InfluencerPreviewSection />
      <CaseStudiesSection />
      <CredentialsSection />
      <FreeTrialSection />
      <FooterSection />
    </main>
  )
}
