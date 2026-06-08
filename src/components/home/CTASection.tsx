import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/cta-consult.png"
          alt="Professional consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-95" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in">
            Speak to Experienced Accountants in Bristol Today
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:100ms]">
            Whether you need help with accounting, tax planning or ongoing financial support, our team is here to make things simple. Get clear advice from trusted accountants in Bristol and find the right solution for your business or personal finances.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in [animation-delay:200ms]">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg hover:shadow-gold/30 transition-all duration-300">
              <Link to="/contact" className="flex items-center">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/30 text-black hover:bg-white/10 hover:text-white hover:border-gold">
              <a href="tel:+44 7949 956279">
                <Phone className="mr-2 h-4 w-4" />
                +44 7949 956279
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
