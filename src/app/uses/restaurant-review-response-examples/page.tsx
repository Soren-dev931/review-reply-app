import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Restaurant Review Response Examples | Typani",
    description: "See how restaurants should respond to Google reviews. Real examples for handling food complaints, wait time issues, and glowing dining experiences.",
  };
}

export default function RestaurantReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Restaurant Owners"
      h1="Restaurant Review Response Examples"
      tagline="Diners choose restaurants based on reviews — and how you respond shapes whether they visit you or your competitor. See real examples that win back critics and retain your fans."
      featureHeading="What Diners Mention in Restaurant Reviews"
      featureBody="Restaurant reviews cover a wide range of factors. Understanding the most common themes helps you respond quickly and credibly to what diners actually experienced."
      featurePoints={[
        "Food quality, temperature, and portion size",
        "Service speed and attentiveness",
        "Noise level and dining atmosphere",
        "Accuracy of online ordering and delivery",
        "Value for money and pricing expectations",
        "Cleanliness of the dining area and restrooms",
      ]}
      examples={[
        {
          stars: 2,
          review: "Came in for brunch and waited 45 minutes for food. The eggs were cold by the time they arrived and no one offered an apology or a refill on coffee. Disappointed given the hype.",
          response: "A 45-minute wait and cold eggs — that's not the brunch we want anyone to have, and we completely understand your disappointment. Service and food timing fell short here and we take that seriously. Please reach out to us at hello@restaurant.com and we'd love to have you back on us. Thank you for being honest with us.",
        },
        {
          stars: 5,
          review: "Took my parents here for their anniversary and the staff made it feel genuinely special. The server knew about their anniversary before we even sat down and brought a complimentary dessert at the end. Perfect night.",
          response: "This made us tear up a little — thank you! Making your parents' anniversary feel special was exactly what we hoped for, and knowing it landed that way means everything. Please tell them congratulations from all of us, and we'd be honored to host your next family occasion.",
        },
      ]}
      whyHeading="Why Restaurant Review Responses Are Revenue-Critical"
      whyBody={[
        "Diners search Google before choosing where to eat — and they're reading reviews in real time, often from a few blocks away. A restaurant with active, thoughtful review responses ranks higher in local search and looks more trustworthy to the prospective diner comparing options on their phone. Your response isn't just customer service — it's advertising.",
        "Responding to every review also creates a positive feedback loop. Customers who feel acknowledged are more likely to return and leave another review. Over time, this compounds into a stronger average rating, more reviews, better visibility, and more new diners discovering your restaurant.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Restaurant review response dashboard"
      featureImageAlt="Managing restaurant Google reviews in Typani"
      mobileImageAlt="Respond to restaurant reviews on your phone"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/ai-review-response-generator", label: "AI Review Response Generator" },
      ]}
    />
  );
}
