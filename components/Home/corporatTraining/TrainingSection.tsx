import Image from 'next/image'
import { TrainingContent } from '@/components/Home/corporatTraining/TrainingContent'
import { cn } from '@/lib/utils'

interface TrainingSectionProps {
  title: string
  description: string
  items: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export const TrainingSection = ({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: TrainingSectionProps) => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div
        className={cn(
          'flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-20',
          reverse && 'lg:flex-row-reverse',
        )}
      >
        <div className="w-full lg:w-1/2">
          <TrainingContent title={title} description={description} items={items} />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full  overflow-hidden rounded-tl-[45px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes=" 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
