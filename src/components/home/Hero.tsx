import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustPoints = [
    "Fixed Fee Pricing",
    "Dedicated Accountant",
    "Free Initial Consultation",
  ];

  return (
    <section className="relative overflow-hidden hero-gradient py-20 md:py-28">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Expert Tax & Accounting
            <span className="block">Made Simple</span>
          </h1>
          
          <p className="mt-6 animate-fade-in text-lg text-primary-foreground/90 [animation-delay:100ms] md:text-xl">
            Specialist accounting services for contractors, small businesses, and landlords. 
            Clear pricing, expert advice, and dedicated support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-fade-in [animation-delay:200ms]">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-2 text-primary-foreground/90">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 animate-fade-in [animation-delay:300ms] sm:flex-row">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link to="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto">
              <Link to="/calculator">Try Our Tax Calculator</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
