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
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full animate-fade-in">
            Testimonials
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl animate-fade-in [animation-delay:100ms]">
            Trusted by Hundreds of Clients
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover-lift animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/20" />
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/20"
                  />
                  <div>
                    <p className="font-display font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
