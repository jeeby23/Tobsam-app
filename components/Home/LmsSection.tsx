import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import BaseLayout from '@/components/BaseLayout'
import { Button } from '@/components/ui/button'

const courses = [
  'Business Analysis',
  'Design Thinking',
  'Effective Communication',
  'Entrepreneurship',
  'Career Development',
  'Business Model',
]

export default function LmsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f6e5f4] mt-4">
      <BaseLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden ">
              <Image
                src="/lms-img.jpg"
                alt="Two professionals smiling in an office setting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="">
            <h2 className="text-[#571244] text-xl md:text-[20px] lg:text-[32px] font-semibold leading-[1.5] tracking-[0.03em] mb-3">
              Learning Management System
            </h2>
            <div className="bg-[rgba(87,18,68,0.1)] rounded-2xl p-4 md:p-5 lg:p-7 min-w-[590px] ">
              <div className="space-y-6 text-[#151515] text-sm md:text-base leading-relaxed ">
                <p>
                  TG Academy is a hub of knowledge and skill-building resources designed to empower
                  tech talents on their learning journey. From technical courses covering the latest
                  programming languages and development frameworks to soft skills training in
                  leadership, effective communication and project management, TG Academy offers a
                  wide range of courses to cater to diverse learning needs.
                </p>
                <p>
                  With accessible and interactive learning materials, individuals can enhance their
                  skills and stay ahead in today's competitive tech landscape.
                </p>
              </div>

              <div className="mt-10">
                <h4 className="text-[#A5387E] font-medium mb-6">Some of our courses include:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-2">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-center text-[#151515] text-] md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-5">
              <Button
                variant="default"
                asChild
                className="bg-[#5A1C4F] hover:bg-[#43143a] text-white rounded px-8 py-6 text-base font-medium flex items-center group transition-all w-[150px]"
              >
                <a href="#">
                  Learn More
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
