import type { ImmigrationProgramPageData } from "@/data/types";

export const immigrationProgramsData: Record<
  string,
  Record<string, ImmigrationProgramPageData>
> = {
  us: {
    "eb-2": {
      name: "EB-2 NIW",
      country: "United States",
      heroDesc:
        "A direct pathway to a U.S. Green Card for professionals with advanced degrees or exceptional abilities.",
      stats: [
        { label: "Processing Time", value: "Varies" },
        { label: "Sponsor Needed", value: "No" },
        { label: "Path to PR", value: "Direct" },
      ],
      benefits: [
        "No employer sponsorship or labor certification (PERM) required",
        "Self-petition allowed",
        "Includes spouse and unmarried children under 21",
        "Faster processing compared to regular EB-2",
        "Direct pathway to Permanent Residency (Green Card)",
      ],
      requirements: [
        "Advanced Degree (Master's or higher) OR Exceptional Ability in sciences, arts, or business",
        "Proposed endeavor has substantial merit and national importance",
        "Applicant is well-positioned to advance the endeavor",
        "Beneficial to waive the job offer and labor certification requirements",
      ],
      process: [
        "Initial Profile Assessment",
        "Document Gathering & Case Strategy",
        "Drafting of Support Letters & Business Plan (if applicable)",
        "I-140 Petition Filing with USCIS",
        "Adjustment of Status or Consular Processing",
        "Green Card Approval",
      ],
    },
  },
  canada: {
    "express-entry": {
      name: "Express Entry",
      country: "Canada",
      heroDesc:
        "The fastest and most popular pathway to Canadian Permanent Residency for skilled workers globally.",
      stats: [
        { label: "Processing Time", value: "6 Months" },
        { label: "System", value: "Points-based" },
        { label: "Path to PR", value: "Direct" },
      ],
      benefits: [
        "Fast processing time (typically 6 months from ITA)",
        "Freedom to live and work anywhere in Canada (outside Quebec)",
        "Includes spouse and dependent children",
        "Access to universal healthcare and free public education",
        "Pathway to Canadian Citizenship",
      ],
      requirements: [
        "Minimum 1 year of continuous skilled work experience",
        "Language proficiency in English and/or French (IELTS/CELPIP/TEF)",
        "Educational Credential Assessment (ECA)",
        "Proof of funds to support yourself and family",
        "Meet the minimum CRS score cutoff in a draw",
      ],
      process: [
        "ECA and Language Testing",
        "Profile Creation & Pool Entry",
        "Receive Invitation to Apply (ITA)",
        "Submit Complete PR Application (eAPR)",
        "Medical Exam & Biometrics",
        "Passport Request (PPR) & PR Confirmation",
      ],
    },
    pnp: {
      name: "Provincial Nominee Program",
      country: "Canada",
      heroDesc:
        "A pathway for workers who have the skills, education and work experience to contribute to the economy of a specific Canadian province.",
      stats: [
        { label: "Processing Time", value: "11-18 Months" },
        { label: "Sponsor Needed", value: "Sometimes" },
        { label: "Path to PR", value: "Yes" },
      ],
      benefits: [
        "Direct pathway to Permanent Residency",
        "Option to apply even with lower CRS scores via Express Entry streams",
        "Targeted towards specific in-demand occupations",
        "Provincial support and community integration",
        "Includes family members",
      ],
      requirements: [
        "Meet the specific requirements of the chosen province/territory",
        "Intention to live in that specific province",
        "Relevant work experience and language proficiency",
        "May require a job offer from an employer in the province",
      ],
      process: [
        "Assess Eligibility for Provincial Streams",
        "Submit Expression of Interest (EOI) to Province",
        "Receive Provincial Nomination",
        "Submit PR Application to IRCC (Express Entry or Non-Express Entry)",
        "Medical & Background Checks",
        "PR Confirmation",
      ],
    },
  },
  australia: {
    "skilled-visas": {
      name: "Skilled Migration",
      country: "Australia",
      heroDesc:
        "The General Skilled Migration program is for skilled workers who want to live and work in Australia.",
      stats: [
        { label: "Visas", value: "189, 190, 491" },
        { label: "System", value: "Points-based" },
        { label: "Path to PR", value: "Yes" },
      ],
      benefits: [
        "Permanent residency pathways available (Subclass 189 & 190)",
        "Access to Medicare (Australia's public healthcare system)",
        "Sponsor eligible relatives for permanent residence",
        "Travel to and from Australia for 5 years",
        "Pathway to Australian Citizenship",
      ],
      requirements: [
        "Occupation must be on the relevant skilled occupation list",
        "Positive skills assessment for the nominated occupation",
        "Competent English (IELTS/PTE)",
        "Must score at least 65 points on the points test",
        "Under 45 years of age at the time of invitation",
      ],
      process: [
        "Skills Assessment & English Testing",
        "Submit Expression of Interest (SkillSelect)",
        "Receive Invitation to Apply (ITA)",
        "Gather Documents & Submit Visa Application",
        "Health & Character Checks",
        "Visa Grant",
      ],
    },
  },
};

export function getImmigrationProgramEntries() {
  return Object.entries(immigrationProgramsData).flatMap(([country, programs]) =>
    Object.entries(programs).map(([program, data]) => ({
      country,
      program,
      data,
    })),
  );
}
