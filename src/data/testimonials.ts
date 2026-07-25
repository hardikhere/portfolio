export type Testimonial = {
  name: string;
  role: string;
  context: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Amarnath Prasad",
    role: "Almanac, JioHotstar, IIT Madras",
    context: "Worked with Hardik at NextLevel",
    quote:
      "Hardik is excellently hands-on with software development. He has great team working skills, and goes above and beyond to get the job done. It was a pleasure working with Hardik at NextLevel. I'm sure whichever organization he joins would greatly benefit from his expertise.",
  },
  {
    name: "Deepak Bhatt",
    role: "Software Engineer II @ Zepto",
    context: "Worked with Hardik on the same team",
    quote:
      "Hardik is an invaluable team member with exceptional positivity and enthusiasm. His dedication and eagerness make him well-equipped for any professional opportunity. He approaches tasks with a willingness to learn and embraces new concepts with passion. Highly recommended for his consistent excellence and problem-solving skills.",
  },
];
