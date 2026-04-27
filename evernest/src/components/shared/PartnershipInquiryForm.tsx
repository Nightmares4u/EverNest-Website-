"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { buildInquiryMessage, buildMailtoHref, buildWhatsAppHref } from "@/lib/contact"

export function PartnershipInquiryForm() {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [message, setMessage] = React.useState("")

  const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ")
  const isReady = Boolean(
    fullName &&
      company.trim() &&
      email.trim() &&
      phone.trim() &&
      location.trim(),
  )

  const inquiryMessage = buildInquiryMessage({
    intro:
      "Hello EN Consultants (Pvt) Ltd., I would like to discuss a B2B partnership with EverNest Consultants.",
    fullName,
    email: email.trim(),
    phone: phone.trim(),
    company: company.trim(),
    location: location.trim(),
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
      `B2B partnership inquiry - ${company.trim()}`,
      inquiryMessage,
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-border-subtle shadow-card">
      <h2 className="text-2xl font-display font-bold text-brand-blue mb-2">
        Start your partnership inquiry
      </h2>
      <p className="text-foreground/60 mb-6 leading-relaxed">
        Share your details and our team will guide you through the next step.
        This page opens WhatsApp or email with your partnership brief and does
        not submit data directly yet.
      </p>

      <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
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
            type="button"
            className="w-full h-12 text-base"
            disabled={!isReady}
            onClick={handleWhatsAppInquiry}
          >
            Partner With EN Consultants
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full h-12 text-base"
            disabled={!isReady}
            onClick={handleEmailInquiry}
          >
            Email Partnership Brief
          </Button>
          <p className="text-xs text-center text-foreground/50">
            Your partnership brief opens in WhatsApp or email for review before
            it is sent.
          </p>
        </div>
      </form>
    </div>
  )
}
