export type EducationEntry = {
  degree: string;
  institution: string;
  logo?: string;
  period: string;
  description: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Poornima College of Engineering, Rajasthan Technical University",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9IaHPFvfTCZljpAYCqrfHQAtDfp0AZT51ugDVije8w&s",
    period: "September 2018 — September 2022",
    description:
      "Studied core subjects including Database Management Systems (DBMS), Operating Systems (OS), Data Structures, and various programming languages. Participated in technical workshops and coding competitions to enhance practical skills.",
  },
];
