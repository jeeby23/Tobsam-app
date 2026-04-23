'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { TestimonialCard } from './testimonial-card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BaseLayout from '@/components/BaseLayout'

const testimonials = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder',
    company: 'CraftHub NG',
    image: '/Tes1.png',
    content:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager',
    company: 'E-Commerce Emporium',
    image: '/Tes2.png',
    content:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director',
    company: 'FutureTech Solutions',
    image: '/Tes3.png',
    content:
      'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
  },
  {
    name: 'Aisha Yusuf',
    role: 'Founder',
    company: 'CraftHub NG',
    image: '/Tes1.png',
    content:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
  },
]

export const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-full overflow-hidden bg-white py-[80px] px-6 md:px-[80px]">
      <BaseLayout>
        <div>
          <h2 className="mb-[60px] text-center text-[40px] md:text-[48px] font-bold tracking-tight text-[#111827]">
            Testimonials
          </h2>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-end gap-4">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg border-none bg-[#FEE2E2] text-[#E11D48] transition-colors hover:bg-[#FECACA] active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="h-12 w-12 rounded-lg border-none bg-[#FEE2E2] text-[#E11D48] transition-colors hover:bg-[#FECACA] active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
