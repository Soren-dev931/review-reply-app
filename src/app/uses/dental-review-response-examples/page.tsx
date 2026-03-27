import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Dental Review Response Examples | Reviewly",
    description: "See how dental practices should respond to Google reviews. Real examples for handling pain complaints, billing issues, and 5-star patient praise.",
  };
}

export default function DentalReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Dental Practices"
      h1="Dental Review Response Examples for Dentists"
      tagline="Patients choose their dentist based heavily on reviews. How you respond — to both concerns and compliments — can fill your schedule or empty it."
      featureHeading="What Patients Mention in Dental Reviews"
      featureBody="Dental reviews often reflect both the clinical experience and the emotional one — patients are often anxious, and how your team makes them feel is as important as the treatment itself."
      featurePoints={[
        "Pain management and gentleness during procedures",
        "Wait times and appointment scheduling efficiency",
        "Billing transparency and insurance handling",
        "How staff communicates treatment plans and costs",
        "Office atmosphere and anxiety management",
        "Follow-up care and post-procedure communication",
      ]}
      examples={[
        {
          stars: 2,
          review: "Was told my procedure would be mostly covered by insurance. Got a bill for $400 afterward that nobody warned me about. The work itself was fine but I felt blindsided financially.",
          response: "We're sorry you were surprised by the bill — that's never the experience we want for a patient. Insurance estimates can shift based on how claims process, but we should have communicated that risk more clearly before your appointment. Please call our billing team at 555-0150 and we'll walk through the charges with you and discuss options.",
        },
        {
          stars: 5,
          review: "I've had serious dental anxiety my whole life and have avoided the dentist for years. The whole team here was so patient with me. Dr. Chen checked in constantly and let me take breaks. I actually felt safe.",
          response: "This means so much to us — thank you for trusting us with something so personal. Dental anxiety is real and we never want a patient to feel rushed or judged. Dr. Chen is going to be so glad to hear this. We're proud to be your dental home and we'll always make sure you feel safe here.",
        },
      ]}
      whyHeading="Why Dental Practices Must Prioritize Review Responses"
      whyBody={[
        "Choosing a dentist is an intimate decision — patients are trusting someone with their health, their comfort, and often their anxiety. Reviews are the primary way new patients evaluate that trust before their first appointment. A practice that responds thoughtfully to reviews — especially anxious or disappointed patients — signals the kind of care they can expect in person.",
        "HIPAA considerations mean dental responses need to be careful: never confirm a patient relationship or reveal health information. But you can still respond empathetically and invite patients to contact you offline to resolve concerns. That combination of discretion and care is exactly what patients are looking for.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Dental practice review response dashboard"
      featureImageAlt="Managing dental patient reviews in Reviewly"
      mobileImageAlt="Respond to dental reviews from your phone"
      related={[
        { href: "/uses/positive-dental-review-response-examples", label: "Positive Dental Review Responses" },
        { href: "/uses/medical-practice-review-response-examples", label: "Medical Practice Review Responses" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
