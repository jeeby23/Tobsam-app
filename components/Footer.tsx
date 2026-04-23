import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FooterLinks } from "@/components/Home/footer-links";
import BaseLayout from "./BaseLayout";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = [
    { name: "linkedin", icon: "/linkdin.svg", url: "https://linkedin.com" },
    { name: "instagram", icon: "/insta.svg", url: "https://instagram.com" },
    { name: "x", icon: "/twitter.svg", url: "https://x.com" },
  ];

  return (
    <footer className="w-full bg-[#0F020F] pt-[80px] pb-[40px] px-6 md:px-[80px]">
      <BaseLayout>
        <div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] mb-[80px]">
           
            <div className="flex flex-col gap-6">
              <Link href="/" className="inline-block w-[160px]">
                <Image
                  src="/BrandLogo.png"
                  alt="Tobams Group Logo"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </Link>
              <p className="max-w-[340px] text-[16px] leading-[1.6] text-white/70">
                Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <FooterLinks
              title="What We Do"
              links={[
                "Sustainability Services",
                "Strategy Planning and Implementation",
                "Tech Talent Solutions",
                "Training and Development",
                "IT Consulting Services",
                "Social Impact",
                "Talent Recruitment",
              ]}
            />
            <FooterLinks
              title="Company"
              links={[
                "About",
                "Jobs",
                "Projects",
                "Our Founder",
                "Business Model",
                "The Team",
                "Contact Us",
                "Blog",
                "FAQs",
                "Testimonials",
              ]}
            />
            <FooterLinks
              title="Solution"
              links={[
                "Tobams Group Academy",
                "Help a Tech Talent",
                "Campus Ambassadors Program",
                "Join Our Platform",
                "Pricing",
                "Book a Consultation",
                "Join Our Slack Community",
              ]}
            />
          </div>

          <div className="rounded-[12px] bg-[#1A031A] p-8 md:p-[40px] mb-[60px]">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-[18px] font-bold text-white">Registered Offices</h4>
                  <p className="text-[14px] font-semibold text-[#E11D48] mb-2">United Kingdom</p>
                  <p className="text-[14px] leading-[1.6] text-white/80">
                    07451196 (Registered by Company House)<br />
                    Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
                <div className="md:border-l md:border-white/10 md:pl-8">
                  <div className="h-[28px] hidden md:block" /> 
                  <p className="text-[14px] font-semibold text-[#E11D48] mb-2">Nigeria</p>
                  <p className="text-[14px] leading-[1.6] text-white/80">
                    RC 1048722 (Registered by the Corporate Affairs Commission)<br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:border-l md:border-white/10 md:pl-8">
                <h4 className="text-[18px] font-bold text-white">Contact Information</h4>
                <div className="flex flex-col gap-4">
                  <Link href="mailto:theteam@tobamsgroup.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E11D48]">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[14px]">theteam@tobamsgroup.com</span>
                  </Link>
                  <Link href="tel:+447886600748" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#E11D48]">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-[14px]">+447886600748</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-[14px] text-white/60">
              Copyright © Tobams Group, {currentYear}. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-[14px] text-white/60 underline-offset-4 hover:text-white hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </BaseLayout>
    </footer>
  );
};