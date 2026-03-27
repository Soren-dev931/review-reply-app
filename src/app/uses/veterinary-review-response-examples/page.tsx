import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Veterinary Review Response Examples | Reviewly",
    description: "See how veterinary practices should respond to Google reviews. Real examples for handling pet care concerns, emergency situations, and heartfelt 5-star praise.",
  };
}

export default function VeterinaryReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Veterinary Practices"
      h1="Veterinary Review Response Examples for Vets"
      tagline="Pet owners are deeply emotional about their animals' care. How your practice responds to reviews — especially difficult ones — shapes how new clients perceive your compassion and competence."
      featureHeading="What Pet Owners Mention in Vet Reviews"
      featureBody="Veterinary reviews are among the most emotional of any industry. Clients trust you with family members. Their feedback reflects that level of care and investment."
      featurePoints={[
        "Compassion and gentleness with the pet during the visit",
        "Wait times and appointment availability, especially for urgent cases",
        "How clearly the vet explained diagnosis and treatment options",
        "Pricing transparency and estimate accuracy",
        "How the team handled the pet's anxiety or pain",
        "End-of-life care and sensitivity during difficult visits",
      ]}
      examples={[
        {
          stars: 2,
          review: "Called to get my dog seen urgently and was told the next available appointment was in two weeks. He was visibly in pain. Had to take him to an emergency vet elsewhere.",
          response: "We are so sorry — when a pet is in pain, two weeks is not an answer. We do have an urgent care protocol that should have been offered to you, and it clearly wasn't. We want to understand what happened. Please call us at 555-0133 and ask for the practice manager. We hope your dog is recovering well.",
        },
        {
          stars: 5,
          review: "Had to say goodbye to my 15-year-old dog last month. The whole team made one of the hardest days of my life feel as peaceful and loving as possible. I will never forget their kindness.",
          response: "Thank you for trusting us with such a sacred and heartbreaking moment. Fifteen years is a long life filled with love, and we are honored we could be there with you at the end. Our whole team is holding you in their hearts. We're so sorry for your loss.",
        },
      ]}
      whyHeading="Why Vet Review Responses Require Extra Care"
      whyBody={[
        "Veterinary reviews are read by pet owners who are already anxious about their animal's health. They're looking for evidence of compassion, competence, and the kind of practice that will treat their pet like a patient — not a transaction. A thoughtful, warm review response provides exactly that evidence before the first appointment is even booked.",
        "End-of-life reviews deserve special attention. When a client shares a painful loss in a review, even a brief, heartfelt response goes a long way — both for the grieving client and for every future client who reads it. It shows the kind of practice you are when it matters most.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Veterinary review response dashboard"
      featureImageAlt="Managing veterinary client reviews in Reviewly"
      mobileImageAlt="Respond to vet reviews from your phone"
      related={[
        { href: "/uses/medical-practice-review-response-examples", label: "Medical Practice Review Responses" },
        { href: "/uses/dental-review-response-examples", label: "Dental Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
      ]}
    />
  );
}
