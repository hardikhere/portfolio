export type Book = {
  title: string;
  author: string;
  status: "reading" | "read";
};

export const books: Book[] = [
  { title: "Man's Search for Meaning", author: "Viktor Frankl", status: "reading" },
  { title: "The Psychology of Money", author: "Morgan Housel", status: "read" },
  { title: "Freedom from the Known", author: "J. Krishnamurti", status: "read" },
  { title: "Courage: The Joy of Living", author: "Osho", status: "read" },
  { title: "Homecoming", author: "John Bradshaw", status: "read" },
];
