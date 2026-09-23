import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  TrendingUp,
  Building2,
  Users,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSlide {
  id: number;
  image: string;
  badgeText: string;
  badgeIcon: React.ElementType;
  title: string;
  highlightText: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  sideLabel: string;
  trustPoints: {
    icon: React.ElementType;
    text: string;
  }[];
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero/hero-consultation.jpg",
    badgeText: "BRISTOL'S TRUSTED TAX & ACCOUNTING FIRM",
    badgeIcon: ShieldCheck,
    title: "Accountants in Bristol",
    highlightText: "Providing Expert Tax and Accounting Support",
    description:
      "We are trusted accountants in Bristol providing clear, reliable and proactive financial support. From day-to-day accounting to strategic tax planning, we help contractors, landlords and small businesses stay compliant, tax-efficient and financially confident.",
    primaryCta: {
      text: "Speak to a Bristol Accountant",
      href: "/contact",
    },
    secondaryCta: {
      text: "Try Our Tax Calculator",
      href: "/calculator",
    },
    sideLabel: "BRISTOL TAX EXPERTS",
    trustPoints: [
      { icon: ShieldCheck, text: "Fixed-fee, transparent pricing" },
      { icon: Award, text: "Dedicated accountants in Bristol" },
      { icon: Building2, text: "Support for contractors & SMEs" },
      { icon: Calculator, text: "Proactive tax planning & compliance" },
    ],
  },
  {
    id: 2,
    image: "/images/hero/hero-office.jpg",
    badgeText: "STRATEGIC TAX PLANNING & ADVISORY",
    badgeIcon: Calculator,
    title: "Maximise Tax Efficiency",
    highlightText: "Tailored Strategies for Growing Businesses",
    description:
      "Navigate UK tax complexities with complete confidence. From Corporation Tax and Self-Assessment to R&D claims and IR35 determinations, our specialist advisers ensure you pay only what is due while protecting your wealth.",
    primaryCta: {
      text: "Explore Tax Planning",
      href: "/services/tax-planning",
    },
    secondaryCta: {
      text: "View Our Transparent Pricing",
      href: "/pricing",
    },
    sideLabel: "TAX STRATEGY & ADVISORY",
    trustPoints: [
      { icon: TrendingUp, text: "Specialist Corporation Tax planning" },
      { icon: ShieldCheck, text: "HMRC compliant & audit-ready" },
      { icon: Sparkles, text: "R&D tax credits & reliefs" },
      { icon: CheckCircle2, text: "Personalised tax savings roadmap" },
    ],
  },
  {
    id: 3,
    image: "/images/hero/hero-strategy.jpg",
    badgeText: "DEDICATED BUSINESS PARTNERSHIP",
    badgeIcon: Users,
    title: "Complete Outsourced Accounting",
    highlightText: "Empowering Contractors, Landlords & SMEs",
    description:
      "Streamlined bookkeeping, seamless payroll, VAT management, and year-end statutory accounts. Free up your valuable time and focus on scaling your business while our Bristol team handles every financial detail.",
    primaryCta: {
      text: "Arrange Free Consultation",
      href: "/contact",
    },
    secondaryCta: {
      text: "Explore All Services",
      href: "/services",
    },
    sideLabel: "OUTSOURCED ACCOUNTING",
    trustPoints: [
      { icon: Building2, text: "End-to-end bookkeeping & VAT" },
      { icon: Users, text: "Accurate & timely payroll solutions" },
      { icon: Award, text: "500+ UK businesses supported" },
      { icon: ShieldCheck, text: "Direct access to senior accountants" },
    ],
  },
];



const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;


  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Autoplay: advance every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    autoplayRef.current = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [isHovered, activeSlide, totalSlides]);

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center text-white bg-[#0a162e] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hero Carousel"
    >
      {/* Background Slides: Pure cross-fade driven by activeSlide */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={`bg-${slide.id}`}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "opacity",
              }}
            >
              {/* Subtle Ken-Burns zoom on active slide */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundPosition: "center 30%",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  transition: "transform 12000ms ease-out",
                  willChange: "transform",
                }}
              />

              {/* Navy gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a162e]/85 via-[#0f2142]/72 to-[#09152b]/82" />

              {/* Soft radial vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(6,12,26,0.50)_100%)]" />

              {/* Geometric pattern overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
            </div>
          );
        })}
      </div>

      {/* Luminous Warm Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/15 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-20" />

      {/* Left Vertical Side Label */}
      <div className="hidden 2xl:flex absolute left-0 bottom-36 z-20 items-center pointer-events-none">
        <div className="relative">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <div
                key={`sidelabel-${slide.id}`}
                className="bg-white/10 backdrop-blur-md border-r border-y border-white/20 text-gold font-bold uppercase tracking-[0.3em] text-xs py-3 px-6 origin-bottom-left -rotate-90 rounded-t-md shadow-2xl absolute inset-0"
                style={{
                  transformOrigin: "left bottom",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1), transform 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isActive ? "none" : "none",
                }}
              >
                {slide.sideLabel}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content: Pure cross-fade driven by activeSlide */}
      <div className="container relative z-10 py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center grid grid-cols-1 grid-rows-1 items-center justify-items-center">
          {slides.map((slide, index) => {
            const isActive = index === activeSlide;
            const BadgeIcon = slide.badgeIcon;

            return (
              <div
                key={`content-${slide.id}`}
                className="col-start-1 row-start-1 w-full flex flex-col items-center justify-center"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0) scale(1)" : "translateY(10px) scale(0.99)",
                  transition: "opacity 1400ms cubic-bezier(0.4, 0, 0.2, 1), transform 1400ms cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                  zIndex: isActive ? 10 : 0,
                  willChange: "opacity, transform",
                }}
              >
                {/* Hexagonal Polygon Icon Badge (Westbury style) */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="relative group">
                    <div
                      className="w-16 h-18 sm:w-20 sm:h-22 bg-gold/20 flex items-center justify-center shadow-lg transition-transform duration-1000 group-hover:scale-105"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        width: "68px",
                        height: "76px",
                      }}
                    >
                      <div
                        className="w-14 h-16 bg-[#0c162b]/95 border border-gold/60 flex items-center justify-center backdrop-blur-sm"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                          width: "58px",
                          height: "66px",
                        }}
                      >
                        <BadgeIcon className="h-7 w-7 text-gold" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Category Tag */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-0.5 w-6 sm:w-10 bg-gold/80 rounded-full inline-block" />
                  <span className="text-gold font-bold uppercase tracking-[0.25em] text-xs sm:text-sm font-sans">
                    {slide.badgeText}
                  </span>
                  <span className="h-0.5 w-6 sm:w-10 bg-gold/80 rounded-full inline-block" />
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight text-center max-w-5xl drop-shadow-sm">
                  {slide.title}
                  <span className="block mt-2 sm:mt-3 text-gold font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">
                    {slide.highlightText}
                  </span>
                </h1>

                {/* Paragraph Description */}
                <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl text-center font-normal font-sans">
                  {slide.description}
                </p>

                {/* Action CTAs */}
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
                  <Button
                    size="lg"
                    asChild
                    className="w-full sm:w-auto bg-gold hover:bg-gold-light text-[#0a1224] font-bold h-14 px-8 sm:px-10 rounded-lg text-sm sm:text-base tracking-wide uppercase shadow-[0_4px_20px_rgba(202,169,87,0.35)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(202,169,87,0.5)] cursor-pointer"
                  >
                    <Link
                      to={slide.primaryCta.href}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>{slide.primaryCta.text}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto h-14 px-8 sm:px-10 rounded-lg border-2 border-white/80 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-[#0a1224] font-bold text-sm sm:text-base tracking-wide uppercase transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  >
                    <Link
                      to={slide.secondaryCta.href}
                      className="flex items-center justify-center"
                    >
                      {slide.secondaryCta.text}
                    </Link>
                  </Button>
                </div>

                {/* Trust Points Badges Grid */}
                <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl">
                  {slide.trustPoints.map((point, ptIdx) => {
                    const PointIcon = point.icon;
                    return (
                      <div
                        key={ptIdx}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-3.5 sm:p-4 transition-all duration-500 hover:border-gold/50 hover:bg-white/10 hover:shadow-lg text-left"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/15 text-gold flex-shrink-0 border border-gold/30">
                          <PointIcon className="h-4 w-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-white/95 leading-snug">
                          {point.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Counter (Bottom Right - Arrows removed per requirement) */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-30 pointer-events-none">
        <div className="flex items-center text-xs font-mono text-white/80 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
          <span className="text-gold font-bold">0{activeSlide + 1}</span>
          <span className="mx-1.5 text-white/40">/</span>
          <span>0{totalSlides}</span>
        </div>
      </div>

      {/* Slide Indicators / Progress Dots (Bottom Center) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
        {slides.map((_, index) => {
          const isActive = index === activeSlide;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-[600ms] ease-in-out cursor-pointer ${
                isActive
                  ? "w-8 bg-gold shadow-[0_0_12px_rgba(202,169,87,0.85)]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Hero;