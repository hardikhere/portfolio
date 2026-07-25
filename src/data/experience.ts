export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  period: string;
  location: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Co-Founder & Founding Product Engineer",
    company: "Vybout",
    logo: "https://imagedelivery.net/bN8wtBatORoBF6VNcDJRLQ/3b735fe9-51e0-4bfa-aab0-fb8ae76ae400/public",
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
    logo: "https://imagedelivery.net/bN8wtBatORoBF6VNcDJRLQ/98f3abf9-b8bb-4d09-071f-c1c6a1dacf00/public",
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
    logo: "https://imagedelivery.net/bN8wtBatORoBF6VNcDJRLQ/66b39c85-ab77-4382-e01a-53da02766300/public",
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
    logo: "https://media.licdn.com/dms/image/v2/C510BAQGJ0hY6z34Ehg/company-logo_200_200/company-logo_200_200/0/1630596350109/mosaicwellness_logo?e=2147483647&v=beta&t=7ZNVCHoI8JAoyBHH9Sc_oQelHBXvjp-wPdoYDaoIQNs",
    period: "05/2022 — 08/2023",
    location: "Bengaluru, India",
    highlights: [
      "Built a dynamic personalization feature and a patient chat/calling system used by 45k+ patients.",
      "Shipped scalable React Native components for a core mobile commerce app.",
    ],
  },
];
