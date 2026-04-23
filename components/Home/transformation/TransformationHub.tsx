import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TransformationTag } from '@/components/Home/transformation/TransformationTag'
import BaseLayout from '@/components/BaseLayout'

const transformationFeatures = [
  'Strategic Career Guidance',
  'Leadership Development',
  'CV Development',
  'Sustainability Leadership',
  'Communication Skills',
  'Business Model',
]

export default function TransformationHub() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="rounded-[24px] bg-[#FDE2E4] p-6 md:p-10 lg:p-[60px]">
          <div className="mb-8 flex flex-col gap-2">
            <span className="text-base font-normal italic leading-[1.5] text-[#3E5C9A] md:text-lg">
              Learning With Our CEO:
            </span>
            <h2 className="text-3xl font-semibold italic leading-[1.2] tracking-[-0.01em] text-[#5C164E] md:text-4xl lg:text-[40px]">
              Transformation Hub With Jite Newton
            </h2>
          </div>

          <p className="mb-10 max-w-[1100px] text-sm leading-[1.6] tracking-[0.01em] text-[#1A1A1A] md:text-base">
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr.
            Jite Newton. Designed to elevate career trajectories and leadership capabilities, this
            exclusive event offers invaluable insights and strategies for personal and professional
            growth. Whether you&apos;re seeking to advance your career or enhance your leadership
            skills, the Transformation Hub provides a transformative learning experience to unlock
            your full potential and drive success in your endeavours.
          </p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Image Section */}
            <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-[16px] lg:w-[42%]">
              <Image
                src="/transforma-img.jpg"
                alt="Jite Newton Transformation Hub"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <div className="flex flex-col lg:w-[58%] ">
                <div className='bg-white/30 p-4'>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                {transformationFeatures.map((feature, index) => (
                  <TransformationTag key={index} text={feature} />
                ))}
              </div>

              <div className="mt-8">
                <Button className="h-[52px] rounded-[8px] bg-[#5C164E] px-8 text-lg font-medium text-white transition-all hover:bg-[#4A123E] active:scale-95">
                  Learn More
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
