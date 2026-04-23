import { Zap } from 'lucide-react'

interface ProgramFeatureProps {
  text: string
}

export const ProgramFeature = ({ text }: ProgramFeatureProps) => {
  return (
    <div className="group flex w-full cursor-default items-center gap-3 rounded-[12px] bg-[#8F6182]/40 p-4 transition-colors hover:bg-[#8B5E83]/60">
      <div className="flex h-5 w-5 items-center justify-center text-white">
        <Zap className="h-4 w-4 fill-white" />
      </div>
      <span className="text-sm font-medium tracking-[0.02em] text-white md:text-base">{text}</span>
    </div>
  )
}
