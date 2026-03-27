import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Car Dealership Review Response Examples | Reviewly",
    description: "See how car dealerships should respond to Google reviews. Real examples for handling finance complaints, service delays, and glowing sales experiences.",
  };
}

export default function CarDealershipReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Car Dealerships"
      h1="Car Dealership Review Response Examples"
      tagline="Car buyers research extensively before stepping on a lot — and your Google reviews are part of that research. How you respond tells them everything."
      featureHeading="What Customers Mention in Car Dealership Reviews"
      featureBody="Car dealership reviews tend to cover both the sales and service experience. Understanding what buyers commonly flag helps you respond with the right context and empathy."
      featurePoints={[
        "Sales pressure tactics and honesty of the sales team",
        "Finance and paperwork process — time, transparency, surprises",
        "Service department wait times and quality",
        "Trade-in valuations and negotiation experience",
        "Post-purchase follow-up and problem resolution",
        "Cleanliness and professionalism of the dealership",
      ]}
      examples={[
        {
          stars: 2,
          review: "I was quoted one price online and a completely different price when I got to the dealership. Classic bait and switch. Wasted two hours of my time.",
          response: "We're sorry this happened — a discrepancy between an online quote and in-store pricing is genuinely frustrating, and you had every right to be upset. We want to look into exactly what happened with your quote. Please contact our sales manager at sales@dealership.com and we'll review the details. Your time and trust matter to us.",
        },
        {
          stars: 5,
          review: "Bought my first new car here and the whole team made it easy and stress-free. Marcus walked me through everything, never pushed, and I left feeling like I made a great decision. Couldn't be happier.",
          response: "Congratulations on your first new car — what a big moment! Marcus is going to love hearing this. We know buying a car can feel stressful, so making the experience feel easy and honest is exactly what we aim for. Enjoy every mile, and we're here whenever you need us!",
        },
      ]}
      whyHeading="Why Dealership Review Responses Drive Sales"
      whyBody={[
        "Car buyers read reviews differently than other consumers — they're making a much larger financial decision and they're looking for red flags. A thoughtful response to a negative review can neutralize a red flag. It shows the next reader that the dealership takes complaints seriously, investigates them, and tries to make things right.",
        "On the positive side, responding warmly to great reviews reinforces the buyer's decision and makes them more likely to recommend the dealership to friends. In an industry built on referrals, that's a direct revenue driver.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Car dealership review response dashboard"
      featureImageAlt="Managing car dealership Google reviews"
      mobileImageAlt="Respond to dealership reviews on mobile"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/review-response-service", label: "Review Response Service" },
        { href: "/uses/customer-service-negative-review-response-examples", label: "Customer Service Negative Reviews" },
      ]}
    />
  );
}
