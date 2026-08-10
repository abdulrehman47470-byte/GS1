export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };
export type LifestyleFeature = { title: string; text: string };
export type MembershipPlan = { name: string; price: string; period: string; perks: string[] };
export type CommunityPhoto = { src: string; alt: string };
export type EventItem = {
  month: string;
  day: string;
  title: string;
  city: string;
  place: string;
  image: string;
};
export type JournalArticle = {
  category: string;
  title: string;
  date: string;
  read: string;
  image: string;
};

export type SiteContent = {
  header: { navLinks: string[]; ctaLabel: string };
  logo: { name: string; tagline: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    badge: string;
    kicker: string;
    ctaLabel: string;
  };
  lifestyle: {
    eyebrow: string;
    headingLine1: string;
    headingHighlight: string;
    features: LifestyleFeature[];
  };
  membership: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    ctaLabel: string;
    image: string;
    plans: MembershipPlan[];
  };
  community: {
    eyebrow: string;
    heading: string;
    ctaLabel: string;
    photos: CommunityPhoto[];
  };
  events: {
    heading: string;
    ctaLabel: string;
    events: EventItem[];
  };
  journal: {
    eyebrow: string;
    heading: string;
    ctaLabel: string;
    articles: JournalArticle[];
  };
  newsletter: {
    heading: string;
    description: string;
    image: string;
  };
  comingSoon: {
    eyebrow: string;
    headingLine1: string;
    headingHighlight: string;
    badge: string;
    paragraph1: string;
    paragraph2: string;
    kicker: string;
  };
  footer: {
    columns: FooterColumn[];
    panelTitle: string;
    panelText: string;
    panelCtaLabel: string;
    copyright: string;
  };
};
