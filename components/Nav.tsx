// components/Nav.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BaseLayout from "./BaseLayout";

const navLinks = [
  { name: "About", href: "#", hasDropdown: true, isActive: true },
  { name: "What We Do", href: "#", hasDropdown: true },
  { name: "Jobs", href: "#", hasDropdown: true },
  { name: "Projects", href: "#" },
  { name: "TG Academy", href: "#" },
  { name: "Strategic Partnership", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Book a Consultation", href: "#" },
];

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white flex flex-col">
      {/* Top Row: Logo & Actions */}
      <div className="w-full border-b border-gray-200">
        <BaseLayout>
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="outline-none focus-visible:ring-2 focus-visible:ring-[#5A1C4F] rounded-sm">
                <Image
                  src="/BrandLogo.png"
                  alt="TOBAMS GROUP Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="default"
                className="bg-[#5A1C4F] hover:bg-[#43143a] text-white rounded-md px-6 py-5 flex items-center space-x-2 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A1C4F]"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="bg-white/20 p-1 rounded-full mr-1">
                  <User className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <span className="font-medium text-sm">Account</span>
                <ChevronDown className="h-4 w-4 ml-1 opacity-30" aria-hidden="true" />
              </Button>
              <Button
                variant="default"
                className="bg-[#F04B59] hover:bg-[#d9414e] text-white rounded-md px-6 py-5 font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F04B59]"
              >
                Take Assessment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#5A1C4F] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#5A1C4F]"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </BaseLayout>
      </div>

      {/* Bottom Row: Navigation Links (Desktop) */}
      <nav className="hidden lg:block w-full  bg-white" aria-label="Main Navigation">
        <BaseLayout>
          <ul className="flex items-center justify-center space-x-8 xl:space-x-10 h-16">
            {navLinks.map((link) => (
              <li key={link.name} className="h-full flex items-center">
                <Link
                  href={link.href}
                  className={`group inline-flex items-center px-1  border-b-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#5A1C4F] rounded-t-sm h-full
                    ${
                      link.isActive
                        ? "border-[#5A1C4F] text-[#5A1C4F]"
                        : "border-transparent text-gray-700 hover:text-[#5A1C4F] hover:border-gray-300"
                    }
                  `}
                  aria-current={link.isActive ? "page" : undefined}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`ml-1.5 h-4 w-4 transition-transform group-hover:text-[#5A1C4F] ${
                        link.isActive ? "text-[#5A1C4F]" : "text-gray-500"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </BaseLayout>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-lg absolute top-20 left-0 w-full z-50`}
        id="mobile-menu"
      >
        <BaseLayout className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-3 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A1C4F]
                    ${
                      link.isActive
                        ? "bg-gray-50 text-[#5A1C4F]"
                        : "text-gray-900 hover:bg-gray-50 hover:text-[#5A1C4F]"
                    }
                  `}
                  aria-current={link.isActive ? "page" : undefined}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 border-t border-gray-200 pt-6 flex flex-col space-y-4">
            <Button
              variant="default"
              className="w-full bg-[#5A1C4F] hover:bg-[#43143a] text-white flex justify-center items-center py-6 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5A1C4F]"
            >
              <User className="h-5 w-5 mr-2" aria-hidden="true" />
              Account
            </Button>
            <Button
              variant="default"
              className="w-full bg-[#F04B59] hover:bg-[#d9414e] text-white py-6 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F04B59]"
            >
              Take Assessment
            </Button>
          </div>
        </BaseLayout>
      </div>
    </header>
  );
}