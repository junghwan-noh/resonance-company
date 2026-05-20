import HeroSection from '@/components/sections/HeroSection'
import ConsultingCTA from '@/components/sections/ConsultingCTA'
import MarketerProblemsSection from '@/components/sections/MarketerProblemsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import WhyResonanceSection from '@/components/sections/WhyResonanceSection'
import RealResultsSection from '@/components/sections/RealResultsSection'
import StatsSection from '@/components/sections/StatsSection'
import CampaignsSection from '@/components/sections/CampaignsSection'
import InfluencerCardsSection from '@/components/sections/InfluencerCardsSection'
import InsightsSection from '@/components/sections/InsightsSection'
import ContactForm from '@/components/sections/ContactForm'
import CompanyStoryCTA from '@/components/sections/CompanyStoryCTA'
import FooterSection from '@/components/sections/FooterSection'
import FloatingChatButton from '@/components/FloatingChatButton'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Navbar from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ConsultingCTA />
      <ProcessSection />
      <MarketerProblemsSection />
      <WhyResonanceSection />
      <RealResultsSection />
      <StatsSection />
      <CampaignsSection />
      <InfluencerCardsSection />
      <InsightsSection />
      <ContactForm />
      <CompanyStoryCTA />
      <FooterSection />
      <FloatingChatButton />
      <ScrollToTop />
    </main>
  )
}
