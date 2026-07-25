export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Co-Founder & Founding Product Engineer",
    company: "Vybout",
    period: "08/2025 — 05/2026",
    location: "Bengaluru, India",
    highlights: [
      "Built and scaled Vybout from 0 to 7,000+ registered users as the sole engineer, owning architecture, mobile, backend, and production operations.",
      "Shipped 30+ production features across social discovery, bookings, chat, and engagement using React Native, Node.js, and Supabase.",
    ],
  },
  {
    role: "Software Engineer (Mobile)",
    company: "Zepto",
    period: "10/2024 — 08/2025",
    location: "Bengaluru, India",
    highlights: [
      "Owned checkout and post-order experience for a platform serving 10M+ monthly active users.",
      "Led migration from Redux-Saga to Zustand and RTK Query across 15+ modules, improving performance and reducing 16% dropoff.",
    ],
  },
  {
    role: "Software Engineer (Mobile)",
    company: "Unacademy",
    period: "01/2024 — 10/2024",
    location: "Bengaluru, India",
    highlights: [
      "Built on the NextLevel team, a job application platform with an AI interview feature.",
      "Improved home screen load time 25% via API caching, and lifted onboarding completion by 15%.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Mosaic Wellness + Clumio",
    period: "05/2022 — 08/2023",
    location: "Bengaluru, India",
    highlights: [
      "Built a dynamic personalization feature and a patient chat/calling system used by 45k+ patients.",
      "Shipped scalable React Native components for a core mobile commerce app.",
    ],
  },
];
