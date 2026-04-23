import { Button } from '@/components/ui/button'
import BaseLayout from '@/components/BaseLayout'

export const CTABanner = () => {
  return (
    <section className="w-full bg-[#1A031A] px-6 py-10 md:px-[80px] md:py-[64px]">
      <BaseLayout>
        <div className=" flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-[14px] font-normal leading-[1.2] text-white/90 md:text-[18px]">
              Ready to be a part of something extraordinary?
            </p>
            <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-white md:text-[40px] lg:text-[48px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <Button
            variant="secondary"
            className="h-auto rounded-[6px] bg-[#5B1441] px-[24px] py-[12px] text-[16px] font-semibold text-white transition-all hover:bg-[#6D1B4F] active:scale-95 md:px-[32px] md:py-[16px] md:text-[18px]"
          >
            Get In Touch
          </Button>
        </div>
      </BaseLayout>
    </section>
  )
}
