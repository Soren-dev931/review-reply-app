import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Negative Hotel Review Response Templates | Typani",
    description: "Use these proven negative hotel review response templates to handle guest complaints professionally. Protect your rating and win back future travelers.",
  };
}

export default function NegativeHotelReviewResponseTemplate() {
  return (
    <UsesPageLayout
      badge="Hospitality"
      h1="Negative Hotel Review Response Templates"
      tagline="Every negative hotel review is read by dozens of potential guests. The right response doesn't just address the unhappy guest — it wins over everyone watching."
      featureHeading="What Negative Hotel Reviews Typically Contain"
      featureBody="Negative hotel reviews tend to center on a handful of recurring issues. Understanding the patterns helps you respond quickly, specifically, and credibly."
      featurePoints={[
        "Room cleanliness or condition below expectations",
        "Noise issues from other guests or construction",
        "Slow or unhelpful check-in and check-out",
        "Discrepancy between listed and actual amenities",
        "Billing errors or unexpected charges",
        "Staff rudeness or indifference to complaints",
      ]}
      examples={[
        {
          stars: 1,
          review: "The bathroom had visible mold, the sheets had stains, and there were crumbs on the floor. This is basic housekeeping. The room was completely unacceptable.",
          response: "We are deeply sorry — what you've described falls well below our standards and should never have happened. Room cleanliness is foundational to the hospitality experience and we failed to deliver it. Please reach out to our general manager at gm@hotel.com and we'll address this with a full refund and a review of our housekeeping procedures. Thank you for telling us.",
        },
        {
          stars: 2,
          review: "We were charged $45 for parking that wasn't mentioned anywhere during booking. When I asked at checkout, I was told it was 'in the fine print.' Felt like a gotcha and ruined an otherwise decent stay.",
          response: "We completely understand that frustration — a surprise charge at checkout is not the ending any guest should have. Parking fees should be clearly communicated at the time of booking, and we're reviewing how this information is presented. Please email billing@hotel.com with your reservation details and we'll look at refunding that charge.",
        },
      ]}
      whyHeading="Why Negative Hotel Review Responses Are Crucial"
      whyBody={[
        "Travelers almost always check reviews before booking, and they look specifically for how hotels handle negative feedback. A hotel that responds professionally and accountably to a 1-star review often gets the booking over a hotel with a slightly higher rating and zero responses. Your response is your reputation management in real time.",
        "The goal isn't to argue with the unhappy guest — it's to demonstrate to future travelers that your hotel is accountable, communicative, and genuinely committed to the guest experience. Even if the review is partly unfair, a calm and constructive response reflects well on your property.",
      ]}
      heroImage="/images/screenshots/reviews-dashboard.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Negative hotel review response template dashboard"
      featureImageAlt="Managing negative hotel reviews in Typani"
      mobileImageAlt="Respond to negative hotel reviews on mobile"
      related={[
        { href: "/uses/hotel-review-response-examples", label: "Hotel Review Response Examples" },
        { href: "/uses/positive-hotel-review-response-examples", label: "Positive Hotel Review Responses" },
        { href: "/uses/negative-review-response-template", label: "Negative Review Response Templates" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
      ]}
    />
  );
}
