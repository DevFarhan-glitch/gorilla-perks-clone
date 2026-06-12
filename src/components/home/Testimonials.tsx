import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie Bennett",
    role: "E-commerce Founder",
    content: "Henleaze Tax made the transition from sole trader to a limited company completely seamless. Their ongoing support with VAT and payroll has been world-class and invaluable to my business growth.",
    rating: 5,
    // image: "/client-1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    content: "The fixed monthly fee and proactive advice give me total peace of mind. I always know where my finances stand, which allows me to focus purely on the creative side of my agency.",
    rating: 5,
    // image: "/client-2.jpg",
  },
  {
    name: "Linda O'Reilly",
    role: "Property Investor",
    content: "Managing a growing property portfolio used to be a major tax headache. The team at Henleaze truly understands the property market and has helped me optimize my portfolio's efficiency.",
    rating: 5,
    // image: "/client-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy md:text-4xl animate-fade-in [animation-delay:100ms]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in [animation-delay:200ms]">
            We work closely with contractors, landlords and small businesses across Bristol, providing clear, reliable accounting and tax support. Here’s what some of our clients have to say about working with us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative border border-navy-light/10 bg-navy shadow-lg hover:shadow-[0_25px_50px_-15px_rgba(202,169,87,0.25)] hover:border-gold/30 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Expanding Gold Accent line on card hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500 rounded-t-2xl" />

              <CardContent className="p-8 relative">
                {/* Floating quote symbol with hover rotation/scaling */}
                <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/10 transition-all duration-500 group-hover:text-gold/25 group-hover:scale-110 group-hover:-rotate-12" />

                {/* Stars with hover grow effect */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold transition-transform duration-300 group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <p className="mb-8 text-white/80 group-hover:text-white transition-colors duration-300 text-sm md:text-base leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center space-x-4">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/20 group-hover:ring-gold/60 group-hover:scale-105 transition-all duration-500"
                  /> */}
                  <div>
                    <p className="font-display font-semibold text-white text-sm md:text-base transition-colors duration-300 group-hover:text-gold">
                      {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-white/60 transition-colors duration-300 group-hover:text-white/85">
                      {testimonial.role}
                    </p>
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
