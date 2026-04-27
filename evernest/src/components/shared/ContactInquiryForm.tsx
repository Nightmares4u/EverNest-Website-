"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { buildInquiryMessage, buildMailtoHref, buildWhatsAppHref } from "@/lib/contact"

const services = [
  { value: "Study Visa", label: "Study Visa" },
  { value: "Immigration", label: "Immigration" },
  { value: "B2B Partnership", label: "B2B Partnership" },
  { value: "Other Inquiry", label: "Other Inquiry" },
] as const

export function ContactInquiryForm() {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [service, setService] = React.useState("")
  const [message, setMessage] = React.useState("")

  const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ")
  const isReady = Boolean(fullName && email.trim() && phone.trim() && service)

  const inquiryMessage = buildInquiryMessage({
    intro:
      "Hello EverNest Consultants, I would like guidance on the next step for my inquiry.",
    fullName,
    email: email.trim(),
    phone: phone.trim(),
    service,
    message: message.trim(),
  })

  const handleWhatsAppInquiry = () => {
    if (!isReady) {
      return
    }

    window.open(buildWhatsAppHref(inquiryMessage), "_blank", "noopener,noreferrer")
  }

  const handleEmailInquiry = () => {
    if (!isReady) {
      return
    }

    window.location.href = buildMailtoHref(
      `Consultation inquiry - ${service}`,
      inquiryMessage,
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-border-subtle shadow-card h-fit">
      <h2 className="text-2xl font-display font-bold text-brand-blue mb-2">
        Share your inquiry details
      </h2>
      <p className="text-foreground/60 mb-6 leading-relaxed">
        Share your details and our team will guide you through the next step.
        This website opens WhatsApp or email with your inquiry details and does
        not submit data directly yet.
      </p>

      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="contact-first-name"
              className="text-sm font-medium text-foreground/80"
            >
              First Name *
            </label>
            <input
              id="contact-first-name"
              required
              autoComplete="given-name"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-last-name"
              className="text-sm font-medium text-foreground/80"
            >
              Last Name *
            </label>
            <input
              id="contact-last-name"
              required
              autoComplete="family-name"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className="text-sm font-medium text-foreground/80"
            >
              Email *
            </label>
            <input
              id="contact-email"
              required
              autoComplete="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="contact-phone"
              className="text-sm font-medium text-foreground/80"
            >
              Phone / WhatsApp *
            </label>
            <input
              id="contact-phone"
              required
              autoComplete="tel"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-service"
            className="text-sm font-medium text-foreground/80"
          >
            Service Interested In *
          </label>
          <select
            id="contact-service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {services.map((serviceOption) => (
              <option key={serviceOption.value} value={serviceOption.value}>
                {serviceOption.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-foreground/80"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
          />
        </div>

        <div className="pt-2 space-y-3">
          <Button
            type="button"
            className="w-full h-12 text-base"
            disabled={!isReady}
            onClick={handleWhatsAppInquiry}
          >
            Chat on WhatsApp
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 text-base"
            disabled={!isReady}
            onClick={handleEmailInquiry}
          >
            Send by Email
          </Button>
          <p className="text-xs text-center text-foreground/50">
            Use either option to open your inquiry in WhatsApp or email. A
            direct submission form can be added later without changing this
            page.
          </p>
        </div>
      </form>
    </div>
  )
}
