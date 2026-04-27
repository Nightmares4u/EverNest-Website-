import { siteConfig } from "@/data/site"

export type InquiryPayload = {
  lines: string[]
}

function compactLines(lines: string[]) {
  return lines.filter(Boolean).join("\n")
}

export function buildInquiryMessage(payload: InquiryPayload) {
  return compactLines(payload.lines)
}

export function buildWhatsAppHref(message: string) {
  const whatsappNumber = siteConfig.contact.whatsapp
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
