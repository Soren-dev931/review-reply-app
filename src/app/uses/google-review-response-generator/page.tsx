import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Google Review Response Generator | Reviewly",
    description: "Generate professional responses to Google reviews in seconds. Paste any review and get an AI-crafted reply that's ready to post — free to start.",
  };
}

export default function GoogleReviewResponseGenerator() {
  return (
    <UsesPageLayout
      badge="AI Tools"
      h1="Google Review Response Generator"
      tagline="The fastest way to generate professional responses to Google reviews. Paste the review, get a response in seconds — nothing to install, free to start."
      featureHeading="Why Reviewly's Generator Stands Out"
      featureBody="Most review response generators produce obvious templates. Reviewly reads the actual content of each review and generates a tailored reply that sounds like it came from a real business owner."
      featurePoints={[
        "No templates — every response is generated from the review content",
        "Handles any star rating from 1 to 5",
        "Adjusts tone for negative reviews vs. positive reviews",
        "Edit before you post — always in control",
        "Works for any industry: restaurants, retail, services, healthcare",
        "Free to try — no account required",
      ]}
      examples={[
        {
          stars: 2,
          review: "Checked in at the hotel and the room wasn't ready despite booking a guaranteed early check-in. Had to wait 90 minutes in the lobby with my kids.",
          response: "Waiting 90 minutes with kids after booking an early check-in guarantee is not okay — we're genuinely sorry this happened. A guaranteed early check-in means exactly that, and we failed to deliver. Please reach out to our front desk manager at guestservices@hotel.com and we'll address this and make it right for your next stay.",
        },
        {
          stars: 5,
          review: "The whole process was seamless from start to finish. Booking, communication, check-in, and the room itself were all excellent. Already looking at dates for a return trip.",
          response: "Already looking at return dates — that's the best thing we could read! We're so glad every part of the experience came together for you. We'll look forward to welcoming you back and making it even better next time. Thank you for choosing us!",
        },
      ]}
      whyHeading="The Value of a Fast, Quality Review Response Generator"
      whyBody={[
        "Time is the biggest obstacle to consistent review management. Businesses that don't respond to reviews almost always cite the same reason: they just don't have time to write individual responses. A generator eliminates that problem — you go from 20 minutes per response to 30 seconds, while maintaining quality.",
        "The key is that the quality has to hold up. Generic AI generators produce responses that customers can immediately identify as automated — and that's almost as bad as no response. Reviewly generates responses specific enough to each review that they read as genuine, not canned.",
      ]}
      heroImage="/images/screenshots/dashboard-review-input.webp"
      featureImage="/images/screenshots/dashboard-main.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Google review response generator interface"
      featureImageAlt="Reviewly review response generator dashboard"
      mobileImageAlt="Generate Google review responses on mobile"
      related={[
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
        { href: "/uses/free-review-response-generator", label: "Free Review Response Generator" },
        { href: "/uses/google-review-response-tool", label: "Google Review Response Tool" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
