import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop"
          alt="Professional consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-95" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:100ms]">
            Get your free consultation today and discover how we can help you save time and money.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:200ms]">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg hover:shadow-gold/30 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/30 text-white hover:bg-white/10 hover:border-gold">
              <a href="tel:07481 758526">
                <Phone className="mr-2 h-4 w-4" />
                07481 758526
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
