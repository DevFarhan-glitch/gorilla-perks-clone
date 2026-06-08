import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase, Building2, Home, ArrowRight, Users,
  Calculator, FileCheck, Scale, Zap, UserCheck,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const NAVY = "hsl(222,47%,15%)";
const GOLD = "hsl(43,74%,49%)";

const services = [
  {
    icon: Briefcase,
    title: "Contractor Accounting",
    description: "Specialist accounting services in Bristol for contractors and freelancers, including IR35 support, company formation, salary-dividend optimisation and ongoing tax-efficient financial planning.",
    features: ["Company Formation", "IR35 Compliance", "Tax Planning", "Payroll Services"],
    path: "/services/contractor-accountants",
    image: "/hero-main.png",
    tag: "Most Popular",
    accent: GOLD,
  },
  {
    icon: Building2,
    title: "Small Business Accounting",
    description: "Complete accounting support for small and growing businesses in Bristol, covering bookkeeping, VAT returns, year-end accounts and practical business advisory services.",
    features: ["Bookkeeping", "VAT Returns", "Year-End Accounts", "Business Advisory"],
    path: "/services/small-business-accountants",
    image: "/small-business-guide.png",
    accent: NAVY,
  },
  {
    icon: Home,
    title: "Landlord Services",
    description: "Tailored accounting and tax solutions in Bristol for property investors, including rental income reporting, capital gains tax planning and full buy-to-let portfolio support.",
    features: ["Rental Income Tax", "Property Portfolios", "Capital Gains", "Expense Tracking"],
    path: "/services/landlord-accountants",
    image: "/landlord-guide.png",
    accent: GOLD,
  },
  {
    icon: Users,
    title: "Payroll & HR Services",
    description: "Fully managed payroll solutions in Bristol including RTI submissions, pension auto-enrolment, payslips and ongoing HR compliance support for your team.",
    features: ["Monthly Payroll", "Pension Auto-enrolment", "RTI Submissions", "P60s & P45s"],
    path: "/services/payroll-and-hr-services",
    image: "/cta-consult.png",
    accent: NAVY,
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Strategic tax advisory services in Bristol designed to minimise liabilities and improve financial efficiency, including corporation tax, capital gains and long-term planning.",
    features: ["Corporation Tax", "Capital Gains Tax", "Inheritance Tax", "Strategic Planning"],
    path: "/services/tax-planning",
    image: "/cgt-guide.png",
    accent: GOLD,
  },
  {
    icon: FileCheck,
    title: "VAT & Bookkeeping",
    description: "Accurate bookkeeping and VAT return services in Bristol using modern cloud systems, ensuring compliance with Making Tax Digital (MTD) requirements.",
    features: ["VAT Returns", "Dext/Xero Support", "Bank Reconciliation", "MTD Compliance"],
    path: "/services/vat-and-bookkeeping-accounting-services",
    image: "/small-business-guide.png",
    accent: NAVY,
  },
  {
    icon: Scale,
    title: "Company Secretarial",
    description: "Full company compliance support including Companies House filings, confirmation statements, registered office services and statutory record maintenance.",
    features: ["Registered Office", "Confirmation Statement", "Share Management", "Statutory Registers"],
    path: "/services/company-secretarial-services",
    image: "/cta-consult.png",
    accent: GOLD,
  },
  {
    icon: Zap,
    title: "R&D Tax Credits",
    description: "Specialist support to help businesses claim eligible R&D tax relief, including technical report preparation, cost analysis and HMRC submission handling.",
    features: ["Technical Report", "Cost Identification", "HMRC Submission", "Expert Review"],
    path: "/services/rd-tax-credit-claim​",
    image: "/office-bg.png",
    accent: NAVY,
  },
  {
    icon: UserCheck,
    title: "Personal Tax Services",
    description: "Hassle-free self-assessment tax return services in Bristol for individuals, including income, rental and investment tax reporting with full compliance support.",
    features: ["Self Assessment", "Rental Income", "Investment Income", "Tax Optimisation"],
    path: "/services/personal-tax-and-self-assessment-service",
    image: "/hero-main.png",
    accent: GOLD,
  },
  {
    icon: Users,
    title: "Outsourced Accounting",
    description: "Complete outsourced finance department services for businesses needing reliable, cost-effective accounting support without in-house staff.",
    features: ["Dedicated Accountant", "Bookkeeping & Reporting", "Payroll Management", "Full Compliance"],
    path: "/services/outsourced-accounting-services",
    image: "/cta-consult.png",
    accent: NAVY,
  },
];

interface ServiceCardsProps {
  limit?: number;
  layout?: "grid" | "carousel";
}

/* ── Shared card component ─────────────────────────── */
const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-white h-full"
    style={{
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      border: "1px solid hsl(220,13%,91%)",
      transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s ease",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = "translateY(-6px)";
      el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.15)";
      el.style.borderColor = service.accent;
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.transform = "";
      el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
      el.style.borderColor = "hsl(220,13%,91%)";
    }}
  >
    {/* Image with gradient overlay */}
    <div className="relative h-52 overflow-hidden rounded-t-3xl shrink-0">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.3) 55%, transparent 100%)" }}
      />
      {/* Accent color wash on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: service.accent }}
      />

      {/* Tag badge */}
      {service.tag && (
        <div className="absolute top-3 right-3 z-10">
          <span
            className="text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            style={{ background: service.accent, color: "#fff" }}
          >
            {service.tag}
          </span>
        </div>
      )}

      {/* Icon + title over image */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110"
            style={{ background: service.accent }}
          >
            <service.icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-display font-bold text-white text-lg leading-tight drop-shadow-sm">
            {service.title}
          </h3>
        </div>
      </div>
    </div>

    {/* Card body */}
    <div className="flex flex-col flex-1 p-5">
      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-5 flex-1">
        {service.features.map((feat, fi) => (
          <li key={fi} className="flex items-center gap-2.5 text-xs text-foreground/75">
            <span
              className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 text-white"
              style={{ background: service.accent, fontSize: "9px" }}
            >
              ✓
            </span>
            {feat}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="h-px bg-border mb-4" />

      {/* CTA link */}
      <Link
        to={service.path}
        className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/link"
        style={{ color: service.accent }}
      >
        Explore Service
        <span
          className="h-7 w-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-1"
          style={{ background: `${service.accent}18` }}
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </div>
  </div>
);

const ServiceCards = ({ limit, layout = "grid" }: ServiceCardsProps) => {
  const displayedServices = limit ? services.slice(0, limit) : services;
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  /* ── Grid layout ── */
  if (layout !== "carousel") {
    return (
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-gold bg-gold/10 rounded-full border border-gold/20">
              Our Services
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Accounting & Tax Services in Bristol
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We provide a complete range of accounting and tax services in Bristol designed to support businesses, contractors, landlords and individuals. From everyday bookkeeping to advanced tax planning, our expert accountants in Bristol ensure your finances are accurate, compliant and tax-efficient.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {displayedServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Carousel layout (homepage) ── */
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full border border-gold/20 animate-fade-in">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground animate-fade-in [animation-delay:100ms]">
            Our Accounting & Tax Services in Bristol
          </h2>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in [animation-delay:200ms]">
            We provide a complete range of accounting and tax services in Bristol designed to support businesses, contractors, landlords and individuals. From everyday bookkeeping to advanced tax planning, our expert accountants in Bristol ensure your finances are accurate, compliant and tax-efficient.
          </p>
        </div>

        {/* Carousel — arrows on far left & far right of cards */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 36,
            }}
            className="w-full"
          >
            {/* Prev arrow — far left, vertically centred on cards */}
            <CarouselPrevious
              className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border-2 border-border bg-white text-navy shadow-lg hover:bg-navy hover:text-white hover:border-navy hover:scale-105 transition-all duration-200"
            />

            <CarouselContent className="-ml-5 px-1">
              {displayedServices.map((service, i) => (
                <CarouselItem key={i} className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3">
                  <ServiceCard service={service} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Next arrow — far right, vertically centred on cards */}
            <CarouselNext
              className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border-0 shadow-lg transition-all duration-200"
              style={{ background: "hsl(43,74%,49%)", color: "hsl(222,47%,15%)" }}
            />
          </Carousel>

          {/* Dot indicators + counter — centred below cards */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="rounded-full transition-all duration-300 focus:outline-none"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    background: i === current ? "hsl(43,74%,49%)" : "hsl(220,13%,82%)",
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="font-display font-semibold text-sm text-muted-foreground tabular-nums select-none">
              <span className="text-gold font-bold">{String(current + 1).padStart(2, "0")}</span>
              {" / "}
              {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
