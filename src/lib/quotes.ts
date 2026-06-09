/**
 * Curated business-leader quotes on delegation, focus, and operational excellence.
 * Used in the LeaderQuotes component throughout the site.
 */

export interface LeaderQuote {
  quote: string;
  name: string;
  title: string;
  /** Short thematic label shown as a badge */
  theme: string;
  /** Two-letter monogram for the avatar circle */
  initials: string;
  /** Tailwind bg colour for the avatar */
  avatarColor: string;
}

export const leaderQuotes: LeaderQuote[] = [
  {
    quote:
      "The secret of success lies not in doing your own work, but in recognising the right person to do it.",
    name: "Andrew Carnegie",
    title: "Industrialist & Philanthropist",
    theme: "Delegation",
    initials: "AC",
    avatarColor: "bg-amber-600",
  },
  {
    quote:
      "Efficiency is doing things right; effectiveness is doing the right things.",
    name: "Peter F. Drucker",
    title: "Management Consultant & Author",
    theme: "Focus",
    initials: "PD",
    avatarColor: "bg-sky-700",
  },
  {
    quote:
      "Innovation is saying no to 1,000 things. You have to pick carefully.",
    name: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
    theme: "Prioritisation",
    initials: "SJ",
    avatarColor: "bg-slate-600",
  },
  {
    quote:
      "The difference between successful people and really successful people is that really successful people say no to almost everything.",
    name: "Warren Buffett",
    title: "Chairman & CEO, Berkshire Hathaway",
    theme: "Discipline",
    initials: "WB",
    avatarColor: "bg-emerald-700",
  },
  {
    quote:
      "I rely on other people. I delegate and trust them to get things done — that's the only way to scale.",
    name: "Richard Branson",
    title: "Founder, Virgin Group",
    theme: "Delegation",
    initials: "RB",
    avatarColor: "bg-red-600",
  },
  {
    quote:
      "An organisation's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage.",
    name: "Jack Welch",
    title: "Former Chairman & CEO, General Electric",
    theme: "Agility",
    initials: "JW",
    avatarColor: "bg-blue-700",
  },
  {
    quote:
      "If your business depends on you, you don't own a business — you have a job. And it's the worst job in the world.",
    name: "Michael E. Gerber",
    title: "Author, The E-Myth Revisited",
    theme: "Systems",
    initials: "MG",
    avatarColor: "bg-violet-700",
  },
  {
    quote:
      "Coming together is a beginning, keeping together is progress, working together is success.",
    name: "Henry Ford",
    title: "Founder, Ford Motor Company",
    theme: "Partnership",
    initials: "HF",
    avatarColor: "bg-orange-700",
  },
];
