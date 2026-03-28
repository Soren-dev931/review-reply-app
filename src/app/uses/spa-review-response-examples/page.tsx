import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Spa Review Response Examples | Typani",
    description: "See how spas should respond to Google reviews. Real examples for handling service complaints, therapist issues, and glowing guest experiences.",
  };
}

export default function SpaReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Spas & Wellness"
      h1="Spa Review Response Examples"
      tagline="Spa guests come to relax and feel cared for. When something goes wrong — or when everything goes right — how you respond shapes your reputation with every future guest."
      featureHeading="What Guests Mention in Spa Reviews"
      featureBody="Spa reviews reflect the quality of the experience on an emotional level. Guests who feel truly taken care of become loyal advocates — and those who felt let down are equally vocal."
      featurePoints={[
        "Therapist skill level and attentiveness to preferences",
        "Booking process and intake form experience",
        "Cleanliness and ambiance of the facilities",
        "Whether service time was cut short",
        "Product quality and appropriateness for skin/body type",
        "Value for money relative to other spa experiences",
      ]}
      examples={[
        {
          stars: 2,
          review: "Booked a 90-minute deep tissue massage but it was more like 70 minutes. The therapist seemed to be going through the motions and barely addressed the areas I asked her to focus on.",
          response: "We're sorry your experience didn't reflect what you asked for — a 90-minute service should be 90 minutes, and your focus areas should have been the priority. This is something we want to address directly. Please contact our spa manager at wellness@spa.com and we'll rebook you with a senior therapist at no charge. Thank you for letting us know.",
        },
        {
          stars: 5,
          review: "The most relaxing two hours of my year. From the moment I walked in, every detail was perfect — the aromatherapy, the temperature, the therapist's attentiveness. I didn't want to leave.",
          response: "Not wanting to leave is the highest compliment a spa can receive — thank you! We put so much care into every detail of the experience, and knowing it all came together for you means the world to our team. We'd love to recreate that feeling on your next visit. See you soon!",
        },
      ]}
      whyHeading="Why Spa Review Responses Protect Your Premium Reputation"
      whyBody={[
        "Spa guests are paying for an elevated experience — and they hold that standard in their reviews. A negative review from a disappointed spa guest who felt rushed or uncared for is particularly damaging because it directly contradicts the core promise of your business. A thoughtful, empathetic response doesn't erase that — but it demonstrates that the standard you promise is one you genuinely care about protecting.",
        "Positive spa reviews are equally powerful marketing. When a new guest reads that someone had the most relaxing two hours of their year — and sees the spa respond warmly and personally — it creates an aspiration before they've even booked. That emotional pull drives bookings more than any ad.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Spa review response dashboard"
      featureImageAlt="Managing spa guest reviews in Typani"
      mobileImageAlt="Respond to spa reviews from your phone"
      related={[
        { href: "/uses/salon-review-response-examples", label: "Salon Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/hotel-review-response-examples", label: "Hotel Review Response Examples" },
      ]}
    />
  );
}
