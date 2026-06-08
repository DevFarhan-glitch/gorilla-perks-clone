import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Building2, Home, UserCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Briefcase,
    title: "Contractors & Freelancers",
    description: "As a reliable financial advisor in Bristol, we support contractors and freelancers with efficient accounting, tax planning and IR35 guidance.",
  },
  {
    icon: Building2,
    title: "Small Businesses",
    description: "We work closely with small and growing businesses to manage day-to-day accounting, VAT, payroll and year-end reporting.",

  },
  {
    icon: Home,
    title: "Landlords & Property Investors",
    description: "Our specialist tax services for landlords cover rental income, capital gains and portfolio structuring.",

  },
  {
    icon: UserCheck,
    title: "Limited Companies & Startups",
    description: "We provide full accounting support for limited companies, including bookkeeping, statutory accounts and tax compliance.",

  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-40" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full animate-fade-in">
            Who We Help
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl animate-fade-in [animation-delay:100ms]">
            Who We Help in Bristol
          </h2>
          <p className="mt-4 text-lg text-white/80 animate-fade-in [animation-delay:200ms]">
            As a trusted accountancy firm in Bristol, we work with a wide range of clients who need reliable financial guidance and proactive tax support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map((aud, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-primary transition-all duration-300">
                  <aud.icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {aud.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {aud.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ending paragraph and button */}
        <div className="mt-16 text-center animate-fade-in [animation-delay:300ms]">
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            No matter your industry, our chartered accountants in Bristol deliver clear, practical advice designed to simplify your finances and reduce your tax burden.
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-navy font-bold h-14 px-8"
            asChild
          >
            <Link to="/about" className="flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
