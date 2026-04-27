"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/data/site"
import { MessageCircle, FileText } from "lucide-react"

export function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Apply Now Button */}
      <Link
        href="/contact"
        className="flex h-14 items-center justify-center gap-2 rounded-full bg-brand-red px-6 text-white shadow-lg shadow-brand-red/20 transition-all hover:scale-105 hover:bg-brand-red/90 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
        aria-label="Apply Now"
      >
        <FileText className="h-5 w-5" />
        <span className="font-bold hidden sm:inline">Apply Now</span>
      </Link>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 sm:w-auto items-center justify-center gap-2 rounded-full bg-[#25D366] sm:px-6 text-white shadow-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-bold hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
