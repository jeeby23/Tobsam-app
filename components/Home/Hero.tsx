import Image from 'next/image'
import BaseLayout from '../BaseLayout'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'

export default function HeroSection() {
  return (
    <section className="relative w-full aspect-[16/6] min-h-[500px] overflow-hidden bg-black/80">
      <Image
        src="/heroImg.jpg"
        alt="Woman working at a computer with holographic data display"
        fill
        priority
        className="object-cover object-center opacity-80 mix-blend-multiply"
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
        <BaseLayout className="flex flex-col items-center">
          <div>
            <Badge
              variant="outline"
              className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border-gray-700/50 mb-6 lg:mb-8 text-gray-300 font-medium text-sm tracking-wider uppercase hover:bg-black/60 transition-colors"
            >
              WHAT WE DO
            </Badge>
          </div>

          <h1 className="text-white font-nunito text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-8 max-w-5xl {`${nunito.variable} font-sans`">
            Training and Development
          </h1>

          <p className="text-gray-200 text-base md:text-lg lg:text-xl font-normal leading-relaxed max-w-7xl mb-7 lg:mb-9">
            Our comprehensive range of programs and resources is designed to enhance skills, broaden
            knowledge, and propel careers forward in today's ever-evolving landscape.
          </p>

          <Button
            variant="default"
            asChild
            className="bg-[#6B2154] hover:bg-[#521940] text-white rounded-md font-semibold text-lg px-10 py-7 transition-colors duration-200 shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6B2154]"
          >
            <a href="#">Book a Consultation</a>
          </Button>
        </BaseLayout>
      </div>
    </section>
  )
}
