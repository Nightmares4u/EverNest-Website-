import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read the privacy policy for EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd., including how contact details and inquiry information are handled.",
  path: "/privacy-policy",
  keywords: ["Privacy Policy", siteConfig.legalName, siteConfig.name],
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="text-4xl font-display font-bold text-brand-blue md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/70">
          This privacy policy applies to EverNest Consultants, the trading name
          of {` ${siteConfig.legalName}`}. It explains the basic information we
          may collect through this website and how we use it to respond to
          inquiries about study visas, immigration guidance, and partnership
          discussions.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-display font-bold text-brand-blue">
              Information We Collect
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              If you contact us through this website, email, phone, or WhatsApp,
              we may receive details such as your name, contact information,
              destination or visa interests, and any information you choose to
              share in your message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-blue">
              How We Use Information
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              We use submitted information to answer inquiries, provide guidance
              about our services, and follow up on requests related to
              consultations, study visa support, immigration pathways, and B2B
              partnerships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-blue">
              Data Sharing
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              We do not present this website as a public data marketplace. Any
              information shared with us is handled for service communication and
              operational follow-up. Where third-party institutions or official
              processing steps are relevant, information would only be shared as
              necessary for that process and with your knowledge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-brand-blue">
              Contact
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              For questions about this privacy policy, contact us at{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-brand-blue underline decoration-brand-red/40 underline-offset-4"
              >
                {siteConfig.contact.email}
              </a>{" "}
              or by phone at{" "}
              <a
                href={`tel:${siteConfig.contact.phoneHref}`}
                className="text-brand-blue underline decoration-brand-red/40 underline-offset-4"
              >
                {siteConfig.contact.phone}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
