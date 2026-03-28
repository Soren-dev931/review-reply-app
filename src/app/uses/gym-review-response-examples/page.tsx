import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Gym Review Response Examples | Typani",
    description: "See how fitness centers and gyms should respond to Google reviews. Real examples for handling equipment complaints, class cancellations, and member praise.",
  };
}

export default function GymReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Fitness Centers"
      h1="Gym Review Response Examples for Fitness Centers"
      tagline="Gym members are loyal — but they also share honest feedback. How you respond to their reviews shapes whether prospects join or keep scrolling."
      featureHeading="What Members Mention in Gym Reviews"
      featureBody="Gym reviews tend to focus on the physical environment, staff quality, and value. Understanding what drives them helps you respond with the right context and accountability."
      featurePoints={[
        "Equipment condition and availability during peak hours",
        "Cleanliness of the gym floor, locker rooms, and showers",
        "Class quality, instructor availability, and scheduling",
        "Membership pricing, contracts, and cancellation policies",
        "Staff friendliness and personal training quality",
        "Crowding and wait times for popular equipment",
      ]}
      examples={[
        {
          stars: 2,
          review: "At least five machines have been broken for over a month with 'out of order' signs on them. For what I pay monthly, I expect working equipment. This is getting old.",
          response: "You're completely right to be frustrated — broken equipment for a month is not acceptable, especially at the prices we charge. We've heard this feedback and we've escalated the repair timeline with our equipment vendor. Please see the front desk and we'll comp a week of membership while we get this resolved. Thank you for holding us accountable.",
        },
        {
          stars: 5,
          review: "I've tried a dozen gyms over the years and this is the first one that felt like a community. The staff knows my name, the trainers are encouraging without being annoying, and the equipment is always clean.",
          response: "A community is exactly what we've tried to build — and hearing that it comes through from a member who's tried a lot of gyms means so much. We'll pass your words on to the team. Thank you for being part of what makes this place what it is. See you on the floor!",
        },
      ]}
      whyHeading="Why Gym Review Responses Drive Membership"
      whyBody={[
        "People choosing a gym are making a recurring financial commitment, and they research thoroughly before signing up. Your Google reviews — and how you respond to them — are a major part of that research. A gym that addresses equipment complaints directly and responds warmly to positive reviews signals to prospects that the members actually matter to management.",
        "Gyms that respond to reviews also tend to have better retention. When members see that feedback is being taken seriously — not just ignored — they feel invested in the community and are less likely to cancel. Review responses aren't just for acquisition; they're a retention tool.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Gym review response dashboard for fitness centers"
      featureImageAlt="Managing gym member reviews in Typani"
      mobileImageAlt="Respond to gym reviews on your phone"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/spa-review-response-examples", label: "Spa Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
