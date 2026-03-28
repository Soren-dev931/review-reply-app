import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Medical Practice Review Response Examples | Typani",
    description: "See how medical practices should respond to Google reviews. HIPAA-compliant response examples for handling patient feedback professionally.",
  };
}

export default function MedicalPracticeReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Healthcare"
      h1="Medical Practice Review Response Examples"
      tagline="Patients choose their healthcare providers based heavily on reviews and reputation. How you respond — carefully and compassionately — builds the trust that fills your practice."
      featureHeading="What Patients Mention in Medical Practice Reviews"
      featureBody="Medical reviews often reflect both the clinical experience and the patient's emotional needs. Understanding what patients value most helps you respond appropriately."
      featurePoints={[
        "Wait times — both in the waiting room and for appointments",
        "Provider communication and bedside manner",
        "Staff friendliness and front desk responsiveness",
        "Billing clarity and insurance handling",
        "Ease of scheduling and appointment availability",
        "Follow-up communication after visits",
      ]}
      examples={[
        {
          stars: 2,
          review: "Waited over an hour past my appointment time with no explanation. When the doctor finally came in, she seemed rushed and didn't answer my questions fully. I felt like a number, not a patient.",
          response: "Thank you for taking the time to share this — wait times and feeling rushed during an appointment are real concerns that we take seriously. Patient experience is a priority for our practice and we want to do better. We'd welcome the opportunity to connect with you directly. Please call our patient services line at 555-0175 and we'll address your concerns personally.",
        },
        {
          stars: 5,
          review: "Dr. Patel took almost 45 minutes with me on my first visit. She asked about my history thoroughly, explained my diagnosis clearly, and actually listened. I haven't had a doctor like this in years.",
          response: "This truly means a lot to us — thank you for sharing it. Dr. Patel believes every patient deserves to feel heard and fully informed, and we're so glad that came through on your first visit. We look forward to being your healthcare partner for the long term.",
        },
      ]}
      whyHeading="Why Medical Practices Must Respond to Reviews Carefully"
      whyBody={[
        "Medical review responses require extra care: HIPAA regulations mean you cannot confirm a patient relationship or reference any health information in a public response. But that doesn't mean you can't respond meaningfully. The best medical practice responses acknowledge the concern, affirm your commitment to patient experience, and invite a private follow-up — all without confirming any specific patient details.",
        "Even a brief, professional response to a negative medical review tells prospective patients something important: that your practice is accountable and approachable. Patients who are anxious about trying a new provider are reassured by seeing evidence that complaints are taken seriously — not ignored.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Medical practice review response dashboard"
      featureImageAlt="Managing patient reviews in Typani"
      mobileImageAlt="Respond to medical reviews on your phone"
      related={[
        { href: "/uses/dental-review-response-examples", label: "Dental Review Response Examples" },
        { href: "/uses/law-firm-review-response-examples", label: "Law Firm Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
