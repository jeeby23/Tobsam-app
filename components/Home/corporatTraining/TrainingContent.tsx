import { Zap } from 'lucide-react'

interface TrainingContentProps {
  title: string
  description: string
  items: string[]
}

export const TrainingContent = ({ title, description, items }: TrainingContentProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A] md:text-[40px] lg:text-[38px]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-[1.6] tracking-[0.01em] text-[#666666] md:mt-6 md:text-lg">
        {description}
      </p>
      <ul className="mt-8 flex flex-col gap-3 md:mt-10">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center text-[#2D2D2D]">
              <Zap className="h-4 w-4 fill-current text-[#480F39]" />
            </span>
            <span className="text-base font-medium leading-[1.5] text-[#4D4D4D] md:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
