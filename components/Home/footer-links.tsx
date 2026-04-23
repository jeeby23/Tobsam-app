import Link from 'next/link'

interface FooterLinksProps {
  title: string
  links: string[]
}

export const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[20px] font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={`/${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-[16px] text-white/70 transition-colors hover:text-[#E11D48]"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
