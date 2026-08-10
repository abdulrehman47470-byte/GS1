import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ComingSoon } from "@/components/landing/ComingSoon";
import { Lifestyle } from "@/components/landing/Lifestyle";
import { Membership } from "@/components/landing/Membership";
import { Community } from "@/components/landing/Community";
import { Events } from "@/components/landing/Events";
import { Journal } from "@/components/landing/Journal";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";

const TITLE = "Daily Stogie — Premier International Cigar Community";
const DESCRIPTION =
  "Join Daily Stogie for premium cigars, private lounges, exclusive global events and a community of aficionados.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <ComingSoon />
        <Lifestyle />
        <Membership />
        <Community />
        <Events />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
