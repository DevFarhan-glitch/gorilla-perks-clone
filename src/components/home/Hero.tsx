import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustPoints = [
    { icon: Shield, text: "Fixed Fee Pricing" },
    { icon: Award, text: "Dedicated Accountant" },
    { icon: Users, text: "Free Initial Consultation" },
  ];

  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
      
      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      
      <div className="container relative py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
              Bristol's Trusted Tax Experts
            </span>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl animate-fade-in [animation-delay:100ms]">
              Expert Tax & Accounting
              <span className="block text-gold mt-2">Made Simple</span>
            </h1>
            
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0 animate-fade-in [animation-delay:200ms]">
              Specialist accounting services for contractors, small businesses, and landlords. 
              Clear pricing, expert advice, and dedicated support.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-fade-in [animation-delay:300ms]">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <point.icon className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 lg:justify-start sm:flex-row animate-fade-in [animation-delay:400ms]">
              <Button size="lg" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-semibold shadow-lg hover:shadow-gold/30 transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-gold">
                <Link to="/calculator">Try Our Tax Calculator</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in-right [animation-delay:300ms]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop"
                alt="Professional tax consultants at work"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <CheckCircle2 className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">500+ Clients</p>
                    <p className="text-xs text-muted-foreground">Trust our expertise</p>
                  </div>
                </div>
              </div>
              {/* Second Floating Card */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-xl border border-border animate-float [animation-delay:1s]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">15+ Years</p>
                    <p className="text-xs text-muted-foreground">Industry experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
