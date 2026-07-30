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
  },
  {
    id: 10,
    title: "IR35 for UK Contractors: The Complete 2026 Overview",
    excerpt: "Everything UK contractors need to know about IR35 in one guide — how status is decided, what changed in 2026, and what it means for your pay.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "10 min read",
    category: "Contractor Tax",
    image: "/what-is-ir35.jpeg",
    slug: "/what-is-ir35-uk"
  },
  {
    id: 11,
    title: "How Does IR35 Work: The Full Process for UK Contractors",
    excerpt: "Curious how an IR35 status decision actually happens? See the real process, your appeal rights, and what working practice changes truly mean for you today.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "9 min read",
    category: "Contractor Tax",
    image: "/how-does-ir35-work.jpeg",
    slug: "/how-does-ir35-work-in-the-uk"
  },
  {
    id: 12,
    title: "Inside vs Outside IR35: The Real Difference for Contractors",
    excerpt: "Confused about inside vs outside IR35? This guide breaks down the difference, how tax works, a worked example, and what rate makes inside IR35 worth it.",
    content: "Redirecting...",
    author: "Henleaze Team",
    date: "July 2026",
    readTime: "10 min read",
    category: "Contractor Tax",
    image: "/inside-vs-outside-ir35.jpeg",
    slug: "/inside-vs-outside-ir35"
  }
];

