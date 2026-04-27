import { siteConfig } from "@/data/site"

export type InquiryPayload = {
  intro: string
  fullName: string
  email: string
  phone: string
  service?: string
  company?: string
  location?: string
  message?: string
}

function compactLines(lines: Array<string | undefined>) {
  return lines.filter(Boolean).join("\n")
}

export function buildInquiryMessage(payload: InquiryPayload) {
  return compactLines([
    payload.intro,
    "",
    `Name: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phone}`,
    payload.company ? `Company: ${payload.company}` : undefined,
    payload.location ? `City / Country: ${payload.location}` : undefined,
    payload.service ? `Service: ${payload.service}` : undefined,
    payload.message ? `Message: ${payload.message}` : undefined,
  ])
}

export function buildWhatsAppHref(message: string) {
  const whatsappNumber = siteConfig.contact.whatsapp.replace(/\+/g, "")
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function buildMailtoHref(subject: string, body: string) {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
