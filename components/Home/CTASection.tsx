import { Button } from '@/components/ui/button'
import BaseLayout from '@/components/BaseLayout'

export default function CTASection() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <BaseLayout>
        <div className="relative flex flex-col items-center justify-center rounded-[8px] bg-[#5C164E] px-6 py-10 text-center md:px-12 md:py-14 lg:py-[60px]">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-xl font-medium leading-[1.4] text-white md:text-2xl lg:text-[28px]">
              Want to accelerate professional growth and development at your organisation?
            </h2>
            <p className="text-lg font-medium leading-[1.4] text-white md:text-xl lg:text-[24px]">
              See how we can help.
            </p>
          </div>

          <Button className="h-[52px] rounded-[4px] bg-white px-8 text-base font-semibold text-[#5C164E] transition-all hover:bg-slate-100 hover:text-[#4A123E] active:scale-95">
            Book a Consultation
          </Button>
        </div>
      </BaseLayout>
    </section>
  )
}
