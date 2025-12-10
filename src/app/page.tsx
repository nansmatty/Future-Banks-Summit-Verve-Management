import {
  Header,
  Hero,
  EventOverview,
  WhoWillYouMeet,
  TopicHighlights,
  Speakers,
  WhyAttend,
  Footer,
} from "@/components";

/**
 * Future Banks Summit - Main Page
 * 4th Annual Future Banks Summit & Awards
 * September 11-12, 2023 | Riyadh Marriott Hotel
 *
 * Interview-quality single-page event website
 */
export default function Home() {
  return (
    <>
      {/* Fixed Header Navigation */}
      <Header />

      <main>
        {/* Hero Section - Event title, date, venue, tagline */}
        <Hero />

        {/* Event Overview - Split layout with text and visual */}
        <EventOverview />

        {/* Who Will You Meet - 9 role cards */}
        <WhoWillYouMeet />

        {/* Topic Highlights - 10 topic cards bento grid */}
        <TopicHighlights />

        {/* Speakers - Minimal placeholder grid */}
        <Speakers />

        {/* Why Attend - 3 key benefits */}
        <WhyAttend />
      </main>

      {/* Footer - Brand, links, contact */}
      <Footer />
    </>
  );
}
