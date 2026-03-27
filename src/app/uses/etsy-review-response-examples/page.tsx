import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Etsy Review Response Examples | Reviewly",
    description: "Learn how Etsy sellers should respond to shop reviews. See real examples for handling shipping complaints, custom order issues, and glowing buyer feedback.",
  };
}

export default function EtsyReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Etsy Sellers"
      h1="Etsy Review Response Examples for Sellers"
      tagline="Your Etsy shop reviews are your storefront reputation. Responding to every review — positive and negative — builds trust with buyers who haven't ordered yet."
      featureHeading="What Buyers Mention in Etsy Shop Reviews"
      featureBody="Etsy buyers tend to care about craftsmanship, shipping speed, and the personal touch of a handmade or custom item. Their reviews reflect those priorities."
      featurePoints={[
        "Shipping time and packaging quality",
        "Accuracy of custom or personalized items",
        "Product quality vs. listing photos and description",
        "Communication during the order process",
        "Handling of issues, returns, or order problems",
        "The unboxing experience and personal touches",
      ]}
      examples={[
        {
          stars: 2,
          review: "Ordered a personalized necklace for my mom's birthday with a specific date and it arrived with the wrong date engraved. Wasn't usable as a gift and I was really disappointed.",
          response: "We are so sorry — a personalized piece with the wrong detail is completely our mistake, and we understand how upsetting that is especially when it's for a special occasion. Please message us on Etsy and we'll rush a corrected replacement to you at no charge. Thank you for reaching out and giving us the chance to make this right.",
        },
        {
          stars: 5,
          review: "Ordered a custom map print and the quality was incredible — crisp, beautiful, exactly what I asked for. It arrived packaged so carefully and even had a handwritten note inside. This is what Etsy is supposed to be.",
          response: "This made our whole day — thank you! Every order we send out gets that same care, but hearing that it actually arrived and felt that way means so much. The handwritten note is our small way of connecting with the person on the other end. We'd love to make something for you again!",
        },
      ]}
      whyHeading="Why Etsy Review Responses Build Your Shop"
      whyBody={[
        "Etsy shoppers almost always read reviews before purchasing — especially for custom or personalized items where there's no return to rely on. Your response to a review is part of the purchase decision for future buyers. A gracious response to a complaint shows accountability. A warm response to praise shows personality.",
        "For Etsy sellers, reviews are also a direct signal to the Etsy algorithm. Shops with high engagement — including seller responses — tend to perform better in search. Responding consistently is good for your ranking as well as your reputation.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Etsy shop review response dashboard"
      featureImageAlt="Managing Etsy reviews in Reviewly"
      mobileImageAlt="Respond to Etsy reviews on mobile"
      related={[
        { href: "/uses/positive-review-response-examples", label: "Positive Review Response Examples" },
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/review-response-examples", label: "Review Response Examples" },
        { href: "/uses/customer-service-negative-review-response-examples", label: "Customer Service Negative Review Responses" },
      ]}
    />
  );
}
