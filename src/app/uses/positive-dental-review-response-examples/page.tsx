import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Positive Dental Review Response Examples | Reviewly",
    description: "See how dental practices should respond to 5-star Google reviews. Real examples that deepen patient loyalty and attract new patients.",
  };
}

export default function PositiveDentalReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Dental Practices"
      h1="Positive Dental Review Response Examples"
      tagline="Your happy patients are your best marketing. Responding warmly and specifically to their 5-star reviews strengthens loyalty and signals trust to every new patient reading them."
      featureHeading="What Happy Dental Patients Say in Reviews"
      featureBody="Positive dental reviews tend to focus on anxiety relief, clear communication, and feeling genuinely cared for — not just treated. These are the themes to reflect back in your responses."
      featurePoints={[
        "Feeling comfortable and not rushed during the appointment",
        "Staff friendliness and the welcoming atmosphere",
        "Clear explanation of treatment options and costs",
        "Gentleness and pain management during procedures",
        "Efficient scheduling and minimal wait times",
        "Feeling like a person, not just a patient number",
      ]}
      examples={[
        {
          stars: 5,
          review: "I hadn't been to the dentist in eight years because of anxiety. The hygienist was so patient and kind that I actually made my next appointment before I left. That never happens for me.",
          response: "Eight years is a long time — and making your next appointment before you left says everything. We know dental anxiety is real and we never want a patient to feel judged or rushed. We're so glad you found us and we'll make sure every visit feels just as welcoming. See you at your next appointment!",
        },
        {
          stars: 5,
          review: "Dr. Torres is the first dentist who's ever fully explained my treatment plan with costs before starting anything. No surprises. I've been coming here for three years and I never want to change.",
          response: "Three years and counting — thank you! Transparency about treatment plans and costs is something Dr. Torres is deeply committed to, and hearing that it makes a real difference for patients means everything. We're grateful for your loyalty and look forward to many more years of great checkups!",
        },
      ]}
      whyHeading="Why Positive Dental Reviews Deserve Your Best Response"
      whyBody={[
        "Many dental practices only respond to negative reviews and ignore the positive ones. That's a missed opportunity. When a new patient reads a glowing review about a dentist who calmed their anxiety — and then sees that the dentist responded personally and warmly — it creates an immediate emotional connection before they've ever walked in the door.",
        "Responding to positive reviews also rewards the patients who took time to write them. It reinforces their decision to stay with your practice and makes them more likely to recommend you to friends and family — the highest-value referral channel in dentistry.",
      ]}
      heroImage="/images/screenshots/dashboard-5star-response.webp"
      featureImage="/images/screenshots/dashboard-recent-responses.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Positive dental review response examples"
      featureImageAlt="Responding to positive dental reviews in Reviewly"
      mobileImageAlt="Respond to positive dental reviews on mobile"
      related={[
        { href: "/uses/dental-review-response-examples", label: "Dental Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/5-star-review-response-examples", label: "5-Star Review Response Examples" },
        { href: "/uses/medical-practice-review-response-examples", label: "Medical Practice Review Responses" },
      ]}
    />
  );
}
