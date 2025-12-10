import {
  Header,
  Hero,
  EventOverview,
  WhoWillYouMeet,
  TopicHighlights,
  Speakers,
  Agenda,
  WhyAttend,
  IndustryBreakdown,
  Statistics,
  RegistrationForm,
  FAQ,
  Footer,
} from "@/components";

/**
 * Future Banks Summit - Main Page
 * 4th Annual Future Banks Summit & Awards
 * September 11-12, 2023 | Riyadh Marriott Hotel
 *
 * A modern conference website featuring:
 * - Dynamic hero section with countdown
 * - Alternating light/dark sections (Hybrid Modern design)
 * - Interactive agenda with day tabs
 * - Animated statistics section
 * - Fully functional registration form
 */
export default function Home() {
  return (
    <>
      {/* Fixed Header Navigation */}
      <Header />

      <main>
        {/* Hero Section - Dark gradient with countdown */}
        <Hero />

        {/* Event Overview - Cream background, split layout */}
        <EventOverview />

        {/* Who Will You Meet - Light section with role cards */}
        <WhoWillYouMeet />

        {/* Topic Highlights - Dark section with bento grid */}
        <TopicHighlights />

        {/* Speakers - Cream section with carousel */}
        <Speakers />

        {/* Agenda - Light section with interactive timeline */}
        <Agenda />

        {/* Why Attend - Dark section with benefits */}
        <WhyAttend />

        {/* Industry Breakdown - Dark section with icon grid */}
        <IndustryBreakdown />

        {/* Statistics - Cream section with animated counters */}
        <Statistics />

        {/* Registration Form - Dark gradient with floating card */}
        <RegistrationForm />

        {/* FAQ - Light section with accordion */}
        <FAQ />
      </main>

      {/* Footer - Dark with map, socials, newsletter */}
      <Footer />
    </>
  );
}
