import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  image: string
}

export const TestimonialCard = ({ name, role, company, content, image }: TestimonialCardProps) => {
  return (
    <div className="relative flex h-full border-2 border-l-red-500 min-h-[244x] w-full flex-col p-8 rounded-2xl border border-gray-100 md:p-[40px] ">
      <div className="absolute left-0 top-[15%] border  rounded-r-full bg-[#E11D48]" />

      <div className="flex items-center gap-4 mb-6">
        <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full border-2 border-[#E11D48]/10">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[18px] font-bold leading-tight text-[#111827]">{name}</h3>
          <p className="text-[14px] font-medium leading-relaxed text-[#6B7280]">
            {role}, {company}
          </p>
        </div>
      </div>

      <p className="text-[16px] leading-[1.6] tracking-tight text-[#374151]">{content}</p>
    </div>
  )
}
