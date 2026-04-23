import Image from 'next/image'
import { ProgramFeature } from '@/components/Home/management-development/ProgramFeature'
import BaseLayout from '@/components/BaseLayout'

const features = [
  'Enhanced Leadership Skills',
  'Improved Employee Engagement',
  'Stronger Organisational Culture',
  'Sustainable Growth',
]

export default function ManagementDevelopment() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="overflow-hidden rounded-[24px] bg-[#1C0916] p-6 md:p-10 lg:p-[60px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[60px]">
            <div className="relative aspect-[1.15/1] w-full lg:w-[45%]">
              <div className="h-full w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/mdp-Img.jpg"
                  alt="Management Development Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col lg:w-[55%]">
              <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-white md:text-[40px] lg:text-[44px]">
                Management Development <br className="hidden md:block" /> Program
              </h2>

              <div className="mt-6 flex flex-col gap-5">
                <p className="text-sm font-light leading-[1.6] text-[#D1D1D1] md:text-base">
                  Tobams Group offers a comprehensive Management Development Program designed to
                  equip corporate organisations with the high-performing leaders they need to
                  thrive.
                </p>
                <p className="text-sm font-light leading-[1.6] text-[#D1D1D1] md:text-base">
                  Our program includes workshops, seminars, coaching sessions, online courses, and
                  experiential learning opportunities designed to improve leadership, strategic
                  thinking, communication, and other essential managerial competencies for corporate
                  organisations.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4">
                {features.map((feature, index) => (
                  <ProgramFeature key={index} text={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
