import type { Metadata } from "next";
import UsesPageLayout from "@/components/UsesPageLayout";

export function generateMetadata(): Metadata {
  return {
    title: "Apartment Review Response Examples | Reviewly",
    description: "Learn how property managers should respond to apartment reviews on Google. Real examples for handling maintenance complaints, move-in issues, and 5-star praise.",
  };
}

export default function ApartmentReviewResponseExamples() {
  return (
    <UsesPageLayout
      badge="Property Management"
      h1="Apartment Review Response Examples for Property Managers"
      tagline="Apartment reviews are read by prospective residents before they ever tour your property. How you respond shapes their first impression of your management team."
      featureHeading="What Residents Mention in Apartment Reviews"
      featureBody="Apartment reviews cover a wide range of issues — from move-in conditions to long-term maintenance. Understanding the patterns helps you respond appropriately and address systemic issues."
      featurePoints={[
        "Maintenance response time and resolution quality",
        "Management responsiveness and communication",
        "Move-in and move-out condition disputes",
        "Noise from neighbors or thin walls",
        "Pest issues or cleanliness of common areas",
        "Lease renewal terms and rent increases",
      ]}
      examples={[
        {
          stars: 1,
          review: "Submitted a maintenance request for a broken heater in January. It took three weeks to get anyone out here. Management kept saying someone was 'on the way.' Unacceptable.",
          response: "Three weeks without heat in January is a serious failure on our part, and we're truly sorry. That should have been treated as an emergency from day one. If this issue is still unresolved, please call our emergency maintenance line at 555-0200 immediately. We're reviewing our response protocols to ensure this doesn't happen again, and we want to make this right for you.",
        },
        {
          stars: 5,
          review: "Lived here two years and every maintenance request has been handled within 24 hours. The property manager actually knows my name. This feels like a community, not just an apartment complex.",
          response: "Two years and counting — thank you so much! Building a real community is something our whole team cares about deeply, and hearing that it comes through in your day-to-day experience means everything. We're grateful to have you as a resident and hope you're with us for many more years.",
        },
      ]}
      whyHeading="Why Property Managers Must Respond to Reviews"
      whyBody={[
        "Apartment seekers read reviews more carefully than almost any other category of consumer — because choosing a home is a major decision. A well-managed response to even a scathing review can reassure a prospective resident that issues are handled and management is accountable.",
        "Ignoring negative apartment reviews is particularly damaging. It signals to future residents that management is unresponsive — which is often the exact complaint being made. A prompt, professional response shows you're different from the bad property managers they've heard about.",
      ]}
      heroImage="/images/screenshots/dashboard-main.webp"
      featureImage="/images/screenshots/reviews-dashboard.webp"
      mobileImage="/images/screenshots/mobile-dashboard.webp"
      heroImageAlt="Apartment review response dashboard for property managers"
      featureImageAlt="Managing apartment reviews in Reviewly"
      mobileImageAlt="Respond to apartment reviews on your phone"
      related={[
        { href: "/uses/negative-review-response-examples", label: "Negative Review Response Examples" },
        { href: "/uses/google-review-response-examples", label: "Google Review Response Examples" },
        { href: "/uses/review-response-service", label: "Review Response Service" },
        { href: "/uses/review-monitoring-service", label: "Review Monitoring Service" },
      ]}
    />
  );
}
