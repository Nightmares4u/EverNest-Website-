import * as React from "react"
import { siteConfig } from "@/data/site"
import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}