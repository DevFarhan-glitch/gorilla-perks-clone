import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "IR35 Changes 2024: What Contractors Need to Know",
    excerpt: "Understanding the latest IR35 legislation changes and how they affect your contracting business.",
    author: "Sarah Mitchell",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "IR35",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Tax-Efficient Strategies for Small Business Owners",
    excerpt: "Discover legitimate ways to reduce your tax burden while growing your business.",
    author: "James Thompson",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Landlord Tax Guide: Maximizing Your Rental Income",
    excerpt: "Essential tax tips for property investors and landlords in the UK.",
    author: "Emma Davies",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Property",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full animate-fade-in">
            Latest Insights
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl animate-fade-in [animation-delay:100ms]">
            Tax Tips & Financial Advice
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Stay informed with our latest articles on tax planning, accounting best practices, and financial strategies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden border-0 shadow-lg hover-lift animate-fade-in bg-card"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    {post.author}
                  </span>
                  <Link
                    to="#"
                    className="text-sm font-medium text-gold hover:text-gold-light transition-colors flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in [animation-delay:600ms]">
          <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-primary-foreground">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
