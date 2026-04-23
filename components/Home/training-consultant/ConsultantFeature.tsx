interface ConsultantFeatureProps {
  title: string
  description: string
}

export const ConsultantFeature = ({ title, description }: ConsultantFeatureProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold leading-[1.4] text-white md:text-xl">{title}</h3>
      <p className="text-sm leading-[1.6] text-[#D1D1D1] md:text-base">{description}</p>
    </div>
  )
}
