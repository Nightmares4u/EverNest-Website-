"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { buildInquiryMessage, buildWhatsAppHref } from "@/lib/contact"
import { siteConfig } from "@/data/site"

export function PartnershipInquiryForm() {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [partnershipInterest, setPartnershipInterest] = React.useState("")
  const [message, setMessage] = React.useState("")

  const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ")
  const inquiryMessage = buildInquiryMessage({
    lines: [
      "Source: Website B2B Partnership Form",
      `Name: ${fullName}`,
      `Company/Agency: ${company.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `City/Country: ${location.trim()}`,
      `Partnership interest: ${partnershipInterest.trim()}`,
      `Message: ${message.trim() || "Not provided"}`,
    ],
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!event.currentTarget.reportValidity()) {
      return
    }

    window.open(buildWhatsAppHref(inquiryMessage), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-border-subtle shadow-card">
      <h2 className="text-2xl font-display font-bold text-brand-blue mb-2">
        Start your partnership inquiry
      </h2>
      <p className="text-foreground/60 mb-6 leading-relaxed">
        Share your details and our team will guide you through the next step. This form opens WhatsApp with your partnership brief for review before sending.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="partner-first-name"
              className="text-sm font-medium text-foreground/80"
            >
              First Name *
            </label>
            <input
              id="partner-first-name"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="partner-last-name"
              className="text-sm font-medium text-foreground/80"
            >
              Last Name *
            </label>
            <input
              id="partner-last-name"
              type="text"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="partner-company"
            className="text-sm font-medium text-foreground/80"
          >
            Company Name *
          </label>
          <input
            id="partner-company"
            type="text"
            required
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            placeholder="Your Consultancy Ltd."
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="partner-email"
            className="text-sm font-medium text-foreground/80"
          >
            Email Address *
          </label>
          <input
            id="partner-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="partner-phone"
              className="text-sm font-medium text-foreground/80"
            >
              Phone / WhatsApp *
            </label>
            <input
              id="partner-phone"
              type="tel"
              autoComplete="tel"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="+92 300 0000000"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="partner-location"
              className="text-sm font-medium text-foreground/80"
            >
              City / Country *
            </label>
            <input
              id="partner-location"
              type="text"
              autoComplete="address-level2"
              required
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              placeholder="Karachi, Pakistan"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="partner-interest"
            className="text-sm font-medium text-foreground/80"
          >
            Partnership Interest *
          </label>
          <input
            id="partner-interest"
            type="text"
            required
            value={partnershipInterest}
            onChange={(event) => setPartnershipInterest(event.target.value)}
            className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
            placeholder="Student recruitment, sub-agent collaboration, or institutional outreach"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="partner-message"
            className="text-sm font-medium text-foreground/80"
          >
            Partnership Brief
          </label>
          <textarea
            id="partner-message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
            placeholder="Tell us about your current recruitment focus, destinations, or partner goals."
          />
        </div>

        <div className="space-y-3 pt-2">
          <Button
            type="submit"
            className="w-full h-12 text-base"
          >
            Send Partnership Inquiry on WhatsApp
          </Button>
          <p className="text-xs text-center text-foreground/50">
            Prefer email first? Reach us directly at
            {" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-brand-blue hover:text-brand-red"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  )
}
