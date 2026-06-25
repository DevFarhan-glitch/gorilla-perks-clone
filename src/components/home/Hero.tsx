import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Award,
  Building2,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const trustPoints = [
    {
      icon: Shield,
      text: "Fixed-fee, transparent pricing",
    },
    {
      icon: Award,
      text: "Dedicated accountants in Bristol",
    },
    {
      icon: Building2,
      text: "Support for businesses, contractors & landlords",
    },
    {
      icon: Calculator,
      text: "Proactive tax planning & compliance",
    },
  ];

  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="container relative py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Content */}
          <div className="text-center lg:text-left relative z-10">
            {/* Gold Glow */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold/10 blur-3xl rounded-full"></div>

            <div className="mb-8 flex items-center justify-center lg:justify-start">
              <div className="h-12 w-1 bg-gold rounded-full mr-4"></div>

              <span className="text-gold font-semibold uppercase tracking-[0.25em] text-xs">
                BRISTOL'S TRUSTED TAX EXPERTS
              </span>
            </div>

            <h1 className="max-w-4xl font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
              Accountants in Bristol

              <span className="block mt-4 text-gold">
                Providing Expert Tax and Accounting Support
              </span>
            </h1>

            <p className="mt-8 text-xl leading-relaxed text-white/80 max-w-2xl">
              We are trusted accountants in Bristol providing clear,
              reliable and proactive financial support. From day-to-day
              accounting to strategic tax planning, we help contractors,
              landlords and small businesses stay compliant, tax-efficient and
              financially confident.
            </p>

            {/* Trust Points */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl animate-fade-in [animation-delay:300ms]">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 hover:border-gold/40 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <point.icon className="h-5 w-5 text-gold" />
                  </div>

                  <span className="text-sm font-medium text-white leading-relaxed">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8"
              >
                <Link to="/contact" className="flex items-center">
                  Speak to a Bristol Accountant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-8 border-white/30 text-black hover:bg-white/10 hover:text-white"
              >
                <Link
                  to="/calculator"
                  className="hover:text-white transition-colors"
                >
                  Try Our Tax Calculator
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in-right [animation-delay:300ms]">
            <div className="relative">
              <img
                src="/hero-main.png"
                alt="Accountants in Bristol"
                className="rounded-3xl shadow-2xl w-full"
              />

              {/* Floating Card 1 */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-navy">
                      500+
                    </p>
                    <p className="text-sm text-gray-500">
                      Businesses Supported
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-navy">
                      15+
                    </p>
                    <p className="text-sm text-gray-500">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -z-10 top-1/2 right-0 w-80 h-80 bg-gold/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;