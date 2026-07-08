export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 6,
    title: "What Is a Contractor Accountant? A Complete Guide for UK Contractors",
    excerpt: "Learn what a contractor accountant is, how they help contractors and freelancers, and why specialist accounting support can save time and reduce tax risks.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "June 2026",
    readTime: "8 min read",
    category: "Contractor Tax",
    image: "/what-is.jpeg",
    slug: "/what-is-a-contractor-accountant"
  },
  {
    id: 7,
    title: "How to Choose a Contractor Accountant: 9 Key Factors Every UK Contractor Should Consider",
    excerpt: "Learn how to choose a contractor accountant with 9 key factors, including IR35 expertise, fees, qualifications and support for UK contractors.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "June 2026",
    readTime: "10 min read",
    category: "Contractor Accounting",
    image: "/choose-contractor-accountant.png",
    slug: "/how-to-choose-contractor-accountant"
  },
  {
    id: 8,
    title: "How Much Does a Contractor Accountant Cost in the UK",
    excerpt: "Wondering how much a contractor accountant costs? Learn about contractor accountant fees, what's included, pricing models and what to expect in the UK.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "8 min read",
    category: "Contractor Accounting",
    image: "/factors.jpeg",
    slug: "/how-much-does-a-contractor-accountant-cost-in-the-uk"
  },
  {
    id: 9,
    title: "6 Best Accounting Firms for Contractors in the UK (2026)",
    excerpt: "Compare the top accounting firms for contractors in the UK. Explore specialist services, IR35 expertise, pricing and choose the right accountant today.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "9 min read",
    category: "Contractor Accounting",
    image: "/top-accounting-firms.jpeg",
    slug: "/top-accounting-firms-for-contractors-uk"
  }
];
