import { Zap } from 'lucide-react'

interface TransformationTagProps {
  text: string
}

export const TransformationTag = ({ text }: TransformationTagProps) => {
  return (
    <div className="flex items-center gap-3 rounded-[8px] bg-white p-[18px] shadow-sm transition-transform hover:translate-y-[-2px]">
      <div className="flex h-5 w-5 items-center justify-center text-[#5C164E]">
        <Zap className="h-4 w-4 fill-[#5C164E]" />
      </div>
      <span className="text-sm font-medium leading-[1.2] text-[#4D4D4D] md:text-base">{text}</span>
    </div>
  )
}
