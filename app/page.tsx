import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import RealResultsSection from '@/components/sections/RealResultsSection'
import WhyResonanceSection from '@/components/sections/WhyResonanceSection'
import MarketerSection from '@/components/sections/MarketerSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ConsultingCTA from '@/components/sections/ConsultingCTA'
import InfluencerCardsSection from '@/components/sections/InfluencerCardsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import ContactForm from '@/components/sections/ContactForm'
import FooterSection from '@/components/sections/FooterSection'
import FloatingChatButton from '@/components/FloatingChatButton'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Navbar from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <RealResultsSection />
      <WhyResonanceSection />
      <MarketerSection />
      <ProcessSection />
      <ConsultingCTA />
      <InfluencerCardsSection />
      <InsightsSection />
      <ContactForm />
      <FooterSection />
      <FloatingChatButton />
      <ScrollToTop />
    </main>
  )
}
