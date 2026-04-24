import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import BaseLayout from '@/components/BaseLayout'
import { ConsultantFeature } from '@/components/Home/training-consultant/ConsultantFeature'

export default function TrainingConsultant() {
  const features = [
    {
      title: 'Expert-Led Learning',
      description:
        'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
    },
    {
      title: 'Interactive Workshops',
      description:
        'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
    },
    {
      title: 'Comprehensive Curriculum',
      description:
        'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
    },
    {
      title: 'Global Recognition',
      description:
        'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="rounded-[8px] bg-[#EBE4E9] px-6 py-10 md:px-12 md:py-16 lg:px-[80px] lg:py-[70px]">
          <div className="mb-10 flex flex-col gap-4">
            <h2 className="text-[32px] font-semibold leading-[1.2] text-[#5C164E] md:text-[40px] lg:text-[48px]">
              Training The Consultant
            </h2>
            <p className="text-base font-medium leading-[1.5] text-[#5C164E] md:text-lg">
              Maximise Your Potential as a Certified Trainer:
            </p>
            <p className="max-w-[1100px] text-sm leading-[1.7] text-[#1A1A1A] md:text-base">
              With the help of our Training Consultants program, take a revolutionary step toward
              becoming a distinguished certified training consultant. Learn from professionals in
              the field, immerse yourself in a thorough curriculum, and hone your training methods
              through interactive workshops. Participating in our program will enable you to gain
              expertise in diverse courses while also developing the abilities to mentor and
              encourage others in their career advancement.
            </p>
          </div>

          <div className="mb-10 rounded-[8px] bg-[#5C164E] p-8 md:p-10 lg:px-[60px] lg:py-[50px] min-h-[254px]">
            <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
              {features.map((feature, index) => (
                <ConsultantFeature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-start">
            <Button className="group flex h-[48px] items-center gap-2 rounded-[6px] bg-[#5C164E] px-8 text-base font-medium text-white transition-all hover:bg-[#4A123E] active:scale-95">
              Learn More
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
