import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Bennett",
    role: "E-commerce Founder",
    content: "Henleaze Tax made the transition from sole trader to a limited company completely seamless. Their ongoing support with VAT and payroll has been world-class and invaluable to my business growth.",
    rating: 5,
    image: "/client-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    content: "The fixed monthly fee and proactive advice give me total peace of mind. I always know where my finances stand, which allows me to focus purely on the creative side of my agency.",
    rating: 5,
    image: "/client-2.jpg",
  },
  {
    name: "Linda O'Reilly",
    role: "Property Investor",
    content: "Managing a growing property portfolio used to be a major tax headache. The team at Henleaze truly understands the property market and has helped me optimize my portfolio's efficiency.",
    rating: 5,
    image: "/client-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in [animation-delay:100ms]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:200ms]">
            We work closely with contractors, landlords and small businesses across Bristol, providing clear, reliable accounting and tax support. Here’s what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl hover:bg-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/15" />
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-white/80 text-sm leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/20"
                  />
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
