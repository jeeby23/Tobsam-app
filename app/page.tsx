import CorporateTrainingContainer from '@/components/Home/CorporateTrainingContainer'
import HeroSection from '@/components/Home/Hero'
import LmsSection from '@/components/Home/LmsSection'
import  {ProgramFeature } from '@/components/Home/management-development/ProgramFeature'
import ManagementDevelopemt from "@/components/Home/management-development/ManagementDevelopemt"
import TransformationHub from '@/components/Home/transformation/TransformationHub'
import TrainingConsultant from '@/components/Home/training-consultant/TrainingConsultant'
import CTASection from '@/components/Home/CTASection'
import { TestimonialsSection } from '@/components/Home/testimonial/testimonials-section'
import { CTABanner } from '@/components/Home/ui/cta-banner'
export default function Home() {
  return (
    <div>
      <main>
        <div>
          <HeroSection />
          <LmsSection/>
          <CorporateTrainingContainer/>
          <ManagementDevelopemt/>
          <TransformationHub/>
          <TrainingConsultant/>
          <CTASection/>
          <TestimonialsSection/>
          <CTABanner/>
        </div>
      </main>
    </div>
  )
}
