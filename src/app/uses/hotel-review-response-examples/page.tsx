import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Hotel Review Response Examples | Typani",
    description: "See how hotels should respond to Google reviews. Real examples for handling room complaints, service issues, and glowing guest feedback.",
  };
}

export default function HotelReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Hospitality"
      h1="Hotel Review Response Examples"
      tagline="Hotel guests leave detailed reviews — and future travelers read them closely. How you respond can mean the difference between a booking and a lost guest."
      featureHeading="What Guests Mention in Hotel Reviews"
      featureBody="Hotel reviews are detailed and emotional — guests remember exactly how a stay made them feel. Understanding what they focus on helps you respond with the right specificity."
      featurePoints={[
        "Room cleanliness and maintenance condition",
        "Noise levels — from other guests or street noise",
        "Staff attentiveness and friendliness at check-in",
        "Breakfast quality and value",
        "Wi-Fi reliability and room amenities",
        "Value for money compared to expectations",
      ]}
      examples={[
        {
          stars: 2,
          review: "The room next to us was incredibly loud until 2am and when we called the front desk, they just said they'd 'look into it.' Nothing changed. We barely slept our entire stay.",
          response: "We're so sorry your rest was disrupted and that our front desk response didn't actually resolve the issue. When a guest calls about noise, we should be taking immediate action — not offering vague reassurances. We'd like to make this right. Please contact our guest relations team at guestcare@hotel.com and we'll discuss a remedy for your stay.",
        },
        {
          stars: 5,
          review: "The staff remembered it was our anniversary without us mentioning it and left a small surprise in our room. That kind of attention to detail is what makes a hotel truly great.",
          response: "What a wonderful memory to have from your anniversary — thank you for sharing it with us! Our team loves creating those moments, and we're so glad it landed well. Congratulations to you both, and we hope you'll mark many more milestones with us in the future.",
        },
      ]}
      whyHeading="Why Hotel Review Responses Are a Revenue Decision"
      whyBody={[
        "Travelers book based on reviews more than almost any other factor. And they don't just read the reviews — they read the responses. A hotel that responds professionally to every review, including the difficult ones, projects confidence and care that translates directly into booking decisions. A hotel with unanswered complaints tells the same story in reverse.",
        "Responding to positive reviews is equally important. When a guest shares a special memory — like an anniversary — acknowledging it personally reinforces their loyalty and makes them far more likely to return and recommend you to others. The ROI on a thoughtful 50-word response is enormous.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Hotel review response dashboard"
      featureImageAlt="Managing hotel guest reviews in Typani"
      mobileImageAlt="Respond to hotel reviews from your phone"
      related={[
        { href: "/uses/negative-hotel-review-response-template", label: "Negative Hotel Review Templates" },
        { href: "/uses/positive-hotel-review-response-examples", label: "Positive Hotel Review Responses" },
        { href: "/uses/airbnb-review-response-examples", label: "Airbnb Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
      ]}
    />
  );
}
