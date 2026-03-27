import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Airbnb Review Response Examples | Reviewly",
    description: "See real examples of how to respond to Airbnb guest reviews. Professional, host-like responses that protect your Superhost status and attract future bookings.",
  };
}

export default function AirbnbReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Short-Term Rentals"
      h1="Airbnb Review Response Examples for Hosts"
      tagline="Your Airbnb reviews are your listing's reputation. Responding well — to both praise and complaints — is what separates Superhosts from the rest."
      featureHeading="What Guests Mention in Airbnb Reviews"
      featureBody="Airbnb guests pay attention to specific details that can make or break a stay. Understanding what they commonly review helps you respond to their feedback and improve future guest experiences."
      featurePoints={[
        "Cleanliness — the single most complained-about issue",
        "Check-in process and communication responsiveness",
        "Accuracy of the listing description and photos",
        "Amenities that were listed but missing or broken",
        "Noise levels and neighborhood environment",
        "Value for money relative to similar listings",
      ]}
      examples={[
        {
          stars: 2,
          review: "The place wasn't as clean as the photos suggested — there was hair in the shower and the kitchen hadn't been wiped down. Good location but I expected more for the price.",
          response: "Thank you for telling us — this is not the standard we hold ourselves to, and I'm genuinely sorry your stay fell short. Cleanliness is the one area where there's no room for error, and I'll be reviewing my turnover process immediately. I hope you'll give the listing another chance in the future, and I'd be happy to discuss making this right.",
        },
        {
          stars: 5,
          review: "Incredible stay. The space was exactly as described, spotlessly clean, and the host responded to every message within minutes. I felt well taken care of the whole trip.",
          response: "Thank you so much — you were a wonderful guest and exactly the kind of traveler I love hosting! Knowing the space felt welcoming and that the communication made a difference really means a lot. I hope to host you again on your next visit to the area!",
        },
      ]}
      whyHeading="Why Responding to Airbnb Reviews Matters for Hosts"
      whyBody={[
        "On Airbnb, your response to reviews is visible to every prospective guest. When travelers are comparing listings, they often read host responses as a proxy for what it would be like to communicate with you during a stay. A thoughtful, professional response — even to a critical review — signals that you're a responsive, caring host.",
        "For hosts working toward or maintaining Superhost status, review quality is everything. Responding to negative reviews promptly and constructively can prevent a single difficult stay from defining your listing's reputation. It shows future guests that you take feedback seriously and continuously improve.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Airbnb review response dashboard for hosts"
      featureImageAlt="Managing Airbnb reviews in Reviewly"
      mobileImageAlt="Respond to Airbnb reviews on mobile"
      related={[
        { href: "/uses/hotel-review-response-examples", label: "Hotel Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
      ]}
    />
  );
}
